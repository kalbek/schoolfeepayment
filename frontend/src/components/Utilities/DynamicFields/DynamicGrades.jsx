import RemoveButton from "../Buttons/RemoveButton";
import RemoveLinksButton from "../Buttons/RemoveLinksButton";
import "../../../Styles/dynamicButtonsStyle.css";
import AddMoreButton from "../Buttons/AddMoreButton";
import { useSelector } from "react-redux";
import SmallCard from "../Cards/SmallCard";
import Preview from "../Buttons/Preview";
import DeleteButton from "../Buttons/DeleteButton";
import DatePicker from "react-datepicker";
import Department from "../../EducationalDivisions/Department";
import Faculty from "../../EducationalDivisions/Faculty";
import Stages from "../../EducationalDivisions/Stages";
import CustomDivision from "../../EducationalDivisions/CustomDivision";

import "react-datepicker/dist/react-datepicker.css";
import { parse } from "date-fns";

const DynamicGrades = ({
  formData,
  setFormData,
  createNewEducationalDivisions,
  handleUpdateEducationalSubDivisions,
  createNewEducationalSubDivisions,
  removeEducationalDivisions,
  removeEducationalSubdivisions,
  handleEducationalDivisionAndSubDivisionTypes,
  handleUpdateEducationalDivisions,
}) => {
  const educationalDivisionState = useSelector(
    (state) => state.educationalDivisions.educationalDivision
  );
  const lastDivisionState =
    educationalDivisionState[educationalDivisionState.length - 1];
  const lastSubDivisionState =
    lastDivisionState.educationalSubDivision[
      lastDivisionState.educationalSubDivision.length - 1
    ];

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
          <div className="flex">
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
                        value={lastDivisionState.divisionType}
                        checked={lastDivisionState.divisionType === "Stage"}
                        onChange={(event) =>
                          handleEducationalDivisionAndSubDivisionTypes(event)
                        }
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
                        value={lastDivisionState.divisionType}
                        checked={
                          lastDivisionState.divisionType === "Department"
                        }
                        onChange={(event) =>
                          handleEducationalDivisionAndSubDivisionTypes(event)
                        }
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
                        value={lastDivisionState.divisionType}
                        checked={lastDivisionState.divisionType === "Faculty"}
                        onChange={(event) =>
                          handleEducationalDivisionAndSubDivisionTypes(event)
                        }
                        tabIndex={9}
                      />
                      <>
                        <span>
                          &nbsp; <p>Faculty & Department</p>
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
                        value={lastDivisionState.divisionType}
                        checked={
                          lastDivisionState.divisionType === "Custom Division"
                        }
                        onChange={(event) =>
                          handleEducationalDivisionAndSubDivisionTypes(event)
                        }
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
                    <h3>Educational Subdivisions</h3>
                  </label>
                  <div className="flex-cs">{/* School Shifts */}</div>
                  <div className="flex-cs checkbox-group">
                    {/* Radio buttons for grades */}
                    <label className="checkbox-items flex flex-cs" id={"Grade"}>
                      <input
                        type="radio"
                        name={"educaitonLevels"}
                        id={"Grade"}
                        value={lastSubDivisionState.subDivisionType === "Grade"}
                        checked={
                          lastSubDivisionState.subDivisionType === "Grade"
                        }
                        onChange={(event) =>
                          handleEducationalDivisionAndSubDivisionTypes(event)
                        }
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
                        value={lastSubDivisionState.subDivisionType === "Year"}
                        checked={
                          lastSubDivisionState.subDivisionType === "Year"
                        }
                        onChange={(event) =>
                          handleEducationalDivisionAndSubDivisionTypes(event)
                        }
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
                        value={lastSubDivisionState.subDivisionType === "Level"}
                        checked={
                          lastSubDivisionState.subDivisionType === "Level"
                        }
                        onChange={(event) =>
                          handleEducationalDivisionAndSubDivisionTypes(event)
                        }
                        tabIndex={9}
                      />
                      <span>
                        &nbsp; <p>Levels</p>
                      </span>
                    </label>
                    {/* Radio buttons for custom level types */}
                    <label
                      className="checkbox-items flex flex-cs"
                      id={"Custom Level"}
                    >
                      <input
                        className="form-radio-button"
                        type="radio"
                        name="educaitonLevels"
                        id="Custom Level"
                        value={
                          lastSubDivisionState.subDivisionType ===
                          "Custom Level"
                        }
                        checked={
                          lastSubDivisionState.subDivisionType ===
                          "Custom Level"
                        }
                        onChange={(event) =>
                          handleEducationalDivisionAndSubDivisionTypes(event)
                        }
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

          {/* END OF RESET GRADES BUTTON CONTROL*/}
          {/* EDUCATIONAL DIVISIONS WITH GRADE DETAILS */}
          <div className="flex-start wrap">
            {educationalDivisionState.map((division, index) => (
              <div key={index} className="input__group flex10">
                <div className="dynamic-periods-container">
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
                            // placeholder={"e.g. KG, Primary, Secondary ..."}
                            placeholder={
                              division.divisionType === "Stage"
                                ? "e.g. Kindergarten, Primary, Secondary ..."
                                : division.divisionType === "Department"
                                ? "e.g. Computer Science, Accounting ..."
                                : division.divisionType === "Faculty"
                                ? "e.g. Technology, Social Science ..."
                                : "e.g. 1, 2, ..."
                            }
                            tabIndex={1}
                            onChange={(event) =>
                              handleUpdateEducationalDivisions(event, index)
                            }
                          />

                          <div className="flex-cs">
                            <label htmlFor="">
                              <p>{division.divisionType}</p>
                            </label>
                            {educationalDivisionState.length > 1 && (
                              <div className="mrn10 pointer mtn5">
                                <DeleteButton
                                  deleteAction={removeEducationalDivisions}
                                  index={index}
                                />
                              </div>
                            )}
                          </div>
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
                    <div className="input__group">
                      <label>
                        <p className="inputs">
                          {/* {division.educationalSubDivision[index].subDivisionType}
                        s */}
                        </p>
                      </label>
                    </div>
                    {/* INPUT CONTROL FOR EDUCATIONAL SUBDIVISIONS */}
                    {division.educationalSubDivision.map(
                      (subDivision, divisionIndex) => (
                        <section key={divisionIndex}>
                          {/* {console.log(division)} */}
                          <div className="flex">
                            <div className="input__group flex-cr inputs input--medium ">
                              <input
                                type="text"
                                value={subDivision.subDivisionName}
                                id={subDivision.subDivisionType}
                                name="educationalSubDivision"
                                // placeholder={lastSubDivisionState.subDivisionType}
                                placeholder={
                                  lastSubDivisionState.subDivisionType ===
                                  "Grade"
                                    ? "e.g. Grade 1, Grade 2 ..."
                                    : lastSubDivisionState.subDivisionType ===
                                      "Year"
                                    ? "e.g. Year I, Year II ..."
                                    : lastSubDivisionState.subDivisionType ===
                                      "Level"
                                    ? "e.g. Level 1, Level 2 ..."
                                    : "e.g. 1, 2, ..."
                                }
                                tabIndex={1}
                                onChange={(event) =>
                                  handleUpdateEducationalSubDivisions(
                                    event,
                                    index,
                                    divisionIndex
                                  )
                                }
                              />
                              <label htmlFor="">
                                {divisionIndex === 0 ? (
                                  <p>{lastSubDivisionState.subDivisionType}s</p>
                                ) : (
                                  <></>
                                )}
                              </label>
                              <br />
                            </div>
                            {/* REMOVE BUTTON CONTROL FOR EDUCATIONAL SUBDIVISION */}
                            {division.educationalSubDivision.length > 1 ? (
                              <div className="remove-periods-icon flex-c ">
                                <RemoveButton
                                  removables={removeEducationalSubdivisions}
                                  index={index}
                                  subIndex={divisionIndex}
                                />
                              </div>
                            ) : (
                              <div className="space-for-remove"></div>
                            )}
                          </div>
                        </section>
                      )
                    )}
                    {/* END OF EDUCATIONAL SUBDIVISONS E.G. GRADES, DEPARTMENTS, ETC... INPUT CONTROL */}
                    {/* ADD SUBDIVISIONS CONTROL BUTTON */}
                    <div className="inputs flex-cs">
                      <div className="input-group__container flex-start">
                        <div>
                          {educationalDivisionState.length > 0 &&
                          educationalDivisionState.length < 20 ? (
                            <AddMoreButton
                              label={
                                division.educationalSubDivision[
                                  division.educationalSubDivision.length - 1
                                ].subDivisionType === "Custom subDivision"
                                  ? "Add Subdivisons"
                                  : "Add " +
                                    division.educationalSubDivision[
                                      division.educationalSubDivision.length - 1
                                    ].subDivisionType
                              }
                              handleLinks={(event) =>
                                createNewEducationalSubDivisions(event, index)
                              }
                            />
                          ) : (
                            ""
                          )}

                          {/* Insert Add Section button here */}
                          <AddMoreButton
                            label={
                              lastSubDivisionState.subDivisionType ===
                              "Custom subDivision"
                                ? "Add Subdivisons"
                                : "Add " + lastSubDivisionState.subDivisionType
                            }
                            handleLinks={(event) =>
                              createNewEducationalSubDivisions(event, index)
                            }
                          />
                        </div>
                      </div>
                      {/* Checkbox for sections  */}
                    </div>
                  </div>
                  {/* ADD DELETE BUTTON HERE */}
                </div>
                {/* <div className="space-for-remove"></div> */}
              </div>
            ))}
          </div>

          {/* BUTTON TO ADD A NEW EDUCATIONAL DIVISION CONTROL */}
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
        </div>

        {/* <div className="flex-c">
          <SmallCard formData={formData} />
          <Preview />
        </div> */}
      </div>
    </>
  );
};

export default DynamicGrades;
