/* eslint-disable react-hooks/exhaustive-deps */
import React, { useCallback, useEffect, useState } from "react";

const useFetch = (_url, options, dependencies) => {
  const [data, setData] = useState(undefined);
  const [error, setError] = useState(undefined);
  const [loading, setLoading] = useState(true);

  const params = new URLSearchParams(
    Object.keys(options?.params ?? {})
      .filter((key) => !!options.params[key])
      .reduce((obj, key) => ({ ...obj, [key]: options.params[key] }), {})
  );

  const url = `${_url}${params.toString() ? `?${params.toString()}` : ""}`;

  const fetchData = useCallback(async () => {
    setLoading(true);
    try {
      const response = await fetch(url, options);
      const json = await response.json();
      setData(json);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  }, [...dependencies]);

  useEffect(() => {
    fetchData();
  }, [...dependencies]);

  return {
    data,
    error,
    loading,
  };
};

export default useFetch;
