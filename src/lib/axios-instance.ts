import { AXIOS_INSTANCE } from './custom-instance';
import Axios from 'axios';

export const axiosInstance = AXIOS_INSTANCE;

export const { CancelToken } = Axios;
export type { AxiosResponse } from 'axios';
