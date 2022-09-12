import { useSelector, useDispatch } from "react-redux";
import AddMoreButton from "../Buttons/AddMoreButton";
import RemoveButton from "../Buttons/RemoveButton";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

const DynamicPayments = ({
  formData,
  handlePaymentTypeSelect,
  handlePaymentTermSelect,
  handlePayments,
  removePayments,
  addPayments,
}) => {
  const paymentState = useSelector((state) => state.payments.paymentState);
  const paymentType = [
    { id: "1", label: "Tuition Fee", value: "Tuition Fee" },
    { id: "2", label: "Transport service fee", value: "Transport service fee" },
    { id: "3", label: "Registration Fee", value: "Registration Fee" },
    { id: "4", label: "School Material Fee", value: "School Material Fee" },
    { id: "5", label: "Tutorial Fee", value: "Tutorial Fee Fee" },
    {
      id: "6",
      label: "Recreational Fee( for trip and other visit)",
      value: "Recreational Fee( for trip and other visit)",
    },
    { id: "7", label: "Penality Fee", value: "Penality Fee" },
    { id: "8", label: "Other Fees (if any)", value: "Other Fees (if any)" },
  ];
  const paymentTerm = [
    { id: "1", label: "One Time Payment", value: "One time payment" },
    { id: "2", label: "Two Time Payment", value: "Two time payment" },
    { id: "3", label: "Three Time Payment", value: "Three time payment" },
    { id: "4", label: "Four Time Payment", value: "Four time payment" },
    { id: "5", label: "Five Time Payment", value: "Five time payment" },
  ];

  const { popup } = useSelector((state) => state.popups);
  const formDataPayments = [...formData.schoolPayments];

  return (
    <>
      {formDataPayments.map((singlePayment, index) => (
        <div key={index}>
          <div className="flex-start">
            {/* PAYMENT TYPE */}
            <div className="input__group">
              <div className="input__group flex-cr inputs input--above-small">
                <select
                  className={popup ? "inactive-bg" : "select-box"}
                  name="paymentType"
                  id="paymentType"
                  onChange={(e) => handlePaymentTypeSelect(e, index)}
                  tabIndex={9}
                  value={singlePayment.paymentType}
                >
                  {paymentType.map((payment) => (
                    <option key={payment.value}>{payment.label}</option>
                  ))}
                </select>
                <label htmlFor="paymentType">
                  {" "}
                  {/* <p>{paymentTypeDescription}</p> */}
                  <p>Payment Type</p>
                </label>
              </div>
            </div>

            {/* PAYMENT DUE DATE */}
            {/* <div className="input__group">
              <div className="input__group flex-cr inputs input--small">
                <DatePicker
                  name="payment_due_date"
                  id="payment_due_date"
                  selected={singlePayment.payment_due_date}
                  onChange={(date) =>
                    handlePaymentDuedate(
                      {
                        target: { value: date, name: "payment_due_date" },
                      },
                      index
                    )
                  }
                  showTimeSelect
                  showYearDropdown
                  scrollableMonthYearDropdown
                  dateFormat="Pp"
                  label="Due Date"
                  value={singlePayment.payment_due_date}
                />
                <label htmlFor="payment_due_date">
                  {" "}
                  <p>Due Date</p>
                </label>
              </div>
            </div> */}
            {/* PAYMENT BASIS */}

            <div className="checkbox-inputs input__group checkbox-group-container">
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
                    {/* {console.log(formDataPayments[index].periodBasedPayment)}
                    {console.log(
                      "typeof: " +
                        typeof formDataPayments[index].periodBasedPayment
                    )}
                    {console.log("typeof: " + typeof true)} */}
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

            <div className="checkbox-inputs input__group checkbox-group-container">
              <section className="flex-left">
                <label htmlFor="">
                  <h3>Payment Term</h3>
                </label>
                <div className="flex-cs checkbox-group">
                  <label
                    className="checkbox-items flex flex-cs"
                    id={"standardPaymentTerm_" + index}
                  >
                    <input
                      type="radio"
                      name={"schoolPaymentTerm" + index}
                      id={"standardPaymentTerm_" + index}
                      value={paymentState[index].standardPaymentTermSelected}
                      checked={paymentState[index].standardPaymentTermSelected}
                      onChange={(e) => handlePayments(e, index)}
                      tabIndex={9}
                    />
                    <span>
                      &nbsp; <p>Standard</p>
                    </span>
                    {console.log("come hear standard")}
                    {console.log(
                      " sps[" +
                        index +
                        "]: " +
                        paymentState[index].standardPaymentTermSelected
                    )}
                    {console.log(
                      " aps[" +
                        index +
                        "]: " +
                        paymentState[index].advancedPaymentTermSelected
                    )}
                  </label>
                  <label
                    className="checkbox-items flex flex-cs"
                    id={"advancedPaymentTerm_" + index}
                  >
                    <input
                      type="radio"
                      name={"schoolPaymentTerm" + index}
                      id={"advancedPaymentTerm_" + index}
                      value={paymentState[index].advancedPaymentTermSelected}
                      checked={
                        paymentState[index].advancedPaymentTermSelected === true
                      }
                      onChange={(e) => handlePayments(e, index)}
                      tabIndex={9}
                    />
                    <span>
                      &nbsp; <p>Advanced</p>
                    </span>
                    {console.log("come hear advanced")}
                    {console.log(
                      " sps[" +
                        index +
                        "]: " +
                        paymentState[index].standardPaymentTermSelected
                    )}
                    {console.log(
                      " aps[" +
                        index +
                        "]: " +
                        paymentState[index].advancedPaymentTermSelected
                    )}
                  </label>
                </div>
              </section>
            </div>
            {formDataPayments.length > 1 && (
              <div className="payment-icon">
                <RemoveButton removables={removePayments} index={index} />
              </div>
            )}
          </div>
          {formDataPayments.length - 1 === index &&
          formDataPayments.length < 24 ? (
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
