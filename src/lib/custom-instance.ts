import { BASE_URL } from '@configs/index';
import Axios, { AxiosError, AxiosRequestConfig } from 'axios';

export const AXIOS_INSTANCE = Axios.create({
  baseURL: BASE_URL,
  headers: { contentType: 'application/json' },
}); // use your own URL here or environment variable

export const customInstance = <T>(config: AxiosRequestConfig, options?: AxiosRequestConfig): Promise<T> => {
  const source = Axios.CancelToken.source();

  const accessToken = localStorage.getItem('token');
  if (accessToken) {
    AXIOS_INSTANCE.defaults.headers.common['Authorization'] = `Bearer ${accessToken}`;
  }

  const promise = AXIOS_INSTANCE({ ...config, cancelToken: source.token, ...options })
    .then(({ data }) => data)
    .catch((e) => {
      //   if (errorHandler) {
      //     errorHandler(e);
      //   }
      throw e;
    });
  // @ts-ignore
  promise.cancel = () => {
    source.cancel('Query was cancelled');
  };

  return promise;
};

export type ErrorType<Error> = AxiosError<Error>;
