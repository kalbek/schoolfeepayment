import { useSelector, useDispatch } from "react-redux";
import AnnualPeriod from "./AnnualPeriod";
import MajorDivision from "./MajorDivision";
import SubDivision from "./SubDivision";
import CourseUnits from "./CourseUnits";
import CourseTypes from "./CourseTypes";
import {
  updateAdvancedPaymentBaseAnnualPeriodCheckboxSelection,
  updateAdvancedPaymentBaseAnnualPeriodTypeRadioSelection,
  updateAdvancedPaymentBaseEducationalDivisionCheckboxSelection,
  updateAdvancedPaymentBaseEducationalSubDivisionCheckboxSelection,
  updateAdvancedPaymentBaseCourseUnitsCheckboxSelection,
  updateAdvancedPaymentBaseCourseUnitsTypeRadioSelection,
  updateAdvancedPaymentBaseCourseTypeCheckboxSelection,
  updateAdvancedPaymentBaseAddCourses,
} from "../../../../../../features/paymentBase/paymentBaseSlice";

const AdvancedPaymentBase = ({ singlePayment, index }) => {
  const paymentState = useSelector((state) => state.payments.paymentState);
  const dispatch = useDispatch();

  // DEFINING METHODS FOR ANNUAL PERIOD
  const handleAdvancedPaymentBaseAnnualPeriodCheckboxSelection = () => {
    dispatch(
      updateAdvancedPaymentBaseAnnualPeriodCheckboxSelection({
        paymentId: index,
        value: !singlePayment.paymentBase.advancedAnnualPeriodCheckbox,
      })
    );
  };

  const handleAdvancedPaymentBaseAnnualPeriodTypeRadioSelection = (
    event,
    index
  ) => {
    const { id } = event.target;
    paymentState.map((paymentState) => {
      if (paymentState.Id === index) {
        dispatch(
          updateAdvancedPaymentBaseAnnualPeriodTypeRadioSelection({
            paymentId: index,
            annualPeriodType: id,
          })
        );
      }
    });
  };

  // DEFINING METHODS FOR MAJOR DIVISION
  const handleAdvancedPaymentBaseEducationalDivisionCheckboxSelection = () => {
    dispatch(
      updateAdvancedPaymentBaseEducationalDivisionCheckboxSelection({
        paymentId: index,
        value: !singlePayment.paymentBase.advancedEducationalDivisionCheckbox,
      })
    );
  };

  // DEFINING METHODS FOR SUB DIVISION
  const handleAdvancedPaymentBaseEducationalSubDivisionCheckboxSelection =
    () => {
      dispatch(
        updateAdvancedPaymentBaseEducationalSubDivisionCheckboxSelection({
          paymentId: index,
          value:
            !singlePayment.paymentBase.advancedEducationalSubDivisionCheckbox,
        })
      );
    };

  // DEFINING METHODS FOR COURSE UNITS
  const handleAdvancedPaymentBaseCourseUnitsCheckboxSelection = () => {
    dispatch(
      updateAdvancedPaymentBaseCourseUnitsCheckboxSelection({
        paymentId: index,
        value: !singlePayment.paymentBase.advancedCourseUnitsCheckbox,
      })
    );
  };
  const handleAdvancedPaymentBaseCourseUnitsTypeRadioSelection = (
    event,
    index
  ) => {
    const { id } = event.target;
    paymentState.map((paymentState) => {
      if (paymentState.Id === index) {
        dispatch(
          updateAdvancedPaymentBaseCourseUnitsTypeRadioSelection({
            paymentId: index,
            courseUnitType: id,
          })
        );
      }
    });
  };

  // DEFINING METHODS FOR COURSE TYPE
  const handleAdvancedPaymentBaseCourseTypeCheckboxSelection = () => {
    dispatch(
      updateAdvancedPaymentBaseCourseTypeCheckboxSelection({
        paymentId: index,
        value: !singlePayment.paymentBase.courseBasedPayment.value,
      })
    );
    // Also create a single course
    dispatch(
      updateAdvancedPaymentBaseAddCourses({
        paymentId: index,
        courses: {
          Id: singlePayment.paymentBase.courseBasedPayment.courses.length,
          courseName: "",
          creditHours: "",
          contactHours: "",
          instructorName: "",
        },
      })
    );
  };
  const handleAdvancedPaymentBaseAddCourseCheckboxSelection = (index) => {
    paymentState.map((paymentState) => {
      if (paymentState.Id === index) {
        dispatch(
          handleAdvancedPaymentBaseAddCourseCheckboxSelection({
            paymentId: index,
            courses: {
              Id: singlePayment.paymentBase.courseBasedPayment.courses.length,
              courseName: "",
              creditHours: "",
              contactHours: "",
              instructorName: "",
            },
          })
        );
      }
    });
  };

  const handleAdvancedCourseTypeBaseSelection = () => {};
  const handleAdvancedPaymentBaseCourseAdding = () => {};
  const handleAdvancePaymentBaseCoursNameValues = () => {};
  const handleAdvancePaymentBaseRemoveCourses = () => {};
  const handleAdvancedPaymentBaseApplyPreviousRulesForCourse = () => {};

  // DEFINING METHODS FOR CREDIT HOURS
  const handleAdvancedCreditHoursBaseSelection = () => {};

  return (
    <>
      <div>
        <div>
          <AnnualPeriod
            handleAdvancedPaymentBaseAnnualPeriodCheckboxSelection={
              handleAdvancedPaymentBaseAnnualPeriodCheckboxSelection
            }
            handleAdvancedPaymentBaseAnnualPeriodTypeRadioSelection={
              handleAdvancedPaymentBaseAnnualPeriodTypeRadioSelection
            }
            index={index}
          />

          <MajorDivision
            handleAdvancedPaymentBaseEducationalDivisionCheckboxSelection={
              handleAdvancedPaymentBaseEducationalDivisionCheckboxSelection
            }
            index={index}
          />

          <SubDivision
            handleAdvancedPaymentBaseEducationalSubDivisionCheckboxSelection={
              handleAdvancedPaymentBaseEducationalSubDivisionCheckboxSelection
            }
            index={index}
          />
          <CourseUnits
            handleAdvancedPaymentBaseCourseUnitsCheckboxSelection={
              handleAdvancedPaymentBaseCourseUnitsCheckboxSelection
            }
            handleAdvancedPaymentBaseCourseUnitsTypeRadioSelection={
              handleAdvancedPaymentBaseCourseUnitsTypeRadioSelection
            }
            index={index}
          />

          <CourseTypes
            handleAdvancedPaymentBaseCourseTypeCheckboxSelection={
              handleAdvancedPaymentBaseCourseTypeCheckboxSelection
            }
            handleAdvancedPaymentBaseAddCourseCheckboxSelection={
              handleAdvancedPaymentBaseAddCourseCheckboxSelection
            }
            index={index}
            handleAdvancedCourseTypeBaseSelection={
              handleAdvancedCourseTypeBaseSelection
            }
            handleAdvancedPaymentBaseCourseAdding={
              handleAdvancedPaymentBaseCourseAdding
            }
            handleAdvancePaymentBaseCoursNameValues={
              handleAdvancePaymentBaseCoursNameValues
            }
            handleAdvancePaymentBaseRemoveCourses={
              handleAdvancePaymentBaseRemoveCourses
            }
            handleAdvancedPaymentBaseApplyPreviousRulesForCourse={
              handleAdvancedPaymentBaseApplyPreviousRulesForCourse
            }
          />
        </div>
      </div>
    </>
  );
};

export default AdvancedPaymentBase;
