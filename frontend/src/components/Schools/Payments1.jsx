import Payments1Actions from "../Utilities/DynamicFields/DynamicPayments1/Payments1Actions";
import "../../Styles/utilities.css";
import "../../Styles/formStyles.css";
function Payments1() {
  return (
    <div className="flex">
      <div className="school-info">
        {/* Main titles section */}
        <div>
          <div>
            <h1 className="form__titles--mid">
              Now let us fill your school payment info
            </h1>
            <h3 className="form__subtitle">
              Please be precise while filling payment details.
            </h3>
          </div>
          <Payments1Actions />
        </div>
      </div>
    </div>
  );
}
export default Payments1;
