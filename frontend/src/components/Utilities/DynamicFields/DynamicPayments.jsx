import { useSelector, useDispatch } from "react-redux";
import AddMoreButton from "../Buttons/AddMoreButton";
import RemoveButton from "../Buttons/RemoveButton";
import DatePicker from "react-datepicker";
import {
  updateApPayments,
  updateGlPayments,
} from "../../../features/paymentBase/paymentBaseSlice";
import "react-datepicker/dist/react-datepicker.css";

const DynamicPayments = ({
  formData,
  handlePaymentTypeSelect,
  handlePaymentTermSelect,
  handlePaymentDuedate,
  handlePaymentBase,
  removePayments,
  handlePayments,
}) => {
  const dispatch = useDispatch();
  const annualPayments = useSelector(
    (state) => state.payments.initialAnnualPaymentBaseState
  );
  const gradeLevelPayments = useSelector(
    (state) => state.payments.initialGradeLevelPaymentState
  );
  const paymentType = [
    { id: "1", label: "Tuition Fee", value: "Tuition Fee" },
    { id: "2", label: "Transport service fee", value: "Transport service fee" },
    { id: "3", label: "Registration Fee", value: "Registration Fee" },
    { id: "4", label: "School Material Fee", value: "School Material Fee" },
    {
      id: "5",
      label: "Recreational Fee( for trip and other visit)",
      value: "Recreational Fee( for trip and other visit)",
    },
    { id: "5", label: "Penality Fee", value: "Penality Fee" },
    { id: "5", label: "Other Fees (if any)", value: "Other Fees (if any)" },
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
console.log(formDataPayments)

  function handleAnnualPeriodPaymentBase(index) {
    annualPayments.map((obj) => {
      if (obj.id === index && obj.apChecked === false) {
        dispatch(updateApPayments({ id: index, apChecked: true }));
      } else if (obj.id === index && obj.apChecked === true) {
        dispatch(updateApPayments({ id: index, apChecked: false }));
      }
    });
  }

  function handleGradePaymentBase(index) {
    gradeLevelPayments.map((obj) => {
      if (obj.id === index && obj.glChecked === false) {
        dispatch(updateGlPayments({ id: index, glChecked: true }));
      } else if (obj.id === index && obj.glChecked === true) {
        dispatch(updateGlPayments({ id: index, glChecked: false }));
      }
    });
  }
  return (
    <>
      {formDataPayments.map((singlePayment, index) => (
        <div key={index}>
          {/* {console.log("^^^^^^^^^^^^^")} */}
          <div className="flex-w input-group__container flex-start">
            {/* PAYMENT TYPE */}
            <div className="input__group">
              <div className="input__group flex-cr inputs input--above-small">
                <select
                  className={popup ? "inactive-bg" : "select-box"}
                  name="payment_type"
                  id="payment_type"
                  onChange={(e) => handlePaymentTypeSelect(e, index)}
                  tabIndex={9}
                  value={singlePayment.payment_type}
                >
                  {paymentType.map((payment) => (
                    <option key={payment.value}>{payment.label}</option>
                  ))}
                </select>
                <label htmlFor="payment_type">
                  {" "}
                  {/* <p>{paymentTypeDescription}</p> */}
                  <p>Payment Type</p>
                </label>
              </div>
            </div>
            {/* PAYMENT AMOUNT */}
            {/* PAYMENT CATEGORY SELECT OPTION */}
            <div className="input__group">
              <div className="input__group flex-cr inputs input-small">
                <select
                  className={popup ? "inactive-bg" : "select-box"}
                  name="payment_term"
                  id="payment_term"
                  onChange={(e) => handlePaymentTermSelect(e, index)}
                  tabIndex={9}
                  value={singlePayment.payment_term}
                >
                  {/* {mediaitems} */}
                  {paymentTerm.map((payment) => (
                    <option key={payment.value}>{payment.label}</option>
                  ))}
                </select>
                <label htmlFor="payment_term">
                  {" "}
                  {/* <p>{paymentTypeDescription}</p> */}
                  <p>Payment Term</p>
                </label>
              </div>
            </div>
            {/* PAYMENT DUE DATE */}
            <div className="input__group">
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
                  {/* <p>{paymentTypeDescription}</p> */}
                  <p>Due Date</p>
                </label>
              </div>
            </div>
            {/* PAYMENT BASIS */}

            <div className="checkbox-inputs input__group checkbox-group-container">
              <section className="flex-left">
                <label htmlFor="">
                  <h3>Based On</h3>
                </label>
                <div className="flex-cs checkbox-group">
                  <label
                    className="checkbox-items flex flex-cs"
                    id={"payment_base_ap" + index}
                  >
                    <input
                      // className={popup ? "inactive-bg" : "select-box"}
                      type="checkbox"
                      name="periodBasedPayment"
                      id={"payment_base_ap" + index}
                      tabIndex={9}
                      value={!annualPayments[index].apChecked}
                      checked={
                        formDataPayments[index].periodBasedPayment === "true"
                      }
                      onInput={() => handleAnnualPeriodPaymentBase(index)}
                      onChange={(e) => handlePaymentBase(e, index)}
                    />
                    <>
                      <span>
                        &nbsp; <p>Annual Period</p>
                      </span>
                    </>
                  </label>
                  <label
                    className="checkbox-items flex flex-cs"
                    id={"payment_base_gl" + index}
                  >
                    <input
                      // className={popup ? "inactive-bg" : "select-box"}
                      type="checkbox"
                      name="gradeBasedPayment"
                      id={"payment_base_gl" + index}
                      value={!gradeLevelPayments[index].glChecked}
                      checked={
                        formDataPayments[index].gradeBasedPayment === "true"
                      }
                      onInput={() => handleGradePaymentBase(index)}
                      onChange={(e) => handlePaymentBase(e, index)}
                      tabIndex={9}
                      // value={!glSelected[index].glChecked}
                    />
                    <>
                      <span>
                        &nbsp; <p>Grade Level</p>
                      </span>
                    </>
                  </label>
                </div>
              </section>
            </div>
            <div className="payment-icon">
              <RemoveButton removables={removePayments} index={index} />
            </div>
          </div>
          {formDataPayments.length - 1 === index &&
          formDataPayments.length < 24 ? (
            <AddMoreButton
              label="Add more payment types"
              handleLinks={handlePayments}
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
