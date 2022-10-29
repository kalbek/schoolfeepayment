import { useSelector } from "react-redux";

const SubDivision = ({
  handleAdvancedPaymentBaseEducationalSubDivisionCheckboxSelection,
  index,
}) => {
  const educationalDivisionState = useSelector(
    (state) => state.educationalDivisions.educationalDivision
  );
  const paymentState = useSelector((state) => state.payments.paymentState);
  return (
    <>
      <div className="flex-cs mtn5">
        <div className="flex-cs gap2vw">
          <label
            className="flex flex-cs -mb-p4sss"
            // htmlFor={"periodBasedPayment" + index}
          >
            <input
              type="checkbox"
              name="periodPaymentBase"
              //   id={"periodBasedPayment" + index}
              tabIndex={9}
              value={
                paymentState[index].paymentBase
                  .advancedEducationalSubDivisionCheckbox
              }
              checked={
                paymentState[index].paymentBase
                  .advancedEducationalSubDivisionCheckbox
              }
              onChange={(event) =>
                handleAdvancedPaymentBaseEducationalSubDivisionCheckboxSelection(
                  event,
                  index
                )
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
