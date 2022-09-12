import RemoveButton from "../Buttons/RemoveButton";
import RemoveLinksButton from "../Buttons/RemoveLinksButton";
import "../../../Styles/dynamicButtonsStyle.css";
import { useEffect, useState } from "react";
import AddMoreButton from "../Buttons/AddMoreButton";
import { useSelector, useDispatch } from "react-redux";
import SmallCard from "../Cards/SmallCard";
import Preview from "../Buttons/Preview";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const DynamicPeriods = ({
  formData,
  setFormData,
  removePeriods,
  handlePaymentDuedate,
}) => {
  const formDataPeriods = [...formData.annualPeriod];
  const formDataPeriod = [...formData.annualPeriod];
  const dispatch = useDispatch();
  const paymentState = useSelector((state) => state.payments.paymentState);

  const [selectedRadio, setSelectedRadio] = useState("");
  useEffect(() => {
    if (formDataPeriod.length > 0)
      setSelectedRadio(formDataPeriod[0].periodType);
  }, [selectedRadio, formData, formDataPeriod]);
  const handlePeriods = () => {
    formData.annualPeriod.length < 30 &&
      setFormData({
        ...formData,
        annualPeriod: [
          ...formDataPeriod,
          {
            periodType: selectedRadio,
            startDate: new Date(),
          },
        ],
      });
  };
  const handleSelect = (event) => {
    setFormData({
      ...formData,
      annualPeriod: [
        ...formDataPeriod,
        {
          periodType: event.target.value,
          // startDate: new Date(),
        },
      ],
    });
    console.log("handledss ");
  };
  useEffect(() => {
    if (formDataPeriods.length === 0)
      setFormData({
        ...formData,
        annualPeriod: [
          ...formDataPeriod,
          {
            periodType: "Period",
            startDate: new Date(),
          },
        ],
      });
  }, []);

  const handleFormRadioSelection = (event) => {
    setSelectedRadio(event.target.value);
    setFormData({
      ...formData,
      annualPeriod: [
        {
          periodType: event.target.value,
          periodName: "",
          duration:
            event.target.value === "term"
              ? 4
              : event.target.value === "semester"
              ? 6
              : 2,
          time:
            event.target.value === "term"
              ? "Month"
              : event.target.value === "semester"
              ? "Month"
              : event.target.value === "others"
              ? "days"
              : "",
          startDate: new Date(),
        },
      ],
    });
  };

  const handlePeriodName = (event, index) => {
    const { name, value } = event.target;
    const periodNames = formDataPeriod;
    periodNames[index][name] = value;
    setFormData({
      ...formData,
      annualPeriod: periodNames,
    });
  };
  const handlePeriodDuration = (event, index) => {
    const { name, value } = event.target;
    const duration = formDataPeriod;
    duration[index][name] = value;
    setFormData({
      ...formData,
      annualPeriod: duration,
    });
  };
  const handlePeriodTime = (event, index) => {
    const { name, value } = event.target;
    const time = formDataPeriod;
    time[index][name] = value;
    setFormData({
      ...formData,
      annualPeriod: time,
    });
  };

  const [termOrSemister, setTermorSemister] = useState("Semester");
  const removeAllPeriods = () => {
    const list = formDataPeriods;
    list.splice(0, list.length);
    setFormData({ ...formData, annualPeriod: list });
  };

  const time = [
    { id: "1", label: "Months", value: "month" },
    { id: "1", label: "Days", value: "days" },
    { id: "1", label: "Years", value: "year" },
  ];

  return (
    <>
      <div className="flex">
        <div>
          <div className="flex-start">
            {/* INITIAL PERIOD DETAILS */}
            <div className="form-radio-group flex-stretch">
              <input
                className="form-radio-button"
                type="radio"
                name="semester"
                id="semester"
                value="semester"
                onSelect={(event) => handleSelect(event)}
                checked={
                  formDataPeriod.length > 0
                    ? formDataPeriod[0].periodType === "semester"
                    : false
                }
                onChange={(event) => handleFormRadioSelection(event)}
                tabIndex={9}
              />
              <p className="form-radio-group form-radio-label">Semesters</p>
              <input
                className="form-radio-button"
                type="radio"
                name="term"
                id="term"
                value="term"
                checked={
                  formDataPeriod.length > 0
                    ? formDataPeriod[0].periodType === "term"
                    : false
                }
                onSelect={(event) => handleSelect(event)}
                onChange={(event) => handleFormRadioSelection(event)}
                tabIndex={9}
              />
              <p className="form-radio-group form-radio-label">Terms</p>
              <input
                className="form-radio-button"
                type="radio"
                name="other"
                id="other"
                value="other"
                onSelect={(event) => handleSelect(event)}
                checked={
                  formDataPeriod.length > 0
                    ? formDataPeriod[0].periodType === "other"
                    : false
                }
                onChange={(event) => handleFormRadioSelection(event)}
                tabIndex={9}
              />
              <p className="form-radio-group form-radio-label">Others</p>
            </div>
          </div>

          <div className="">
            {formDataPeriods.length > 0 ? (
              <RemoveLinksButton
                remove={removeAllPeriods}
                label={
                  selectedRadio === "term"
                    ? "Remove All Terms"
                    : selectedRadio === "semester"
                    ? "Remove All Semesters"
                    : "Remove All"
                }
              />
            ) : (
              <></>
            )}
          </div>

          {/* DYNAMIC INPUT GROUPS */}
          {console.log("see this")}
          {console.log(formDataPeriods)}
          {formDataPeriods.map((singlePeriod, index) => (
            <div key={index} className="flex-c">
              <div className="flex-c">
                {/* INITIAL PERIOD INPUT GROUPS */}
                <div className="flex-start">
                  <div className="input__group">
                    <div className="flex-cr inputs input--above-small">
                      <input
                        className={formData.schoolName ? " filled--input" : ""}
                        type="text"
                        value={singlePeriod.periodName}
                        name="periodName"
                        id="periodName"
                        placeholder={
                          selectedRadio !== "other"
                            ? "e.g. " +
                              formDataPeriod[0].periodType
                                .charAt(0)
                                .toUpperCase() +
                              formDataPeriod[0].periodType.slice(1) +
                              " One"
                            : "Your School's Period Name"
                        }
                        tabIndex={1}
                        onChange={(event) => handlePeriodName(event, index)}
                      />
                      <label htmlFor="school-name">
                        <p>
                          {formDataPeriod.length > 0 &&
                          selectedRadio !== "other"
                            ? formDataPeriod[0].periodType
                                .charAt(0)
                                .toUpperCase() +
                              formDataPeriod[0].periodType.slice(1) +
                              "s"
                            : "Period Name"}
                        </p>
                      </label>
                      <br />
                    </div>
                  </div>
                  {/* Periods start date */}
                  <div className="input__group flex-c m20">
                    <div className="input__group flex-cr inputs input--small">
                      <DatePicker
                        name="payment_due_date"
                        id="payment_due_date"
                        selected={singlePeriod.startDate}
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
                        value={singlePeriod.startDate}
                      />
                      <label htmlFor="payment_due_date">
                        {" "}
                        <p>Start Date</p>
                      </label>
                    </div>
                  </div>
                  <div className="input__group flex-c m20">
                    <div className="input__group flex-cr inputs input--small">
                      <DatePicker
                        name="payment_due_date"
                        id="payment_due_date"
                        selected={singlePeriod.startDate}
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
                        value={singlePeriod.startDate}
                      />
                      <label htmlFor="payment_due_date">
                        {" "}
                        <p>End Date</p>
                      </label>
                    </div>
                  </div>
                  <RemoveButton removables={removePeriods} index={index} />
                </div>
                {/* CASE I */}
                {/* N.B. APPLY THIS STEP IN STEP 3 I.E. DynamicPeriods.jsx */}
                {/* IF SCHOOL PAYMENT DEPENDS ON ONLY ANNUAL PERIODS AND NOT GRADE INFO */}
                {/* THEN BRING ******* ONLY THOSE PAYMENT TYPES WERE PAYMENTS DEPEND ON ANNUAL PERIOD *****  FROM STEP 2 i.e. paymentinfo STEP AND ACCEPT PAYMENT AMOUNTS FORM EACH PAYMENT TYPES USING AN INPUT BOX*/}
                {/* payments[index].periodBasedPayment && !payments[index].gradeBasedPayment ? ( */}
                {/* {paymentState.map((payments, index) =>
              payments.periodChecked && !payments.gradeLevelChecked ? (
                <div className="checkbox-inputs input__group checkbox-group-container">
                  <section className="flex-left">
                    <label htmlFor="">
                      <h3>
                        {payments.standardPaymentTermSelected
                          ? "Standard Payments"
                          : "Advanced Payments"}{" "}
                      </h3>
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
                          value={
                            paymentState[index].standardPaymentTermSelected
                          }
                          checked={
                            paymentState[index].standardPaymentTermSelected
                          }
                          // onChange={(e) => handlePayments(e, index)}
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
                          value={
                            paymentState[index].advancedPaymentTermSelected
                          }
                          checked={
                            paymentState[index].advancedPaymentTermSelected ===
                            true
                          }
                          // onChange={(e) => handlePayments(e, index)}
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
                      </label>
                    </div>
                  </section>
                </div>
              ) : (
                ""
              )
            )} */}
                {/* CASE II */}{" "}
                {/* N.B. APPLY THIS STEP INSIDE DyanmicGrades.jsx FILE */}
                {/* IF SCHOOL PAYMENTS DEPEND ON ONLY GRADE INFO  *** BRING THOSE PAYMENT TYPES IN WHICH GRADE LEVELS ARE BEING DEPENDABLE ON  *** AND ACCEPT PAYMENT AMOUNTS FOR EACH OF THESE PAYMENT TYPES  */}
                {/* CASE III */}{" "}
                {/* N.B. APPLY THIS STEP INSIDE DyanmicGrades.jsx FILE */}
                {/* IF SCHOOL PAYMENTS DEPEND ON BOTH ANNUAL PERIODS AND GRADE INFO  *** BRING THOSE PAYMENT TYPES IN WHICH GRADE LEVELS ARE BEING DEPENDABLE ON  *** AND ACCEPT PAYMENT AMOUNTS FOR EACH OF THESE PAYMENT TYPES  */}
                {/* CASE IV */}{" "}
                {/* N.B. APPLY THIS IN SECOND STEP I.E. DynamicPayments.jsx */}
                {/* IF PAYMENTS DO DEPEND ON NEITHER ANNUAL PERIODS OR  */}
                {/* {if (formDataPayments.length)} */}
              </div>
            </div>
          ))}
          <div className="input-group__container flex-start pt2">
            <div>
              {formDataPeriods.length > 0 && formDataPeriods.length < 20 ? (
                <AddMoreButton
                  label={
                    selectedRadio === "term"
                      ? "Add one more term"
                      : selectedRadio === "semester"
                      ? "Add one more semester"
                      : "Add One More "
                  }
                  handleLinks={(e, index) => handlePeriods(e, index)}
                />
              ) : (
                ""
              )}
            </div>
          </div>
        </div>

        <div className="flex-c">
          <SmallCard formData={formData} />
          <Preview />
        </div>
      </div>
    </>
  );
};

export default DynamicPeriods;
