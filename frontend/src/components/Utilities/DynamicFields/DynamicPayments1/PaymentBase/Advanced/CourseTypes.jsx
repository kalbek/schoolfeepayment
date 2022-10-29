import AddMoreButton from "../../../../Buttons/AddMoreButton";
import HideOrshow from "../../../../Buttons/hideOrshow";
import AddMoreButtonIconOnly from "../../../../Buttons/AddMoreButtonIconOnly";
import RemoveLinksButton from "../../../../Buttons/RemoveLinksButton";
import { useSelector } from "react-redux";

const CourseTypes = ({
  handleAdvancedPaymentBaseCourseTypeCheckboxSelection,
  handleNewCoursesForAdvancedPaymentBase,
  handleRemoveCourses,
  handleAdvancePaymentBaseCoursNameValues,
  handleAdvancedPaymentBaseCourseByDivisionCheckboxSelection,
  handleAdvancedPaymentBaseCourseBySubDivisionCheckboxSelection,
  handleShowHideCourses,
  handleNothing,

  handleAdvancePaymentBaseRemoveCourses,
  handleAdvancedPaymentBaseApplyPreviousRulesForCourse,
  index,
}) => {
  const paymentState = useSelector((state) => state.payments.paymentState);
  const educationalDivisionState = useSelector(
    (state) => state.educationalDivisions.educationalDivision
  );
  const periodState = useSelector((state) => state.periods.topLevelPeriod);
  return (
    <>
      <section className="ml-1 mr-1 mt-p5 mb-p5 ">
        <>
          <div className="flex-cs ml-p2 ">
            <div className="flex-c ">
              <label
                className="checkbox-items flex flex-cs "
                // htmlFor={"scholarshipBasedPaymentDiscount" + index}
              >
                <input
                  type="checkbox"
                  name="scholarshipBasedDiscount"
                  //   id={"scholarshipBasedPaymentDiscount" + index}
                  value={
                    paymentState[index].paymentBase.courseBasedPayment.value
                  }
                  checked={
                    paymentState[index].paymentBase.courseBasedPayment.value
                  }
                  onChange={(e) =>
                    handleAdvancedPaymentBaseCourseTypeCheckboxSelection(
                      e,
                      index
                    )
                  }
                  tabIndex={9}
                />
                <>
                  <span>
                    &nbsp; <p>Course Type</p>
                  </span>
                </>
              </label>
            </div>

            {/* CHECKBOX FOR CORSED BASED ON BASED ON DIVISION */}
            <div className="flex gap1 ml-6">
              {paymentState[index].paymentBase.courseBasedPayment.value && (
                <>
                  <label
                    className=" flex "
                    // htmlFor={"scholarshipBasedPaymentDiscount" + index}
                  >
                    <input
                      type="checkbox"
                      name="scholarshipBasedDiscount"
                      //   id={"scholarshipBasedPaymentDiscount" + index}
                      value={
                        paymentState[index].paymentBase.courseBasedPayment
                          .basedOnDivision
                      }
                      checked={
                        paymentState[index].paymentBase.courseBasedPayment
                          .basedOnDivision
                      }
                      onChange={(e) =>
                        handleAdvancedPaymentBaseCourseByDivisionCheckboxSelection(
                          e,
                          index
                        )
                      }
                      tabIndex={9}
                    />
                    <>
                      <span>
                        &nbsp;{" "}
                        <p>By {educationalDivisionState[index].divisionType}</p>
                      </span>
                    </>
                  </label>
                  {/* CHECKBOX FOR CORSED BASED ON BASED ON SUBDIVISION */}

                  <label
                    className=" flex -ml-p4"
                    // htmlFor={"scholarshipBasedPaymentDiscount" + index}
                  >
                    <input
                      type="checkbox"
                      name="scholarshipBasedDiscount"
                      //   id={"scholarshipBasedPaymentDiscount" + index}
                      value={
                        paymentState[index].paymentBase.courseBasedPayment
                          .basedOnSubDivision
                      }
                      checked={
                        paymentState[index].paymentBase.courseBasedPayment
                          .basedOnSubDivision
                      }
                      onChange={(e) =>
                        handleAdvancedPaymentBaseCourseBySubDivisionCheckboxSelection(
                          e,
                          index
                        )
                      }
                      tabIndex={9}
                    />
                    <>
                      <span>
                        &nbsp;{" "}
                        <p>
                          By {educationalDivisionState[index].subDivisionType}
                        </p>
                      </span>
                    </>
                  </label>
                </>
              )}
            </div>
          </div>
        </>

        {/* {console.log(educationalDivisionState[index].educationalSubDivision.subDivisionName)} */}
        {console.log(educationalDivisionState[index].educationalSubDivision)}
        {paymentState[index].paymentBase.courseBasedPayment.value &&
          paymentState[index].paymentBase.courseBasedPayment.display &&
          educationalDivisionState.map((division) => (
            <div className="flex-ccc mt-1" key={division.id}>
              {paymentState[index].paymentBase.courseBasedPayment.courses.map(
                (course, subIndex) => (
                  <div key={course.Id} className={"flex-c -mt-1p5"}>
                    {division.educationalSubDivision.map((subDivision) => (
                      <>
                        {/* <label htmlFor=""> </label> */}
                        <section>
                          <div className="flex-cs mt-p5 -mb-p5">
                            <div className=" ">
                              <label htmlFor="">{division.divisionName}</label>
                            </div>
                            <div className="-ml-3 flex-cs gapfull">
                              <label htmlFor=""> </label>

                              <label> {subDivision.subDivisionName}</label>
                            </div>
                            &nbsp;
                          </div>
                          <div className="flex inputs gapp5">
                            <>
                              <div className="flex-cs gapp5 input--above-small2 mt-1  ">
                                <input
                                  type="text"
                                  name="courseName"
                                  // id={"specialNeedPaymentDiscount"}
                                  placeholder="Course Name"
                                  value={course.courseName}
                                  onChange={(event) =>
                                    handleAdvancePaymentBaseCoursNameValues(
                                      event,
                                      index,
                                      subIndex
                                    )
                                  }
                                  tabIndex={9}
                                />
                              </div>
                              <div className="flex-cs gapp5 input--xsmall mt-1">
                                <input
                                  type="text"
                                  name="courseCreditHour"
                                  // id={"specialNeedPaymentDiscount"}
                                  placeholder="Cr Hr."
                                  value={course.creditHours}
                                  onChange={(event) =>
                                    handleAdvancePaymentBaseCoursNameValues(
                                      event,
                                      index,
                                      subIndex
                                    )
                                  }
                                  tabIndex={9}
                                />
                                <RemoveLinksButton
                                  remove={handleRemoveCourses}
                                  index={index}
                                  subIndex={subIndex}
                                />
                              </div>
                            </>
                          </div>
                          <div className="flex-cs gapfull">
                            {paymentState[index].paymentBase.courseBasedPayment
                              .value && (
                              <label
                                className="flex -ml-p5 "
                                //   htmlFor={"gradeBasedPayment_" + index}
                                // onClick={() => handleNewCoursesForAdvancedPaymentBase()}
                              >
                                <AddMoreButton
                                  index={index}
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
                            )}
                            {paymentState[index].paymentBase.courseBasedPayment
                              .value && (
                              <div className="flex-cs">
                                <HideOrshow
                                  index={index}
                                  handleDisplay={handleShowHideCourses}
                                  toogleValue={
                                    paymentState[index].paymentBase
                                      .courseBasedPayment.display
                                  }
                                />
                                <label
                                  className="input-group mt-p3"
                                  onClick={() => handleShowHideCourses(index)}
                                >
                                  &nbsp;
                                  {paymentState[index].paymentBase
                                    .courseBasedPayment.display
                                    ? "Hide"
                                    : "Show"}
                                </label>
                              </div>
                            )}
                          </div>
                        </section>
                        <label></label>
                        <label></label>
                      </>
                    ))}
                  </div>
                )
              )}
              &nbsp;
            </div>
          ))}

        {paymentState.length > 0 &&
          paymentState[index].paymentBase.courseBasedPayment.value && (
            <label
              className="flex"
              htmlFor={"scholarshipBasedPaymentDiscount" + index}
            >
              <input
                type="checkbox"
                name="scholarshipBasedDiscount"
                id={"scholarshipBasedPaymentDiscount" + index}
                // value={scholarshipBasedDiscount}
                //   checked={scholarshipBasedDiscount}
                onChange={(e) =>
                  handleAdvancedPaymentBaseApplyPreviousRulesForCourse(e, index)
                }
                tabIndex={9}
              />
              <>
                <span>
                  &nbsp; <p>Apply previous Course</p>
                </span>
              </>
            </label>
          )}
      </section>
    </>
  );
};

export default CourseTypes;
