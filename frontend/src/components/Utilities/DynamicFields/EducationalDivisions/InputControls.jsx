import RemoveButton from "../../Buttons/RemoveButton";
import RemoveLinksButton from "../../Buttons/RemoveLinksButton";
import AddMoreButton from "../../Buttons/AddMoreButton";
import { useSelector } from "react-redux";
import Textbox from "./Utilities/Textbox";
import DeleteButton from "../../Buttons/DeleteButton";

const InputControls = ({
  removeEducationalSubdivisions,
  removeSubDivisonSections,
  handleUpdateEducationalSubDivisions,
  createNewEducationalSubDivisions,
  createNewSubDivisonSections,
  removeEducationalDivisions,
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

  return (
    <div className="flex-c">
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
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default InputControls;
