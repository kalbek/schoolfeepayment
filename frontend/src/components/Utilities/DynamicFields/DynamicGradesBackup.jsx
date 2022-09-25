import RemoveButton from "../Buttons/RemoveButton";
import RemoveLinksButton from "../Buttons/RemoveLinksButton";
import "../../../Styles/dynamicButtonsStyle.css";
import AddMoreButton from "../Buttons/AddMoreButton";
import { useSelector } from "react-redux";
import SmallCard from "../Cards/SmallCard";
import Preview from "../Buttons/Preview";
import DatePicker from "react-datepicker";
import Department from "../../EducationalDivisions/Department";
import Faculty from "../../EducationalDivisions/Faculty";
import Stages from "../../EducationalDivisions/Stages";
import CustomDivision from "../../EducationalDivisions/CustomDivision";

import "react-datepicker/dist/react-datepicker.css";
import { parse } from "date-fns";

const DynamicGradesBackup = ({
  formData,
  setFormData,
  handleNewGrades,
  removeGrades,
  handleUpdateGrades,
  resetAllGrades,
}) => {
  const gradeState = useSelector((state) => state.grades.gradeDivisionState);

  const level = [
    { id: "1", label: "Kindergarten", value: "Kindergarten" },
    { id: "2", label: "Lower Primary", value: "lowerPrimary" },
    { id: "3", label: "Elementary", value: "Elementary" },
    { id: "4", label: "primary", value: "primary" },
    { id: "5", label: "Lower Secondary", valueL: "lowerSecondary" },
    { id: "6", label: "secondary", value: "secondary" },
    { id: "7", label: "High School", value: "High School" },
  ];

  return (
    <>
      {/* {console.log(periodState)} */}
      <div className="flex-start">
        <div>
          <div className="flex-c">
            <div className="pr1rem flex-start">
              {/* ANNUAL PERIOD RADIO BUTTONS */}
              {/* EDUCATIONAL DIVISIONS CHECKBOXES */}
              <div className="checkbox-inputs input__group field-group-container">
                <section className="flex-left">
                  <label htmlFor="">
                    <h3>Major Educatonal Divisions</h3>
                  </label>
                  <div className="flex-cs checkbox-group">
                    {/* Checkbox for period based payment */}
                    <label
                      className="checkbox-items flex flex-cs"
                      htmlFor={"stagesEducationalDivision"}
                    >
                      <input
                        type="checkbox"
                        name="educaitonDivisions"
                        id={"stagesEducationalDivision"}
                        tabIndex={9}
                        value={gradeState[gradeState.length - 1].hasStageDivision}
                        checked={gradeState[gradeState.length - 1].hasStageDivision}
                        onChange={(event) => handleUpdateGrades(event)}
                      />
                      <>
                        <span>
                          &nbsp; <p>Stage</p>
                        </span>
                      </>
                    </label>

                    {/*Checkbox for extension shift */}
                    <label
                      className="checkbox-items flex flex-cs"
                      htmlFor={"departmentEducationalDivision"}
                    >
                      <input
                        type="checkbox"
                        name="educaitonDivisions"
                        id={"departmentEducationalDivision"}
                        value={
                          gradeState[gradeState.length - 1]
                            .hasDepartmentDivision
                        }
                        checked={gradeState[gradeState.length - 1].hasDepartmentDivision}
                        onChange={(event) => handleUpdateGrades(event)}
                        tabIndex={9}
                      />
                      <>
                        <span>
                          &nbsp; <p>Department</p>
                        </span>
                      </>
                    </label>

                    {/*Checkbox for weekend shift*/}
                    <label
                      htmlFor={"facultyEducationalDivision"}
                      className="checkbox-items flex flex-cs"
                    >
                      <input
                        type="checkbox"
                        name="educaitonDivisions"
                        id={"facultyEducationalDivision"}
                        value={gradeState[gradeState.length - 1].hasFacultyDivision}
                        checked={gradeState[gradeState.length - 1].hasFacultyDivision}
                        onChange={(event) => handleUpdateGrades(event)}
                        tabIndex={9}
                      />
                      <>
                        <span>
                          &nbsp; <p>Faculty</p>
                        </span>
                      </>
                    </label>
                    {/*Checkbox for custom shifts */}
                    <label
                      className="checkbox-items flex flex-cs"
                      htmlFor={"customEducationDivision"}
                    >
                      <input
                        type="checkbox"
                        name="educaitonDivisions"
                        id={"customEducationDivision"}
                        value={
                          gradeState[gradeState.length - 1].hasCustomDivision
                        }
                        checked={
                          gradeState[gradeState.length - 1].hasCustomDivision
                        }
                        onChange={(event) => handleUpdateGrades(event)}
                        tabIndex={9}
                      />
                      <>
                        <span>
                          &nbsp; <p>Custom Divisions &nbsp;</p>
                        </span>
                      </>
                    </label>
                  </div>
                </section>
              </div>

              {/* END OF SHIFTS CHECKBOXES */}
              <div className="checkbox-inputs input__group field-group-container">
                <section className="flex-left">
                  <label htmlFor="">
                    <h3>Education Levels</h3>
                  </label>
                  <div className="flex-cs">{/* School Shifts */}</div>
                  <div className="flex-cs checkbox-group">
                    {/* Radio buttons for grades */}
                    <label className="checkbox-items flex flex-cs" id={"Grade"}>
                      <input
                        type="radio"
                        name={"educaitonLevels"}
                        id={"Grade"}
                        value={gradeState[gradeState.length - 1].educationLevelTypeName === "Grade"}
                        checked={gradeState[gradeState.length - 1]
                            .educationLevelTypeName === "Grade"
                        }
                        onChange={(event) => handleUpdateGrades(event)}
                        tabIndex={9}
                      />
                      <span>
                        &nbsp; <p>Grades</p>
                      </span>
                    </label>
                    {/* Radio buttons for years */}
                    <label className="checkbox-items flex flex-cs" id={"Year"}>
                      <input
                        className="form-radio-button"
                        type="radio"
                        name="educaitonLevels"
                        id="Year"
                        value={
                          gradeState[gradeState.length - 1]
                            .educationLevelTypeName === "Year"
                        }
                        checked={
                          gradeState[gradeState.length - 1]
                            .educationLevelTypeName === "Year"
                        }
                        onChange={(event) => handleUpdateGrades(event)}
                        tabIndex={9}
                      />
                      <span>
                        &nbsp; <p>Years</p>
                      </span>
                    </label>
                    {/* Radio buttons for levels */}
                    <label className="checkbox-items flex flex-cs" id={"Level"}>
                      <input
                        className="form-radio-button"
                        type="radio"
                        name="educaitonLevels"
                        id="Level"
                        value={
                          gradeState[gradeState.length - 1]
                            .educationLevelTypeName === "Level"
                        }
                        checked={
                          gradeState[gradeState.length - 1]
                            .educationLevelTypeName === "Level"
                        }
                        onChange={(event) => handleUpdateGrades(event)}
                        tabIndex={9}
                      />
                      <span>
                        &nbsp; <p>Levels</p>
                      </span>
                    </label>
                    {/* Radio buttons for custom level types */}
                    <label
                      className="checkbox-items flex flex-cs"
                      id={"Custom_Level"}
                    >
                      <input
                        className="form-radio-button"
                        type="radio"
                        name="educaitonLevels"
                        id="Custom_Level"
                        value={
                          gradeState[gradeState.length - 1]
                            .educationLevelTypeName === "Custom_Level"
                        }
                        checked={
                          gradeState[gradeState.length - 1]
                            .educationLevelTypeName === "Custom_Level"
                        }
                        onChange={(event) => handleUpdateGrades(event)}
                        tabIndex={9}
                      />
                      <span>
                        &nbsp; <p>Custom Level &nbsp; &nbsp; </p>
                      </span>
                    </label>
                  </div>
                </section>
              </div>
            </div>
          </div>

          {/* RESET ANNUAL PERIODS BUTTON */}
          {/* END OF RESET ANNUAL PERIODS BUTTON */}
          <section>
            {gradeState.length > 1 ? (
              <RemoveLinksButton
                remove={resetAllGrades}
                label={
                  gradeState[gradeState.length - 1].educationLevelTypeName !==
                  "Custom_Level"
                    ? "Reset " +
                      gradeState[gradeState.length - 1].educationLevelTypeName +
                      "s"
                    : "Reset"
                }
              />
            ) : (
              <></>
            )}
          </section>
          {/* END OF RESET ANNUAL PERIODS BUTTON */}
          {/* DYNAMIC INPUT GROUPS */}

          {/* HERE GOES A DYNAMIC EDUCATION LEVEL DETAILS INPUT BOX */}
          {/* {gradeState[gradeState.length - 1].hasStageDivision ? <Department/> : <></>} */}

          {gradeState.map((singleGrade, index) => (
            <div key={index} className="flex-c dynamic-periods-container pl1">
              {/* INITIAL PERIOD INPUT GROUPS */}
              <section>
                <div className="flex-start ">
                  <div className="input__group flex-c m20">
                    <div className="flex-cr inputs input--medium">
                      <input
                        className={formData.schoolName ? " filled--input" : ""}
                        type="text"
                        value={singleGrade.educationLevelName}
                        name="gradeDetails"
                        id="gradeDescription"
                        placeholder={
                          singleGrade.educationLevelTypeName !== "Custom_Level"
                            ? "e.g. " +
                              singleGrade.educationLevelTypeName
                                .charAt(0)
                                .toUpperCase() +
                              singleGrade.educationLevelTypeName.slice(1) +
                              " " +
                              parseInt(singleGrade.id + 1)
                            : "Your custom level name"
                        }
                        tabIndex={1}
                        onChange={(event) => handleUpdateGrades(event, index)}
                      />
                      <label htmlFor="school-name">
                        <p>
                          {gradeState.length > 0 &&
                          singleGrade.educationLevelTypeName !== "Custom_Level"
                            ? singleGrade.educationLevelTypeName
                                .charAt(0)
                                .toUpperCase() +
                              singleGrade.educationLevelTypeName.slice(1) +
                              "s"
                            : "Custom Level Name"}
                        </p>
                      </label>
                      <br />
                    </div>
                  </div>

                  <div className="remove-periods-icon flex-c">
                    {gradeState.length > 1 ? (
                      <>
                        <RemoveButton removables={removeGrades} index={index} />
                        {/* <RemoveButton removables={removeGrades} index={index} /> */}
                      </>
                    ) : (
                      // <></>
                      <div className="space-for-remove"></div>
                    )}
                  </div>
                </div>
              </section>
            </div>
          ))}
          {/* END OF DYNAMIC INPUT GROUPS */}

          {/* ADD ON MORE PERIOD BUTTON */}
          <div className="input-group__container flex-start pt2">
            <div>
              {gradeState.length > 0 && gradeState.length < 20 ? (
                <AddMoreButton
                  label={
                    gradeState[gradeState.length - 1].educationLevelTypeName ===
                    "Custom_Level"
                      ? "Add One More "
                      : "Add One More " +
                        gradeState[gradeState.length - 1].educationLevelTypeName
                  }
                  handleLinks={handleNewGrades}
                />
              ) : (
                ""
              )}
            </div>
          </div>

          {/* END OF ADD ON MORE PERIOD BUTTON */}
        </div>

        {/* <div className="flex-c">
          <SmallCard formData={formData} />
          <Preview />
        </div> */}
      </div>
    </>
  );
};

export default DynamicGradesBackup;
