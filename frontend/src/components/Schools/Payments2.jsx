import RemoveButton from "../Utilities/Buttons/RemoveButton";
import RemoveLinksButton from "../Utilities/Buttons/RemoveLinksButton";
import "../../Styles/dynamicButtonsStyle.css";
import AddMoreButton from "../Utilities/Buttons/AddMoreButton";
import { useSelector } from "react-redux";
import Radio from "../InputControls/Radio";
import Textbox from "../InputControls/Textbox";
import SmallCard from "../Utilities/Cards/SmallCard";
import DeleteButton from "../Utilities/Buttons/DeleteButton";

const Payments2 = ({
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
  const periodState = useSelector((state) => state.periods.annualPeriodState);
  const paymentState = useSelector((state) => state.payments.paymentState);
  const lastDivisionState =
    educationalDivisionState[educationalDivisionState.length - 1];
  const lastSubDivisionState =
    lastDivisionState.educationalSubDivision[
      lastDivisionState.educationalSubDivision.length - 1
    ];
  return (
    <div className="flex-c">
      <div>
        <h1 className="form__titles--mid">
          Now is the time for Numbers! --
          <strong> Payment Amounts --</strong>
        </h1>
        <h3 className="form__subtitle">
          Based on the data you provided earlier your school's payment detail is
          mapped to look like this
        </h3>
      </div>

      {/*CONTAINER FOR DIVISIONS AND SUBDIVISION TYPES RADIO CONTROLS */}

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
                <div className="inputs input--small">
                  <div className="flex-cs">
                    <label htmlFor="">Payment Types</label>
                    <label htmlFor="">Amount (ETB)</label>
                    <label htmlFor="">Discounts (%)</label>
                    <label htmlFor="">Duedates (%)</label>
                  </div>
                  <br />
                  ---------------------------------------------------------------------------------------------------------------------------
                  <label htmlFor="">
                    <ul>
                      <div className="flex-cs">
                        <div>
                          {paymentState.map((singlePayment) => (
                            <li>
                              <div className="flex-cs">
                                {singlePayment.paymentTypeToUpdate} &nbsp;
                                <Textbox
                                  value={division.divisionName}
                                  id="Stage"
                                  name="educationalDivision"
                                  placeholder={""}
                                  tabIndex={1}
                                  onChange={(event) =>
                                    handleUpdateEducationalDivisions(
                                      event,
                                      divisionIndex
                                    )
                                  }
                                  label={""}
                                />
                              </div>
                            </li>
                          ))}
                        </div>
                        <div>
                          {paymentState.map((singlePayment) => (
                            <li>
                              <div className="flex-cs">
                                <Textbox
                                  value={division.divisionName}
                                  id="Stage"
                                  name="educationalDivision"
                                  placeholder={""}
                                  tabIndex={1}
                                  onChange={(event) =>
                                    handleUpdateEducationalDivisions(
                                      event,
                                      divisionIndex
                                    )
                                  }
                                  label={""}
                                />
                              </div>
                            </li>
                          ))}
                        </div>
                        <div>
                          {paymentState.map((singlePayment) => (
                            <li>
                              <div className="flex-cs">
                                <Textbox
                                  value={division.divisionName}
                                  id="Stage"
                                  name="educationalDivision"
                                  placeholder={""}
                                  tabIndex={1}
                                  onChange={(event) =>
                                    handleUpdateEducationalDivisions(
                                      event,
                                      divisionIndex
                                    )
                                  }
                                  label={""}
                                />
                              </div>
                            </li>
                          ))}
                        </div>
                      </div>
                    </ul>
                  </label>
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
                      <Textbox
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

export default Payments2;
