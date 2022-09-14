import { useSelector, useDispatch } from "react-redux";
import AddMoreButton from "../Buttons/AddMoreButton";
import RemoveButton from "../Buttons/RemoveButton";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

const DynamicPayments = ({
  formData,
  handlePaymentTypeSelect,
  handlePayments,
  removePayments,
  addPayments,
}) => {
  const paymentState = useSelector((state) => state.payments.paymentState);
  const paymentType = [
    { id: "0", label: "Tuition Fee", value: "Tuition Fee" },
    { id: "1", label: "Transport Service fee", value: "Transport Service fee" },
    { id: "2", label: "Registration Fee", value: "Registration Fee" },
    { id: "3", label: "School Material Fee", value: "School Material Fee" },
    { id: "4", label: "Tutorial Fee", value: "Tutorial Fee" },
    {
      id: "5",
      label: "Recreational Fee( for trip and other visit)",
      value: "Recreational Fee",
    },
    { id: "6", label: "Penality Fee", value: "Penality Fee" },
    { id: "7", label: "Other Fees (if any)", value: "Other Fees" },
  ];

  const { popup } = useSelector((state) => state.popups);
  const formDataPayments = [...formData.schoolPayments];

  return (
    <>
      {paymentState.map((singlePayment, index) => (
        <div key={index}>
          <div className="flex-start">
            {/* PAYMENT TYPE */}
            <div className="input__group">
              <div className="input__group flex-cr inputs input--above-small">
                <select
                  className={popup ? "inactive-bg" : "select-box"}
                  name={"paymentType"}
                  id={"paymentType" + index}
                  onChange={(e) => handlePaymentTypeSelect(e, index)}
                  tabIndex={9}
                  value={singlePayment.paymentTypeToUpdate}
                >
                  {paymentType.map((payment) => (
                    <option value={payment.value} key={payment.value}>
                      {payment.label}
                    </option>
                  ))}
                </select>
                <label htmlFor="paymentType">
                  {" "}
                  <p>Payment Type</p>
                </label>
              </div>
            </div>

            <div className="checkbox-inputs input__group field-group-container">
              <section className="flex-left">
                <label htmlFor="">
                  <h3>Payment Base</h3>
                </label>
                <div className="flex-cs checkbox-group">
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
                      value={paymentState[index].periodChecked}
                      checked={paymentState[index].periodChecked}
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
                      value={paymentState[index].gradeLevelChecked}
                      checked={paymentState[index].gradeLevelChecked}
                      onChange={(e) => handlePayments(e, index)}
                      tabIndex={9}
                    />
                    <>
                      <span>
                        &nbsp; <p>Grade Level</p>
                      </span>
                    </>
                  </label>
                  {/*Checkbox for gender based payment */}
                  <label
                    htmlFor={"genderBasedPayment_" + index}
                    className="checkbox-items flex flex-cs"
                  >
                    <input
                      type="checkbox"
                      name="genderBasedPayment"
                      id={"genderBasedPayment_" + index}
                      value={paymentState[index].genderChecked}
                      checked={paymentState[index].genderChecked}
                      onChange={(e) => handlePayments(e, index)}
                      tabIndex={9}
                    />
                    <>
                      <span>
                        &nbsp; <p>Gender Based</p>
                      </span>
                    </>
                  </label>
                  {/*Checkbox for special need based payment */}
                  <label
                    className="checkbox-items flex flex-cs"
                    htmlFor={"specialNeedBasedPayment_" + index}
                  >
                    <input
                      type="checkbox"
                      name="specialNeedBasedPayment"
                      id={"specialNeedBasedPayment_" + index}
                      value={paymentState[index].specialNeedChecked}
                      checked={paymentState[index].specialNeedChecked}
                      onChange={(e) => handlePayments(e, index)}
                      tabIndex={9}
                    />
                    <>
                      <span>
                        &nbsp; <p>Special Needs</p>
                      </span>
                    </>
                  </label>

                  {/*Checkbox for scholarships based payment */}
                  <label
                    className="checkbox-items flex flex-cs"
                    htmlFor={"scholarshipBasedPayment_" + index}
                  >
                    <input
                      type="checkbox"
                      name="scholarshipBasedPayment"
                      id={"scholarshipBasedPayment_" + index}
                      value={paymentState[index].scholarshipChecked}
                      checked={paymentState[index].scholarshipChecked}
                      onChange={(e) => handlePayments(e, index)}
                      tabIndex={9}
                    />
                    <>
                      <span>
                        &nbsp; <p>Scholarships</p>
                      </span>
                    </>
                  </label>
                </div>
              </section>
            </div>

            {/* PAYMENT TERM SELECT OPTION */}

            <div className="checkbox-inputs input__group field-group-container">
              <section className="flex-left">
                <label htmlFor="">
                  <h3>Payment Term</h3>
                </label>
                <div className="flex-cs checkbox-group">
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
                    className="checkbox-items flex flex-cs"
                    id={"advancedPaymentTerm"}
                  >
                    <input
                      type="radio"
                      name={"schoolPaymentTerm" + index}
                      id={"advancedPaymentTerm"}
                      value={singlePayment.advancedPaymentTermSelected}
                      checked={
                        singlePayment.advancedPaymentTermSelected === true
                      }
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

            <div className="payment-icon">
              {paymentState.length > 1 ? (
                <RemoveButton removables={removePayments} index={index} />
              ) : (
                <></>
                // <div className="space-for-remove"></div>
              )}
            </div>
          </div>
          {paymentState.length - 1 === index && paymentState.length < 24 ? (
            <AddMoreButton
              label="Add more payment types"
              handleLinks={addPayments}
            />
          ) : (
            ""
          )}
        </div>
      ))}
    </>
  );
};

export default DynamicPayments;
