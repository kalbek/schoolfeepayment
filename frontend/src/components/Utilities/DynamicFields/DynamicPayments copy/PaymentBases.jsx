import { useSelector, useDispatch } from "react-redux";
import AddMoreButton from "../../Buttons/AddMoreButton";
import Textbox from "../../../InputControls/Textbox";
import Input from "../../../InputControls/Input";
import RemoveButton from "../../Buttons/RemoveButton";
import DatePicker from "react-datepicker";
const PaymentBases = ({
  handlePayments,
  handleAddCustomPaymentBasis,
  singlePayment,
  index,
}) => {
  const paymentState = useSelector((state) => state.payments.paymentState);
  const { popup } = useSelector((state) => state.popups);

  return (
    <>
      <div>
        <div className="checkbox-inputs input__group field-group-container">
          <div className="flex-cs checkbox-group">
            <section className="flex-left">
              <label htmlFor="">
                <h3>Payment Base</h3>
              </label>
              <div className="flex block checkbox-group mbn5 ">
                {/* Checkbox for period based payment */}

                <label
                  className="checkbox-items flex flex-cs"
                  htmlFor={"periodBasedPayment_" + index}
                >
                  <input
                    type="checkbox"
                    name="periodBasedPayment"
                    id={"periodBasedPayment_" + index}
                    tabIndex={9}
                    value={singlePayment.periodChecked}
                    checked={singlePayment.periodChecked}
                    onChange={(e) => handlePayments(e, index)}
                  />
                  <>
                    <span>
                      &nbsp; <p>Annual Period</p>
                    </span>
                  </>
                </label>

                {/*Checkbox for grade based payment */}
                <label
                  className="checkbox-items flex flex-cs"
                  htmlFor={"gradeBasedPayment_" + index}
                >
                  <input
                    type="checkbox"
                    name="gradeBasedPayment"
                    id={"gradeBasedPayment_" + index}
                    value={singlePayment.gradeLevelChecked}
                    checked={singlePayment.gradeLevelChecked}
                    onChange={(e) => handlePayments(e, index)}
                    tabIndex={9}
                  />
                  <>
                    <span>
                      &nbsp; <p>Grade Level</p>
                    </span>
                  </>
                </label>
                {/*Checkbox for credit hours based payment */}
                <label
                  className="checkbox-items flex flex-cs"
                  htmlFor={"gradeBasedPayment_" + index}
                >
                  <input
                    type="checkbox"
                    name="gradeBasedPayment"
                    id={"gradeBasedPayment_" + index}
                    value={singlePayment.gradeLevelChecked}
                    checked={singlePayment.gradeLevelChecked}
                    onChange={(e) => handlePayments(e, index)}
                    tabIndex={9}
                  />
                  <>
                    <span>
                      &nbsp; <p>Credit Hours</p>
                    </span>
                  </>
                </label>
              </div>
              <div className="flex-cs">
                <div className="flex block checkbox-group">
                  {/*Checkbox for course based payment */}
                  <label
                    className="checkbox-items flex flex-cs"
                    htmlFor={"gradeBasedPayment_" + index}
                  >
                    <input
                      type="checkbox"
                      name="gradeBasedPayment"
                      id={"gradeBasedPayment_" + index}
                      value={singlePayment.gradeLevelChecked}
                      checked={singlePayment.gradeLevelChecked}
                      onChange={(e) => handlePayments(e, index)}
                      tabIndex={9}
                    />
                    <>
                      <span className="pl3">
                        &nbsp; <p>Course Type &nbsp;</p>
                      </span>
                    </>
                  </label>
                  {/*Checkbox for custom type based payment */}
                  {/* Add custom basis button */}
                  <label
                    className="checkbox-items flex flex-cs mlnp7"
                    htmlFor={"gradeBasedPayment_" + index}
                  >
                    <AddMoreButton handleLinks={handleAddCustomPaymentBasis} />
                    <>
                      <span className="mln5">
                        &nbsp; <p>Add Custom Basis</p>
                      </span>
                    </>
                  </label>
                </div>
                <></>
              </div>
              {/* /////////// */}
            </section>
          </div>
        </div>
      </div>
    </>
  );
};

export default PaymentBases;
