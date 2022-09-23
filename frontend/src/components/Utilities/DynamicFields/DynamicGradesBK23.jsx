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

const DynamicGradesBK23 = ({
  formData,
  setFormData,
  handleNewGrades,
  removeGrades,
  removeEducationalSubdivision,
  createNewEducationalDivisions,
  handleEducationalSubDivisions,
  createNewEducationalSubDivisions,
  removeEducationalSubDivisions,
  handleUpdateGrades,
  handleEducationalDivisions,
  resetAllGrades,
}) => {
  const gradeState = useSelector((state) => state.grades.gradeDivisionState);
  const educationalDivisionState = useSelector(
    (state) => state.grades.educationalDivision
  );
  const { popup } = useSelector((state) => state.popups);
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
      <div className="flex-start">
        <div>
          <div className="flex-c">
            <div className="pr1rem flex-start">
              {/* RADIO BUTTON CONTROL FOR MAJOR EDUCATIONAL DIVISONS */}
              <div className="checkbox-inputs input__group field-group-container">
                <section className="flex-left">
                  <label htmlFor="">
                    <h3>Major Educatonal Divisions</h3>
                  </label>
                  <div className="flex-cs checkbox-group">
                    {/* Checkbox for period based payment */}
                    <label
                      className="checkbox-items flex flex-cs"
                      htmlFor={"Stage"}
                    >
                      <input
                        type="radio"
                        name="educaitonDivisions"
                        id={"Stage"}
                        tabIndex={9}
                        value={gradeState[gradeState.length - 1].divisionName}
                        checked={
                          gradeState[gradeState.length - 1].divisionName ===
                          "Stage"
                        }
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
                      htmlFor={"Department"}
                    >
                      <input
                        type="radio"
                        name="educaitonDivisions"
                        id={"Department"}
                        value={gradeState[gradeState.length - 1].divisionName}
                        checked={
                          gradeState[gradeState.length - 1].divisionName ===
                          "Department"
                        }
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
                      htmlFor={"Faculty"}
                      className="checkbox-items flex flex-cs"
                    >
                      <input
                        type="radio"
                        name="educaitonDivisions"
                        id={"Faculty"}
                        value={gradeState[gradeState.length - 1].divisionName}
                        checked={
                          gradeState[gradeState.length - 1].divisionName ===
                          "Faculty"
                        }
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
                      htmlFor={"Custom Division"}
                    >
                      <input
                        type="radio"
                        name="educaitonDivisions"
                        id={"Custom Division"}
                        value={gradeState[gradeState.length - 1].divisionName}
                        checked={
                          gradeState[gradeState.length - 1].divisionName ===
                          "Custom Divison"
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
              {/* RADIO BUTTON CONTROLS FOR EDUCATIONAL LEVELS */}
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
                        value={
                          gradeState[gradeState.length - 1]
                            .educationLevelTypeName === "Grade"
                        }
                        checked={
                          gradeState[gradeState.length - 1]
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
              {/* END OF EDUCATIONAL LEVELS RADIO BUTTON CONTROLS */}
            </div>
          </div>

          {/* RESET GRADES BUTTON CONTROL*/}
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
          {/* END OF RESET GRADES BUTTON CONTROL*/}

          {/* EDUCATIONAL DIVISIONS WITH GRADE DETAILS */}
          <div className="flex-start">
            {educationalDivisionState.map((division, index) => (
              <div key={index} className="dynamic-periods-container">
                {/*EDUCATIONAL STAGES INPUT CONTROLS */}
                <div className="flex-start">
                  <section key={index}>
                    <div className="input__group flex-cs m20">
                      <div className="flex-cr inputs input--medium">
                        <input
                          type="text"
                          value={division.divisionName}
                          id="Stage"
                          name="educationalDivision"
                          placeholder={"e.g. KG, Primary, Secondary ..."}
                          tabIndex={1}
                          onChange={(event) =>
                            handleEducationalDivisions(event, index)
                          }
                        />
                        <label htmlFor="">
                          <p>{division.divisionType} Name</p>
                        </label>
                        <br />
                      </div>
                    </div>
                  </section>
                </div>
                <br />
                {/*END OF EDUCATIONAL DIVISIONS INPUT CONTROLS */}

                {/* EDUCATIONAL SUBDIVISONS E.G. GRADES, DEPARTMENTS, ETC... INPUT CONTROL */}
                {/* LABEL FOR EDUCATIONAL SUBDIVISONS */}
                <div>
                  <div className="input__group ">
                    <label>
                      <p className="inputs">
                        {division.educationalSubDivision[index].subDivisionType}
                        s
                      </p>
                    </label>
                  </div>
                  {/* INPUT CONTROL FOR EDUCATIONAL SUBDIVISIONS */}
                  {division.educationalSubDivision.map(
                    (subDivision, subDivisionIndex) => (
                      <section key={subDivisionIndex}>
                        <div className="flex">
                          <div className="input__group flex-cr inputs input--medium ">
                            <input
                              type="text"
                              value={subDivision.subDivisionName}
                              id={subDivision.subDivisionType}
                              name="educationalSubDivision"
                              placeholder={"e.g. LKG, UKG, Grade 1, Grade 2"}
                              tabIndex={1}
                              onChange={(event) =>
                                handleEducationalSubDivisions(
                                  event,
                                  subDivisionIndex
                                )
                              }
                            />
                            <br />
                          </div>

                          {/* REMOVE BUTTON CONTROL FOR EDUCATIONAL SUBDIVISION */}
                          <div className="remove-periods-icon flex-c ">
                            <RemoveButton
                              removables={removeEducationalSubdivision}
                              index={index}
                              subIndex={subDivisionIndex}
                            />
                          </div>
                        </div>
                      </section>
                    )
                  )}
                  {/* END OF EDUCATIONAL SUBDIVISONS E.G. GRADES, DEPARTMENTS, ETC... INPUT CONTROL */}

                  {/* ADD SUBDIVISIONS CONTROL BUTTON */}
                  <div className="input-group__container flex-start">
                    <div>
                      {educationalDivisionState.length > 0 &&
                      educationalDivisionState.length < 20 ? (
                        <AddMoreButton
                          label={
                            division.educationalSubDivision[index]
                              .subDivisionType === "Custom subDivision"
                              ? "Add Subdivisons"
                              : "Add " +
                                division.educationalSubDivision[index]
                                  .subDivisionType
                          }
                          handleLinks={(event) =>
                            createNewEducationalSubDivisions(event, index)
                          }
                        />
                      ) : (
                        ""
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* BUTTON CONTROL TO HANDLE ADD A NEW EDUCATIONAL DIVISIONS */}
          <div className="input-group__container flex-start pt2">
            <div>
              {educationalDivisionState.length > 0 &&
              educationalDivisionState.length < 20 ? (
                <AddMoreButton
                  label={"Add " + educationalDivisionState[0].divisionType}
                  handleLinks={createNewEducationalDivisions}
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

export default DynamicGradesBK23;
