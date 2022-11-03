import AddMoreButton from "../../../Utilities/AddMoreButton";
import HideOrshow from "../../../../../Buttons/hideOrshow";
import RemoveLinksButton from "../../../../../Buttons/RemoveLinksButton";
import BasedOnAnnualPeriodAndDivisions from "./Courses/BasedOnAnnualPeriodAndDivisions";
import { useSelector } from "react-redux";

const CourseDetails = ({
  index,
  handleAdvancePaymentBaseCourseNameValues,
  handleShowHideCourses,
  handleRemoveCourses,
  handleNewCoursesForAdvancedPaymentBase,
  handleNothing,
}) => {
  const paymentState = useSelector((state) => state.payments.paymentState);
  const topLevelPeriod = useSelector((state) => state.periods.topLevelPeriod);
  return (
    <>
      {paymentState[index].paymentBase.courseBasedPayment.value &&
      paymentState[index].paymentBase.advancedEducationalDivisionCheckbox &&
      paymentState[index].paymentBase.advancedAnnualPeriodCheckbox ? (
        <>
          <label>Annual Peirod is ON & Division is ON</label>
          <BasedOnAnnualPeriodAndDivisions index={index} />
        </>
      ) : paymentState[index].paymentBase.courseBasedPayment.value &&
        !paymentState[index].paymentBase.advancedEducationalDivisionCheckbox &&
        paymentState[index].paymentBase.advancedAnnualPeriodCheckbox ? (
        <>
          <label>Annual Peirod is ON & Division is OFF</label>
        </>
      ) : paymentState[index].paymentBase.courseBasedPayment.value &&
        paymentState[index].paymentBase.advancedEducationalDivisionCheckbox &&
        !paymentState[index].paymentBase.advancedAnnualPeriodCheckbox ? (
        <>
          <label>Annual Peirod is OFF & Division is ON</label>
        </>
      ) : paymentState[index].paymentBase.courseBasedPayment.value &&
        !paymentState[index].paymentBase.advancedEducationalDivisionCheckbox &&
        !paymentState[index].paymentBase.advancedAnnualPeriodCheckbox ? (
        <>
          <label>Annual Peirod is OFF & Division is OFF </label>
        </>
      ) : (
        <></>
      )}
    </>
  );
};

export default CourseDetails;
