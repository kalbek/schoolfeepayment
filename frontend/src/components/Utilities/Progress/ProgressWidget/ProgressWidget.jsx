import "./progressWidgetStyles.css";
import StepNavigation from "./StepNavigation";
const ProgressWidget = (props) => {
  return (
    <div>
      <StepNavigation
        labelArray={props.labelArray}
        currentStep={props.currentStep}
      ></StepNavigation>
    </div>
  );
};

export default ProgressWidget;
