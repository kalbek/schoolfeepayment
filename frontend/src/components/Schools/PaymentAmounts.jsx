import "../../Styles/utilities.css";
import "../../Styles/formStyles.css";
import PaymentAmountTable from "../Utilities/DynamicFields/PaymentAmounts/PaymentAmountTable";
function PaymentAmounts() {
  return (
    <div className="flex">
      <div className="school-info">
        <div>
          <div>
            <h1 className="form__titles--mid">
              Great, now is the right time for Payment Amounts!
            </h1>
            <h3 className="form__subtitle">
              <p>
                This Payment Amounts Tabel is mapped based on your school's
                payment rules!
              </p>
            </h3>
          </div>
          <br />
          <br />
          <PaymentAmountTable />
        </div>
      </div>
    </div>
  );
}
export default PaymentAmounts;
