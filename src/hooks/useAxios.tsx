import { useRef, useState } from "react";

import axios from "axios";

/**
 * @returns {object} object with data, loaded, error variables and callAPI, cancel, setLoaded methods
 *
 * @summary Custom hook to call API using axios library
 */
export const useAxios = (): object => {
  const [data, setData] = useState<object | null>(null);
  const [error, setError] = useState<string>("");
  const [loaded, setLoaded] = useState<boolean>(false);

  const controllerRef = useRef(new AbortController());
  const cancel = () => {
    controllerRef.current.abort();
  };

  /**
   * @param {String} url URL of the API to call
   * @param {String} method Optional: HTTP method, default = GET
   * @param {Object} payload Optional: Payload to send with the request, default = {}
   * @param {Object} headers Optional: Set request headers, default = {}
   *
   * @summary Calls the API and on success, stores response into data object returned by useAxios.
   */
  const callAPI = async (
    url: string,
    method: string = "GET",
    payload: object = {},
    headers: object = {}
  ) => {
    try {
      const response = await axios.request({
        data: payload,
        signal: controllerRef.current.signal,
        method,
        url,
        headers: {
          ...headers,
          "Content-Type": "application/json",
        },
      });
      // Assuming that response will have a data property in it.
      setData(response.data);
    } catch (err) {
      if (err instanceof Error) {
        setError(err.message);
      }
    } finally {
      setLoaded(true);
    }
  };

  return { cancel, data, error, loaded, callAPI, setLoaded } as const;
};
