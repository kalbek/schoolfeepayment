import { useDispatch } from "react-redux";
import { setStep } from "../../../../features/steps/counterSlice";
import { useSelector } from "react-redux";

const Step = (props) => {
  const dispatch = useDispatch();
  function handleClick() {
    dispatch(setStep(props.index));
  }
  const step = useSelector((state) => state.counter.step);
  return (
    <div
      className={
        "stepBlock" +
        (props.visited
          ? " visited "
          : props.selected
          ? " selected"
          : step.includes(props.index)
          ? " passed"
          : "")
      }
      onClick={step.includes(props.index) ? handleClick : null}
    >
      <div
        className={
          "circleWrapper" +
          (props.selected
            ? " selected"
            : step.includes(props.index)
            ? " passed"
            : "")
        }
      >
        <div className="circle flex">
          <p className="flex step__number"> {props.index + 1}</p>
        </div>
        <div className="progress-label flex">
          <p className="flex step__label">{props.label}</p>
        </div>
      </div>
      <div className="progress__bar"></div>
    </div>
  );
};

export default Step;
