// import DynamicGrades from "../Utilities/DynamicFields/DynamicGrades";
import EducationalDivisions from "../Utilities/DynamicFields/EducationalDivisions/EducationalDivisions";
import SmallCard from "../Utilities/Cards/SmallCard";
import Preview from "../Utilities/Buttons/Preview";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import {
  updateDivisionsAndSubDivisions,
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

  const handleEducationalDivisionAndSubDivisionTypes = (
    event,
    divisionIndex
  ) => {
    const { id, name, value } = event.target;
    educationalDivisionState.map((baseGrade) => {
      dispatch(
        updateDivisionsAndSubDivisions({
          id: divisionIndex,
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
    const lastDivision =
      educationalDivisionState[educationalDivisionState.length - 1];
    const lastSubDivision = lastDivision.educationalSubDivision[0];
    dispatch(
      createEducationalDivisions({
        id: lastDivision.id + 1,
        divisionType: lastDivision.divisionType,
        subDivisionType:
          lastDivision.educationalSubDivision.length > 0
            ? lastDivision.educationalSubDivision[0].subDivisionName
            : "Grade",
        // subDivisionType: "Grade",
        divisionName: "",
        educationalSubDivision: [
          {
            id: 0,
            subDivisionType: lastSubDivision.subDivisionType,
            subDivisionName: "", // e.g. KG, Primary, Secondary, etc...
            hasSection: false,
            hasMaximumNumberOfStudents: false,
            maximumNumberOfStudents: "",
            numberOfScholarships: "",
            numberOfSpecialCases: "",
            section: [],
          },
        ],
      })
    );
  };

  const createNewEducationalSubDivisions = (divisionIndex) => {
    dispatch(
      createEducationalSubDivisions({
        educationalDivisionId: divisionIndex,
        id:
          educationalDivisionState[divisionIndex].educationalSubDivision[
            educationalDivisionState[divisionIndex].educationalSubDivision
              .length - 1
          ].id + 1,
        subDivisionType:
          educationalDivisionState[divisionIndex].educationalSubDivision[
            educationalDivisionState[divisionIndex].educationalSubDivision
              .length - 1
          ].subDivisionType,
        subDivisionName: "", // e.g. KG, Primary, Secondary, etc...
        hasSection: false,
        hasMaximumNumberOfStudents: false,
        maximumNumberOfStudents: "",
        numberOfScholarships: "",
        numberOfSpecialCases: "",
        section: [],
      })
    );
  };

  const createNewSubDivisonSections = (divisionIndex, subDivisionIndex) => {
    dispatch(
      createSubDivisionSections({
        educationalDivisionId: divisionIndex,
        educationalSubDivisionID: subDivisionIndex,
        section: {
          id:
            educationalDivisionState[divisionIndex].educationalSubDivision[
              subDivisionIndex
            ].section.length === 0
              ? 0
              : educationalDivisionState[divisionIndex].educationalSubDivision[
                  subDivisionIndex
                ].section[
                  educationalDivisionState[divisionIndex]
                    .educationalSubDivision[subDivisionIndex].section.length - 1
                ].id + 1,
          sectionName: "",
          hasMaximumNumberOfStudents: false,
          maximumNumberOfStudents: "",
          numberOfScholarships: "",
          numberOfSpecialCases: "",
        },
      })
    );
  };

  const handleUpdateEducationalDivisions = (event, divisionIndex) => {
    const { id, value } = event.target;
    dispatch(
      updateEducationalDivisions({
        educationalDivisionId: divisionIndex,
        divisionType: id,
        divisionName: value,
      })
    );
  };

  const handleUpdateEducationalSubDivisions = (
    event,
    divisionIndex,
    subDivisionIndex
  ) => {
    const { id, value } = event.target;
    dispatch(
      updateEducationalSubDivisions({
        educationalDivisionId: divisionIndex,
        educationalSubDivisionId: subDivisionIndex,
        subDivisionType: id,
        subDivisionName: value,
      })
    );
  };
  const handleUpdateSubDivisionSection = (
    event,
    divisionIndex,
    subDivisionIndex,
    sectionIndex
  ) => {
    const { id, value } = event.target;
    console.log(value);
    dispatch(
      updateSubDivisionSections({
        educationalDivisionId: divisionIndex,
        educationalSubDivisionId: subDivisionIndex,
        subDivisionSectionId: sectionIndex,
        sectionName: value,
        hasMaximumNumberOfStudents: false,
        maximumNumberOfStudents: "",
      })
    );
  };

  const removeEducationalSubdivisions = (divisionIndex, subIndex) => {
    dispatch(
      deleteEducationalSubDivision({
        educationalDivisionId: divisionIndex,
        educationalSubDivisionId: subIndex,
      })
    );
  };
  const removeSubDivisonSections = (divisionIndex, subIndex, subSubIndex) => {
    console.log("divisionIndex: " + divisionIndex);
    console.log("subIndex: " + subIndex);
    console.log("subSubIndex: " + subSubIndex);
    dispatch(
      deleteSubDivisionSections({
        educationalDivisionId: divisionIndex,
        educationalSubDivisionId: subIndex,
        subDivisionSectionId: subSubIndex,
      })
    );
  };

  const removeEducationalDivisions = (divisionIndex) => {
    console.log("div Indx: " + divisionIndex);
    dispatch(
      deleteEducationalDivisions({
        educationalDivisionId: divisionIndex,
      })
    );
  };

  return (
    <>
      <EducationalDivisions
        formData={formData}
        setFormData={setFormData}
        handleEducationalDivisionAndSubDivisionTypes={
          handleEducationalDivisionAndSubDivisionTypes
        }
        createNewEducationalDivisions={createNewEducationalDivisions}
        createNewEducationalSubDivisions={createNewEducationalSubDivisions}
        createNewSubDivisonSections={createNewSubDivisonSections}
        handleUpdateEducationalDivisions={handleUpdateEducationalDivisions}
        handleUpdateEducationalSubDivisions={
          handleUpdateEducationalSubDivisions
        }
        handleUpdateSubDivisionSection={handleUpdateSubDivisionSection}
        removeSubDivisonSections={removeSubDivisonSections}
        removeEducationalSubdivisions={removeEducationalSubdivisions}
        removeEducationalDivisions={removeEducationalDivisions}
      />
    </>
  );
};
export default GradeInfo;
