import { useSelector } from "react-redux";
const Shifts = ({handleUpdatePerods}) => {
    const periodState = useSelector((state) => state.periods.annualPeriodState);
  return (
    <>
    <div className="checkbox-inputs input__group field-group-container">
                <section className="flex-left">
                  <label htmlFor="">
                    <h3>Shifts</h3>
                  </label>
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
                        value={
                          periodState[periodState.length - 1].hasRegularShift
                        }
                        checked={
                          periodState[periodState.length - 1].hasRegularShift
                        }
                        onChange={(event) => handleUpdatePerods(event)}
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
                        value={
                          periodState[periodState.length - 1].hasExtensionShift
                        }
                        checked={
                          periodState[periodState.length - 1].hasExtensionShift
                        }
                        onChange={(event) => handleUpdatePerods(event)}
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
                        value={
                          periodState[periodState.length - 1].hasWeekendShift
                        }
                        checked={
                          periodState[periodState.length - 1].hasWeekendShift
                        }
                        onChange={(event) => handleUpdatePerods(event)}
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
                        value={
                          periodState[periodState.length - 1].hasCustomShift
                        }
                        checked={
                          periodState[periodState.length - 1].hasCustomShift
                        }
                        onChange={(event) => handleUpdatePerods(event)}
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
  )
}

export default Shifts