import AddMoreButton from "../../../Utilities/AddMoreButton";
import HideOrshow from "../../../../../Buttons/hideOrshow";
import RemoveLinksButton from "../../../../../Buttons/RemoveLinksButton";
import BasedOnAnnualPeriodsAndDivisions from "./Courses/BasedOnAnnualPeriodsAndDivisions";
import { useSelector, useDispatch } from "react-redux";
import BasedOnAnnualPeriodNotByDivisions from "./Courses/BasedOnAnnualPeriodNotByDivisions";
import BasedNotOnAnnualPeriodAndOnDivisions from "./Courses/BasedNotOnAnnualPeriodAndOnDivisions";
import BasedNotOnAnnualPeriodNotONDivisions from "./Courses/BasedNotOnAnnualPeriodNotONDivisions";
import {
  // for annual periods
  createMajorAnnualPeriodNotDivisionCourseAndCrhr,
  updateMajorAnnualPeriodNotDivisionCourse,
  deleteMajorAnnualPeriodNotDivisionCourseAndCrhr,
  updateShowHideCoursesForMajorAnnualPeriodAndNotDivisions,
  updateShowHideCoursesForSubAnnualPeriodAndNotDivisions,
  // for annual divisions
  createNewCourseForSubDivisionBasedNotAnnualPeriodBasedPayments,
  deleteRemoveCoursesForDivisonButNotAnnualPeriodBasedPayments,
  updateSubDivsionBasedNnotPeriodBasedValues,
  updateShowHideCoursesForSubDivisionNotAnnualPeriod,
  // for major annual period and major divisions
  createCoursesForMajorAnnualPeriodAndMajorAndSubDivisionPayments,
  deleteCoursesForMajorAnnualPeriodAndMajorAndSubDivisionPayments,
  updateCoursesForMajorAnnualPeriodAndMajorAndSubDivisionPayments,
  updatehideShowCoursesForMajorAnnualPeriodAndMajorDivisionPayments,
  //  for sub periods and both major and sub divisions
  updateValueForSubAnnualPeriodAndMajorDivisonPaymentBase,
  createCoursesForSubAnnualPeriodAndMajorAndSubDivisionPayments,
  deleteCoursesForSubAnnualPeriodAndMajorAndSubDivisionPayments,
  updateHideShowCoursesForSubAnnualPeriodAndMajorDivisionPayments,
  // for major annual-divisions and not sub-divisions
  updateValueForMajorPeriodMajorDivisionNotSubDivisionCourses,
  // for course only based payments
  updateCourseOnlyBasedPaymentsValues,
  createCoursesToCourseOnlyBasedPaymentBases,
  updateShowHideCoursesForCourseOnlyBasedBases,
  deleteCoursesToCourseOnlyBasedPaymentBases,
  // so far so good
  updateSubAnnualPeriodNotDivisionCourse,
  deleteSubAnnualPeriodNotDivisionCourseAndCrhr,
  createSubAnnualPeriodNotDivisionCourseAndCrhr,
} from "../../../../../../../features/paymentBase/paymentBaseSlice";

