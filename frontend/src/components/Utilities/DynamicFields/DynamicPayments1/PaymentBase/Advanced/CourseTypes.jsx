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
  handleAdvancedPaymentBaseCourseByDepartmantCheckboxSelection,
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
  return (
    <>
      <div className="mt-1">
        <div className="flex-cs">
          <label
            className="checkbox-items flex flex-cs "
            // htmlFor={"scholarshipBasedPaymentDiscount" + index}
          >
            <input
              type="checkbox"
              name="scholarshipBasedDiscount"
              //   id={"scholarshipBasedPaymentDiscount" + index}
              value={paymentState[index].paymentBase.courseBasedPayment.value}
              checked={paymentState[index].paymentBase.courseBasedPayment.value}
              onChange={(e) =>
                handleAdvancedPaymentBaseCourseTypeCheckboxSelection(e, index)
              }
              tabIndex={9}
            />
            <>
              <span>
                &nbsp; <p>Course Type</p>
              </span>
            </>
          </label>
          {paymentState[index].paymentBase.courseBasedPayment.value && (
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
                  handleAdvancedPaymentBaseCourseByDepartmantCheckboxSelection(
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
                    Define by {educationalDivisionState[index].divisionType}
                  </p>
                </span>
              </>
            </label>
          )}
        </div>
      </div>
      {console.log(educationalDivisionState)}

      {educationalDivisionState.map((division) => {
        console.log(division.divisionName);
        console.log(division.divisionName);
      })}
      {educationalDivisionState.forEach((division) => {
      console.log(division.divisionName);

      })}
      {paymentState[index].paymentBase.courseBasedPayment.value &&
        paymentState[index].paymentBase.courseBasedPayment.display &&
        paymentState[index].paymentBase.courseBasedPayment.courses.map(
          (course, subIndex) => (
            <div key={subIndex}>
              <div className={"flex-c -mt-1p5"}>
                <div className="flex inputs gapp5">
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
                </div>
              </div>
              &nbsp;
            </div>
          )
        )}
      <div className="flex-cs">
        {paymentState[index].paymentBase.courseBasedPayment.value && (
          <label
            className="flex -ml-p5 "
            //   htmlFor={"gradeBasedPayment_" + index}
            // onClick={() => handleNewCoursesForAdvancedPaymentBase()}
          >
            <AddMoreButton
              index={index}
              handleLinks={
                paymentState[index].paymentBase.courseBasedPayment.display
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
        {paymentState[index].paymentBase.courseBasedPayment.value && (
          <div className="flex-cs">
            <HideOrshow
              index={index}
              handleDisplay={handleShowHideCourses}
              toogleValue={
                paymentState[index].paymentBase.courseBasedPayment.display
              }
            />
            <label
              className="input-group mt-p3"
              onClick={() => handleShowHideCourses(index)}
            >
              &nbsp;
              {paymentState[index].paymentBase.courseBasedPayment.display
                ? "Hide"
                : "Show"}
            </label>
          </div>
        )}
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
      </div>
    </>
  );
};

export default CourseTypes;
