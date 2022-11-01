import AddMoreButton from "../../../Utilities/AddMoreButton";
import HideOrshow from "../../../../../Buttons/hideOrshow";
import RemoveLinksButton from "../../../../../Buttons/RemoveLinksButton";
import { useSelector } from "react-redux";

const CourseDetailsCopy = ({
  index,
  handleAdvancePaymentBaseCourseNameValues,
  handleAdvancePaymentBaseCreditHourValues,
  handleShowHideCourses,
  handleRemoveCourses,
  handleNewCoursesForAdvancedPaymentBase,
  handleNothing,
}) => {
  const paymentState = useSelector((state) => state.payments.paymentState);

  return (
    <>
      {paymentState[index].paymentBase.courseBasedPayment.value &&
        paymentState[index].paymentBase.courseBasedPayment.visible &&
        // Divisions are departments
        paymentState[index].paymentBase.courseBasedPayment.divisions.map(
          (division, divisionIndex) => (
            <>
              <div className="flex-ccc">
                <section>
                  <label htmlFor="" className="flex-ccc">
                    {division.divisionName}
                  </label>
                  <div className="flex-ccc  mt-1">
                    <div className={"flex-c -mt-1p5"}>
                      {/* subdivisions are Years */}
                      {division.educationalSubDivision.map(
                        (subDivision, subDivisionIndex) => (
                          <div key={subDivisionIndex} className={"mt-1"}>
                            <section>
                              <div className="flex-cs mt-p5 -mb-p5">
                                <div className=" ">
                                  <label htmlFor="">
                                    {division.divisionName}
                                  </label>
                                </div>
                                <div className="ml-3 flex-cs gapfull">
                                  <label htmlFor=""> </label>
                                  <label>{subDivision.subDivisionName}</label>
                                </div>
                                &nbsp;
                              </div>
                              <div>
                                {paymentState[index].paymentBase
                                  .courseBasedPayment.divisions[divisionIndex]
                                  .educationalSubDivision[subDivisionIndex]
                                  .visible &&
                                  subDivision.courses.map(
                                    (course, courseIndex) => (
                                      <div>
                                        <div className="flex  inputs gapp5">
                                          <>
                                            <div className="flex-cs gapp5 input--above-small2 ">
                                              <input
                                                type="text"
                                                name="courseName"
                                                // id={"specialNeedPaymentDiscount"}
                                                placeholder="Course Name"
                                                value={course.courseName}
                                                onChange={(event) =>
                                                  handleAdvancePaymentBaseCourseNameValues(
                                                    event,
                                                    index,
                                                    divisionIndex,
                                                    subDivisionIndex,
                                                    courseIndex
                                                  )
                                                }
                                                tabIndex={9}
                                              />
                                            </div>
                                            <div className="flex-cs gapp5 input--xsmall ">
                                              <input
                                                type="text"
                                                name="courseCreditHour"
                                                // id={"specialNeedPaymentDiscount"}
                                                placeholder="Cr Hr."
                                                value={course.creditHours}
                                                onChange={(event) =>
                                                  handleAdvancePaymentBaseCreditHourValues(
                                                    event,
                                                    index,
                                                    divisionIndex,
                                                    subDivisionIndex,
                                                    courseIndex
                                                  )
                                                }
                                                tabIndex={9}
                                              />
                                              {subDivision.courses.length >
                                              1 ? (
                                                <RemoveLinksButton
                                                  remove={handleRemoveCourses}
                                                  index={index}
                                                  subIndex={divisionIndex}
                                                  subSubIndex={subDivisionIndex}
                                                  subSubSubIndex={courseIndex}
                                                />
                                              ) : (
                                                <div className="space-for-remove-small"></div>
                                              )}
                                            </div>
                                          </>
                                        </div>
                                      </div>
                                    )
                                  )}
                                <label htmlFor="">&nbsp;</label>
                                <div className="flex-cs gapfull">
                                  {paymentState[index].paymentBase
                                    .courseBasedPayment.divisions[divisionIndex]
                                    .educationalSubDivision[subDivisionIndex]
                                    .visible ? (
                                    <>
                                      <label className="flex -ml-p5">
                                        <AddMoreButton
                                          index={index}
                                          subIndex={divisionIndex}
                                          subSubIndex={subDivisionIndex}
                                          handleLinks={
                                            paymentState[index].paymentBase
                                              .courseBasedPayment.display
                                              ? handleNewCoursesForAdvancedPaymentBase
                                              : handleNothing
                                          }
                                        />
                                        <>
                                          <span className="-ml-1">
                                            &nbsp;&nbsp; <p>Add Course</p>
                                          </span>
                                        </>
                                      </label>
                                    </>
                                  ) : (
                                    <>
                                      <div className="flex-ccc mt-1">
                                        <label className="pt1" htmlFor="">
                                          Hidden{" "}
                                        </label>
                                      </div>
                                    </>
                                  )}

                                  {paymentState[index].paymentBase
                                    .courseBasedPayment.value && (
                                    <div
                                      className="flex mt-1 -ml-1"
                                      onClick={() =>
                                        handleShowHideCourses(
                                          index,
                                          divisionIndex,
                                          subDivisionIndex
                                        )
                                      }
                                    >
                                      <div className="">
                                        <HideOrshow
                                          toogleValue={
                                            paymentState[index].paymentBase
                                              .courseBasedPayment.divisions[
                                              divisionIndex
                                            ].educationalSubDivision[
                                              subDivisionIndex
                                            ].visible
                                          }
                                        />
                                      </div>
                                      &nbsp;
                                      <label className="input-group mt-p4 ">
                                        &nbsp;
                                        {paymentState[index].paymentBase
                                          .courseBasedPayment.divisions[
                                          divisionIndex
                                        ].educationalSubDivision[
                                          subDivisionIndex
                                        ].visible
                                          ? "Hide " + " Courses"
                                          : "Show " + " Courses"}
                                      </label>
                                    </div>
                                  )}
                                </div>
                              </div>
                            </section>
                            <label>&nbsp;</label>
                          </div>
                        )
                      )}
                    </div>
                  </div>
                </section>
                <label htmlFor="">&nbsp;</label>
              </div>
            </>
          )
        )}
    </>
  );
};

export default CourseDetailsCopy;
