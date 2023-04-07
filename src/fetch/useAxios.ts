import axios, { AxiosInstance } from "axios";

// THIS SHOULD BE CHANGED IF TEAM USES A SPECIFIC DEV URL
export const ROOT_URL: string = `${window.location.protocol}//${window.location.hostname}`;

let axiosInstance: AxiosInstance;

export const useAxios = (): AxiosInstance => {
  if (axiosInstance) {
    return axiosInstance;
  }

  axiosInstance = axios.create({
    url: ROOT_URL,
    baseURL: ROOT_URL,
  });

  return axiosInstance;
};
