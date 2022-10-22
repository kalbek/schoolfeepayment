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
              Okay, let't talk about Discounts
            </h1>
            <h3 className="form__subtitle">
              <p>
                This Discount Tabel adapts with your school's discount rules.
              </p>
            </h3>
          </div>
          <br />
          <br />
          <Paymens2Actions />
        </div>
      </div>
    </div>
  );
}
export default Payments2;
