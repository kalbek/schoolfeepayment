import { useSelector } from "react-redux";
import DeleteButton from "../../Buttons/DeleteButton";
const TopLevelAnnualPeriods = ({
  handleTopLevelPeriodUpdate,
  hadleTopLevelPeriodName, 
  handleTopLevelPeriodValue,
  removeToplevelPeriod,
  index,
}) => {
  const periodState = useSelector((state) => state.periods.topLevelPeriod);
  const periodTypeName = periodState[index].periodTypeName;
  const periodName = periodState[index].periodName;

  return (
    <>
      <div className="flex-left">
        <div className="checkbox-inputs input__group field-group-container">
          <div className="ml-100 pointer">
            {periodState.length > 1 && (
              <DeleteButton deleteAction={removeToplevelPeriod} index={index} />
            )}
          </div>
          <section className="flex-left">
            <label htmlFor="">
              <h3>Top-level Annual Period</h3>
            </label>
            <div className="flex-cs">{/* School Shifts */}</div>
            <div className="flex-ccc gapfull">
              <div className="flex-cs checkbox-group">
                {/* Radio buttons for quarters */}
                <div className="flex-cs flex-start">
                  <div className="flex-cs checkbox-group">
                    <label
                      className="checkbox-items flex flex-cs"
                      id={"Quarter"}
                    >
                      <input
                        className="form-radio-button"
                        type="radio"
                        id="Quarter"
                        checked={periodTypeName === "Quarter"}
                        onChange={(event) =>
                          handleTopLevelPeriodUpdate(event, index)
                        }
                        tabIndex={9}
                      />
                      <span>
                        &nbsp; <p>Quarters</p>
                      </span>
                    </label>
                    {/* Radio buttons for terms */}
                    <label className="checkbox-items flex flex-cs" id={"Term"}>
                      <input
                        className="form-radio-button"
                        type="radio"
                        id="Term"
                        checked={periodTypeName === "Term"}
                        onChange={(event) =>
                          handleTopLevelPeriodUpdate(event, index)
                        }
                        tabIndex={10}
                      />
                      <span>
                        &nbsp; <p>Terms</p>
                      </span>
                    </label>
                    {/* Radio buttons for semesters */}
                    <label
                      className="checkbox-items flex flex-cs"
                      id={"Semester"}
                    >
                      <input
                        type="radio"
                        id={"Semester"}
                        checked={periodTypeName === "Semester"}
                        onChange={(event) =>
                          handleTopLevelPeriodUpdate(event, index)
                        }
                        tabIndex={9}
                      />
                      <span>
                        &nbsp; <p>Semesters</p>
                      </span>
                    </label>

                    {/* Radio buttons for other periods */}
                    <label
                      className="checkbox-items flex flex-cs"
                      id={"Custom Period"}
                    >
                      <input
                        className="form-radio-button"
                        type="radio"
                        id="Custom Period"
                        checked={
                          periodTypeName !== "Quarter" &&
                          periodTypeName !== "Semester" &&
                          periodTypeName !== "Term"
                        }
                        onChange={(event) =>
                          handleTopLevelPeriodUpdate(event, index)
                        }
                        tabIndex={9}
                      />
                      <span>
                        &nbsp; <p>Custom &nbsp; &nbsp; </p>
                      </span>
                    </label>
                  </div>

                  {
                    <div className="-mt-1 ml-2 pr-7">
                      <div className="flex-cr inputs input--medium ">
                        <input
                          type="text"
                          value={periodState[index].periodName}
                          name="periodDetails"
                          id="periodDescription"
                          placeholder={
                            periodTypeName === "Quarter"
                                ? "Quarter Name"
                              : periodTypeName === "Semester"
                              ? "Semester Name"
                              : periodTypeName === "Term"
                              ? "Term Name"
                              : periodTypeName === "Custom"
                              ? "Custom Period Name"
                              : ""
                          }
                          tabIndex={1}
                          onChange={(event) =>
                            hadleTopLevelPeriodName(event, index)
                          }
                        />
                        <br />
                      </div>
                    </div>
                  }
                </div>
                {/* Input box for custom  */}
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default TopLevelAnnualPeriods;
