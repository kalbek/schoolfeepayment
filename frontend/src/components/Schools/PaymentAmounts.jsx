import "../../Styles/utilities.css";
import "../../Styles/formStyles.css";
import { useSelector, useDispatch } from "react-redux";
import PaymentAmountTable from "../Utilities/DynamicFields/PaymentAmounts/PaymentAmountTable";

function PaymentAmounts() {
  const paymentState = useSelector((state) => state.payments.paymentState);
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
          {paymentState.map((payments, index) => (
            <PaymentAmountTable index={index} payments={payments} />
          ))}
        </div>
      </div>
    </div>
  );
}
export default PaymentAmounts;
