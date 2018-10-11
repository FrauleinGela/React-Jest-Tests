
import axios from 'axios';
import apiUrl from './constants';

/**
 * Axios Request, onSuccess, onError
 */
const request = function onRequest(axiosOptions) {
  const sourceCancel = axios.CancelToken.source();

  // const onSuccess = function success(resp) {
  //   // TODO: Add success alert?
  //   resp = resp.data;
  //   return Promise.resolve(resp);
  // };

  const onError = function onError(err) {
    if (err.status === 404) {
      // TODO: open global alert
    }
  };

  const axiosInstance = axios(
    {
      ...axiosOptions, cancelToken: sourceCancel.token, baseURL: apiUrl,
    },
  );
  axiosInstance.cancel = sourceCancel.cancel;
  axiosInstance.isCancel = sourceCancel.isCancel;
  axiosInstance.request = axiosInstance
    .then(response => response.data)
    .catch((err) => {
      if (!axios.isCancel(err)) {
        onError(err);
      }
    });
  return axiosInstance;
};

export default request;
