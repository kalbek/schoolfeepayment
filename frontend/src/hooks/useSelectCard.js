import { useRef, useEffect } from "react";
const useSelectCard = (ref, onClick) => {
  const callBackRef = useRef(ref, onClick);
  useEffect(() => {
    callBackRef.current = onClick;
  }, [onClick]);
  useEffect(() => {
    const onPointerDown = (event) => {
      if (ref.current && !ref.current.contains(event.target)) {
          callBackRef.current(event);
      }
      document.addEventListener("pointerdown", onPointerDown);
      return () => {
        document.removeEventListener("pointerdown", onPointerDown);
      };
    };
  }, [ref]);
};

export default useSelectCard;
