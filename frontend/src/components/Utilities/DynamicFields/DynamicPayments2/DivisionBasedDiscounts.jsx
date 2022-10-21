import Textbox from "./Utilities/Textbox";
import { useSelector } from "react-redux";

const DivisionBasedDiscounts = (props) => {
  const educationalDivisionState = useSelector(
    (state) => state.educationalDivisions.educationalDivision
  );
  const divisions = educationalDivisionState[0].educationalSubDivision;
  console.log("ey: " + props.index);
  console.log(educationalDivisionState);
  return (
    <>
      <div className="flex-c">
        {educationalDivisionState.map((division, index) =>
          division.educationalSubDivision.length >= 1 ? (
            <span key={index}>
              {division.educationalSubDivision.map((subDivision, subIndex) => (
                <span key={subIndex}>
                  <Textbox
                    type="number"
                    label={"For " + subDivision.subDivisionName}
                    placeholder={props.placeholder}
                    onChange={props.onChange}
                    name={props.name}
                    value={props.value}

                  />
                </span>
              ))}
            </span>
          ) : (
            <>
              <p className="primary-label">
                <br />
                <br />
                <br />
                No {divisions[0].subDivisionType} found!
              </p>
            </>
          )
        )}
      </div>
    </>
  );
};

export default DivisionBasedDiscounts;
