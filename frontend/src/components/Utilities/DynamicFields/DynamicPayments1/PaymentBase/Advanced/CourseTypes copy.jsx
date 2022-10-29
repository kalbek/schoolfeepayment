import AddMoreButton from "../../../../Buttons/AddMoreButton";
import AddMoreButtonIconOnly from "../../../../Buttons/AddMoreButtonIconOnly";
import RemoveLinksButton from "../../../../Buttons/RemoveLinksButton";
import { useSelector } from "react-redux";

const CourseTypes = ({
  handleAdvancedPaymentBaseCourseTypeCheckboxSelection,
  handleNewCoursesForAdvancedPaymentBase,
  handleRemoveCourses,
  handleAdvancePaymentBaseCoursNameValues,

  handleAdvancePaymentBaseRemoveCourses,
  handleAdvancedPaymentBaseApplyPreviousRulesForCourse,
  index,
}) => {
  const paymentState = useSelector((state) => state.payments.paymentState);
  return (
    <>
      <div className="flex-cs -mt-1">
        <div className="flex">
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
        </div>
      </div>
      {/* {console.log(paymentState[index].paymentBase.courseBasedPayment.courses)} */}

      {paymentState[index].paymentBase.courseBasedPayment.value &&
        paymentState[index].paymentBase.courseBasedPayment.courses.map(
          (course, subIndex) => (
            <div key={subIndex}>
              <div className="flex-c -mt-1p5">
                <div className="flex inputs gapp5">
                  <div className="flex-cs gapp5">
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
                  <div className="flex-cs gapp5 input--xsmall">
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
      <div className="flex-cs -ml-1p5">
        <div className="flex-start">
          {paymentState[index].paymentBase.courseBasedPayment.value && (
            <label
              className="checkbox-items flex flex-cs ml-1 "
              //   htmlFor={"gradeBasedPayment_" + index}
              // onClick={() => handleNewCoursesForAdvancedPaymentBase()}
            >
              <AddMoreButton
                index={index}
                handleLinks={handleNewCoursesForAdvancedPaymentBase}
              />
              <>
                <span className="-ml-1">
                  &nbsp;&nbsp; <p>Add Course</p>
                </span>
              </>
            </label>
          )}
        </div>

        {paymentState.length > 0 &&
          paymentState[index].paymentBase.courseBasedPayment.value && (
            <label
              className="flex "
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
                  &nbsp; <p>Apply previous Course rule</p>
                </span>
              </>
            </label>
          )}
      </div>
    </>
  );
};

export default CourseTypes;
