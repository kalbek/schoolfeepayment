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
  updateAdvancedPaymentBaseCourseBySubDivisionCheckboxSelection,
  createNewCoursesForAdvancedPaymentBase,
  deleteCoursesForAdvancedPaymentBase,
  updateAdvancePaymentBaseCourseNames,
  updateAdvancePaymentBaseCreditHours,
  upadateShowHideCourses,
  addCoursesToPaymentBases,
} from "../../../../../../features/paymentBase/paymentBaseSlice";

const AdvancedPaymentBase = ({ singlePayment, index }) => {
  const paymentState = useSelector((state) => state.payments.paymentState);
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
  const handleAdvancedPaymentBaseCourseTypeCheckboxSelection = (
    index,
    divisionIndex,
    subDivisionIndex,
    courseIndex
  ) => {
    // console.log(":payement_index " + index);
    // console.log(":department_Index" + subIndex);
    // console.log(":year_Index" + subSubIndex);
    // console.log(":course_Index" + subSubSubIndex);
    educationalDivisionState.map((division) => {
      dispatch(
        updateAdvancedPaymentBaseCourseTypeCheckboxSelection({
          paymentId: index,
          // divisionIndex for department
          divisionIndex: divisionIndex,
          // subDivisionIndex for year
          subDivisionIndex: subDivisionIndex,
          // subSubDivision for courses
          courseIndex: courseIndex,
          value: !singlePayment.paymentBase.courseBasedPayment.value,
          divisions: division,
          courses: {
            Id: 0,
            courseName: "",
            creditHours: "",
            contactHours: "",
            instructorName: "",
          },
        })
      );
    });

    dispatch(
      addCoursesToPaymentBases({
        paymentId: index,
        divisionIndex: divisionIndex,
        subDivisionIndex: subDivisionIndex,
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
    console.log("heres");
    console.log(educationalDivisionState);
    dispatch(
      updateAdvancedPaymentBaseDepartmentCourseTypeCheckboxSelection({
        paymentId: index,
        target: "not-for-division",
        value: !singlePayment.paymentBase.courseBasedPayment.basedOnDivision,
      })
    );

    // educationalDivisionState.map((division) => {
    //   dispatch(
    //     updateAdvancedPaymentBaseDepartmentCourseTypeCheckboxSelection({
    //       paymentId: index,
    //       target: "for-division",
    //       division: {
    //         Id: division.id,
    //         divisionType: division.divisionType,
    //         educationalSubDivision: division.educationalSubDivision,
    //       },
    //     })
    //   );
    // });
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
    subSubIndex
  ) => {
    paymentState.map((payment) => {
      // console.log("index: " + index);
      // console.log("subIndex: " + subIndex);
      // console.log("subSubIndex: " + subSubIndex);
      // console.log("subSubSubIndex: " + subSubSubIndex);
      if (payment.Id === index) {
        dispatch(
          createNewCoursesForAdvancedPaymentBase({
            paymentId: index,
            divisionId: subIndex,
            subDivisionId: subSubIndex,
            // courseId: subSubSubIndex,
            courses: {
              Id: singlePayment.paymentBase.courseBasedPayment.divisions[
                subIndex
              ].educationalSubDivision[subSubIndex].courses.length,
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

  const handleRemoveCourses = (
    index,
    subIndex,
    subSubIndex,
    subSubSubIndex
  ) => {
    console.log("paymentIndex: " + index);
    console.log("dept index: " + subIndex);
    console.log("year Index: " + subSubIndex);
    console.log("course Index: " + subSubSubIndex);
    paymentState.map((payment) => {
      console.log(payment);
      if (payment.Id === index) {
        dispatch(
          deleteCoursesForAdvancedPaymentBase({
            paymentId: index,
            divisionId: subIndex,
            subDivisionId: subSubIndex,
            courseId: subSubSubIndex,
          })
        );
      }
    });
  };

  const handleAdvancePaymentBaseCourseNameValues = (
    event,
    index,
    divisionIndex,
    subDivisionIndex,
    courseIndex
  ) => {
    const { name, value } = event.target;
    // console.log("value: " + value);
    dispatch(
      updateAdvancePaymentBaseCourseNames({
        paymentId: index,
        divisionId: divisionIndex,
        subDivisionId: subDivisionIndex,
        courseId: courseIndex,
        courseName: value,
      })
    );
  };
  const handleAdvancePaymentBaseCreditHourValues = (
    event,
    index,
    divisionIndex,
    subDivisionIndex,
    courseIndex
  ) => {
    const { value } = event.target;
    // console.log("value: " + value);
    dispatch(
      updateAdvancePaymentBaseCreditHours({
        paymentId: index,
        divisionId: divisionIndex,
        subDivisionId: subDivisionIndex,
        courseId: courseIndex,
        creditHours: value,
      })
    );
  };

  const handleShowHideCourses = (index, divisionIndex, subDivisionIndex) => {
    console.log("divisionIndex: " + divisionIndex);
    console.log("subDivisionIndex: " + subDivisionIndex);
    console.log("wait");
    // console.log(paymentState[index].paymentBase.courseBasedPayment.divisions);
    dispatch(
      upadateShowHideCourses({
        paymentId: index,
        divisionId: divisionIndex,
        subDivisionId: subDivisionIndex,
        // value: !payment.paymentBase.courseBasedPayment.display,
        value:
          !paymentState[index].paymentBase.courseBasedPayment.divisions[
            divisionIndex
          ].educationalSubDivision[subDivisionIndex].visible,
      })
    );
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
            <div className="flex gap3p5  flex-start">
              <div className="flex-c">
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
              <section>
                <div className="flex-cs  flex-start field-group-container">
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
            handleAdvancePaymentBaseCourseNameValues={
              handleAdvancePaymentBaseCourseNameValues
            }
            handleAdvancePaymentBaseCreditHourValues={
              handleAdvancePaymentBaseCreditHourValues
            }
            handleAdvancedPaymentBaseCourseByDivisionCheckboxSelection={
              handleAdvancedPaymentBaseCourseByDivisionCheckboxSelection
            }
            handleAdvancedPaymentBaseCourseBySubDivisionCheckboxSelection={
              handleAdvancedPaymentBaseCourseBySubDivisionCheckboxSelection
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
