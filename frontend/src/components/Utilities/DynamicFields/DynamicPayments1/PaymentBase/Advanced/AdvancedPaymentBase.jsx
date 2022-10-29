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
  updateAdvancedPaymentBaseDepartmentCourseTypeCheckboxSelection,
  createNewCoursesForAdvancedPaymentBase,
  deleteCoursesForAdvancedPaymentBase,
  updateAdvancePaymentBaseCourseNames,
  upadateShowHideCourses,
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
  const handleAdvancedPaymentBaseCourseByDepartmantCheckboxSelection = () => {
    dispatch(
      updateAdvancedPaymentBaseDepartmentCourseTypeCheckboxSelection({
        paymentId: index,
        value: !singlePayment.paymentBase.courseBasedPayment.basedOnDivision,
      })
    );
  };

  const handleNewCoursesForAdvancedPaymentBase = () => {
    paymentState.map((payment) => {
      if (payment.Id === index) {
        dispatch(
          createNewCoursesForAdvancedPaymentBase({
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

  const handleRemoveCourses = (index, subIndex) => {
    paymentState.map((payment) => {
      if (payment.Id === index) {
        dispatch(
          deleteCoursesForAdvancedPaymentBase({
            paymentId: index,
            courseId: subIndex,
          })
        );
      }
    });
  };

  const handleAdvancePaymentBaseCoursNameValues = (event, index, subIndex) => {
    const { name, value } = event.target;
    console.log("name: " + name);
    // console.log("value: " + value);
    paymentState.map((payment) => {
      if (payment.Id === index) {
        dispatch(
          updateAdvancePaymentBaseCourseNames({
            paymentId: index,
            courseId: subIndex,
            valueToUpdate: name,
            courseName: value,
            creditHours: value,
          })
        );
      }
    });
  };

  const handleShowHideCourses = (index) => {
    paymentState.map((payment) => {
      if (payment.Id === index) {
        console.log("tew: " + payment.paymentBase.courseBasedPayment.display);
        dispatch(
          upadateShowHideCourses({
            paymentId: index,
            value: !payment.paymentBase.courseBasedPayment.display,
          })
        );
      }
    });
  };
  const handleNothing = () => {};

  const handleAdvancedPaymentBaseCourseAdding = () => {};
  const handleAdvancePaymentBaseRemoveCourses = () => {};
  const handleAdvancedPaymentBaseApplyPreviousRulesForCourse = () => {};

  // DEFINING METHODS FOR CREDIT HOURS
  // const handleAdvancedCreditHoursBaseSelection = () => {};

  return (
    <>
      <div>
        <div>
          <div>
            <div className="flex-cs">
              <AnnualPeriod
                handleAdvancedPaymentBaseAnnualPeriodCheckboxSelection={
                  handleAdvancedPaymentBaseAnnualPeriodCheckboxSelection
                }
                handleAdvancedPaymentBaseAnnualPeriodTypeRadioSelection={
                  handleAdvancedPaymentBaseAnnualPeriodTypeRadioSelection
                }
                index={index}
              />
              <section>
                <div className="flex-cs flex-start field-group-container">
                  <div className="flex-c flex-start">
                    {/* stages */}
                    <MajorDivision
                      handleAdvancedPaymentBaseEducationalDivisionCheckboxSelection={
                        handleAdvancedPaymentBaseEducationalDivisionCheckboxSelection
                      }
                      index={index}
                    />

                    {/* grade */}
                    <SubDivision
                      handleAdvancedPaymentBaseEducationalSubDivisionCheckboxSelection={
                        handleAdvancedPaymentBaseEducationalSubDivisionCheckboxSelection
                      }
                      index={index}
                    />
                  </div>
                  <CourseUnits
                    handleAdvancedPaymentBaseCourseUnitsCheckboxSelection={
                      handleAdvancedPaymentBaseCourseUnitsCheckboxSelection
                    }
                    handleAdvancedPaymentBaseCourseUnitsTypeRadioSelection={
                      handleAdvancedPaymentBaseCourseUnitsTypeRadioSelection
                    }
                    index={index}
                  />
                </div>
              </section>
            </div>
          </div>
          <CourseTypes
            index={index}
            handleAdvancedPaymentBaseCourseTypeCheckboxSelection={
              handleAdvancedPaymentBaseCourseTypeCheckboxSelection
            }
            handleNewCoursesForAdvancedPaymentBase={
              handleNewCoursesForAdvancedPaymentBase
            }
            handleRemoveCourses={handleRemoveCourses}
            handleAdvancePaymentBaseCoursNameValues={
              handleAdvancePaymentBaseCoursNameValues
            }
            handleAdvancedPaymentBaseCourseByDepartmantCheckboxSelection={
              handleAdvancedPaymentBaseCourseByDepartmantCheckboxSelection
            }
            handleShowHideCourses={handleShowHideCourses}
            handleNothing={handleNothing}
            // sofar

            handleAdvancedPaymentBaseCourseAdding={
              handleAdvancedPaymentBaseCourseAdding
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
