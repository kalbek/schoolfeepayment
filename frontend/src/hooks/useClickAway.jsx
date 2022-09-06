import { useRef, useEffect } from "react";
import { useDispatch } from "react-redux";
import { setPopup, setPopupType } from "../features/popups/popupSlice";

const useClickAway = (ref, onClickAway) => {
  const dispatch = useDispatch();

  const callBackRef = useRef(onClickAway);
  useEffect(() => {
    callBackRef.current = onClickAway;
  }, [onClickAway]);
  useEffect(() => {
    const onPointerDown = (event) => {
      if (ref.current && !ref.current.contains(event.target)) {
        callBackRef.current(event);
        dispatch(setPopupType(""));
      }
    };
    document.addEventListener("pointerdown", onPointerDown);
    return () => {
      document.removeEventListener("pointerdown", onPointerDown);
    };
  }, [ref]);
};

export default useClickAway;
