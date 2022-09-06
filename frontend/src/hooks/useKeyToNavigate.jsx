import { useState, useEffect, useCallback } from "react";

const useKeyToNavigate = () => {
  const [nextKeyStep, setNextKeyStep] = useState(0);
  const nextFunction = useCallback(
    (event) => {
      if (event.keyCode === 39) {
        setNextKeyStep(nextKeyStep + 1);
      }
    },
    [nextKeyStep]
  );
  const backFunction = useCallback(
    (event) => {
      if (event.keyCode === 37) {
        setNextKeyStep(nextKeyStep - 1);
      }
    },
    [nextKeyStep]
  );
  useEffect(() => {
    document.addEventListener("keydown", nextFunction, false);
    document.addEventListener("keydown", backFunction, false);
    return () => {
      document.removeEventListener("keydown", nextFunction, false);
      document.removeEventListener("keydown", backFunction, false);
    };
  }, []);
  return { nextKeyStep, setNextKeyStep };
};

export default useKeyToNavigate;
