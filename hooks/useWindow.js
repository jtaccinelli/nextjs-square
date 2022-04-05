import { useEffect, useState } from "react";
import useEventListener from "./useEventListener";

const useWindow = () => {
  const [windowState, setWindowState] = useState({
    ready: false,
    width: 0,
    height: 0,
  });

  const handleResize = () => {
    setWindowState({
      ...windowState,
      width: window.innerWidth,
      height: window.innerHeight,
    });
  };

  const handleLoad = () => {
    setWindowState({
      ...windowState,
      ready: true,
    });
  };

  // Needs to run once
  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => handleResize(), []);

  useEventListener("load", handleLoad);
  useEventListener("resize", handleResize);

  return windowState;
};

export default useWindow;
