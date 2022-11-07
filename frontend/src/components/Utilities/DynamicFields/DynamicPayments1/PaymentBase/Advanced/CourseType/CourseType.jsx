import HeaderControls from "./HeaderControls";
import CourseDetails from "./CourseDetails";
import ApplyPreviousCouseRules from "./ApplyPreviousCouseRules";

const CourseType = ({
  index,
  handleAdvancedPaymentBaseCourseTypeCheckboxSelection,
  handleAdvancedCoursesBasedPaymentVisibility,
  handleAdvancedPaymentBaseCourseByDivisionCheckboxSelection,
  handleAdvancedPaymentBaseCourseBySubDivisionCheckboxSelection,
  handleAdvancePaymentBaseCourseNameValues,
  handleAdvancePaymentBaseCreditHourValues,
  handleAdvancedPaymentBaseApplyPreviousRulesForCourse,
  handleShowHideCourses,
  handleRemoveCourses,
  handleNewCoursesForAdvancedPaymentBase,
  handleNothing,
}) => {
  return (
    <div className="field-subgroup-containers mt-p7">
      <section className="ml-1 mr-1 mb-p5 ">
        <HeaderControls
          handleAdvancedPaymentBaseCourseTypeCheckboxSelection={
            handleAdvancedPaymentBaseCourseTypeCheckboxSelection
          }
          handleAdvancedCoursesBasedPaymentVisibility={
            handleAdvancedCoursesBasedPaymentVisibility
          }
          handleAdvancedPaymentBaseCourseByDivisionCheckboxSelection={
            handleAdvancedPaymentBaseCourseByDivisionCheckboxSelection
          }
          handleAdvancedPaymentBaseCourseBySubDivisionCheckboxSelection={
            handleAdvancedPaymentBaseCourseBySubDivisionCheckboxSelection
          }
          index={index}
        />
        {/* HEADER CONTROLS END HERE */}

        <CourseDetails
          index={index}
          handleAdvancePaymentBaseCourseNameValues={
            handleAdvancePaymentBaseCourseNameValues
          }
          handleAdvancePaymentBaseCreditHourValues={
            handleAdvancePaymentBaseCreditHourValues
          }
          handleShowHideCourses={handleShowHideCourses}
          handleRemoveCourses={handleRemoveCourses}
          handleNewCoursesForAdvancedPaymentBase={
            handleNewCoursesForAdvancedPaymentBase
          }
          handleNothing={handleNothing}
        />

        {/* COURSE DETAILS END HERE */}
        <ApplyPreviousCouseRules
          index={index}
          handleAdvancedPaymentBaseApplyPreviousRulesForCourse={
            handleAdvancedPaymentBaseApplyPreviousRulesForCourse
          }
        />
      </section>
    </div>
  );
};

export default CourseType;
