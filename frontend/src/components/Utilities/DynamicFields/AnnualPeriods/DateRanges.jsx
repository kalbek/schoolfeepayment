import { useSelector } from "react-redux";
import DatePicker from "react-datepicker";
import RemoveButton from "../../Buttons/RemoveButton";
import "react-datepicker/dist/react-datepicker.css";
import { parse } from "date-fns";

const DateRanges = ({
  handleUpdateSubperiods,
  handleAnnualPeriodDuration,
  removeSubperiods,
  index,
}) => {
  const periodState = useSelector((state) => state.periods.topLevelPeriod);
  // console.log(periodState[index])
  return (
    <>
      {periodState[index].subPeriods.map((subPeriod, subPeriodIndex) => (
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
                    periodState[index].subperiodTypeName !== ""
                      ? "e.g. " +
                        periodState[index].subperiodTypeName
                          .charAt(0)
                          .toUpperCase() +
                        periodState[index].subperiodTypeName.slice(1) +
                        " " +
                        parseInt(subPeriod.id + 1)
                      : "Custom Subperiods"
                  }
                  tabIndex={1}
                  onChange={(event) =>
                    handleUpdateSubperiods(event, index, subPeriodIndex)
                  }
                />
                <label htmlFor="periodDescription">
                  <p>
                    {periodState[index].subperiodTypeName
                      .charAt(0)
                      .toUpperCase() +
                      periodState[index].subperiodTypeName.slice(1)}
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
                          name: "periodDates",
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
                          name: "periodDates",
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
            {periodState[index].subPeriods.length > 1 ? (
              <div className="remove-periods-icon flex-c">
                <RemoveButton
                  removables={removeSubperiods}
                  index={index}
                  subIndex={subPeriodIndex}
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
