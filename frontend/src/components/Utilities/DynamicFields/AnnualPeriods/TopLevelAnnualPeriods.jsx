import { useSelector } from "react-redux";
const TopLevelAnnualPeriods = ({
  handleTopLevelPeriodUpdate,
  handleUpdateCustomTopPeriod,
  index,
}) => {
  const periodState = useSelector((state) => state.periods.topLevelPeriod);
  const periodTypeName = periodState[index].periodTypeName;
  return (
    <>
      <div className="flex-left">
        <div className="checkbox-inputs input__group field-group-container">
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

                  {/* <div className="ml-1p5"></div> */}
                  {periodTypeName !== "Quarter" &&
                    periodTypeName !== "Semester" &&
                    periodTypeName !== "Term" && (
                      <div className="-mt-1 ml-2 pr-7">
                        <div className="flex-cr inputs input--medium ">
                          <input
                            type="text"
                            value={periodTypeName}
                            name="periodDetails"
                            id="periodDescription"
                            placeholder={
                              periodState[0].value
                                ? "Custom top-level period name"
                                : ""
                            }
                            tabIndex={1}
                            onChange={(event) =>
                              handleUpdateCustomTopPeriod(event, index)
                            }
                          />
                          <br />
                        </div>
                      </div>
                    )}
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
