import { useSelector } from "react-redux";
const AnnualPeriods = ({ handleUpdatePerods }) => {
  const topLevelPeirod = useSelector((state) => state.periods.topLevelPeriod);
  const lastSubperiod =
    topLevelPeirod[topLevelPeirod.length - 1].subPeriods[
      topLevelPeirod[topLevelPeirod.length - 1].subPeriods.length - 1
    ];
  return (
    <>
      {/* {topLevelPeirod.map((subPeirod, index) => (
        <>hey</>
      ))} */}

      <div className="flex-left">
        <div className="checkbox-inputs input__group field-group-container">
          <section className="flex-left">
            <label htmlFor="">
              <h3>Annual Periods</h3>
            </label>
            <div className="flex-cs">{/* School Shifts */}</div>
            <div className="flex-cs checkbox-group">
              {/* Radio buttons for semesters */}
              <label className="checkbox-items flex flex-cs" id={"Semester"}>
                <input
                  type="radio"
                  name={"periodType"}
                  id={"Semester"}
                  value={lastSubperiod.periodTypeName === "Semester"}
                  checked={lastSubperiod.periodTypeName === "Semester"}
                  // checked={
                  //   topLevelPeirod[topLevelPeirod.length - 1].periodTypeName ===
                  //   "Semester"
                  // }
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
                  value={lastSubperiod.periodTypeName === "Term"}
                  checked={lastSubperiod.periodTypeName === "Term"}
                  onChange={(event) => handleUpdatePerods(event)}
                  tabIndex={9}
                />
                <span>
                  &nbsp; <p>Terms</p>
                </span>
              </label>
              {/* Radio buttons for quarters */}
              <label className="checkbox-items flex flex-cs" id={"Quarter"}>
                <input
                  className="form-radio-button"
                  type="radio"
                  name="periodType"
                  id="Quarter"
                  value={lastSubperiod.periodTypeName === "Quarter"}
                  checked={lastSubperiod.periodTypeName === "Quarter"}
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
                  id="Custom Period"
                  value={lastSubperiod.periodTypeName === "Custom_Period"}
                  checked={lastSubperiod.periodTypeName === "Custom Period"}
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
      </div>
    </>
  );
};

export default AnnualPeriods;
