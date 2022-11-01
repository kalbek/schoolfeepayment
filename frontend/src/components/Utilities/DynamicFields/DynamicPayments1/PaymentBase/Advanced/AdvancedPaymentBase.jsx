import { useSelector, useDispatch } from "react-redux";
import AnnualPeriod from "./AnnualPeriod";
import MajorDivision from "./MajorDivision";
import SubDivision from "./SubDivision";
import CourseUnits from "./CourseUnits";
// import CourseTypes from "./CourseTypes";
import CourseType from "./CourseType/CourseType";
import {
  updateAdvancedPaymentBaseAnnualPeriodCheckboxSelection,
  updateAdvancedPaymentBaseAnnualPeriodTypeRadioSelection,
  updateAdvancedPaymentBaseEducationalDivisionCheckboxSelection,
  updateAdvancedPaymentBaseMajorEducationalDivisionCheckboxSelection,
  updateAdvancedPaymentBaseEducationalSubDivisionCheckboxSelection,
  updateAdvancedPaymentBaseCourseUnitsCheckboxSelection,
  updateAdvancedPaymentBaseCourseUnitsTypeRadioSelection,
  updateAdvancedPaymentBaseCourseTypeCheckboxSelection,
  updateAdvancedPaymentBaseDepartmentCourseTypeCheckboxSelection,
  updateAdvancedPaymentBaseCourseBySubDivisionCheckboxSelection,
  createNewCoursesForAdvancedPaymentBase,
  deleteCoursesForAdvancedPaymentBase,
  updateAdvancePaymentBaseCourseNames,
  updateAdvancePaymentBaseCreditHours,
  upadateShowHideCourses,
  addCoursesToPaymentBases,
  updateAdvancedCourseBasedPaymentVisibility,
  addOrRemoveDivisionsToPaymentBasedCourses,
  updatePeriodsForCourseBasedPayments,
} from "../../../../../../features/paymentBase/paymentBaseSlice";

