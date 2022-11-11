import { useSelector } from "react-redux";
const CourseUnits = ({
  handleAdvancedPaymentBaseCourseUnitsCheckboxSelection,
  handleAdvancedPaymentBaseCourseUnitsTypeRadioSelection,
  index,
}) => {
  const paymentState = useSelector((state) => state.payments.paymentState);
  return (
    <>
      <div className="field-subgroup-container">
        <div className="flex-cs  flex-start">
          <label className="flex " htmlFor={"advancedCourseUnits" + index}>
            <input
              type="checkbox"
              name="periodPaymentBase"
              tabIndex={9}
              id={"advancedCourseUnits" + index}
              value={
                paymentState[index].paymentBase.advancedCourseUnitsCheckbox
              }
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
        <div className=" -mt-1">
          {/* {periodState[index].value && ( */}
          {true && (
            <div className="flex-cs ">
              <label
                className="checkbox-items flex flex-cs -mb-p5aa"
                // htmlFor={"standard" + index}
              >
                <input
                  type="radio"
                  id={"credithour" + index}
                  disabled={
                    !paymentState[index].paymentBase.advancedCourseUnitsCheckbox
                  }
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
                <span
                  className={
                    !paymentState[index].paymentBase.advancedCourseUnitsCheckbox
                      ? "inactive-label"
                      : ""
                  }
                >
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
                disabled={
                  !paymentState[index].paymentBase.advancedCourseUnitsCheckbox
                }
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
              <span
                className={
                  !paymentState[index].paymentBase.advancedCourseUnitsCheckbox
                    ? "inactive-label"
                    : ""
                }
              >
                &nbsp; <p>Contact Hours</p>
              </span>
            </label>
          </div>
        </div>
      </div>
    </>
  );
};

export default CourseUnits;
