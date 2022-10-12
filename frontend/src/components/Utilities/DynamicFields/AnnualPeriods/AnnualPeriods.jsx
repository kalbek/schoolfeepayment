import { useSelector } from "react-redux";
const AnnualPeriods = ({ handleUpdateSubperiods, index }) => {
  const topLevelPeirod = useSelector((state) => state.periods.topLevelPeriod);
  const subperiod = topLevelPeirod[index].subPeriods[0];
  // const subperiod =
  //   topLevelPeirod[index].subPeriods[
  //     topLevelPeirod[index].subPeriods.length - 1
  //   ];
  const periodState = useSelector((state) => state.periods.topLevelPeriod);

  return (
    <>
      <div className="flex-left">
        <div className="checkbox-inputs input__group field-group-container">
          <section className="flex-left">
            <label htmlFor="">
              {topLevelPeirod[0].value ? (
                <h3>Sub Periods</h3>
              ) : (
                <h3>Annual Periods</h3>
              )}
            </label>
            <div className="flex-cs">{/* School Shifts */}</div>
            <div className="flex-cs checkbox-group">
              {/* Radio buttons for quarters */}
              <div className="flex-c flex-start">
                <div className="flex-cs checkbox-group">
                  <label className="checkbox-items flex flex-cs" id={"Quarter"}>
                    <input
                      className="form-radio-button"
                      type="radio"
                      id="Quarter"
                      checked={
                        periodState[index].subperiodTypeName === "Quarter"
                      }
                      onChange={(event) => handleUpdateSubperiods(event, index)}
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
                      checked={periodState[index].subperiodTypeName === "Term"}
                      onChange={(event) => handleUpdateSubperiods(event, index)}
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
                      id={"Semester"}
                      checked={
                        periodState[index].subperiodTypeName === "Semester"
                      }
                      onChange={(event) => handleUpdateSubperiods(event, index)}
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
                        periodState[index].subperiodTypeName === "Custom Period"
                      }
                      onChange={(event) => handleUpdateSubperiods(event, index)}
                      tabIndex={9}
                    />
                    <span>
                      &nbsp; <p>Custom &nbsp; &nbsp; </p>
                    </span>
                  </label>
                </div>

                {/* <div className="ml-1p5"></div> */}
                {periodState[index].subperiodTypeName === "Custom Period" && (
                  <div className="-mt-1p5 pb-p5">
                    <div className="flex-cr inputs input--medium ">
                      <input
                        type="text"
                        // value={subPeriod.periodName}
                        name="periodDetails"
                        id="periodDescription"
                        placeholder="Custom Subperiod Name"
                        tabIndex={1}
                        // onChange={(event) =>
                        //   handleUpdateCustomTopPerod(event)
                        // }
                      />
                      <br />
                    </div>
                  </div>
                )}
              </div>
              {/* Input box for custom  */}
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default AnnualPeriods;
