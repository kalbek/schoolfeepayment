import { useSelector } from "react-redux";
import RemoveButton from "../Utilities/Buttons/RemoveButton";
import AddMoreButton from "../Utilities/Buttons/AddMoreButton";
const Department = ({
  formData,
  setFormData,
  handleNewGrades,
  removeGrades,
  handleUpdateGrades,
  resetAllGrades,
}) => {
  const gradeState = useSelector((state) => state.grades.gradeDivisionState);
  const selectedDivisoinName = gradeState[gradeState.length - 1].divisionName;
  return (
    <>
      <section>
        {gradeState.map((singleGrade, index) => (
          <div key={index} className="flex-c dynamic-periods-container pl1">
            {/* INITIAL PERIOD INPUT GROUPS */}
            <section>
              <div className="flex-start ">
                <div className="input__group flex-c m20">
                  <div className="flex-cr inputs input--medium">
                    <input
                      // className={formData.schoolName ? " filled--input" : ""}
                      type="text"
                      value={singleGrade.educationLevelName}
                      name="gradeDetails"
                      id="gradeDescription"
                      placeholder={"e.g. Kindergartern, Primary, Secondary"}
                      tabIndex={1}
                      // onChange={(event) => handleUpdateGrades(event, index)}
                    />
                    <label htmlFor="school-name">
                      <p>
                        {selectedDivisoinName === "StagesDivison"
                          ? "Stages"
                          : ""}
                        {console.log(
                          gradeState[gradeState.length - 1].divisionName
                        )}
                      </p>
                    </label>
                    <br />
                  </div>
                </div>

                <div className="remove-periods-icon flex-c">
                  {gradeState.length > 1 ? (
                    <>
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
      </section>
      {gradeState.length > 0 && gradeState.length < 20 ? (
                    <>
                      <AddMoreButton
                        label={
                          gradeState[gradeState.length - 1].divisionName ===
                          "Custom_Division"
                            ? "Add One more"
                            : "Add one more " +
                              gradeState[gradeState.length - 1].divisionName
                        }
                      />
                    </>
                  ) : (
                    <></>
                  )}
    </>
  );
};

export default Department;
