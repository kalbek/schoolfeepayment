import { useSelector } from "react-redux";
import "../../Styles/formPageControlButtonStyles.css";

const FormPageControl = ({ backFormStep, nextFormStep }) => {
  const { popup } = useSelector((state) => state.popups);
  return (
    <div className=" flex create-school-btn">
      <div
        className="create-school-btn back"
        onClick={backFormStep}
        tabIndex={21}
      >
        <p className={popup ? "inactive-bg btn-back" : " btn-back"}>BACK</p>
      </div>
      <div
        className="create-school-btn next"
        onClick={nextFormStep}
        tabIndex={20}
      >
        <p className={popup ? "inactive-bg btn-next" : "btn-next"}>NEXT</p>
      </div>
    </div>
  );
};

export default FormPageControl;
