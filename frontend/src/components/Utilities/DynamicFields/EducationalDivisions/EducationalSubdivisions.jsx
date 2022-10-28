import { useSelector } from "react-redux";
import Radio from "../../../InputControls/Radio";

const EducationalSubdivisions = ({
  handleEducationalDivisionAndSubDivisionTypes,
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
    <>
      {/*CONTAINER FOR DIVISIONS AND SUBDIVISION TYPES RADIO CONTROLS */}
      <div className="flex">
        {/* RADIO BUTTON CONTROL FOR MAJOR EDUCATIONAL DIVISONS */}

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
    </>
  );
};

export default EducationalSubdivisions;
