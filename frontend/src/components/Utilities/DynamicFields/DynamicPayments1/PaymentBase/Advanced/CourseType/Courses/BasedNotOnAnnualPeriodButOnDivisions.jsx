import AddMoreButton from "../../../../Utilities/AddMoreButton";
import HideOrshow from "../../../../../../Buttons/hideOrshow";
import RemoveLinksButton from "../../../../../../Buttons/RemoveLinksButton";
import { useSelector } from "react-redux";

const BasedNotOnAnnualPeriodButOnDivisions = ({
  index,
  handleAdvancePaymentBaseCourseNameValues,
  handleShowHideCourses,
  handleRemoveCourses,
  handleNewCoursesForAdvancedPaymentBase,
  handleNothing,
}) => {
  const paymentState = useSelector((state) => state.payments.paymentState);
  const topLevelPeriod = useSelector((state) => state.periods.topLevelPeriod);
  return (
    <>

      {
        /* First check of major educational division is checked */
        paymentState[index].paymentBase.advancedEducationalDivisionCheckbox && 
        paymentState[index].paymentBase.courseBasedPayment.value &&
          paymentState[index].paymentBase.courseBasedPayment.visible &&
          // Divisions are departments
          paymentState[index].paymentBase.courseBasedPayment.divisions.map(
            (division, divisionIndex) => (
              <div className="field-subgroup-containers">
                <section className="flex-ccc">
                  <div>
                    <div className="flex gapfull">
                      <label className="mt-p5">{division.divisionName}</label>
                    </div>
                    <div className="flex-ccc mt-1">
                      <div className={"flex-c -mt-1p5"}>
                        {/* subdivisions are Years */}
                        {
                          paymentState[index].paymentBase
                            .advancedEducationalDivisionCheckbox
                        }
                        {division.educationalSubDivision.map(
                          (subDivision, subDivisionIndex) => (
                            <div key={subDivisionIndex} className={"mt-1"}>
                              <div className="flex-ccc">
                                {/* MAP FOR YEARS / GRADE LEVELS */}
                                {subDivision.subPeriods.map(
                                  (subPeriod, subPeriodIndex) => (
                                    <div className="field-subgroup-containers">
                                      <section>
                                        {/* MAP FOR SEMESTERS */}
                                        <div className="flex gapfull mt-p5 mb-p5">
                                          <label htmlFor="">
                                            {division.divisionName}
                                          </label>
                                          <div className="flex-cs">
                                            <label>
                                              {subDivision.subDivisionName}
                                            </label>
                                            &nbsp; &nbsp; &nbsp;
                                            <label
                                              htmlFor={"courseName" + index}
                                              className="pl-1"
                                            >
                                              {subPeriod.periodName}
                                            </label>
                                          </div>
                                        </div>
                                        {subPeriod.visible ? (
                                          subPeriod.courses.map(
                                            (course, courseIndex) => (
                                              <div className="flex inputs ">
                                                <>
                                                  <div className="flex-c flex-start">
                                                    <div className="flex gapp5">
                                                      {/* <div className="flex-cs gapp5 input--above-small2 "> */}
                                                      <div className="flex-cs gapp5 input--medium ">
                                                        <input
                                                          type="text"
                                                          id={
                                                            "courseName" + index
                                                          }
                                                          name={"courseName"}
                                                          placeholder="Course Name"
                                                          value={
                                                            course.courseName
                                                          }
                                                          onChange={(event) =>
                                                            handleAdvancePaymentBaseCourseNameValues(
                                                              event,
                                                              index,
                                                              divisionIndex,
                                                              subDivisionIndex,
                                                              subPeriodIndex,
                                                              courseIndex
                                                            )
                                                          }
                                                          tabIndex={9}
                                                        />
                                                      </div>
                                                      <div className="flex-cs input--xsmall ">
                                                        {paymentState[index]
                                                          .paymentBase
                                                          .advancedCourseUnitsCheckbox ? (
                                                          <>
                                                            <input
                                                              type="text"
                                                              id={
                                                                "creditHour" +
                                                                index
                                                              }
                                                              name={
                                                                "courseCreditHour"
                                                              }
                                                              placeholder={
                                                                paymentState[
                                                                  index
                                                                ].paymentBase.advancedCourseUnitType.charAt(
                                                                  1
                                                                ) === "r"
                                                                  ? "Cr Hr."
                                                                  : "Contact Hr."
                                                              }
                                                              // placeholder="Cr Hr."
                                                              value={
                                                                course.creditHours
                                                              }
                                                              onChange={(
                                                                event
                                                              ) =>
                                                                handleAdvancePaymentBaseCourseNameValues(
                                                                  event,
                                                                  index,
                                                                  divisionIndex,
                                                                  subDivisionIndex,
                                                                  subPeriodIndex,
                                                                  courseIndex
                                                                )
                                                              }
                                                              tabIndex={9}
                                                            />
                                                          </>
                                                        ) : (
                                                          <></>
                                                        )}

                                                        {subPeriod.courses
                                                          .length > 1 ? (
                                                          <RemoveLinksButton
                                                            remove={
                                                              handleRemoveCourses
                                                            }
                                                            index={index}
                                                            subIndex={
                                                              divisionIndex
                                                            }
                                                            subSubIndex={
                                                              subDivisionIndex
                                                            }
                                                            subSubSubIndex={
                                                              subPeriodIndex
                                                            }
                                                            subSubSubSubIndex={
                                                              courseIndex
                                                            }
                                                          />
                                                        ) : (
                                                          <div className="space-for-remove-small"></div>
                                                        )}
                                                      </div>
                                                    </div>
                                                  </div>
                                                </>
                                              </div>
                                            )
                                          )
                                        ) : (
                                          <></>
                                        )}
                                        <div className="flex-start">
                                          <div className="flex  -ml-p5 gapfull">
                                            {subPeriod.visible ? (
                                              <label className="flex">
                                                <AddMoreButton
                                                  index={index}
                                                  subIndex={divisionIndex}
                                                  subSubIndex={subDivisionIndex}
                                                  subSubSubIndex={
                                                    subPeriodIndex
                                                  }
                                                  handleLinks={
                                                    paymentState[index]
                                                      .paymentBase
                                                      .courseBasedPayment
                                                      .display
                                                      ? handleNewCoursesForAdvancedPaymentBase
                                                      : handleNothing
                                                  }
                                                />
                                                <>
                                                  <span className="-ml-1">
                                                    &nbsp;&nbsp;{" "}
                                                    <p>Add Course</p>
                                                  </span>
                                                </>
                                              </label>
                                            ) : (
                                              <>
                                                <label
                                                  htmlFor=""
                                                  className="mt-3 ml-1"
                                                >
                                                  Hidden
                                                </label>
                                              </>
                                            )}
                                            <div
                                              className="flex"
                                              onClick={() =>
                                                handleShowHideCourses(
                                                  index,
                                                  divisionIndex,
                                                  subDivisionIndex,
                                                  subPeriodIndex
                                                )
                                              }
                                            >
                                              <div className="space-for-remove"></div>
                                              <div
                                                className={
                                                  !subPeriod.visible
                                                    ? " mt-2p5"
                                                    : ""
                                                }
                                              >
                                                <HideOrshow
                                                  toogleValue={
                                                    subPeriod.visible
                                                  }
                                                />
                                              </div>
                                              &nbsp;
                                              <label
                                                className={
                                                  subPeriod.visible
                                                    ? "input-group mt-p4 "
                                                    : "input-group mt-3 "
                                                }
                                              >
                                                &nbsp;
                                                {subPeriod.visible
                                                  ? "Hide Courses"
                                                  : "Show Courses"}
                                              </label>
                                            </div>
                                          </div>
                                        </div>
                                      </section>
                                    </div>
                                  )
                                )}
                                &nbsp;
                              </div>
                            </div>
                          )
                        )}
                      </div>
                    </div>
                  </div>
                  <label htmlFor="">&nbsp;</label>
                </section>
              </div>
            )
          )
      }
    </>
  );
};

export default BasedNotOnAnnualPeriodButOnDivisions;
