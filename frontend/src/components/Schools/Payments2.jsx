import "../../Styles/utilities.css";
import "../../Styles/formStyles.css";
import Paymens2Actions from "../Utilities/DynamicFields/DynamicPayments2/Paymens2Actions";
function Payments2() {
  return (
    <div className="flex">
      <div className="school-info">
        {/* Main titles section */}
        <div>
          <div>
            <h1 className="form__titles--mid">
              Now is the time for Numbers! --
              <strong> Payment Amounts --</strong>
            </h1>
            <h3 className="form__subtitle">
              Based on the data you provided earlier your school's payment
              detail is mapped to look like this
            </h3>
          </div>
          <Paymens2Actions />
        </div>
      </div>
    </div>
  );
}
export default Payments2;
