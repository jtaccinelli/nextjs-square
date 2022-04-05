import log from "helpers/loggers";
import { useEffect, useRef } from "react";

const useEventListener = (eventName, callback, element) => {
  const handler = useRef();

  useEffect(() => {
    handler.current = callback;
  }, [callback]);

  useEffect(() => {
    const target = element ?? window;
    const isSupported = target?.addEventListener;

    if (!isSupported) {
      log.warning("useEventListener: Listener cannot be mounted.");
      return () => {};
    }

    const listener = (event) => handler.current(event);
    target.addEventListener(eventName, listener);
    return () => target.removeEventListener(eventName, listener);
  }, [eventName, element]);
};

export default useEventListener;
