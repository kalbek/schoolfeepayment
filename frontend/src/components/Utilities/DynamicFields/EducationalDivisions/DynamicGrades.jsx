import RemoveButton from "../../Buttons/RemoveButton";
import RemoveLinksButton from "../../Buttons/RemoveLinksButton";
import "../../../../Styles/dynamicButtonsStyle.css";
import AddMoreButton from "../../Buttons/AddMoreButton";
import { useSelector } from "react-redux";
import Radio from "../../../InputControls/Radio";

// import Textbox " from "../../../InputControls/Textbox
import Textbox from "./Utilities/Textbox"
 
 
 
import SmallCard from "../../Cards/SmallCard";
import Preview from "../../Buttons/Preview";
import DeleteButton from "../../Buttons/DeleteButton";

const DynamicGrades = ({
  formData,
  setFormData,
  removeEducationalSubdivisions,
  removeSubDivisonSections,
  createNewEducationalDivisions,
  handleUpdateEducationalSubDivisions,
  createNewEducationalSubDivisions,
  createNewSubDivisonSections,
  removeEducationalDivisions,
  handleEducationalDivisionAndSubDivisionTypes,
  handleUpdateEducationalDivisions,
  handleUpdateSubDivisionSection,
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
    <div className="flex-c">
      <div>
        <h1 className="form__titles--mid">
          Now let us start filling out your school's{" "}
          <strong> Educational Divisions</strong>
        </h1>
        <h3 className="form__subtitle">
          Remember to start form lower divisions and work your way to higher
          ones
        </h3>
      </div>

      {/*CONTAINER FOR DIVISIONS AND SUBDIVISION TYPES RADIO CONTROLS */}
      <div className="flex">
        {/* RADIO BUTTON CONTROL FOR MAJOR EDUCATIONAL DIVISONS */}
        <div className="checkbox-inputs input__group field-group-container">
          <section className="flex-left">
            <label>
              <h3 className="pt1">Major Educatonal Divisions</h3>
            </label>
            <div className="flex-cs checkbox-group">
              <Radio
                className={"flex-cs checkbox-items"}
                htmlFor={"Stage"}
                name="educaitonDivisions"
                id={"Stage"}
                tabIndex={9}
                value={lastDivisionState.divisionType}
                checked={lastDivisionState.divisionType === "Stage"}
                onChange={(event) =>
                  handleEducationalDivisionAndSubDivisionTypes(event)
                }
                label={"Stages / Levels"}
              />
              <Radio
                className="checkbox-items flex flex-cs"
                htmlFor={"Department"}
                name="educaitonDivisions"
                id={"Department"}
                value={lastDivisionState.divisionType}
                checked={lastDivisionState.divisionType === "Department"}
                onChange={(event) =>
                  handleEducationalDivisionAndSubDivisionTypes(event)
                }
                tabIndex={9}
                label={"Departments"}
              />
              <Radio
                className="checkbox-items flex flex-cs"
                htmlFor={"Custom Division"}
                name="educaitonDivisions"
                id={"Custom Division"}
                value={lastDivisionState.divisionType}
                checked={lastDivisionState.divisionType === "Custom Division"}
                onChange={(event) =>
                  handleEducationalDivisionAndSubDivisionTypes(event)
                }
                tabIndex={9}
                label={"Custom Divisions"}
              />
              &nbsp;&nbsp;
            </div>
          </section>
        </div>
        {/* RADIO BUTTON CONTROLS FOR EDUCATIONAL LEVELS */}
        <div className="checkbox-inputs input__group field-group-container">
          <section className="flex-left">
            <label>
              <h3 className="pt1">Educational Subdivisions</h3>
            </label>
            <div className="flex-cs">{/* School Shifts */}</div>
            <div className="flex-cs checkbox-group">
              {/* Radio buttons for grades */}

              <Radio
                className={"checkbox-items flex flex-cs"}
                htmlFor={"Grade"}
                name={"educaitonLevels"}
                id={"Grade"}
                value={lastSubDivisionState.subDivisionType === "Grade"}
                checked={lastSubDivisionState.subDivisionType === "Grade"}
                onChange={(event) =>
                  handleEducationalDivisionAndSubDivisionTypes(event)
                }
                tabIndex={9}
                label={"Grades"}
              />

              {/* Radio buttons for years */}
              <Radio
                className="checkbox-items flex flex-cs"
                htmlFor={"Year"}
                name="educaitonLevels"
                id="Year"
                value={lastSubDivisionState.subDivisionType === "Year"}
                checked={lastSubDivisionState.subDivisionType === "Year"}
                onChange={(event) =>
                  handleEducationalDivisionAndSubDivisionTypes(event)
                }
                tabIndex={9}
                label={"Years"}
              />

              {/* Radio buttons for levels */}
              <Radio
                className="checkbox-items flex flex-cs"
                htmlFor={"Level"}
                name="educaitonLevels"
                id="Level"
                value={lastSubDivisionState.subDivisionType === "Level"}
                checked={lastSubDivisionState.subDivisionType === "Level"}
                onChange={(event) =>
                  handleEducationalDivisionAndSubDivisionTypes(event)
                }
                tabIndex={9}
                label={"Levels"}
              />

              {/* Radio buttons for custom level types */}

              <Radio
                className="checkbox-items flex flex-cs"
                name="educaitonLevels"
                id="Custom Subdivision"
                value={
                  lastSubDivisionState.subDivisionType === "Custom Subdivision"
                }
                checked={
                  lastSubDivisionState.subDivisionType === "Custom Subdivision"
                }
                onChange={(event) =>
                  handleEducationalDivisionAndSubDivisionTypes(event)
                }
                tabIndex={9}
                label={"Custom Subdivision"}
              />
            </div>
          </section>
        </div>
        {/* END OF EDUCATIONAL LEVELS RADIO BUTTON CONTROLS */}
      </div>

      {/* EDUCATIONAL DIVISIONS AND SUBDIVISION DETAIL CARDS */}
      <div className="f-start wrap">
        &nbsp;&nbsp;&nbsp;
        {educationalDivisionState.map((division, divisionIndex) => (
          <div
            key={divisionIndex}
            className="input__group dynamic-periods-container "
          >
            {/*EDUCATIONAL STAGES INPUT CONTROLS */}
            <div className="flex-cs">
              <div className="input__group flex-cs m20">
                <div className="flex-cr inputs input--medium">
                  <div className="flex-cs">
                    <Textbox
                    type="text"
                      value={division.divisionName}
                      id="Stage"
                      name="educationalDivision"
                      placeholder={
                        division.divisionType === "Stage"
                          ? "e.g. KG, Primary, Secondary ..."
                          : division.divisionType === "Department"
                          ? "e.g. Computer Science, Accounting ..."
                          : division.divisionType === "Faculty"
                          ? "e.g. Technology, Social Science ..."
                          : "e.g. 1, 2, ..."
                      }
                      tabIndex={1}
                      onChange={(event) =>
                        handleUpdateEducationalDivisions(event, divisionIndex)
                      }
                      label={
                        division.divisionType === "Faculty"
                          ? "Faculties"
                          : division.divisionType + "s"
                      }
                    />
                  </div>
                  <br />
                </div>
              </div>
              {educationalDivisionState.length > 1 && (
                // <div className="mrn5 pointer mtn5">
                <div className="-mt-10 pr5 pointer">
                  <DeleteButton
                    deleteAction={removeEducationalDivisions}
                    index={divisionIndex}
                  />
                </div>
              )}
            </div>
            <br />
            {/* SUBDIVISONS E.G. GRADES, DEPARTMENTS, ETC... INPUT CONTROL */}
            {division.educationalSubDivision.map(
              (subDivision, subDivisionIndex) => (
                <section key={subDivisionIndex}>
                  {/*SUBDIVISIONS INPUT CONTROL*/}
                  <div className="flex">
                    <div className="input__group flex-cr inputs input--medium ">
                      {console.log("d.sdn: " + subDivision.subDivisionName)}
                      <Textbox
                      type="text"
                        value={subDivision.subDivisionName}
                        id={subDivision.subDivisionType}
                        name="educationalSubDivision"
                        placeholder={
                          lastSubDivisionState.subDivisionType === "Grade"
                            ? "e.g. Grade 1, Grade 2 ..."
                            : lastSubDivisionState.subDivisionType === "Year"
                            ? "e.g. Year I, Year II ..."
                            : lastSubDivisionState.subDivisionType === "Level"
                            ? "e.g. Level 1, Level 2 ..."
                            : "e.g. 1, 2, ..."
                        }
                        tabIndex={1}
                        onChange={(event) =>
                          handleUpdateEducationalSubDivisions(
                            event,
                            divisionIndex,
                            subDivisionIndex
                          )
                        }
                        label={lastSubDivisionState.subDivisionType}
                      />
                    </div>
                    {/* REMOVE BUTTON CONTROL FOR SUBDIVISION */}
                    {division.educationalSubDivision.length > 1 ? (
                      <div className="remove-periods-icon flex-c ">
                        <RemoveButton
                          removables={removeEducationalSubdivisions}
                          index={divisionIndex}
                          subIndex={subDivisionIndex}
                        />
                      </div>
                    ) : (
                      <div className="space-for-remove"></div>
                    )}
                  </div>
                  <div className="flex-c flex-end pr13">
                    {subDivision.section.map((section, sectionIndex) => (
                      <div
                        key={sectionIndex}
                        className="input__group flex-cr inputs input--above-small "
                      >
                        <div className="flex">
                          <RemoveLinksButton
                            remove={removeSubDivisonSections}
                            index={divisionIndex}
                            subIndex={subDivisionIndex}
                            subSubIndex={sectionIndex}
                          />
                          <Textbox
                            type="text"
                            value={section.sectionName}
                            id={section.subDivisionType}
                            name="educationalSubDivision"
                            placeholder={"e.g. Section 1, 2, ..."}
                            tabIndex={1}
                            onChange={(event) =>
                              handleUpdateSubDivisionSection(
                                event,
                                divisionIndex,
                                subDivisionIndex,
                                sectionIndex
                              )
                            }
                            label={sectionIndex === 0 ? <p>Sections</p> : <></>}
                          />
                        </div>
                        <div className="pl11 pb5p">
                          <label htmlFor="">{}</label>
                        </div>
                        <br />
                      </div>
                    ))}
                    <AddMoreButton
                      label={"Add Sections"}
                      handleLinks={() =>
                        createNewSubDivisonSections(
                          divisionIndex,
                          subDivisionIndex
                        )
                      }
                    />
                  </div>
                  {/* OPTINALLY INSERT CUSTOMED <hr /> HERE */}
                </section>
              )
            )}
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
                      handleLinks={() =>
                        createNewEducationalSubDivisions(divisionIndex)
                      }
                    />
                  ) : (
                    ""
                  )}
                  {/* Add sections for educational subdivisons */}
                </div>
              </div>
              {/* Checkbox for sections  */}
            </div>
            {/* ADD DELETE BUTTON HERE */}
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
  );
};

export default DynamicGrades;
