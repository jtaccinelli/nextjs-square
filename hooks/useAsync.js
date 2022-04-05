/* eslint-disable react-hooks/exhaustive-deps */
import React, { useCallback, useEffect, useState } from "react";

const useAsync = (callback, args, dependencies) => {
  const [data, setData] = useState(undefined);
  const [error, setError] = useState(undefined);
  const [loading, setLoading] = useState(true);

  const runAsync = useCallback(async () => {
    setLoading(true);
    try {
      const response = await callback(...args);
      setData(response);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  }, [...dependencies]);

  useEffect(() => {
    runAsync();
  }, [...dependencies]);

  return {
    data,
    error,
    loading,
  };
};

export default useAsync;
