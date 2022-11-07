import AddMoreButton from "../../../Utilities/AddMoreButton";
import HideOrshow from "../../../../../Buttons/hideOrshow";
import RemoveLinksButton from "../../../../../Buttons/RemoveLinksButton";
import BasedOnAnnualPeriodsAndDivisions from "./Courses/BasedOnAnnualPeriodsAndDivisions";
import { useSelector } from "react-redux";
import BasedOnAnnualPeriodNotByDivisions from "./Courses/BasedOnAnnualPeriodNotByDivisions";
import BasedNotOnAnnualPeriodAndOnDivisions from "./Courses/BasedNotOnAnnualPeriodAndOnDivisions";
import BasedNotOnAnnualPeriodNotONDivisions from "./Courses/BasedNotOnAnnualPeriodNotONDivisions";

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
  const majorDivisonSelected =
    paymentState[index].paymentBase.advancedMajorEducationalDivisionCheckbox;
  const subDivisionSelected =
    paymentState[index].paymentBase.advancedEducationalSubDivisionCheckbox;
  return (
    <>
      {paymentState[index].paymentBase.courseBasedPayment.value &&
      paymentState[index].paymentBase.advancedAnnualPeriodCheckbox &&
      paymentState[index].paymentBase.advancedEducationalDivisionCheckbox &&
      (majorDivisonSelected || subDivisionSelected) ? (
        <>
            {/* Case 1 */}
          <BasedOnAnnualPeriodsAndDivisions index={index} />
        </>
      ) : (paymentState[index].paymentBase.courseBasedPayment.value &&
          !paymentState[index].paymentBase
            .advancedEducationalDivisionCheckbox &&
          paymentState[index].paymentBase.advancedAnnualPeriodCheckbox) ||
        (paymentState[index].paymentBase.courseBasedPayment.value &&
          paymentState[index].paymentBase.advancedEducationalDivisionCheckbox &&
          paymentState[index].paymentBase.advancedAnnualPeriodCheckbox &&
          !majorDivisonSelected &&
          !subDivisionSelected) ||
        (paymentState[index].paymentBase.courseBasedPayment.value &&
          paymentState[index].paymentBase.advancedEducationalDivisionCheckbox &&
          !paymentState[index].paymentBase.advancedAnnualPeriodCheckbox &&
          !majorDivisonSelected &&
          !subDivisionSelected) ? (
        <>
          {/* Case 2 */}
          <BasedOnAnnualPeriodNotByDivisions index={index} />
        </>
      ) : paymentState[index].paymentBase.courseBasedPayment.value &&
        paymentState[index].paymentBase.advancedEducationalDivisionCheckbox &&
        !paymentState[index].paymentBase.advancedAnnualPeriodCheckbox ? (
        <>
          {/* Case 3 */}
          <BasedNotOnAnnualPeriodAndOnDivisions index={index} />
        </>
      ) : paymentState[index].paymentBase.courseBasedPayment.value &&
        !paymentState[index].paymentBase.advancedEducationalDivisionCheckbox &&
        !paymentState[index].paymentBase.advancedAnnualPeriodCheckbox ? (
        <>
          {/* Case 4 */}
          <BasedNotOnAnnualPeriodNotONDivisions index={index} />
        </>
      ) : (
        <></>
      )}
    </>
  );
};

export default CourseDetails;
