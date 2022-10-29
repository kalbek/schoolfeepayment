import { useSelector } from "react-redux";
const CourseUnits = ({
  handleAdvancedPaymentBaseCourseUnitsCheckboxSelection,
  handleAdvancedPaymentBaseCourseUnitsTypeRadioSelection,
  index,
}) => {
  const periodState = useSelector((state) => state.periods.topLevelPeriod);
  const paymentState = useSelector((state) => state.payments.paymentState);
  return (
    <>
      <div className="flex-cs mtn5">
        <label
          className="flex flex-cs -mb-p5aa"
          htmlFor={"advancedCourseUnits" + index} 
        >
          <input
            type="checkbox"
            name="periodPaymentBase"
            tabIndex={9}
            id={"advancedCourseUnits" + index}
            value={paymentState[index].paymentBase.advancedCourseUnitsCheckbox}
            checked={
              paymentState[index].paymentBase.advancedCourseUnitsCheckbox
            }
            onChange={(event) =>
              handleAdvancedPaymentBaseCourseUnitsCheckboxSelection(
                event,
                index
              )
            }
          />
          <>
            <span>
              &nbsp; <p>Course Units</p>
            </span>
          </>
        </label>
        <></>
      </div>
      {/* TOP LEVEL PERIOD */}
      <div className="ml-1">
        {/* {periodState[index].value && ( */}
        {true && (
          <div className="flex-cs mtn5">
            <label
              className="checkbox-items flex flex-cs -mb-p5"
              // htmlFor={"standard" + index}
            >
              <input
                type="radio"
                id={"credithour" + index}
                checked={
                  paymentState[index].paymentBase.advancedCourseUnitType ===
                  "credithour" + index
                }
                onChange={(event) =>
                  handleAdvancedPaymentBaseCourseUnitsTypeRadioSelection(
                    event,
                    index
                  )
                }
                tabIndex={9}
              />
              <span>
                &nbsp; <p>Credit Hours</p>
              </span>
            </label>
            <></>
          </div>
        )}
        {/* TOP LEVEL SUBPERIOD */}
        <div className="flex-cs -mt-1">
          {/* TOP LEVEL PERIOD */}
          <label
            className="checkbox-items flex flex-cs"
            // htmlFor={"advanced" + index}
          >
            <input
              type="radio"
              id={"contacthour" + index}
              checked={
                paymentState[index].paymentBase.advancedCourseUnitType ===
                "contacthour" + index
              }
              onChange={(event) =>
                handleAdvancedPaymentBaseCourseUnitsTypeRadioSelection(
                  event,
                  index
                )
              }
              tabIndex={9}
            />
            <span>
              &nbsp; <p>Contact Hours</p>
            </span>
          </label>
        </div>
      </div>
    </>
  );
};

export default CourseUnits;
