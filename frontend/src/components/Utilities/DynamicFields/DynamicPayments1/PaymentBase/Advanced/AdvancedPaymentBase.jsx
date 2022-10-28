import { useSelector, useDispatch } from "react-redux";
import AnnualPeriod from "./AnnualPeriod";
import MajorDivision from "./MajorDivision";
import SubDivision from "./SubDivision";
import CreditHours from "./CreditHours";
import CourseTypes from "./CourseTypes";
import {
  updateAdvancedPaymentBaseAnnualPeriodCheckboxSelection,
  updateAdvancedPaymentBaseAnnualPeriodTypeRadioSelection,
  updateAdvancedPaymentBaseEducationalDivisionCheckboxSelection,
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
  const handleAdvancedPaymentBaseEducationalDivisionCheckboxSelection =
    () => {};
  dispatch(
    updateAdvancedPaymentBaseEducationalDivisionCheckboxSelection({
      paymentId: index,
      // value: !singlePayment.paymentBase.advancedEducationalDivisionCheckbox,
      value: "",
    })
  );
  // DEFINING METHODS FOR SUB DIVISION
  const handleAdvancedMajordivisionBaseSelection = () => {};

  // DEFINING METHODS FOR COURSE TYPE
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
            // handleAdvancedSubDivisionBaseSelection={
            //   handleAdvancedSubDivisionBaseSelection
            // }
            index={index}
          />
          <CreditHours
            handleAdvancedCreditHoursBaseSelection={
              handleAdvancedCreditHoursBaseSelection
            }
          />
          <CourseTypes
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
