import AddMoreButton from "../../../../Utilities/AddMoreButton";
import HideOrshow from "../../../../../../Buttons/hideOrshow";
import RemoveLinksButton from "../../../../../../Buttons/RemoveLinksButton";
import { useSelector } from "react-redux";

const BasedNotOnAnnualPeriodNotONDivisions = ({
  index,
  // handleAdvancePaymentBaseCourseNameValues,
  // handleShowHideCourses,
  // handleRemoveCourses,
  // handleNewCoursesForAdvancedPaymentBase,
  // handleNothing,
}) => {
  const paymentState = useSelector((state) => state.payments.paymentState);
  const topLevelPeriod = useSelector((state) => state.periods.topLevelPeriod);
  const crHr =
    paymentState[index].paymentBase.advancedCourseUnitType.charAt(1) === "r";
  const hasCourseUnit =
    paymentState[index].paymentBase.advancedCourseUnitsCheckbox;
  return (
    <>
      {/* Mapping with divisions (e.g. Departments) */}
      {paymentState[index].paymentBase.courseBasedPayment.courses.map(
        (course, courseIdx) => (
          <div key={courseIdx}>
            <div className="flex inputs field-subgroup-containers">
              <section>
                <div className="flex-cs mt-1 mb-1">
                  <div className="flex-c flex-start">
                    <label>Courses</label>
                  </div>
                  <div className="flex">
                    <div className="flex-c flex-start"></div>
                    <div className="space-for-remove-small"></div>
                  </div>
                </div>
                <div className="flex-c flex-end mb-1">
                  {/* Map with shifts */}
                  <div className="flex gapp5">
                    <>
                      <div className="flex-c flex-start">
                        <div className="flex">
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
                                placeholder="Course Name"
                                tabIndex={9}
                              />
                            </div>
                            <div className="flex-cs input--xsmall ">
                              {hasCourseUnit ? (
                                <>
                                  <input
                                    type="text"
                                    id={"creditHour" + index}
                                    placeholder={crHr ? "Cr.Hr" : "Contact Hr."}
                                    name={"courseCreditHour"}
                                    tabIndex={9}
                                  />
                                </>
                              ) : (
                                <></>
                              )}

                              <RemoveLinksButton />
                            </div>
                          </div>
                        </div>
                        <div className="flex-start">
                          <div className="flex  -ml-p5 gapfull">
                            {true ? (
                              <label className="flex">
                                <AddMoreButton
                                // index={index}
                                // subIndex={divisionIndex}
                                // subSubIndex={subDivisionIndex}
                                // subSubSubIndex={subPeriodIndex}
                                // handleLinks={
                                //   paymentState[index].paymentBase
                                //     .courseBasedPayment.display
                                //     ? handleNewCoursesForAdvancedPaymentBase
                                //     : handleNothing
                                // }
                                />
                                <>
                                  <span className="-ml-1">
                                    &nbsp;&nbsp; <p>Add Course</p>
                                  </span>
                                </>
                              </label>
                            ) : (
                              <>
                                <label htmlFor="" className="mt-3 ml-1">
                                  Hidden
                                </label>
                              </>
                            )}
                            <div
                              className="flex"
                              // onClick={() =>
                              //   handleShowHideCourses(
                              //     index,
                              //     divisionIndex,
                              //     subDivisionIndex,
                              //     subPeriodIndex
                              //   )
                              // }
                            >
                              <div className="space-for-remove"></div>
                              <div
                              // className={
                              //   !subPeriod.visible
                              //     ? " mt-2p5"
                              //     : ""
                              // }
                              >
                                <HideOrshow
                                // toogleValue={subPeriod.visible}
                                />
                              </div>
                              &nbsp;
                              <label
                                className={
                                  true
                                    ? "input-group mt-p4 "
                                    : "input-group mt-3 "
                                }
                              >
                                &nbsp;
                                {true ? "Hide Courses" : "Show Courses"}
                              </label>
                            </div>
                          </div>
                        </div>
                      </div>
                    </>
                  </div>
                </div>
              </section>
            </div>
            &nbsp;
            {/* dd */}
          </div>
        )
      )}
    </>
  );
};

export default BasedNotOnAnnualPeriodNotONDivisions;
