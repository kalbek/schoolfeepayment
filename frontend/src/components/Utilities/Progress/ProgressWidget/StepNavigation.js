import Step from "./Step";

const StepNavigation = (props) => {
  return (
    <div className="stepWrapper">
      {props.labelArray.map((item, index) => (
        <Step
          key={index}
          index={index}
          label={item}
          visited={props.currentStep > index}
          selected={
            props.currentStep === index ||
            // ||
            // props.currentStep === index + 0.5 ||
            props.currentStep === index - 0.5
          }
          // currentStep={props.currentStep}
        ></Step>
      ))}
    </div>
  );
};

export default StepNavigation;
