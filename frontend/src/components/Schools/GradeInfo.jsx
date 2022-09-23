import DynamicGrades from "../Utilities/DynamicFields/DynamicGrades";
import SmallCard from "../Utilities/Cards/SmallCard";
import Preview from "../Utilities/Buttons/Preview";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import {
  createGrades,
  updateGrades,
  deleteGrades,
  resetGrades,
  createEducationalDivisions,
  createEducationalSubDivisions,
  createSubDivisionSections,
  updateEducationalDivisions,
  updateEducationalSubDivisions,
  updateSubDivisionSections,
  deleteEducationalDivisions,
  deleteEducationalSubDivision,
  deleteSubDivisionSections,
} from "../../features/Grades&Divisions/grades&DivisionsSlice";

const GradeInfo = ({ formData, setFormData }) => {
  const dispatch = useDispatch();
  const gradeState = useSelector((state) => state.grades.gradeDivisionState);
  const educationalDivisionState = useSelector(
    (state) => state.grades.educationalDivision
  );
  // handling new grades

  const createNewEducationalDivisions = () => {
    // console.log("hey");
    // educationalDivisionState.length < 30 &&
    //   console.log(
    //     educationalDivisionState[educationalDivisionState.length - 1].id + 1
    //   );
    dispatch(
      createEducationalDivisions({
        id:
          educationalDivisionState[educationalDivisionState.length - 1].id + 1,
        divisionType:
          educationalDivisionState[educationalDivisionState.length - 1]
            .divisionType,
        divisionName:
          educationalDivisionState[educationalDivisionState.length - 1]
            .divisionName,
        educationalSubDivision: [
          {
            id: 0,
            subDivisionType: "Grade",
            subDivisionName: "", // e.g. KG, Primary, Secondary, etc...
            hasSection: false,
            hasMaximumNumberOfStudents: false,
            maximumNumberOfStudents: "",
            numberOfScholarships: "",
            numberOfSpecialCases: "",
            section: [
              {
                id: 0,
                gradeSectionName: "", // A, B, C or 1, 2, 3 ...
                hasMaximumNumberOfStudents: false,
                maximumNumberOfStudents: "",
                numberOfScholarships: "",
                numberOfSpecialCases: "",
              },
            ],
          },
        ],
      })
    );
  };
  const handleEducationalDivisions = (event, index) => {
    const { id, name, value } = event.target;
    dispatch(
      updateEducationalDivisions({
        educationalDivisionId: index,
        divisionType: id,
        divisionName: value,
        // educationalSubDivision: [
        //   {
        //     id: 0,
        //     subDivisionType: "Grade",
        //     subDivisionName: "", // e.g. KG, Primary, Secondary, etc...
        //     hasSection: false,
        //     hasMaximumNumberOfStudents: false,
        //     maximumNumberOfStudents: "",
        //     numberOfScholarships: "",
        //     numberOfSpecialCases: "",
        //     section: [
        //       {
        //         id: 0,
        //         gradeSectionName: "", // A, B, C or 1, 2, 3 ...
        //         hasMaximumNumberOfStudents: false,
        //         maximumNumberOfStudents: "",
        //         numberOfScholarships: "",
        //         numberOfSpecialCases: "",
        //       },
        //     ],
        //   },
        // ],
      })
    );
  };
  const createNewEducationalSubDivisions = (event, index) => {
    const { id, name, value } = event.target;
    dispatch(
      createEducationalSubDivisions({
        educationalDivisionId: index,
        id:
          educationalDivisionState[index].educationalSubDivision[
            educationalDivisionState[index].educationalSubDivision.length - 1
          ].id + 1,
        subDivisionType: "Grade",
        subDivisionName: "", // e.g. KG, Primary, Secondary, etc...
        hasSection: false,
        hasMaximumNumberOfStudents: false,
        maximumNumberOfStudents: "",
        numberOfScholarships: "",
        numberOfSpecialCases: "",
        section: [
          {
            id: 0,
            gradeSectionName: "", // A, B, C or 1, 2, 3 ...
            hasMaximumNumberOfStudents: false,
            maximumNumberOfStudents: "",
            numberOfScholarships: "",
            numberOfSpecialCases: "",
          },
        ],
      })
    );

    console.log(educationalDivisionState);
  };
  const handleEducationalSubDivisions = (event, divisionIndex, index) => {
    const { id, name, value } = event.target;
    // console.log("index: "+ index)
    dispatch(
      updateEducationalSubDivisions({
        educationalDivisionId: divisionIndex,
        educationalSubDivisionId: index,
        subDivisionType: id,
        subDivisionName: value,
      })
    );
  };

  const handleNewGrades = () => {
    gradeState.length < 30 &&
      dispatch(
        createGrades({
          id: gradeState[gradeState.length - 1].id + 1,
          educationLevelTypeName:
            gradeState[gradeState.length - 1].educationLevelTypeName,
          educationLevelName: "",
          divisionName: "",
          hasStageDivision: true,
          hasDepartmentDivision: false,
          hasFacultyDivision: false,
          hasCustomDivision: false,
          categoryToUpdate: "divisions",
          maxNumOfStudents: "",
        })
      );

    // setFormData({
    //   ...formData,
    //   annualPeriod: [
    //     ...formDataPeriod,
    //     {
    //       periodType: formDataPeriod[formDataPeriod.length - 1].periodType,
    //       PeriodTypeName: formDataPeriod[formDataPeriod.length - 1].periodTypeName,
    //       annualPeriodStartDate: new Date(),
    //       annualPeriodEndDate: new Date(),
    //     },
    //   ],
    // });
  };
  const handleUpdateGrades = (event, index) => {
    const { id, name, value } = event.target;
    gradeState.map((baseGrade) => {
      console.log("id, name, value: " + id + " " + name + " " + value);
      dispatch(
        updateGrades({
          id: index,
          categoryToUpdate: name,
          educationLevelTypeName: id,
          gradeDetailsType: id,
          divisionName: id,
          educationLevelName: value,
          hasStageDivision: !baseGrade.hasStageDivision,
          hasDepartmentDivision: !baseGrade.hasDepartmentDivision,
          hasFacultyDivision: !baseGrade.hasFacultyDivision,
          hasCustomDivision: !baseGrade.hasCustomDivision,
          hasRegularShift: !baseGrade.hasRegularShift,
          hasExtensionShift: !baseGrade.hasExtensionShift,
          hasWeekendShift: !baseGrade.hasWeekendShift,
          hasCustomShift: !baseGrade.hasCustomShift,
        })
      );
    });
  };

  const resetAllGrades = () => {
    if (gradeState.length > 0) {
      dispatch(resetGrades({ id: gradeState[0].id }));
    }
  };

  const removeGrades = (index) => {
    // const list = formDataPeriod;
    // list.splice(index, 1);
    // setFormData({ ...formData, annualPeriod: list });
    dispatch(deleteGrades({ id: index }));
  };

  const removeEducationalSubdivision = (index, subIndex) => {
    console.log("index: " + index);
    console.log("subIndex: " + subIndex);
    dispatch(
      deleteEducationalSubDivision({
        educationalDivisionId: index,
        educationalSubDivisionId: subIndex,
      })
    );
  };

  return (
    <>
      <div className="flex gapfull">
        <div className="school-info pt1">
          <div>
            <h1 className="form__titles--mid">
              {" "}
              Let us start filling out schools Grade info's
            </h1>
            <h3 className="form__subtitle">Remember start form lower grades</h3>
          </div>
          <>
            <br />
            <br />
            <br />
          </>
          <DynamicGrades
            formData={formData}
            setFormData={setFormData}
            handleNewGrades={handleNewGrades}
            handleUpdateGrades={handleUpdateGrades}
            removeGrades={removeGrades}
            resetAllGrades={resetAllGrades}
            createNewEducationalDivisions={createNewEducationalDivisions}
            handleEducationalDivisions={handleEducationalDivisions}
            handleEducationalSubDivisions={handleEducationalSubDivisions}
            createNewEducationalSubDivisions={createNewEducationalSubDivisions}
            removeEducationalSubdivision={removeEducationalSubdivision}
          />
        </div>
        {/* <div className="flex-ccc">
          <SmallCard formData={formData} />
          <Preview />
        </div> */}
      </div>
    </>
  );
};

export default GradeInfo;