const CourseDetails = ({ index }) => {
  const dispatch = useDispatch();
  const paymentState = useSelector((state) => state.payments.paymentState);
  const majorDivisonSelected =
    paymentState[index].paymentBase.advancedMajorEducationalDivisionCheckbox;
  const subDivisionSelected =
    paymentState[index].paymentBase.advancedEducationalSubDivisionCheckbox;
  const period = paymentState[index].paymentBase.courseBasedPayment.periods;
  // creating major annual periods
  const addMajorAnnualPeriodNotDivisionCourseAndCrhr = (
    index,
    subIndex,
    subSubIndex
  ) => {
    dispatch(
      createMajorAnnualPeriodNotDivisionCourseAndCrhr({
        paymentIndex: index,
        periodIndex: subIndex,
        shiftIndex: subSubIndex,
        course: {
          Id: paymentState[index].paymentBase.courseBasedPayment.periods[
            subIndex
          ].shifts[subSubIndex].courses.length,
          courseName: "",
          creditHours: "",
          contactHours: "",
          instructorName: "",
          paymentAmount: {
            paymentAmountId:
              paymentState[index].paymentBase.courseBasedPayment.periods[
                subIndex
              ].shifts[subSubIndex].courses.paymentAmount.paymentAmountId + 1,
            hasDiscountRules: false,
            amount: "",
            grossAmount: "",
          },
        },
      })
    );
  };

  // updating major annual periods
  const handleMajorAnnualPeriodNotDivisionCourse = (
    event,
    index,
    periodIndex,
    shiftIndex,
    courseIndex
  ) => {
    const { name, value } = event.target;
    dispatch(
      updateMajorAnnualPeriodNotDivisionCourse({
        name,
        value,
        index,
        periodIndex,
        shiftIndex,
        courseIndex,
      })
    );
  };

  // removing major annual periods
  const removeMajorAnnualPeriodNotDivisionCourseAndCrhr = (
    index,
    subIndex,
    subSubIndex,
    subSubSubIndex
  ) => {
    dispatch(
      deleteMajorAnnualPeriodNotDivisionCourseAndCrhr({
        paymentIndex: index,
        periodIndex: subIndex,
        shiftIndex: subSubIndex,
        courseIndex: subSubSubIndex,
      })
    );
  };

  // handling HIED & SHOW for major annual periods
  const handleShowHideCoursesForMajorAnnualPeriodAndNotDivisions = (
    index,
    subIndex
  ) => {
    dispatch(
      updateShowHideCoursesForMajorAnnualPeriodAndNotDivisions({
        paymentIndex: index,
        periodIndex: subIndex,
        visible: !period[subIndex].visible,
      })
    );
  };

  // creating sub-annual periods
  const addSubAnnualPeriodNotDivisionCourseAndCrhr = (
    index,
    subIndex,
    subSubIndex,
    subSubSubIndex
  ) => {
    console.log(
      index + " " + subIndex + " " + subSubIndex + " " + subSubSubIndex
    );

    dispatch(
      createSubAnnualPeriodNotDivisionCourseAndCrhr({
        index,
        subIndex,
        subSubIndex,
        subSubSubIndex,
        course: {
          Id: paymentState[index].paymentBase.courseBasedPayment.periods[
            subIndex
          ].subPeriods[subSubIndex].shifts[subSubSubIndex].courses.length,
          courseName: "",
          creditHours: "",
          contactHours: "",
          instructorName: "",
          paymentAmount: {
            paymentAmountId:
              paymentState[index].paymentBase.courseBasedPayment.periods[
                subIndex
              ].subPeriods[subSubIndex].shifts[subSubSubIndex].courses
                .paymentAmount.paymentAmountId + 1,
            hasDiscountRules: false,
            amount: "",
            grossAmount: "",
          },
        },
      })
    );
  };

  // removing sub-annual periods
  const removeSubAnnualPeriodNotDivisionCourseAndCrhr = (
    index,
    subIndex,
    subSubIndex,
    subSubSubIndex,
    subSubSubSubIndex
  ) => {
    dispatch(
      deleteSubAnnualPeriodNotDivisionCourseAndCrhr({
        index,
        subIndex,
        subSubIndex,
        subSubSubIndex,
        subSubSubSubIndex,
      })
    );
  };

  // handling value for subannual period not division based payments
  const handleSubAnnualPeriodNotDivisionCourse = (
    event,
    index,
    periodIndex,
    subPeriodIndex,
    shiftIndex,
    courseIndex
  ) => {
    const { name, value } = event.target;
    dispatch(
      updateSubAnnualPeriodNotDivisionCourse({
        name,
        value,
        index,
        periodIndex,
        subPeriodIndex,
        shiftIndex,
        courseIndex,
      })
    );
  };
  // handling HIED & SHOW for major annual periods
  const handleShowHideCoursesForSubAnnualPeriodAndNotDivisions = (
    index,
    periodIndex,
    subPeriodIndex
  ) => {
    dispatch(
      updateShowHideCoursesForSubAnnualPeriodAndNotDivisions({
        paymentIndex: index,
        periodIndex: periodIndex,
        subPeriodIndex: subPeriodIndex,
        visible: !period[periodIndex].subPeriods[subPeriodIndex].visible,
      })
    );
  };

  // Based not on annual period and on divisions
  // creating new courses for major annual periods
  const handleNewCoursesForDivisonButNotAnnualPeriodBasedPayments = (
    index,
    subIndex,
    subSubIndex
  ) => {
    dispatch(
      createNewCourseForSubDivisionBasedNotAnnualPeriodBasedPayments({
        index: index,
        divisionIndex: subIndex,
        subDivisionIndex: subSubIndex,
        courses: {
          Id: paymentState[index].paymentBase.courseBasedPayment.divisions[
            subIndex
          ].educationalSubDivision[subSubIndex].courses.length,
          courseName: "",
          creditHours: "",
          contactHours: "",
          instructorName: "",
          paymentAmount: {
            paymentAmountId:
              paymentState[index].paymentBase.courseBasedPayment.divisions[
                subIndex
              ].educationalSubDivision[subSubIndex].courses.paymentAmount
                .paymentAmountId + 1,
            hasDiscountRules: false,
            amount: "",
            grossAmount: "",
          },
        },
      })
    );
  };

  // handle remove for DivisonButNotAnnualPeriodBasedPayments
  const handleRemoveCoursesForDivisonButNotAnnualPeriodBasedPayments = (
    index,
    subIndex,
    subSubIndex,
    subSubSubIndex
  ) => {
    dispatch(
      deleteRemoveCoursesForDivisonButNotAnnualPeriodBasedPayments({
        index: index,
        divisionIndex: subIndex,
        subDivisionIndex: subSubIndex,
        courseIndex: subSubSubIndex,
      })
    );
  };

  // handle division based and not annal period based values
  const handleSubDivsionBasedNnotPeriodBasedValues = (
    event,
    index,
    divisionIndex,
    subDivisionIndex,
    courseIndex
  ) => {
    const { name, value } = event.target;
    console.log(name);
    dispatch(
      updateSubDivsionBasedNnotPeriodBasedValues({
        name,
        value,
        index,
        divisionIndex,
        subDivisionIndex,
        courseIndex,
      })
    );
  };

  // handle division based and not annal period based values
  const handleShowHideCoursesForSubDivisionNotAnnualPeriod = (
    index,
    divisionIndex,
    subDivisionIndex
  ) => {
    dispatch(
      updateShowHideCoursesForSubDivisionNotAnnualPeriod({
        index,
        divisionIndex,
        subDivisionIndex,
        visible:
          !paymentState[index].paymentBase.courseBasedPayment.divisions[
            divisionIndex
          ].educationalSubDivision[subDivisionIndex].visible,
      })
    );
  };

  // FOR MAJOR ANNUAL PERIOD AND MAJOR DIVISIONS
  const addCoursesForMajorAnnualPeriodAndMajorAndSubDivisionPayments = (
    index,
    subIndex,
    subSubIndex,
    subSubSubIndex,
    subSubSubSubIndex
  ) => {
    dispatch(
      createCoursesForMajorAnnualPeriodAndMajorAndSubDivisionPayments({
        index: index,
        divisionIndex: subIndex,
        subDivisionIndex: subSubIndex,
        periodIndex: subSubSubIndex,
        shiftIndex: subSubSubSubIndex,
        course: {
          Id: paymentState[index].paymentBase.courseBasedPayment.periods[
            subSubSubIndex
          ].shifts[subSubSubSubIndex].courses.length,
          courseName: "",
          creditHours: "",
          contactHours: "",
          instructorName: "",
          paymentAmount: {
            paymentAmountId:
              paymentState[index].paymentBase.courseBasedPayment.periods[
                subSubSubIndex
              ].shifts[subSubSubSubIndex].courses.paymentAmount
                .paymentAmountId + 1,
            hasDiscountRules: false,
            amount: "",
            grossAmount: "",
          },
        },
      })
    );
  };

  // remove courses from MajorAnnualPeriod And MajorAndSubDivision Payments
  const removeCoursesForMajorAnnualPeriodAndMajorAndSubDivisionPayments = (
    index,
    subIndex,
    subSubIndex,
    subSubSubIndex,
    subSubSubSubIndex,
    subSubSubSubSubIndex
  ) => {
    dispatch(
      deleteCoursesForMajorAnnualPeriodAndMajorAndSubDivisionPayments({
        index: index,
        divisionIndex: subIndex,
        subDivisionIndex: subSubIndex,
        periodIndex: subSubSubIndex,
        shiftIndex: subSubSubSubIndex,
        courseIndex: subSubSubSubSubIndex,
      })
    );
  };
  // remove courses from MajorAnnualPeriod And MajorAndSubDivision Payments
  const handleValueForMajorAnnualPeriodAndMajorDivisonPaymentBase = (
    event,
    index,
    divisionIndex,
    subDivisionIndex,
    periodIndex,
    shiftIndex,
    courseIndex
  ) => {
    const { name, value } = event.target;
    dispatch(
      updateCoursesForMajorAnnualPeriodAndMajorAndSubDivisionPayments({
        name,
        value,
        index,
        divisionIndex,
        subDivisionIndex,
        periodIndex,
        shiftIndex,
        courseIndex,
      })
    );
  };
  // hide or show courses from MajorAnnualPeriod And MajorAndSubDivision Payments
  const hideShowCoursesForMajorAnnualPeriodAndMajorDivisionPayments = (
    divisionIndex,
    subDivisionIndex,
    periodIndex
  ) => {
    dispatch(
      updatehideShowCoursesForMajorAnnualPeriodAndMajorDivisionPayments({
        index,
        divisionIndex,
        subDivisionIndex,
        periodIndex,
        value:
          !paymentState[index].paymentBase.courseBasedPayment.periods[
            periodIndex
          ].visible,
      })
    );
  };

  // FOR SUBANNUAL PERIOD AND BOTH MAJOR AND SUB-DIVISIONS
  // handle values
  const handleValueForSubAnnualPeriodAndMajorDivisonPaymentBase = (
    event,
    index,
    divisionIndex,
    subDivisionIndex,
    periodIndex,
    subPeriodIndex,
    shiftIndex,
    courseIndex
  ) => {
    const { name, value } = event.target;
    dispatch(
      updateValueForSubAnnualPeriodAndMajorDivisonPaymentBase({
        index,
        divisionIndex,
        subDivisionIndex,
        periodIndex,
        subPeriodIndex,
        shiftIndex,
        courseIndex,
        name,
        value,
      })
    );
  };

  // create courses
  const addCoursesForSubAnnualPeriodAndMajorAndSubDivisionPayments = (
    index,
    subIndex,
    subSubIndex,
    subSubSubIndex,
    subSubSubSubIndex,
    subSubSubSubSubIndex
  ) => {
    dispatch(
      createCoursesForSubAnnualPeriodAndMajorAndSubDivisionPayments({
        index: index,
        divisionIndex: subIndex,
        subDivisionIndex: subSubIndex,
        periodIndex: subSubSubIndex,
        subPeriodIndex: subSubSubSubIndex,
        shiftIndex: subSubSubSubSubIndex,
        course: {
          Id: paymentState[index].paymentBase.courseBasedPayment.periods[
            subSubSubIndex
          ].subPeriods[subSubSubSubIndex].shifts[subSubSubSubSubIndex].courses
            .length,
          courseName: "",
          creditHours: "",
          contactHours: "",
          instructorName: "",
          paymentAmount: {
            paymentAmountId:
              paymentState[index].paymentBase.courseBasedPayment.periods[
                subSubSubIndex
              ].subPeriods[subSubSubSubIndex].shifts[subSubSubSubSubIndex]
                .courses.paymentAmount.paymentAmountId + 1,
            hasDiscountRules: false,
            amount: "",
            grossAmount: "",
          },
        },
      })
    );
  };
  //  delete
  const removeCoursesForSubAnnualPeriodAndMajorAndSubDivisionPayments = (
    index,
    subIndex,
    subSubIndex,
    subSubSubIndex,
    subSubSubSubIndex,
    subSubSubSubSubIndex,
    subSubSubSubSubSubIndex
  ) => {
    dispatch(
      deleteCoursesForSubAnnualPeriodAndMajorAndSubDivisionPayments({
        index: index,
        divisionIndex: subIndex,
        subDivisionIndex: subSubIndex,
        periodIndex: subSubSubIndex,
        subPeriodIndex: subSubSubSubIndex,
        shiftIndex: subSubSubSubSubIndex,
        courseIndex: subSubSubSubSubSubIndex,
      })
    );
  };
  //  hide or show for
  const hideShowCoursesForSubAnnualPeriodAndMajorDivisionPayments = (
    index,
    divisionIndex,
    subDivisionIndex,
    periodIndex,
    subPeriodIndex
  ) => {
    dispatch(
      updateHideShowCoursesForSubAnnualPeriodAndMajorDivisionPayments({
        index,
        divisionIndex,
        subDivisionIndex,
        periodIndex,
        subPeriodIndex,
        value:
          !paymentState[index].paymentBase.courseBasedPayment.periods[
            periodIndex
          ].subPeriods[subPeriodIndex].visible,
      })
    );
  };

  // for major annual-divisions and not sub-divisions
  const handleValueForSubPeriodMajorDivisionNotSubDivisionCourses = (
    event,
    index,
    divisionIndex,
    periodIndex,
    shiftIndex,
    courseIndex
  ) => {
    const { name, value } = event.target;

    dispatch(
      updateValueForMajorPeriodMajorDivisionNotSubDivisionCourses({
        index,
        name,
        value,
        divisionIndex,
        periodIndex,
        shiftIndex,
        courseIndex,
      })
    );
  };
  //  =========================================
  // for course only based payments
  const handleCourseOnlyBasedPaymentsValues = (event, index, courseIndex) => {
    const { name, value } = event.target;
    dispatch(
      updateCourseOnlyBasedPaymentsValues({
        index,
        courseIndex,
        value,
        name,
      })
    );
  };
  const addCoursesToCourseOnlyBasedPaymentBases = (index) => {
    dispatch(
      createCoursesToCourseOnlyBasedPaymentBases({
        index,
        courses: {
          Id: paymentState[index].paymentBase.courseBasedPayment.courses.length,
          courseName: "",
          creditHours: "",
          contactHours: "",
          instructorName: "",
          paymentAmount: {
            paymentAmountId:
              paymentState[index].paymentBase.courseBasedPayment.courses
                .paymentAmount.paymentAmountId + 1,
            hasDiscountRules: false,
            amount: "",
            grossAmount: "",
          },
        },
      })
    );
  };
  const handleShowHideCoursesForCourseOnlyBasedBases = (index) => {
    dispatch(
      updateShowHideCoursesForCourseOnlyBasedBases({
        index,
        visible: !paymentState[index].paymentBase.courseBasedPayment.visible,
      })
    );
  };
  const removeCoursesToCourseOnlyBasedPaymentBases = (index, courseIndex) => {
    dispatch(
      deleteCoursesToCourseOnlyBasedPaymentBases({ index, courseIndex })
    );
  };

  return (
    <>
      {paymentState[index].paymentBase.courseBasedPayment.topVisibility &&
      paymentState[index].paymentBase.courseBasedPayment.value &&
      paymentState[index].paymentBase.advancedAnnualPeriodCheckbox &&
      paymentState[index].paymentBase.advancedEducationalDivisionCheckbox &&
      (majorDivisonSelected || subDivisionSelected) ? (
        <>
          {/* Case 1 */}
          <BasedOnAnnualPeriodsAndDivisions
            index={index}
            addCoursesForMajorAnnualPeriodAndMajorAndSubDivisionPayments={
              addCoursesForMajorAnnualPeriodAndMajorAndSubDivisionPayments
            }
            removeCoursesForMajorAnnualPeriodAndMajorAndSubDivisionPayments={
              removeCoursesForMajorAnnualPeriodAndMajorAndSubDivisionPayments
            }
            handleValueForMajorAnnualPeriodAndMajorDivisonPaymentBase={
              handleValueForMajorAnnualPeriodAndMajorDivisonPaymentBase
            }
            hideShowCoursesForMajorAnnualPeriodAndMajorDivisionPayments={
              hideShowCoursesForMajorAnnualPeriodAndMajorDivisionPayments
            }
            handleValueForSubAnnualPeriodAndMajorDivisonPaymentBase={
              handleValueForSubAnnualPeriodAndMajorDivisonPaymentBase
            }
            addCoursesForSubAnnualPeriodAndMajorAndSubDivisionPayments={
              addCoursesForSubAnnualPeriodAndMajorAndSubDivisionPayments
            }
            removeCoursesForSubAnnualPeriodAndMajorAndSubDivisionPayments={
              removeCoursesForSubAnnualPeriodAndMajorAndSubDivisionPayments
            }
            hideShowCoursesForSubAnnualPeriodAndMajorDivisionPayments={
              hideShowCoursesForSubAnnualPeriodAndMajorDivisionPayments
            }
            // for major annual-divisions and not sub-divisions
            handleValueForSubPeriodMajorDivisionNotSubDivisionCourses={
              handleValueForSubPeriodMajorDivisionNotSubDivisionCourses
            }
          />
        </>
      ) : (paymentState[index].paymentBase.courseBasedPayment.value &&
          !paymentState[index].paymentBase
            .advancedEducationalDivisionCheckbox &&
          paymentState[index].paymentBase.courseBasedPayment.topVisibility &&
          paymentState[index].paymentBase.courseBasedPayment.visible &&
          paymentState[index].paymentBase.advancedAnnualPeriodCheckbox) ||
        (paymentState[index].paymentBase.courseBasedPayment.value &&
          paymentState[index].paymentBase.courseBasedPayment.topVisibility &&
          paymentState[index].paymentBase.advancedEducationalDivisionCheckbox &&
          paymentState[index].paymentBase.courseBasedPayment.visible &&
          paymentState[index].paymentBase.advancedAnnualPeriodCheckbox &&
          !majorDivisonSelected &&
          !subDivisionSelected) ||
        (paymentState[index].paymentBase.courseBasedPayment.value &&
          paymentState[index].paymentBase.advancedEducationalDivisionCheckbox &&
          paymentState[index].paymentBase.courseBasedPayment.topVisibility &&
          paymentState[index].paymentBase.courseBasedPayment.visible &&
          !paymentState[index].paymentBase.advancedAnnualPeriodCheckbox &&
          !majorDivisonSelected &&
          !subDivisionSelected) ? (
        <>
          {/* Case 2 */}
          <BasedOnAnnualPeriodNotByDivisions
            index={index}
            handleMajorAnnualPeriodNotDivisionCourse={
              handleMajorAnnualPeriodNotDivisionCourse
            }
            removeMajorAnnualPeriodNotDivisionCourseAndCrhr={
              removeMajorAnnualPeriodNotDivisionCourseAndCrhr
            }
            addMajorAnnualPeriodNotDivisionCourseAndCrhr={
              addMajorAnnualPeriodNotDivisionCourseAndCrhr
            }
            handleSubAnnualPeriodNotDivisionCourse={
              handleSubAnnualPeriodNotDivisionCourse
            }
            removeSubAnnualPeriodNotDivisionCourseAndCrhr={
              removeSubAnnualPeriodNotDivisionCourseAndCrhr
            }
            addSubAnnualPeriodNotDivisionCourseAndCrhr={
              addSubAnnualPeriodNotDivisionCourseAndCrhr
            }
            handleShowHideCoursesForMajorAnnualPeriodAndNotDivisions={
              handleShowHideCoursesForMajorAnnualPeriodAndNotDivisions
            }
            handleShowHideCoursesForSubAnnualPeriodAndNotDivisions={
              handleShowHideCoursesForSubAnnualPeriodAndNotDivisions
            }
          />
        </>
      ) : paymentState[index].paymentBase.courseBasedPayment.value &&
        paymentState[index].paymentBase.courseBasedPayment.visible &&
        paymentState[index].paymentBase.courseBasedPayment.topVisibility &&
        paymentState[index].paymentBase.advancedEducationalDivisionCheckbox &&
        !paymentState[index].paymentBase.advancedAnnualPeriodCheckbox ? (
        <>
          {/* Case 3 */}
          <BasedNotOnAnnualPeriodAndOnDivisions
            index={index}
            handleNewCoursesForDivisonButNotAnnualPeriodBasedPayments={
              handleNewCoursesForDivisonButNotAnnualPeriodBasedPayments
            }
            handleRemoveCoursesForDivisonButNotAnnualPeriodBasedPayments={
              handleRemoveCoursesForDivisonButNotAnnualPeriodBasedPayments
            }
            handleSubDivsionBasedNnotPeriodBasedValues={
              handleSubDivsionBasedNnotPeriodBasedValues
            }
            handleShowHideCoursesForSubDivisionNotAnnualPeriod={
              handleShowHideCoursesForSubDivisionNotAnnualPeriod
            }
          />
        </>
      ) : paymentState[index].paymentBase.courseBasedPayment.value &&
        !paymentState[index].paymentBase.advancedEducationalDivisionCheckbox &&
        paymentState[index].paymentBase.courseBasedPayment.topVisibility &&
        !paymentState[index].paymentBase.advancedAnnualPeriodCheckbox ? (
        <>
          {/* Case 4 */}
          <BasedNotOnAnnualPeriodNotONDivisions
            handleCourseOnlyBasedPaymentsValues={
              handleCourseOnlyBasedPaymentsValues
            }
            addCoursesToCourseOnlyBasedPaymentBases={
              addCoursesToCourseOnlyBasedPaymentBases
            }
            handleShowHideCoursesForCourseOnlyBasedBases={
              handleShowHideCoursesForCourseOnlyBasedBases
            }
            removeCoursesToCourseOnlyBasedPaymentBases={
              removeCoursesToCourseOnlyBasedPaymentBases
            }
            index={index}
          />
        </>
      ) : (
        <></>
      )}
    </>
  );
};

export default CourseDetails;
