import { useRef, useEffect } from "react";

const useClickAwayForClassnames = (ref, className, onClickAway) => {
  const callBackRef = useRef(onClickAway);
  useEffect(() => {
    callBackRef.current = onClickAway;
  }, [onClickAway]);
  useEffect(() => {
    const onPointerDown = (event) => {
      if (ref.current && !ref.current.contains(event.target)) {
        callBackRef.current(event);
        const span = ref.current;
        span.className = { className };
      }
    };
    document.addEventListener("pointerdown", onPointerDown);
    return () => {
      document.removeEventListener("pointerdown", onPointerDown);
    };
  }, [ref]);
};

export default useClickAwayForClassnames;
