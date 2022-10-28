import { useSelector } from "react-redux";

const SubDivision = ({ handleAdvancedSubDivisionBaseSelection, index }) => {
  const educationalDivisionState = useSelector(
    (state) => state.educationalDivisions.educationalDivision
  );
  return (
    <>
      <div className="flex-cs mtn5">
        <div className="flex-cs gap2vw">
          <label
            className="flex flex-cs -mb-p4"
            // htmlFor={"periodBasedPayment" + index}
          >
            <input
              type="checkbox"
              name="periodPaymentBase"
              //   id={"periodBasedPayment" + index}
              tabIndex={9}
              //   value={periodPaymentBase}
              //   checked={periodPaymentBase}
              onChange={(event) =>
                handleAdvancedSubDivisionBaseSelection(event, index)
              }
            />
            <>
              <span>
                &nbsp;{" "}
                <p>
                  {educationalDivisionState[index].educationalSubDivision
                    .length > 0
                    ? educationalDivisionState[index].educationalSubDivision[0]
                        .subDivisionType
                    : educationalDivisionState[index].educationalSubDivision
                        .length > 0 &&
                      educationalDivisionState[index].educationalSubDivision[0]
                        .subDivisionName !== ""
                    ? educationalDivisionState[index].educationalSubDivision[0]
                        .subDivisionName
                    : "Grade"}
                </p>
              </span>
            </>
          </label>
        </div>
        <></>
      </div>
    </>
  );
};

export default SubDivision;
