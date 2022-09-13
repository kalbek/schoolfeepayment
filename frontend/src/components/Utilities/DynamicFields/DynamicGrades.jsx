import RemoveButton from "../Buttons/RemoveButton";
import RemoveLinksButton from "../Buttons/RemoveLinksButton";
import "../../../Styles/dynamicButtonsStyle.css";
import { useEffect, useState } from "react";
import AddMoreButton from "../Buttons/AddMoreButton";
const DynamicGrades = ({
  formData,
  setFormData,
  removeGrades,
  handleGradeLevels,
  handleGradesSelection,
  handleGrades,
}) => {
  const formDataGrades = [...formData.schoolGrade];

  const handleNewEducationLevel = () => {
    formDataGrades.length < 30 &&
      setFormData({
        ...formData,
        schoolGrade: [
          ...formDataGrades,
          {
            gradeType: formDataGrades[formDataGrades.length - 1].gradeType,
            gradeName: formDataGrades[formDataGrades.length - 1].gradeName,
            gradeGroup: formDataGrades[formDataGrades.length - 1].gradeGroup,
            hasSection: false,
            hasShift: false,
            gradeCategories: [
              {
                hasGradeCategoryLevel: false,
                hasGradeCategoryFaculty: false,
                hasCustomGradeCategory: false,
                gradeCategoryLevelName: "",
                gradeCategoryFacultyName: "",
                customGradeCategoryName: "",
              },
            ],
          },
        ],
      });
  };
  const removeAllGrades = (index) => {
    const list = formDataGrades;
    list.splice(index, 1);
    setFormData({ ...formData, schoolGrade: list });
  };

  const level = [
    { id: "1", label: "Kindergarten", value: "Kindergarten" },
    { id: "1", label: "Lower Primary", value: "lowerPrimary" },
    { id: "1", label: "Elementary", value: "Elementary" },
    { id: "1", label: "primary", value: "primary" },
    { id: "1", label: "Lower Secondary", valueL: "lowerSecondary" },
    { id: "1", label: "secondary", value: "secondary" },
    { id: "1", label: "High School", value: "High School" },
  ];

  // console.log(formData);
  return (
    <>
      <div className="">
        {/* social semesters dropdown */}
        {/* INITIAL PERIOD DETAILS */}
      </div>

      <div className="">
        {formDataGrades.length > 1 ? (
          <RemoveLinksButton
            remove={removeAllGrades}
            label={"Remove All Grades"}
          />
        ) : (
          <></>
        )}
      </div>

      {/* DYNAMIC INPUT GROUPS */}

      {formDataGrades.map((singleGrade, index) => (
        <div key={index}>
          <div className="input-group__container flex-start">
            {/* INITIAL PERIOD INPUT GROUPS */}
            <div className="input__group">
              <div className="flex-cr inputs input--above-small">
                <input
                  className={
                    formData.schoolGrade.length > 1 ? " filled--input" : ""
                  }
                  type="text"
                  name="grade"
                  id="grade"
                  value={singleGrade.grade}
                  // ref={schoolNameRef}
                  placeholder={"e.g. KG I"}
                  tabIndex={1}
                  onChange={(event) => handleGradesSelection(event, index)}
                />
                <label htmlFor="grade">
                  {/* <p>
                    {periodLabel === ''  ? selectedRadio.charAt(0).toUpperCase() +
                    selectedRadio.slice(1)  : periodLabel}
                  </p> */}
                  <p>Grades</p>
                </label>
                <br />
              </div>
            </div>

            <div className="input__group flex-c m20">
              <div className="flex-cr inputs input--small">
                <select
                  name="level"
                  id="level"
                  onChange={(event) => handleGradeLevels(event, index)}
                  tabIndex={9}
                  value={singleGrade.level}
                >
                  {/* {mediaitems} */}
                  {level.map((level) => (
                    <option key={level.value}>{level.label}</option>
                  ))}
                </select>
                <label htmlFor="level">
                  {" "}
                  <p>Level</p>
                </label>
              </div>
            </div>
            {formDataGrades.length > 1 ? (
              <RemoveButton removables={removeGrades} index={index} />
            ) : (
              <></>
            )}
          </div>
        </div>
      ))}
      <div className="input-group__container flex-start pt2">
        <div>
          {/* {formDataGrades.length === 0 ? ( */}
          {formDataGrades.length > 0 && formDataGrades.length < 20 ? (
            <AddMoreButton
              label="Add Grades"
              handleLinks={(e, index) => handleGrades(e, index)}
            />
          ) : (
            ""
          )}
        </div>
        <div className="pl2">
          {/* {formDataGrades.length === 0 ? ( */}
          {/* {formDataGrades.length > 0 && formDataGrades.length < 20 ? (
            <AddMoreButton
              label="Add Subcategory"
              handleLinks={(e, index) => handleSubperiods(e, index)}
            />
          ) : (
            ""
          )} */}
        </div>
      </div>
    </>
  );
};

export default DynamicGrades;
