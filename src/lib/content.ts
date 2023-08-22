// import { axiosInstance } from './axios-instance';

import { AvailableTimesByDate } from 'src/@types';
import { generateRandomDateAndTimes } from './date';

/**
 * Fetch the content from the api
 */
const fetchContent = (): { availableTimesByDate: AvailableTimesByDate } => {
  // const res = await axiosInstance({
  //   method: 'GET',
  //   url: '/appointement',
  // });
  // return res.data;
  const availableTimesByDate = generateRandomDateAndTimes();
  return {
    availableTimesByDate,
  };
};

export const ApiService = {
  fetchContent,
};
