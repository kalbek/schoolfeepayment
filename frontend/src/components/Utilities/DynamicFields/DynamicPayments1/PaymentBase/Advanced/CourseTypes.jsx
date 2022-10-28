import AddMoreButton from "../../../../Buttons/AddMoreButton";
import RemoveLinksButton from "../../../../Buttons/RemoveLinksButton";
import { useSelector } from "react-redux";

const CourseTypes = ({
  handleAdvancedPaymentBaseCourseTypeCheckboxSelection,
  handleAdvancedPaymentBaseAddCourseCheckboxSelection,

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
          {paymentState[index].paymentBase.courseBasedPayment.value && (
            <label
              className="checkbox-items flex flex-cs ml-1 "
              //   htmlFor={"gradeBasedPayment_" + index}
              onClick={handleAdvancedPaymentBaseAddCourseCheckboxSelection}
            >
              <AddMoreButton
              // handleLinks={
              //   handleAdvancedPaymentBaseAddCourseCheckboxSelection
              // }
              />
              <>
                <span className="-ml-1">
                  &nbsp;&nbsp; <p>Add Course</p>
                </span>
              </>
            </label>
          )}
        </div>
      </div>
      {/* {console.log(paymentState[index].paymentBase.courseBasedPayment.courses)} */}

      {paymentState[index].paymentBase.courseBasedPayment.value &&
        paymentState[index].paymentBase.courseBasedPayment.courses.map(
          (course, courseIndex) => (
            <>
              <div key={courseIndex} className="flex-cs -mt-1p5">
                <div className="flex-c inputs gapp5">
                  <div className="flex-cs gapp5">
                    <input
                      type="text"
                      name="specialNeedsBasedDiscount"
                      id={"specialNeedPaymentDiscount"}
                      placeholder="Course Name"
                      // value={scholarship.scholarshipName}
                      onChange={(event) =>
                        handleAdvancePaymentBaseCoursNameValues(event, index)
                      }
                      tabIndex={9}
                    />
                    <RemoveLinksButton
                      remove={handleAdvancePaymentBaseRemoveCourses}
                      // index={index}
                      // subIndex={scholarshipIndex}
                    />
                  </div>
                </div>
              </div>
              <label
                className="flex "
                // htmlFor={"scholarshipBasedPaymentDiscount" + index}
              >
                <input
                  type="checkbox"
                  name="scholarshipBasedDiscount"
                  //   id={"scholarshipBasedPaymentDiscount" + index}
                  // value={scholarshipBasedDiscount}
                  //   checked={scholarshipBasedDiscount}
                  onChange={(e) =>
                    handleAdvancedPaymentBaseApplyPreviousRulesForCourse(
                      e,
                      index
                    )
                  }
                  tabIndex={9}
                />
                <>
                  <span>
                    &nbsp; <p>Apply previous Course rule</p>
                  </span>
                </>
              </label>
            </>
          )
        )}
    </>
  );
};

export default CourseTypes;
