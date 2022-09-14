import AddMoreButton from "../Utilities/Buttons/AddMoreButton";
import RemoveLinksButton from "../Utilities/Buttons/RemoveLinksButton";
import DynamicSchoolAchievements from "../Utilities/DynamicFields/DynamicSchoolAchievements";
import "../../Styles/utilities.css";
import "../../Styles/formStyles.css";
const PaymentScale = ({ formData, setFormData }) => {
  const formDataSemester = formData.annualPeriod;
  return (
    <>
      <div className="form--container">
        <h1 className="form__titles-big pt20">
          {" "}
          On what criteria is your school payment based?
          <span className="form__titles-big"></span>
        </h1>
        <h3 className="form__sub-titles-main">Few things you need to know:</h3>
        <div className="form__sub-titles-basic">
          <ul className="disk-styled-list form-list">
            <li>
              We bring the first options from previous data you filled, i.e.
              Semesters, grades and your custom inputs
            </li>
            <li>If you have different payment criteria please specify</li>
          </ul>
        </div>
      </div>
      <br />
    </>
  );
};

export default PaymentScale;
