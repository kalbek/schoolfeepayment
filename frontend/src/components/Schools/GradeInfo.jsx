import DynamicGrades from "../Utilities/DynamicFields/DynamicGrades";
import SmallCard from "../Utilities/Cards/SmallCard";
import Preview from "../Utilities/Buttons/Preview";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import {
  handleEducationalDivisions,
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
  const educationalDivisionState = useSelector(
    (state) => state.educationalDivisions.educationalDivision
  );

  const handleEducationalDivisionAndSubDivisionTypes = (event, index) => {
    const { id, name, value } = event.target;
    educationalDivisionState.map((baseGrade) => {
      dispatch(
        handleEducationalDivisions({
          id: index,
          categoryToUpdate: name,
          educationSubDivisionName: id,
          gradeDetailsType: id,
          divisionType: id,
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

  const createNewEducationalDivisions = () => {
    dispatch(
      createEducationalDivisions({
        id:
          educationalDivisionState[educationalDivisionState.length - 1].id + 1,
        divisionType:
          educationalDivisionState[educationalDivisionState.length - 1]
            .divisionType,
        divisionName: "",
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

  const createNewEducationalSubDivisions = (event, index) => {
    const { id, name, value } = event.target;
    dispatch(
      createEducationalSubDivisions({
        educationalDivisionId: index,
        id:
          educationalDivisionState[index].educationalSubDivision[
            educationalDivisionState[index].educationalSubDivision.length - 1
          ].id + 1,
        subDivisionType:
          educationalDivisionState[index].educationalSubDivision[
            educationalDivisionState[index].educationalSubDivision.length - 1
          ].subDivisionType,
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

  const handleUpdateEducationalDivisions = (event, index) => {
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

  const handleUpdateEducationalSubDivisions = (event, divisionIndex, index) => {
    const { id, value } = event.target;
    dispatch(
      updateEducationalSubDivisions({
        educationalDivisionId: divisionIndex,
        educationalSubDivisionId: index,
        subDivisionType: id,
        subDivisionName: value,
      })
    );
  };

  const removeEducationalDivisions = (index) => {
    dispatch(
      deleteEducationalDivisions({
        educationalDivisionId: index,
      })
    );
  };

  const removeEducationalSubdivisions = (index, subIndex) => {
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
            handleEducationalDivisionAndSubDivisionTypes={
              handleEducationalDivisionAndSubDivisionTypes
            }
            createNewEducationalDivisions={createNewEducationalDivisions}
            createNewEducationalSubDivisions={createNewEducationalSubDivisions}
            handleUpdateEducationalDivisions={handleUpdateEducationalDivisions}
            handleUpdateEducationalSubDivisions={
              handleUpdateEducationalSubDivisions
            }
            removeEducationalDivisions={removeEducationalDivisions}
            removeEducationalSubdivisions={removeEducationalSubdivisions}
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
