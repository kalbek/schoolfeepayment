import RemoveButton from "../Buttons/RemoveButton";
import RemoveLinksButton from "../Buttons/RemoveLinksButton";
import "../../../Styles/dynamicButtonsStyle.css";
import { useEffect, useState } from "react";
import AddMoreButton from "../Buttons/AddMoreButton";
import { useSelector, useDispatch } from "react-redux";
const DynamicPeriods = ({ formData, setFormData, removePeriods }) => {
  const formDataPeriods = [...formData.annualPeriod];
  const formDataPeriod = [...formData.annualPeriod];
  const formDataPayments = [...formData.schoolPayments];
  const dispatch = useDispatch();
  const annualPayments = useSelector(
    (state) => state.payments.initialAnnualPaymentBaseState
  );
  const gradeLevelPayments = useSelector(
    (state) => state.payments.initialGradeLevelPaymentState
  );
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
          { periodType: selectedRadio, periodName: "", duration: "" },
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
        },
      ],
    });
  };
  useEffect(() => {
    if (formDataPeriods.length === 0)
      setFormData({
        ...formData,
        annualPeriod: [
          ...formDataPeriod,
          {
            periodType: "Period",
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
      <div className="">
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
      {formDataPeriods.map((singlePeriod, index) => (
        <div key={index}>
          <div className="input-group__container flex-start">
            {/* INITIAL PERIOD INPUT GROUPS */}
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
                        formDataPeriod[0].periodType.charAt(0).toUpperCase() +
                        formDataPeriod[0].periodType.slice(1) +
                        " One"
                      : "Your School's Period Name"
                  }
                  tabIndex={1}
                  onChange={(event) => handlePeriodName(event, index)}
                />
                <label htmlFor="school-name">
                  <p>
                    {formDataPeriod.length > 0 && selectedRadio !== "other"
                      ? formDataPeriod[0].periodType.charAt(0).toUpperCase() +
                        formDataPeriod[0].periodType.slice(1) +
                        "s"
                      : "Period Name"}
                  </p>
                </label>
                <br />
              </div>
            </div>
            <div className="input__group flex-c">
              <div className="flex-cr inputs input--xsmall ">
                <input
                  type="number"
                  className={formData.schoolEmail ? " filled--input" : ""}
                  tabIndex={2}
                  name="duration"
                  id="duration"
                  placeholder={termOrSemister === "Semester" ? "4" : "6"}
                  value={singlePeriod.duration}
                  onChange={(event) => handlePeriodDuration(event, index)}
                />{" "}
                <label htmlFor="school-email">
                  {" "}
                  <p>Duration</p>
                </label>
                <br />
              </div>
            </div>
            <div className="input__group flex-c m20">
              <div className="input__group flex-cr inputs input--small">
                <select
                  name="time"
                  id="time"
                  onChange={(event) => handlePeriodTime(event, index)}
                  tabIndex={9}
                  value={singlePeriod.time}
                >
                  {time.map((time) => (
                    <option key={time.value}>{time.label}</option>
                  ))}
                </select>
                <label htmlFor="semester">
                  {" "}
                  <p>Time</p>
                </label>
              </div>
            </div>
            {/* CASE I */}
            {/* N.B. APPLY THIS STEP IN STEP 3 I.E. DynamicPeriods.jsx */}
            {/* IF SCHOOL PAYMENT DEPENDS ON ONLY ANNUAL PERIODS AND NOT GRADE INFO */}
            {/* THEN BRING ******* ONLY THOSE PAYMENT TYPES WERE PAYMENTS DEPEND ON ANNUAL PERIOD *****  FROM STEP 2 i.e. paymentinfo STEP AND ACCEPT PAYMENT AMOUNTS FORM EACH PAYMENT TYPES USING AN INPUT BOX*/}
            {/* payments[index].periodBasedPayment && !payments[index].gradeBasedPayment ? ( */}
            <div className=" input__group flex-c m-20">
              {annualPayments.map((payments, index) =>
                payments.apChecked && !gradeLevelPayments[index].glChecked ? (
                  <div className="input__group flex-cr inputs">
                    <input
                      className={formData.schoolName ? " filled--input" : ""}
                      // type="text"
                      // value={singlePeriod.periodName}
                      name="periodName"
                      id="periodName"
                      // placeholder={
                      //   selectedRadio !== "other"
                      //     ? "e.g. " +
                      //       formDataPeriod[0].periodType
                      //         .charAt(0)
                      //         .toUpperCase() +
                      //       formDataPeriod[0].periodType.slice(1) +
                      //       " One"
                      //     : "Your School's Period Name"
                      // }
                      tabIndex={1}
                      onChange={(event) => handlePeriodName(event, index)}
                    />
                    <label htmlFor="school-name">
                      <p>{formDataPayments[index].payment_type} </p>
                    </label>
                    <br />
                  </div>
                ) : (
                  ""
                )
              )}
            </div>
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
            <RemoveButton removables={removePeriods} index={index} />
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
    </>
  );
};

export default DynamicPeriods;