const AdvancedPaymentBase = ({ singlePayment, index }) => {
  const paymentState = useSelector((state) => state.payments.paymentState);
  const topLevelPeriod = useSelector((state) => state.periods.topLevelPeriod);
  const periodState = useSelector((state) => state.periods.topLevelPeriod);
  const educationalDivisionState = useSelector(
    (state) => state.educationalDivisions.educationalDivision
  );

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
  const handleAdvancedPaymentBaseMajorEducationalDivisionCheckboxSelection =
    () => {
      dispatch(
        updateAdvancedPaymentBaseMajorEducationalDivisionCheckboxSelection({
          paymentId: index,
          value:
            !singlePayment.paymentBase.advancedMajorEducationalDivisionCheckbox,
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
  const handleAdvancedPaymentBaseCourseTypeCheckboxSelection = (index) => {
    dispatch(
      updateAdvancedPaymentBaseCourseTypeCheckboxSelection({
        paymentId: index,
        value: !singlePayment.paymentBase.courseBasedPayment.value,
      })
    );
    educationalDivisionState.map((division) => {
      dispatch(
        addOrRemoveDivisionsToPaymentBasedCourses({
          paymentId: index,
          divisions: division,
        })
      );
    });
    topLevelPeriod.map((topPeriod) => {
      paymentState[index].paymentBase.advancedAnnualPeriodType.charAt(0) === "p"
        ? dispatch(
            updatePeriodsForCourseBasedPayments({
              paymentId: index,
              periods: topPeriod,
            })
          )
        : topPeriod.subPeriods.map((subPeriod) => {
            dispatch(
              updatePeriodsForCourseBasedPayments({
                paymentId: index,
                periods: subPeriod,
              })
            );
          });
    });

    dispatch(
      addCoursesToPaymentBases({
        paymentId: index,
        courses: {
          Id: 0,
          courseName: "",
          creditHours: "",
          contactHours: "",
          instructorName: "",
        },
      })
    );
  };
  const handleAdvancedPaymentBaseCourseByDivisionCheckboxSelection = () => {
    // also add all divisions from grade & division state to payment state base divisions
    dispatch(
      updateAdvancedPaymentBaseDepartmentCourseTypeCheckboxSelection({
        paymentId: index,
        target: "not-for-division",
        value: !singlePayment.paymentBase.courseBasedPayment.basedOnDivision,
      })
    );
  };
  const handleAdvancedPaymentBaseCourseBySubDivisionCheckboxSelection = () => {
    // also add all divisions from grade & division state to payment state base divisions
    console.log(educationalDivisionState);
    dispatch(
      updateAdvancedPaymentBaseCourseBySubDivisionCheckboxSelection({
        paymentId: index,
        target: "not-for-division",
        value: !singlePayment.paymentBase.courseBasedPayment.basedOnSubDivision,
      })
    );
  };

  const handleNewCoursesForAdvancedPaymentBase = (
    index,
    subIndex,
    subSubIndex,
    subSubSubIndex
  ) => {
    dispatch(
      createNewCoursesForAdvancedPaymentBase({
        paymentId: index,
        divisionId: subIndex,
        subDivisionId: subSubIndex,
        subPeriodIndex: subSubSubIndex,
        courses: {
          Id: singlePayment.paymentBase.courseBasedPayment.divisions[subIndex]
            .educationalSubDivision[subSubIndex].subPeriods[subSubSubIndex]
            .courses.length,
          courseName: "",
          creditHours: "",
          contactHours: "",
          instructorName: "",
        },
      })
    );
  };

  const handleRemoveCourses = (
    index,
    subIndex,
    subSubIndex,
    subSubSubIndex,
    subSubSubSubIndex
  ) => {
    dispatch(
      deleteCoursesForAdvancedPaymentBase({
        paymentIndex: index,
        divisionIndex: subIndex,
        subDivisionIndex: subSubIndex,
        subPeriodIndex: subSubSubIndex,
        courseIndex: subSubSubSubIndex,
      })
    );
  };

  const handleAdvancePaymentBaseCourseNameValues = (
    event,
    index,
    divisionIndex,
    subDivisionIndex,
    subPeriodIndex,
    courseIndex
  ) => {
    const { name, value } = event.target;
    dispatch(
      updateAdvancePaymentBaseCourseNames({
        index,
        divisionIndex,
        subDivisionIndex,
        subPeriodIndex,
        courseIndex,
        name,
        value,
      })
    );
  };

  const handleShowHideCourses = (
    index,
    divisionIndex,
    subDivisionIndex,
    subPeriodIndex
  ) => {
    console.log("eys");
    console.log(
      paymentState[index].paymentBase.courseBasedPayment.divisions[
        divisionIndex
      ].educationalSubDivision[subDivisionIndex].subPeriods[subPeriodIndex]
        .visible
    );
    dispatch(
      upadateShowHideCourses({
        index,
        divisionIndex,
        subDivisionIndex,
        subPeriodIndex,
        value:
          !paymentState[index].paymentBase.courseBasedPayment.divisions[
            divisionIndex
          ].educationalSubDivision[subDivisionIndex].subPeriods[subPeriodIndex]
            .visible,
      })
    );
  };
  const handleNothing = () => {};

  const handleAdvancedCoursesBasedPaymentVisibility = (index) => {
    dispatch(
      updateAdvancedCourseBasedPaymentVisibility({
        paymentId: index,
        value: !paymentState[index].paymentBase.courseBasedPayment.visible,
      })
    );
  };

  const handleAdvancePaymentBaseRemoveCourses = () => {};
  const handleAdvancedPaymentBaseApplyPreviousRulesForCourse = () => {};

  // DEFINING METHODS FOR CREDIT HOURS

  return (
    <>
      <div>
        <div>
          <div>
            <div className=" flex-start">
              <div className="flex-c ml-1">
                <AnnualPeriod
                  handleAdvancedPaymentBaseAnnualPeriodCheckboxSelection={
                    handleAdvancedPaymentBaseAnnualPeriodCheckboxSelection
                  }
                  handleAdvancedPaymentBaseAnnualPeriodTypeRadioSelection={
                    handleAdvancedPaymentBaseAnnualPeriodTypeRadioSelection
                  }
                  index={index}
                />
              </div>
              &nbsp; &nbsp;
              <section>
                <div className="flex-c flex-start">
                  {/* stages */}
                  <MajorDivision
                    handleAdvancedPaymentBaseEducationalDivisionCheckboxSelection={
                      handleAdvancedPaymentBaseEducationalDivisionCheckboxSelection
                    }
                    handleAdvancedPaymentBaseMajorEducationalDivisionCheckboxSelection={
                      handleAdvancedPaymentBaseMajorEducationalDivisionCheckboxSelection
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
              </section>
              &nbsp; &nbsp;
              <section>
                <div className="flex-c flex-start">
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
          <CourseType
            index={index}
            handleAdvancedPaymentBaseCourseTypeCheckboxSelection={
              handleAdvancedPaymentBaseCourseTypeCheckboxSelection
            }
            handleNewCoursesForAdvancedPaymentBase={
              handleNewCoursesForAdvancedPaymentBase
            }
            handleRemoveCourses={handleRemoveCourses}
            handleAdvancePaymentBaseCourseNameValues={
              handleAdvancePaymentBaseCourseNameValues
            }
            handleAdvancedPaymentBaseCourseByDivisionCheckboxSelection={
              handleAdvancedPaymentBaseCourseByDivisionCheckboxSelection
            }
            handleAdvancedPaymentBaseCourseBySubDivisionCheckboxSelection={
              handleAdvancedPaymentBaseCourseBySubDivisionCheckboxSelection
            }
            handleShowHideCourses={handleShowHideCourses}
            handleNothing={handleNothing}
            handleAdvancedCoursesBasedPaymentVisibility={
              handleAdvancedCoursesBasedPaymentVisibility
            }
            // sofar
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
