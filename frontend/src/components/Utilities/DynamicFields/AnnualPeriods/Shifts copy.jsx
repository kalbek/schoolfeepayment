import { useSelector } from "react-redux";
const ShiftsCopy = ({ handlePeriodShifts, index }) => {
  const periodState = useSelector((state) => state.periods.topLevelPeriod);
  return (
    <>
      <div className="checkbox-inputs input__group field-group-container">
        {/* {console.log(index + ": " + periodState[index].hasRegularShift)} */}
        <section className="flex-left">
          <label htmlFor="">
            <h3>Shifts</h3>
          </label>
          {console.log(
            "periodState[index].hasRegularShift: " +
              index +
              ": " +
              periodState[index].hasRegularShift
          )}
          {console.log("heres: " + index)}
          {index}
          <div className="flex-cs checkbox-group">
            {/* Checkbox for period based payment */}
            <label
              className="checkbox-items flex flex-cs"
              htmlFor={"regularShift"}
            >
              <input
                type="checkbox"
                name="periodShift"
                id={"regularShift"}
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
              htmlFor={"extensionShift"}
            >
              <input
                type="checkbox"
                name="periodShift"
                id={"extensionShift"}
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
              htmlFor={"weekendShift"}
              className="checkbox-items flex flex-cs"
            >
              <input
                type="checkbox"
                name="periodShift"
                id={"weekendShift"}
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
              htmlFor={"customShift"}
            >
              <input
                type="checkbox"
                name="periodShift"
                id={"customShift"}
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
        </section>
      </div>
    </>
  );
};

export default ShiftsCopy;
