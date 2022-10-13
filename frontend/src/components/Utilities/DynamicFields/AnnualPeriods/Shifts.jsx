import { useSelector } from "react-redux";
const Shifts = ({ handlePeriodShifts, index }) => {
  const periodState = useSelector((state) => state.periods.topLevelPeriod);
  return (
    <>
      <div className="checkbox-inputs input__group field-group-container">
        {/* {console.log(index + ": " + periodState[index].hasRegularShift)} */}
        <section className="flex-left">
          <label htmlFor="">
            <h3>Shifts</h3>
          </label>
          <div className="flex-cs checkbox-group">
            {/* Radio buttons for quarters */}
            <div className="flex-c flex-start">
              <div className="flex-cs checkbox-group">
                {/* Checkbox for period based payment */}
                <label
                  className="checkbox-items flex flex-cs"
                  htmlFor={"regularShift" + index}
                >
                  <input
                    type="checkbox"
                    name="periodShift"
                    id={"regularShift" + index}
                    tabIndex={9}
                    // value={periodState[index].hasRegularShift}
                    checked={periodState[index].hasRegularShift}
                    onChange={(event) => handlePeriodShifts(event, index)}
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
                  htmlFor={"extensionShift" + index}
                >
                  <input
                    type="checkbox"
                    name="periodShift"
                    id={"extensionShift" + index}
                    // value={periodState[index].hasExtensionShift}
                    checked={periodState[index].hasExtensionShift}
                    onChange={(event) => handlePeriodShifts(event, index)}
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
                  htmlFor={"weekendShift" + index}
                  className="checkbox-items flex flex-cs"
                >
                  <input
                    type="checkbox"
                    name="periodShift"
                    id={"weekendShift" + index}
                    // value={periodState[index].hasWeekendShift}
                    checked={periodState[index].hasWeekendShift}
                    onChange={(event) => handlePeriodShifts(event, index)}
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
                  htmlFor={"customShift" + index}
                >
                  <input
                    type="checkbox"
                    name="periodShift"
                    id={"customShift" + index}
                    // value={periodState[index].hasCustomShift}
                    checked={periodState[index].hasCustomShift}
                    onChange={(event) => handlePeriodShifts(event, index)}
                    tabIndex={9}
                  />
                  <>
                    <span>
                      &nbsp; <p>Custom Shifts</p>
                    </span>
                  </>
                </label>
              </div>

              {/* <div className="ml-1p5"></div> */}
              {/* {periodState[index].subperiodTypeName === "Custom Period" && (
                <div className="-mt-1p5 pb-p5">
                  <div className="flex-cr inputs input--medium ">
                    <input
                      type="text"
                      value={subPeriod.periodName}
                      name="periodDetails"
                      id="periodDescription"
                      placeholder="Custom Subperiod Name"
                      tabIndex={1}
                      onChange={(event) =>
                        handleUpdateCustomTopPerod(event)
                      }
                    />
                    <br />
                  </div>
                </div>
              )} */}
            </div>
            {/* Input box for custom  */}
          </div>
        </section>
      </div>
    </>
  );
};

export default Shifts;
