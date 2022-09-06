import { useEffect, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setPopup, setPopupType } from "../features/popups/popupSlice";

const useKeyToClose = (key) => {
    const dispatch = useDispatch();
    const { popup } = useSelector((state) => state.popups);
  // close popup on escape key press
  const escFunction = useCallback(
    (event) => {
      if (event.key === key) {
        dispatch(setPopup(!popup));
        dispatch(setPopupType(""));
      }
    },
    [popup]
  );
  useEffect(() => {
    document.addEventListener("keydown", escFunction, false);
    return () => {
      document.removeEventListener("keydown", escFunction, false);
    };
  }, []);
  // end of close popup on escape key press
};

export default useKeyToClose;
