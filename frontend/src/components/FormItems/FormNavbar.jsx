import ProgressWidget from "../Utilities/Progress/ProgressWidget/ProgressWidget";
import Logo from "../Logo/Logo";
import "../../Styles/formsNavbarStyle.css";

const FormNavbar = ({ currentStep, passedStep, progressItems }) => {
  return (
    <nav className="forms-nav__container flex-c">
      <div className="forms-nav__subcontainer flex-cs">
        <Logo />
        <ProgressWidget
          labelArray={progressItems}
          currentStep={currentStep}
        />
      </div>
    </nav>
  );
};

export default FormNavbar;
