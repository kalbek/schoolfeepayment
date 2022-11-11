import AddMoreButton from "../../../../Utilities/AddMoreButton";
import HideOrshow from "../../../../../../Buttons/hideOrshow";
import RemoveLinksButton from "../../../../../../Buttons/RemoveLinksButton";
import { useSelector } from "react-redux";

const BasedNotOnAnnualPeriodNotONDivisions = ({
  index,
  handleCourseOnlyBasedPaymentsValues,
  addCoursesToCourseOnlyBasedPaymentBases,
  handleShowHideCoursesForCourseOnlyBasedBases,
  removeCoursesToCourseOnlyBasedPaymentBases,
}) => {
  const paymentState = useSelector((state) => state.payments.paymentState);
  const crHr =
    paymentState[index].paymentBase.advancedCourseUnitType.charAt(1) === "r";
  const hasCourseUnit =
    paymentState[index].paymentBase.advancedCourseUnitsCheckbox;
  const courseBasedPayment = paymentState[index].paymentBase.courseBasedPayment;
  return (
    <>
      {/* Mapping with divisions (e.g. Departments) */}
      <div className="flex-c mt-1    flex-start">
        <label>Courses</label>
      </div>
      {courseBasedPayment.visible ? (
        paymentState[index].paymentBase.courseBasedPayment.courses.map(
          (course, courseIndex) => (
            <div key={courseIndex}>
              <div className="flex-c -mb-1  flex-start inputs field-subgroup-containers">
                <div>
                  <div>
                    <>
                      <div className="flex-c ">
                        <div>
                          <div className="flex gapp5">
                            <div
                              className={
                                hasCourseUnit
                                  ? "flex-cs gapp5 input--medium"
                                  : "flex-cs input--above-medium"
                              }
                            >
                              <input
                                type="text"
                                id={"courseName" + index}
                                name={"courseName"}
                                onChange={(event) =>
                                  handleCourseOnlyBasedPaymentsValues(
                                    event,
                                    index,
                                    courseIndex
                                  )
                                }
                                value={course.courseName}
                                placeholder="Course Name"
                                tabIndex={9}
                              />
                            </div>
                            <div className="flex-cs input--xsmall">
                              {hasCourseUnit ? (
                                <>
                                  <input
                                    type="text"
                                    id={"creditHour" + index}
                                    value={course.creditHours}
                                    onChange={(event) =>
                                      handleCourseOnlyBasedPaymentsValues(
                                        event,
                                        index,
                                        courseIndex
                                      )
                                    }
                                    placeholder={crHr ? "CrHr" : "ContactHr"}
                                    name={crHr ? "creditHour" : "ContactHr"}
                                    tabIndex={9}
                                  />
                                </>
                              ) : (
                                <></>
                              )}
                              {courseBasedPayment.courses.length > 1 ? (
                                <RemoveLinksButton
                                  index={index}
                                  subIndex={courseIndex}
                                  remove={
                                    removeCoursesToCourseOnlyBasedPaymentBases
                                  }
                                />
                              ) : (
                                <>
                                  <div className="space-for-remove-small"></div>
                                </>
                              )}
                            </div>
                          </div>
                        </div>
                      </div>
                    </>
                  </div>
                </div>
              </div>
              &nbsp;
            </div>
          )
        )
      ) : (
        <>
          <div
            onClick={() => handleShowHideCoursesForCourseOnlyBasedBases(index)}
            className="flex-c mb-1 -ml-3"
          >
            <label>Hidden</label>
          </div>
        </>
      )}
      <div className="flex-start">
        <div className="flex mt-p5  -ml-p5 gapfull">
          {courseBasedPayment.visible ? (
            <label className="flex">
              <AddMoreButton
                handleLinks={addCoursesToCourseOnlyBasedPaymentBases}
                index={index}
              />
              <>
                <span className="-ml-1">
                  &nbsp;&nbsp; <p>Add Course</p>
                </span>
              </>
            </label>
          ) : (
            <></>
          )}
          <div
            className="flex"
            onClick={() => handleShowHideCoursesForCourseOnlyBasedBases(index)}
          >
            <div className="space-for-remove"></div>
            <div>
              <HideOrshow toogleValue={courseBasedPayment.visible} />
            </div>
            &nbsp;
            <label
              className={true ? "input-group mt-p4 " : "input-group mt-3 "}
            >
              &nbsp;
              {courseBasedPayment.visible ? "Hide Courses" : "Show Courses"}
            </label>
          </div>
        </div>
      </div>
    </>
  );
};

export default BasedNotOnAnnualPeriodNotONDivisions;
