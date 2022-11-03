import AddMoreButton from "../../../../Utilities/AddMoreButton";
import HideOrshow from "../../../../../../Buttons/hideOrshow";
import RemoveLinksButton from "../../../../../../Buttons/RemoveLinksButton";
import { useSelector } from "react-redux";

const BasedOnAnnualPeriodAndDivisionsCopy = ({
  index,
  // handleAdvancePaymentBaseCourseNameValues,
  // handleShowHideCourses,
  // handleRemoveCourses,
  // handleNewCoursesForAdvancedPaymentBase,
  // handleNothing,
}) => {
  const paymentState = useSelector((state) => state.payments.paymentState);
  const topLevelPeriod = useSelector((state) => state.periods.topLevelPeriod);
  return (
    <>
      {/* Mapping with divisions (e.g. Departments) */}
      {paymentState[index].paymentBase.courseBasedPayment.divisions.map(
        (topDivision, divisionIndex) => (
          <div className="field-subgroup-containers">
            <div className="flex-ccc">
              <div>
                {topDivision.map((division) => (
                  <div className="flex-ccc mt-1">
                    <div className={"flex-c -mt-1p5"}>
                      <div className="flex gapfull">
                        <label className="mt-p5">{division.divisionName}</label>
                      </div>
                      {/*Map with subdivisions (e.g. Years) */}
                      {division.educationalSubDivision.map(
                        (subDivision, subDivisionIndex) => (
                          <div className="field-subgroup-containers">
                            <section key={subDivisionIndex} className={"mt-1"}>
                              {/*  Year 1 */}
                              <label className="mt-p5">
                                {subDivision.subDivisionName}
                              </label>
                              <div className="flex-ccc">
                                {/* MAP FOR YEARS / GRADE LEVELS */}
                                {/* checking conditions for top-level or sub-level annual period */}
                                {/* if Annual period choice is top-level-period */}
                                {/* Map with Top-level period */}
                                {console.log(
                                  paymentState[
                                    index
                                  ].paymentBase.advancedAnnualPeriodType.charAt(
                                    0
                                  )
                                )}
                                {console.log(topLevelPeriod)}
                                {paymentState[
                                  index
                                ].paymentBase.advancedAnnualPeriodType.charAt(
                                  0
                                ) === "p" ? (
                                  topLevelPeriod.map((TLP, TLPIndex) => (
                                    <div className="">
                                      <label htmlFor="">{TLP.periodName}</label>
                                      <div>
                                        <div className="flex gapfull mt-p5 mb-p5">
                                          <div className="flex-cs">
                                            <label>
                                              {/* {subDivision.subDivisionName} */}
                                            </label>
                                            &nbsp; &nbsp; &nbsp;
                                            <label
                                              // htmlFor={"courseName" + index}
                                              className="pl-1"
                                            >
                                              {/* {subPeriod.periodName} */}
                                            </label>
                                          </div>
                                        </div>
                                        {TLP.subPeriods.map(
                                          (subPeriod, subPeriodIndex) => (
                                            <div className="flex inputs field-subgroup-containers">
                                              <section>
                                                <div className="flex-c flex-start">
                                                  <label>
                                                    {subPeriod.periodName}
                                                  </label>
                                                  {/* Map with shifts */}
                                                  {subPeriod.shifts.map(
                                                    (shift, shiftIndex) => (
                                                      // TODO CHECK IF SHIFT IS ONLY REGULAR OR NOT
                                                      <div className="flex gapp5">
                                                        <label>
                                                          {shift.shiftName}
                                                        </label>
                                                        {/* <div className="flex-cs gapp5 input--above-small2 "> */}
                                                        {/* Map with shifts courses */}
                                                        {shift.courses.map(
                                                          (course) => (
                                                            <>
                                                              <div className="flex-cs gapp5 input--medium ">
                                                                <input
                                                                  type="text"
                                                                  id={
                                                                    "courseName" +
                                                                    index
                                                                  }
                                                                  name={
                                                                    "courseName"
                                                                  }
                                                                  placeholder="Course Name"
                                                                  tabIndex={9}
                                                                />
                                                              </div>
                                                              <div className="flex-cs input--xsmall ">
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
                                                                    tabIndex={9}
                                                                  />
                                                                </>

                                                                <RemoveLinksButton />
                                                              </div>
                                                            </>
                                                          )
                                                        )}
                                                      </div>
                                                    )
                                                  )}
                                                </div>
                                              </section>
                                            </div>
                                          )
                                        )}
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
                                                  false
                                                    ? "input-group mt-p4 "
                                                    : "input-group mt-3 "
                                                }
                                              >
                                                &nbsp;
                                                {true
                                                  ? "Hide Courses"
                                                  : "Show Courses"}
                                              </label>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  ))
                                ) : (
                                  <>
                                    {/* Else if Annual period choice is sub-periods */}
                                  </>
                                )}
                                &nbsp;
                              </div>
                            </section>
                          </div>
                        )
                      )}
                    </div>
                  </div>
                ))}
              </div>
              <label htmlFor="">&nbsp;</label>
            </div>
          </div>
        )
      )}
    </>
  );
};

export default BasedOnAnnualPeriodAndDivisionsCopy;
