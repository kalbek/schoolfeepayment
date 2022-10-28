import { useSelector } from "react-redux";
import Radio from "../../../InputControls/Radio";

const MajorEducationalDivisions = ({
  handleEducationalDivisionAndSubDivisionTypes,
}) => {
  const educationalDivisionState = useSelector(
    (state) => state.educationalDivisions.educationalDivision
  );
  const lastDivisionState =
    educationalDivisionState[educationalDivisionState.length - 1];

  return (
    <div className="flex-c">
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
      </div>
      {/* EDUCATIONAL DIVISIONS AND SUBDIVISION DETAIL CARDS */}
    </div>
  );
};

export default MajorEducationalDivisions;
