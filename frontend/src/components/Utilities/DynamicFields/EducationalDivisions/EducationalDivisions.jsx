import AddMoreButton from "../../Buttons/AddMoreButton";
import { useSelector } from "react-redux";
import MajorEducationalDivisions from "./MajorEducationalDivisions";
import EducationalSubdivisions from "./EducationalSubdivisions";
import InputControls from "./InputControls";

const EducationalDivisions = ({
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

      <div className="flex-cs gap1">
        <MajorEducationalDivisions
          handleEducationalDivisionAndSubDivisionTypes={
            handleEducationalDivisionAndSubDivisionTypes
          }
        />
        <EducationalSubdivisions
          handleEducationalDivisionAndSubDivisionTypes={
            handleEducationalDivisionAndSubDivisionTypes
          }
        />
      </div>

      <InputControls
        removeEducationalSubdivisions={removeEducationalSubdivisions}
        removeSubDivisonSections={removeSubDivisonSections}
        createNewEducationalDivisions={createNewEducationalDivisions}
        handleUpdateEducationalSubDivisions={
          handleUpdateEducationalSubDivisions
        }
        createNewEducationalSubDivisions={createNewEducationalSubDivisions}
        createNewSubDivisonSections={createNewSubDivisonSections}
        removeEducationalDivisions={removeEducationalDivisions}
        handleUpdateEducationalDivisions={handleUpdateEducationalDivisions}
        handleUpdateSubDivisionSection={handleUpdateSubDivisionSection}
      />
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

export default EducationalDivisions;
