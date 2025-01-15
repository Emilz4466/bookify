import Axios, { AxiosRequestConfig } from "axios";
import qs from "qs";

export const axios = Axios.create({
  baseURL: "http://localhost:8082",
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true,
  paramsSerializer: (params) =>
    qs.stringify(params, { arrayFormat: "comma", indices: false }),
});

axios.interceptors.response.use((originalResponse) => {
  return originalResponse;
});

export const customInstance = <T>(
  config: AxiosRequestConfig,
  options?: AxiosRequestConfig,
): Promise<T> => {
  const source = Axios.CancelToken.source();
  const promise = axios({
    ...config,
    ...options,
    cancelToken: source.token,
    // eslint-disable-next-line @typescript-eslint/no-unsafe-return
  }).then(({ data }) => data);

  // @ts-ignore
  promise.cancel = () => {
    source.cancel("Query was cancelled");
  };

  promise.catch(() => {});

  // eslint-disable-next-line @typescript-eslint/no-unsafe-return
  return promise;
};
