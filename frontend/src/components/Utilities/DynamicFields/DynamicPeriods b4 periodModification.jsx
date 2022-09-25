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

import {
  createPaymentBase,
  updatePayments,
  deletePaymentBase,
  resetPaymentStates,
} from "../../../features/SchoolPeriods/annualPeriodSlice";

const DynamicPeriods = ({
  formData,
  setFormData,
  removePeriods,
  handleAnnualPeriodDuration,
}) => {
  const formDataPeriod = [...formData.annualPeriod];
  const paymentState = useSelector((state) => state.payments.paymentState);
  console.log(paymentState)
  const [placeholderIndex, setPlaceholderIndex] = useState(1);
  const handleNewPeriods = () => {
    formData.annualPeriod.length < 30 &&
      // setPlaceholderIndex(placeholderIndex + 1);
      setFormData({
        ...formData,
        annualPeriod: [
          ...formDataPeriod,
          {
            periodType: formDataPeriod[formDataPeriod.length - 1].periodType,
            PeriodName: formDataPeriod[formDataPeriod.length - 1].periodName,
            annualPeriodStartDate: new Date(),
            annualPeriodEndDate: new Date(),
          },
        ],
      });
  };
  const handlePerodTypeSelect = (event) => {
    setFormData({
      ...formData,
      annualPeriod: [
        ...formDataPeriod,
        {
          periodType: event.target.value,
          periodName: event.target.name,
        },
      ],
    });
  };

  const handleFormRadioSelection = (event) => {
    setFormData({
      ...formData,
      annualPeriod: [
        {
          periodType: event.target.value,
          PeriodName: event.target.name,
          annualPeriodStartDate: new Date(),
          annualPeriodEndDate: new Date(),
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

  const resetPeriods = () => {
    const list = formDataPeriod;
    list.splice(1, list.length);
    setFormData({ ...formData, annualPeriod: list });
  };

  const time = [
    { id: "1", label: "Months", value: "month" },
    { id: "1", label: "Days", value: "days" },
    { id: "1", label: "Years", value: "year" },
  ];

  return (
    <>
      <div className="flex-start">
        <div>
          <div className="flex-c">
            <div className="pr1rem flex-start">
              {/* ANNUAL PERIOD RADIO BUTTONS */}
              <div className="checkbox-inputs input__group field-group-container">
                <section className="flex-left">
                  <label htmlFor="">
                    <h3>Annual Periods</h3>
                  </label>
                  <div className="flex-cs">{/* School Shifts */}</div>
                  <div className="flex-cs checkbox-group">
                    {/* Radio buttons for semesters */}
                    <label
                      className="checkbox-items flex flex-cs"
                      id={"Semester"}
                    >
                      <input
                        type="radio"
                        name={"Semester"}
                        id={"Semester"}
                        value="Semester"
                        checked={
                          formDataPeriod.length > 0
                            ? formDataPeriod[0].periodType === "Semester"
                            : false
                        }
                        onSelect={(event) => handlePerodTypeSelect(event)}
                        onChange={(event) => handleFormRadioSelection(event)}
                        tabIndex={9}
                      />
                      <span>
                        &nbsp; <p>Semesters</p>
                      </span>
                    </label>
                    {/* Radio buttons for terms */}
                    <label className="checkbox-items flex flex-cs" id={"Term"}>
                      <input
                        className="form-radio-button"
                        type="radio"
                        name="Term"
                        id="Term"
                        value="Term"
                        checked={
                          formDataPeriod.length > 0
                            ? formDataPeriod[0].periodType === "Term"
                            : false
                        }
                        onSelect={(event) => handlePerodTypeSelect(event)}
                        onChange={(event) => handleFormRadioSelection(event)}
                        tabIndex={9}
                      />
                      <span>
                        &nbsp; <p>Terms</p>
                      </span>
                    </label>
                    {/* Radio buttons for quarters */}
                    <label
                      className="checkbox-items flex flex-cs"
                      id={"Quarter"}
                    >
                      <input
                        className="form-radio-button"
                        type="radio"
                        name="Quarter"
                        id="quarter"
                        value="Quarter"
                        checked={
                          formDataPeriod.length > 0
                            ? formDataPeriod[0].periodType === "Quarter"
                            : false
                        }
                        onSelect={(event) => handlePerodTypeSelect(event)}
                        onChange={(event) => handleFormRadioSelection(event)}
                        tabIndex={9}
                      />
                      <span>
                        &nbsp; <p>Quarters</p>
                      </span>
                    </label>
                    {/* Radio buttons for other periods */}
                    <label
                      className="checkbox-items flex flex-cs"
                      id={"Custom"}
                    >
                      <input
                        className="form-radio-button"
                        type="radio"
                        name="Custom"
                        id="Custom"
                        value="Custom"
                        checked={
                          formDataPeriod.length > 0
                            ? formDataPeriod[0].periodType === "Custom"
                            : false
                        }
                        onSelect={(event) => handlePerodTypeSelect(event)}
                        onChange={(event) => handleFormRadioSelection(event)}
                        tabIndex={9}
                      />
                      <span>
                        &nbsp; <p>Custom &nbsp; &nbsp; </p>
                      </span>
                    </label>
                  </div>
                </section>
              </div>
              {/* END OF ANNUAL PERIOD RADIO BUTTONS */}
              {/* SHIFTS CHECKBOXES */}
              <div className="checkbox-inputs input__group field-group-container">
                <section className="flex-left">
                  <label htmlFor="">
                    <h3>Shifts</h3>
                  </label>
                  <div className="flex-cs checkbox-group">
                    {/* Checkbox for period based payment */}
                    <label
                      className="checkbox-items flex flex-cs"
                      htmlFor={"periodBasedPayment_"}
                    >
                      <input
                        type="checkbox"
                        name="periodBasedPayment"
                        id={"periodBasedPayment_"}
                        tabIndex={9}
                        value={formDataPeriod.hasRegularShift}
                        checked={formDataPeriod.hasRegularShift}
                        // checked={paymentState[index].periodChecked}
                        // onChange={(e) => handlePayments(e, index)}
                      />
                      <>
                        <span>
                          &nbsp; <p>Regular</p>
                        </span>
                      </>
                    </label>

                    {/*Checkbox for extension shift */}
                    <label
                      className="checkbox-items flex flex-cs"
                      htmlFor={"gradeBasedPayment_"}
                    >
                      <input
                        type="checkbox"
                        name="gradeBasedPayment"
                        id={"gradeBasedPayment_"}
                        // value={paymentState[index].gradeLevelChecked}
                        // checked={paymentState[index].gradeLevelChecked}
                        // onChange={(e) => handlePayments(e, index)}
                        tabIndex={9}
                      />
                      <>
                        <span>
                          &nbsp; <p>Extension</p>
                        </span>
                      </>
                    </label>

                    {/*Checkbox for weekend shift*/}
                    <label
                      htmlFor={"genderBasedPayment_"}
                      className="checkbox-items flex flex-cs"
                    >
                      <input
                        type="checkbox"
                        name="genderBasedPayment"
                        id={"genderBasedPayment_"}
                        // value={paymentState[index].genderChecked}
                        // checked={paymentState[index].genderChecked}
                        // onChange={(e) => handlePayments(e, index)}
                        tabIndex={9}
                      />
                      <>
                        <span>
                          &nbsp; <p>Weekend</p>
                        </span>
                      </>
                    </label>
                    {/*Checkbox for custom shifts */}
                    <label
                      className="checkbox-items flex flex-cs"
                      htmlFor={"specialNeedBasedPayment_"}
                    >
                      <input
                        type="checkbox"
                        name="specialNeedBasedPayment"
                        id={"specialNeedBasedPayment_"}
                        // value={paymentState[index].specialNeedChecked}
                        // checked={paymentState[index].specialNeedChecked}
                        // onChange={(e) => handlePayments(e, index)}
                        tabIndex={9}
                      />
                      <>
                        <span>
                          &nbsp; <p>Custom Shifts</p>
                        </span>
                      </>
                    </label>
                  </div>
                </section>
              </div>
              {/* END OF SHIFTS CHECKBOXES */}
            </div>
          </div>

          {/* RESET ANNUAL PERIODS BUTTON */}
          {/* END OF RESET ANNUAL PERIODS BUTTON */}
          <section>
            {formDataPeriod.length > 1 ? (
              <RemoveLinksButton
                remove={resetPeriods}
                label={
                  formDataPeriod[formDataPeriod.length - 1].periodType ===
                  "Term"
                    ? "Reset Terms"
                    : formDataPeriod[formDataPeriod.length - 1].periodType ===
                      "Semester"
                    ? "Reset Semesters"
                    : formDataPeriod[formDataPeriod.length - 1].periodType ===
                      "Quarter"
                    ? "Reset Quarters"
                    : "Reset"
                }
              />
            ) : (
              <></>
            )}
          </section>
          {/* END OF RESET ANNUAL PERIODS BUTTON */}
          {/* DYNAMIC INPUT GROUPS */}
          {formDataPeriod.map((singlePeriod, index) => (
            <div key={index} className="flex-c dynamic-periods-container pl1">
              {/* INITIAL PERIOD INPUT GROUPS */}
              <section>
                <div className="flex-start ">
                  <div className="input__group flex-c m20">
                    <div className="flex-cr inputs input--medium">
                      <input
                        className={formData.schoolName ? " filled--input" : ""}
                        type="text"
                        value={singlePeriod.periodName}
                        name="periodName"
                        id="periodName"
                        placeholder={
                          singlePeriod.periodType !== "Other"
                            ? "e.g. " +
                              singlePeriod.periodType.charAt(0).toUpperCase() +
                              singlePeriod.periodType.slice(1) +
                              " " +
                              // placeholderIndex + index
                              parseInt(placeholderIndex + index)
                            : "Your School's Period Name"
                        }
                        tabIndex={1}
                        onChange={(event) => handlePeriodName(event, index)}
                      />
                      <label htmlFor="school-name">
                        <p>
                          {formDataPeriod.length > 0 &&
                          singlePeriod.periodType !== "Custom"
                            ? singlePeriod.periodType.charAt(0).toUpperCase() +
                              singlePeriod.periodType.slice(1) +
                              "s"
                            : "Period Name"}
                        </p>
                      </label>
                      <br />
                    </div>
                  </div>
                  {/* Periods start date */}
                  <div className="input__group flex-c m20 ">
                    <div className="input__group flex-cr inputs input--small">
                      <DatePicker
                        className="pointer"
                        name="annualPeriodStartDate"
                        id={"annualPeriodStartDate" + index}
                        selected={singlePeriod.annualPeriodStartDate}
                        onChange={(date) =>
                          handleAnnualPeriodDuration(
                            {
                              target: {
                                value: date,
                                name: "annualPeriodStartDate",
                              },
                            },
                            index
                          )
                        }
                        showTimeSelect
                        showYearDropdown
                        scrollableMonthYearDropdown
                        dateFormat="Pp"
                        label="Due Date"
                        value={singlePeriod.annualPeriodStartDate}
                      />
                      <label htmlFor="annualPeriodStartDate">
                        {" "}
                        <p>Start Date</p>
                      </label>
                    </div>
                  </div>
                  <div className="input__group flex-c m20">
                    <div className="input__group flex-cr inputs input--small">
                      <DatePicker
                        className="pointer"
                        name="annualPeriodEndDate"
                        id="annualPeriodEndDate"
                        selected={singlePeriod.annualPeriodEndDate}
                        onChange={(date) =>
                          handleAnnualPeriodDuration(
                            {
                              target: {
                                value: date,
                                name: "annualPeriodEndDate",
                              },
                            },
                            index
                          )
                        }
                        showTimeSelect
                        showYearDropdown
                        scrollableMonthYearDropdown
                        dateFormat="Pp"
                        label="Due Date"
                        value={singlePeriod.annualPeriodEndDate}
                      />
                      <label htmlFor="annualPeriodEndDate">
                        {" "}
                        <p>End Date</p>
                      </label>
                    </div>
                  </div>
                  <div className="remove-periods-icon flex-c">
                    {formDataPeriod.length > 1 ? (
                      <>
                        <RemoveButton
                          removables={removePeriods}
                          index={index}
                        />
                        {/* <RemoveButton removables={removePeriods} index={index} /> */}
                      </>
                    ) : (
                      // <></>
                      <div className="space-for-remove"></div>
                    )}
                  </div>
                </div>
              </section>
            </div>
          ))}
          {/* END OF DYNAMIC INPUT GROUPS */}

          {/* ADD ON MORE PERIOD BUTTON */}
          <div className="input-group__container flex-start pt2">
            <div>
              {formDataPeriod.length > 0 && formDataPeriod.length < 20 ? (
                <AddMoreButton
                  label={
                    formDataPeriod[0].periodType === "Custom"
                      ? "Add One More "
                      : "Add One More " + formDataPeriod[0].periodType
                  }
                  handleLinks={(e, index) => handleNewPeriods(e, index)}
                />
              ) : (
                ""
              )}
            </div>
          </div>

          {/* END OF ADD ON MORE PERIOD BUTTON */}
        </div>

        {/* <div className="flex-c">
          <SmallCard formData={formData} />
          <Preview />
        </div> */}
      </div>
    </>
  );
};

export default DynamicPeriods;
