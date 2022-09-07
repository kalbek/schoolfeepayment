import { useSelector, useDispatch } from "react-redux";
import AddMoreButton from "../Buttons/AddMoreButton";
import RemoveButton from "../Buttons/RemoveButton";
import DatePicker from "react-datepicker";
import {
  updatePeriodBasedPayments,
  updateGradeLevelBasedPayments,
  updateGenderBasedPayments,
  updateSpecialNeedPayments,
  updateScholarshipBasedPayments,
} from "../../../features/paymentBase/paymentBaseSlice";
import "react-datepicker/dist/react-datepicker.css";

const DynamicPayments = ({
  formData,
  handlePaymentTypeSelect,
  handlePaymentTermSelect,
  handlePaymentBase,
  removePayments,
  handlePayments,
}) => {
  const dispatch = useDispatch();

  const periodBasedPayment = useSelector(
    (state) => state.payments.initialPeriodBasedPaymentState
  );
  const gradeLevelBasedPayment = useSelector(
    (state) => state.payments.initialGradeLevelBasedPaymentState
  );
  const genderBasedPayment = useSelector(
    (state) => state.payments.initialGenderBasedPaymentState
  );
  const specialNeedBasedPayment = useSelector(
    (state) => state.payments.initialSpecialNeedBasedPaymentState
  );
  const scholarshipBasedPayment = useSelector(
    (state) => state.payments.initialScholarshipBasedPaymentState
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

  function handlePeriodBasedPayment(index) {
    periodBasedPayment.map((obj) => {
      if (obj.id === index) {
        dispatch(
          updatePeriodBasedPayments({
            id: index,
            periodChecked: !obj.periodChecked,
          })
        );
      }
    });
  }

  function handleGradeLevelBasedPayment(index) {
    gradeLevelBasedPayment.map((obj) => {
      console.log(obj.gradeLevelChecked);
      if (obj.id === index) {
        dispatch(
          updateGradeLevelBasedPayments({
            id: index,
            gradeLevelChecked: !obj.gradeLevelChecked,
          })
        );
      }
    });
  }

  function handleGenderBasedPayment(index) {
    genderBasedPayment.map((obj) => {
      if (obj.id === index) {
        dispatch(
          updateGenderBasedPayments({
            id: index,
            genderChecked: !obj.genderChecked,
          })
        );
      }
    });
  }

  function handleSpecialNeedBasedPayment(index) {
    specialNeedBasedPayment.map((obj) => {
      if (obj.id === index) {
        dispatch(
          updateSpecialNeedPayments({
            id: index,
            specialNeedChecked: !obj.specialNeedChecked,
          })
        );
      }
    });
  }
  function handleScholarshipBasedPayment(index) {
    scholarshipBasedPayment.map((obj) => {
      if (obj.id === index) {
        dispatch(
          updateScholarshipBasedPayments({
            id: index,
            scholarshipChecked: true,
          })
        );
      }
    });
  }

  const handleSelect = () => {};
  return (
    <>
      {formDataPayments.map((singlePayment, index) => (
        <div key={index}>
          <div className="flex-w input-group__container flex-start">
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
                    <input
                      type="checkbox"
                      name="periodBasedPayment"
                      id={"periodBasedPayment_" + index}
                      tabIndex={9}
                      value={periodBasedPayment[index].periodChecked}
                      checked={periodBasedPayment[index].periodChecked}
                      onInput={() => handlePeriodBasedPayment(index)}
                      onChange={(e) => handlePaymentBase(e, index)}
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
                      value={gradeLevelBasedPayment[index].gradeLevelChecked}
                      checked={gradeLevelBasedPayment[index].gradeLevelChecked}
                      onInput={() => handleGradeLevelBasedPayment(index)}
                      onChange={(e) => handlePaymentBase(e, index)}
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
                      value={genderBasedPayment[index].genderChecked}
                      checked={genderBasedPayment[index].genderChecked}
                      onInput={() => handleGenderBasedPayment(index)}
                      onChange={(e) => handlePaymentBase(e, index)}
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
                      value={specialNeedBasedPayment[index].specialNeedChecked}
                      checked={
                        specialNeedBasedPayment[index].specialNeedChecked
                      }
                      onInput={() => handleSpecialNeedBasedPayment(index)}
                      onChange={(e) => handlePaymentBase(e, index)}
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
                      value={scholarshipBasedPayment[index].scholarshipChecked}
                      checked={
                        scholarshipBasedPayment[index].scholarshipChecked
                      }
                      onInput={() => handleScholarshipBasedPayment(index)}
                      onChange={(e) => handlePaymentBase(e, index)}
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
                    id={"payment_base_ap" + index}
                  >
                    <input
                      type="radio"
                      name="semester"
                      id="semester"
                      value="semester"
                      onSelect={(event) => handleSelect(event)}
                      // checked={
                      //   formDataPeriod.length > 0
                      //     ? formDataPeriod[0].periodType === "semester"
                      //     : false
                      // }
                      onChange={(event) => handlePaymentTermSelect(event)}
                      tabIndex={9}
                    />
                    <span>
                      &nbsp; <p>Standard</p>
                    </span>
                  </label>
                  <label
                    className="checkbox-items flex flex-cs"
                    id={"payment_base_ap" + index}
                  >
                    <input
                      type="radio"
                      name="semester"
                      id="semester"
                      value="semester"
                      onSelect={(event) => handleSelect(event)}
                      // checked={
                      //   formDataPeriod.length > 0
                      //     ? formDataPeriod[0].periodType === "semester"
                      //     : false
                      // }
                      onChange={(event) => handlePaymentTermSelect(event)}
                      tabIndex={9}
                    />
                    <span>
                      &nbsp; <p>Advanced</p>
                    </span>
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
