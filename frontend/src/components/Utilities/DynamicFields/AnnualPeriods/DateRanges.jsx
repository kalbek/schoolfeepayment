import { useSelector } from "react-redux";
import DatePicker from "react-datepicker";
import RemoveButton from "../../Buttons/RemoveButton";
import "react-datepicker/dist/react-datepicker.css";
import { parse } from "date-fns";

const DateRanges = ({
  handleUpdatePerods,
  handleAnnualPeriodDuration,
  removePeriods,
  index,
}) => {
  const topLevelPeirod = useSelector((state) => state.periods.topLevelPeriod);

  return (
    <>
      {topLevelPeirod[0].subPeriods.map((subPeriod, subPeriodIndex) => (
        <div
          key={subPeriodIndex}
          className="flex-c dynamic-periods-container pl1"
        >
          <div className="flex-start ">
            <div className="input__group flex-c m20">
              <div className="flex-cr inputs input--medium">
                <input
                  // className={formData.schoolName ? " filled--input" : ""}
                  type="text"
                  value={subPeriod.periodName}
                  name="periodDetails"
                  id="periodDescription"
                  placeholder={
                    subPeriod.periodTypeName !== "Other"
                      ? "e.g. " +
                        subPeriod.periodTypeName.charAt(0).toUpperCase() +
                        subPeriod.periodTypeName.slice(1) +
                        " " +
                        parseInt(subPeriod.id + 1)
                      : "Your School's Period Name"
                  }
                  tabIndex={1}
                  onChange={(event) =>
                    handleUpdatePerods(event, index, subPeriodIndex)
                  }
                />
                <label htmlFor="periodDescription">
                  <p>
                    {topLevelPeirod.length > 0 &&
                    subPeriod.periodTypeName !== "Custom"
                      ? subPeriod.periodTypeName.charAt(0).toUpperCase() +
                        subPeriod.periodTypeName.slice(1) +
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
                    subPeriod.periodStartDate,
                    "yyyy-MM-dd'T'HH:mm:ss.SSSX",
                    new Date()
                  )}
                  value={subPeriod.periodStartDate.substring(0, 10)}
                  onChange={(date) =>
                    handleAnnualPeriodDuration(
                      {
                        target: {
                          value: date,
                          name: "periodDetails",
                          id: "periodStartDate",
                        },
                      },
                      index,
                      subPeriodIndex
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
                    subPeriod.periodEndDate,
                    "yyyy-MM-dd'T'HH:mm:ss.SSSX",
                    new Date()
                  )}
                  value={subPeriod.periodEndDate.substring(0, 10)}
                  onChange={(date) =>
                    handleAnnualPeriodDuration(
                      {
                        target: {
                          value: date,
                          name: "periodDetails",
                          id: "periodEndDate",
                        },
                      },
                      index,
                      subPeriodIndex
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
                  <p>End Date &nbsp;&nbsp;&nbsp; [yyyy-mm-dd]</p>
                </label>
              </div>
            </div>
            {topLevelPeirod[0].subPeriods.length > 1 ? (
              <div className="remove-periods-icon flex-c">
                <RemoveButton
                  removables={removePeriods}
                  index={subPeriodIndex}
                />
              </div>
            ) : (
              <>
                <div className="space-for-remove"></div>
              </>
            )}
          </div>
        </div>
      ))}
    </>
  );
};

export default DateRanges;
