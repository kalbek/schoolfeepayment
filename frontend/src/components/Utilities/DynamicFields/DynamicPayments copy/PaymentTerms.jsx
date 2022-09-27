import { useSelector, useDispatch } from "react-redux";
import AddMoreButton from "../../Buttons/AddMoreButton";
import Textbox from "../../../InputControls/Textbox";
import Input from "../../../InputControls/Input";
import RemoveButton from "../../Buttons/RemoveButton";
import DatePicker from "react-datepicker";
const PaymentTerms = ({ handlePayments, singlePayment, index }) => {
  return (
    <>
      <div>
        {/* PAYMENT TERM SELECT OPTION */}
        <div className="checkbox-inputs input__group field-group-container">
          <section className="flex-left">
            <label htmlFor="">
              <h3>Payment Term</h3>
            </label>
            <div className="flex-c checkbox-group flex-start">
              <label
                className="checkbox-items flex flex-cs"
                id={"standardPaymentTerm"}
              >
                <input
                  type="radio"
                  name={"schoolPaymentTerm" + index}
                  id={"standardPaymentTerm"}
                  value={singlePayment.standardPaymentTermSelected}
                  checked={singlePayment.standardPaymentTermSelected}
                  onChange={(e) => handlePayments(e, index)}
                  tabIndex={9}
                />
                <span>
                  &nbsp; <p>Standard</p>
                </span>
              </label>
              <label
                className="checkbox-items flex flex-cs mtn30"
                id={"advancedPaymentTerm"}
              >
                <input
                  type="radio"
                  name={"schoolPaymentTerm" + index}
                  id={"advancedPaymentTerm"}
                  value={singlePayment.advancedPaymentTermSelected}
                  checked={singlePayment.advancedPaymentTermSelected === true}
                  onChange={(e) => handlePayments(e, index)}
                  tabIndex={9}
                />
                <span>
                  &nbsp; <p>Advanced</p>
                </span>
              </label>
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default PaymentTerms;
