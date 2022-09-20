import RemoveButton from "../Buttons/RemoveButton";
import RemoveLinksButton from "../Buttons/RemoveLinksButton";
import "../../../Styles/dynamicButtonsStyle.css";
import AddMoreButton from "../Buttons/AddMoreButton";
import { useSelector } from "react-redux";
import SmallCard from "../Cards/SmallCard";
import Preview from "../Buttons/Preview";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { parse } from "date-fns";

const DynamicPeriods = ({
  formData,
  setFormData,
  handleNewPeriods,
  removePeriods,
  handleAnnualPeriodDuration,
  handleUpdatePerods,
  resetAllPeriods,
}) => {
  const formDataPeriod = [...formData.annualPeriod];
  const periodState = useSelector((state) => state.periods.annualPeriodState);

  return (
    <>
      {/* {console.log(periodState)} */}
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
                        name={"periodType"}
                        id={"Semester"}
                        value={
                          periodState[periodState.length - 1].periodTypeName ===
                          "Semester"
                        }
                        checked={
                          periodState[periodState.length - 1].periodTypeName ===
                          "Semester"
                        }
                        onChange={(event) => handleUpdatePerods(event)}
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
                        name="periodType"
                        id="Term"
                        value={
                          periodState[periodState.length - 1].periodTypeName ===
                          "Term"
                        }
                        checked={
                          periodState[periodState.length - 1].periodTypeName ===
                          "Term"
                        }
                        onChange={(event) => handleUpdatePerods(event)}
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
                        name="periodType"
                        id="Quarter"
                        value={
                          periodState[periodState.length - 1].periodTypeName ===
                          "Quarter"
                        }
                        checked={
                          periodState[periodState.length - 1].periodTypeName ===
                          "Quarter"
                        }
                        onChange={(event) => handleUpdatePerods(event)}
                        tabIndex={9}
                      />
                      <span>
                        &nbsp; <p>Quarters</p>
                      </span>
                    </label>
                    {/* Radio buttons for other periods */}
                    <label
                      className="checkbox-items flex flex-cs"
                      id={"Custom_Period"}
                    >
                      <input
                        className="form-radio-button"
                        type="radio"
                        name="periodType"
                        id="Custom_Period"
                        value={
                          periodState[periodState.length - 1].periodTypeName ===
                          "Custom_Period"
                        }
                        checked={
                          periodState[periodState.length - 1].periodTypeName ===
                          "Custom_Period"
                        }
                        onChange={(event) => handleUpdatePerods(event)}
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
                      htmlFor={"regularShift"}
                    >
                      <input
                        type="checkbox"
                        name="periodShift"
                        id={"regularShift"}
                        tabIndex={9}
                        value={
                          periodState[periodState.length - 1].hasRegularShift
                        }
                        checked={
                          periodState[periodState.length - 1].hasRegularShift
                        }
                        onChange={(event) => handleUpdatePerods(event)}
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
                      htmlFor={"extensionShift"}
                    >
                      <input
                        type="checkbox"
                        name="periodShift"
                        id={"extensionShift"}
                        value={
                          periodState[periodState.length - 1].hasExtensionShift
                        }
                        checked={
                          periodState[periodState.length - 1].hasExtensionShift
                        }
                        onChange={(event) => handleUpdatePerods(event)}
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
                      htmlFor={"weekendShift"}
                      className="checkbox-items flex flex-cs"
                    >
                      <input
                        type="checkbox"
                        name="periodShift"
                        id={"weekendShift"}
                        value={
                          periodState[periodState.length - 1].hasWeekendShift
                        }
                        checked={
                          periodState[periodState.length - 1].hasWeekendShift
                        }
                        onChange={(event) => handleUpdatePerods(event)}
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
                      htmlFor={"customShift"}
                    >
                      <input
                        type="checkbox"
                        name="periodShift"
                        id={"customShift"}
                        value={
                          periodState[periodState.length - 1].hasCustomShift
                        }
                        checked={
                          periodState[periodState.length - 1].hasCustomShift
                        }
                        onChange={(event) => handleUpdatePerods(event)}
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
            {periodState.length > 1 ? (
              <RemoveLinksButton
                remove={resetAllPeriods}
                label={
                  "Reset " +
                  periodState[periodState.length - 1].periodTypeName +
                  "s"
                }
              />
            ) : (
              <></>
            )}
          </section>
          {/* END OF RESET ANNUAL PERIODS BUTTON */}
          {/* DYNAMIC INPUT GROUPS */}
          {periodState.map((singlePeriod, index) => (
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
                        name="periodDetails"
                        id="periodDescription"
                        placeholder={
                          singlePeriod.periodTypeName !== "Other"
                            ? "e.g. " +
                              singlePeriod.periodTypeName
                                .charAt(0)
                                .toUpperCase() +
                              singlePeriod.periodTypeName.slice(1) +
                              " " +
                              parseInt(singlePeriod.id + 1)
                            : "Your School's Period Name"
                        }
                        tabIndex={1}
                        onChange={(event) => handleUpdatePerods(event, index)}
                      />
                      <label htmlFor="school-name">
                        <p>
                          {periodState.length > 0 &&
                          singlePeriod.periodTypeName !== "Custom"
                            ? singlePeriod.periodTypeName
                                .charAt(0)
                                .toUpperCase() +
                              singlePeriod.periodTypeName.slice(1) +
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
                      {/* {console.log("hey: "+ typeof parse(singlePeriod.periodStartDate, "yyyy-MM-dd'T'HH:mm:ss.SSSX", new Date()) )} */}
                      <DatePicker
                        className="pointer"
                        // value = {parse(singlePeriod.periodStartDate, "yyyy-MM-dd'T'HH:mm:ss.SSSX", new Date())}
                        selected={parse(
                          singlePeriod.periodStartDate,
                          "yyyy-MM-dd'T'HH:mm:ss.SSSX",
                          new Date()
                        )}
                        // value={singlePeriod.periodStartDate}
                        // selected={singlePeriod.periodStartDate}
                        onChange={(date) =>
                          handleAnnualPeriodDuration(
                            {
                              target: {
                                value: date,
                                name: "periodDetails",
                                id: "periodStartDate",
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
                      />
                      <label htmlFor="periodStartDate">
                        {" "}
                        <p>Start Date</p>
                      </label>
                    </div>
                  </div>
                  <div className="input__group flex-c m20">
                    <div className="input__group flex-cr inputs input--small">
                      <DatePicker
                        className="pointer"
                        // value={singlePeriod.periodEndDate}
                        // value = {parse('2020-02-24T10:34:02.998Z', "yyyy-MM-dd'T'HH:mm:ss.SSSX", new Date())}
                        // value = {parse(singlePeriod.periodEndDate, "yyyy-MM-dd'T'HH:mm:ss.SSSX", new Date())}
                        selected={parse(
                          singlePeriod.periodEndDate,
                          "yyyy-MM-dd'T'HH:mm:ss.SSSX",
                          new Date()
                        )}
                        // selected={singlePeriod.periodEndDate}
                        onChange={(date) =>
                          handleAnnualPeriodDuration(
                            {
                              target: {
                                value: date,
                                name: "periodDetails",
                                id: "periodEndDate",
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
                      />
                      <label htmlFor="periodEndDate">
                        {" "}
                        <p>End Date</p>
                      </label>
                    </div>
                  </div>
                  <div className="remove-periods-icon flex-c">
                    {periodState.length > 1 ? (
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
              {periodState.length > 0 && periodState.length < 20 ? (
                <AddMoreButton
                  label={
                    periodState[periodState.length - 1].periodTypeName ===
                    "Custom"
                      ? "Add One More "
                      : "Add One More " +
                        periodState[periodState.length - 1].periodTypeName
                  }
                  handleLinks={handleNewPeriods}
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
