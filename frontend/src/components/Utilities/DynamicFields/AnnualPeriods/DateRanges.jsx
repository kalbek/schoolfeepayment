import { useSelector } from "react-redux";
import DatePicker from "react-datepicker";
import RemoveButton from "../../Buttons/RemoveButton";
import "react-datepicker/dist/react-datepicker.css";
import { parse } from "date-fns";

const DateRanges = ({
  handleUpdatePerods,
  handleAnnualPeriodDuration,
  removePeriods,
}) => {
  const periodState = useSelector((state) => state.periods.annualPeriodState);
  return (
    <>
      {periodState.map((singlePeriod, index) => (
        <div key={index} className="flex-c dynamic-periods-container pl1">
          {/* INITIAL PERIOD INPUT GROUPS */}
          <>
            <div className="flex-start ">
              <div className="input__group flex-c m20">
                <div className="flex-cr inputs input--medium">
                  <input
                    // className={formData.schoolName ? " filled--input" : ""}
                    type="text"
                    value={singlePeriod.periodName}
                    name="periodDetails"
                    id="periodDescription"
                    placeholder={
                      singlePeriod.periodTypeName !== "Other"
                        ? "e.g. " +
                          singlePeriod.periodTypeName.charAt(0).toUpperCase() +
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
                        ? singlePeriod.periodTypeName.charAt(0).toUpperCase() +
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
                  <DatePicker
                    className="pointer"
                    selected={parse(
                      singlePeriod.periodStartDate,
                      "yyyy-MM-dd'T'HH:mm:ss.SSSX",
                      new Date()
                      )}
                      value={singlePeriod.periodStartDate.substring(0, 10)}
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
                    // showTimeSelect
                    showYearDropdown
                    scrollableMonthYearDropdown
                    dateFormat="Pp"
                    label="Due Date"
                  />
                  <label htmlFor="periodStartDate">
                    {" "}
                    <p>Start Date </p>
                  </label>
                </div>
              </div>
              <div className="input__group flex-c m20">
                <div className="input__group flex-cr inputs input--small">
                  <DatePicker
                    className="pointer"
                    selected={parse(
                      singlePeriod.periodEndDate,
                      "yyyy-MM-dd'T'HH:mm:ss.SSSX",
                      new Date()
                    )}
                    value={singlePeriod.periodEndDate.substring(0, 10)}
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
                    // showTimeSelect
                    showYearDropdown
                    scrollableMonthYearDropdown
                    dateFormat="Pp"
                    label="Due Date"
                  />
                  <label htmlFor="periodEndDate">
                    {" "}
                    <p>End Date &nbsp;&nbsp;&nbsp;  [yyyy-mm-dd]</p>
                  </label>
                </div>
              </div>
              <div className="remove-periods-icon flex-c">
                {periodState.length > 1 ? (
                  <>
                    <RemoveButton removables={removePeriods} index={index} />
                    {/* <RemoveButton removables={removePeriods} index={index} /> */}
                  </>
                ) : (
                  // <></>
                  <div className="space-for-remove"></div>
                )}
              </div>
            </div>
          </>
        </div>
      ))}
    </>
  );
};

export default DateRanges;
