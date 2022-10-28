import AddMoreButton from "../../../../Buttons/AddMoreButton";
import RemoveLinksButton from "../../../../Buttons/RemoveLinksButton";

const CourseTypes = ({
  handleAdvancedCourseTypeBaseSelection,
  handleAdvancedPaymentBaseCourseAdding,
  handleAdvancePaymentBaseCoursNameValues,
  handleAdvancePaymentBaseRemoveCourses,
  handleAdvancedPaymentBaseApplyPreviousRulesForCourse,
  index,
}) => {
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
              // value={scholarshipBasedDiscount}
              // checked={scholarshipBasedDiscount}
              onChange={(e) => handleAdvancedCourseTypeBaseSelection(e, index)}
              tabIndex={9}
            />
            <>
              <span>
                &nbsp; <p>Course Type</p>
              </span>
            </>
          </label>
          {true && (
            <label
              className="checkbox-items flex flex-cs "
              //   htmlFor={"gradeBasedPayment_" + index}
              onClick={() => handleAdvancedPaymentBaseCourseAdding(index)}
            >
              <AddMoreButton />
              <>
                <span className="-ml-1">
                  &nbsp;&nbsp; <p>Add Course</p>
                </span>
              </>
            </label>
          )}
        </div>
        <></>
      </div>

      <div className="flex-cs -mt-1p5">
        <div className="flex-c inputs gapp5">
          <div className="flex-cs gapp5">
            <input
              type="text"
              name="specialNeedsBasedDiscount"
              id={"specialNeedPaymentDiscount"}
              placeholder="Cr. Hr."
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
    </>
  );
};

export default CourseTypes;
