import { useSelector } from "react-redux";
const TopLevelAnnualPeriods = ({ handleTopLevelPeriodUpdate, index }) => {
  const periodState = useSelector((state) => state.periods.topLevelPeriod);
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
                <label
                  className="checkbox-items flex flex-cs"
                  id={"TopQuarter"}
                >
                  <input
                    className="form-radio-button"
                    type="radio"
                    name="topLevelPeriodRadio"
                    id="TopQuarter"
                    checked={periodState[index].periodTypeName === "TopQuarter"}
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
                <label className="checkbox-items flex flex-cs" id={"TopTerm"}>
                  <input
                    className="form-radio-button"
                    type="radio"
                    name="topLevelPeriodRadio"
                    id="TopTerm"
                    checked={periodState[index].periodTypeName === "TopTerm"}
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
                  id={"TopSemester"}
                >
                  <input
                    type="radio"
                    name="topLevelPeriodRadio"
                    id={"TopSemester"}
                    checked={
                      periodState[index].periodTypeName === "TopSemester"
                    }
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
                <>
                  <label
                    className="checkbox-items flex flex-cs"
                    id={"TopCustom Period"}
                  >
                    <input
                      className="form-radio-button"
                      type="radio"
                      name="topLevelPeriodRadio"
                      value={periodState[index].periodTypeName}
                      id="TopCustom Period"
                      checked={
                        periodState[index].periodTypeName ===
                        "TopCustom Period"
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

                  {/* <div className="ml-1p5"></div> */}
                  {periodState[index].periodTypeName === "TopCustom Period" && (
                    <div className="-mt-1p5 ml-1 pr-8">
                      <div className="flex-cr inputs input--medium ">
                        <input
                          type="text"
                          name="topLevelPeriodText"
                          // value={subPeriod.periodName}
                          id="periodDescription"
                          placeholder="Custom Period Name"
                          tabIndex={1}
                          // onChange={(event) =>
                          //   handleUpdateCustomTopPerod(event)
                          // }
                        />
                        <br />
                      </div>
                    </div>
                  )}
                </>

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
