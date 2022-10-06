import RemoveButton from "../../Buttons/RemoveButton";
import RemoveLinksButton from "../../Buttons/RemoveLinksButton";
import AddMoreButton from "../../Buttons/AddMoreButton";
import { useSelector } from "react-redux";
const TopLevelAnnualPeriods = ({ removePeriods, handleUpdatePerods }) => {
  const periodState = useSelector((state) => state.periods.annualPeriodState);
  return (
    <>
      <div className="flex-left">
        <div className="checkbox-inputs input__group field-group-container">
          <section className="flex-left">
            <label htmlFor="">
              <h3>Top-level Annual Period</h3>
            </label>
            <div className="flex-cs">{/* School Shifts */}</div>
            <div className="flex-cs checkbox-group">
              {/* Radio buttons for semesters */}
              <label className="checkbox-items flex flex-cs" id={"Semester"}>
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
              <label className="checkbox-items flex flex-cs" id={"Quarter"}>
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
                  id="Custom Period"
                  value={
                    periodState[periodState.length - 1].periodTypeName ===
                    "Custom_Period"
                  }
                  checked={
                    periodState[periodState.length - 1].periodTypeName ===
                    "Custom Period"
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
      </div>
    </>
  );
};

export default TopLevelAnnualPeriods;
