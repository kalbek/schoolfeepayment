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
      <div className=" -mt-1">
        <div className="flex-cs ">
          <label
            className="flex "
            // htmlFor={"periodBasedPayment" + index}
          >
            <input
              type="checkbox"
              name="periodPaymentBase"
              //   id={"periodBasedPayment" + index}
              tabIndex={9}
              disabled={
                !paymentState[index].paymentBase
                  .advancedEducationalDivisionCheckbox
              }
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
              <span
                className={
                  !paymentState[index].paymentBase
                    .advancedEducationalDivisionCheckbox
                    ? "inactive-label"
                    : ""
                }
              >
                &nbsp;{" "}
                <p>
                  {educationalDivisionState[0].educationalSubDivision
                    .length > 0
                    ? educationalDivisionState[0].educationalSubDivision[0]
                        .subDivisionType
                    : educationalDivisionState[0].educationalSubDivision
                        .length > 0 &&
                      educationalDivisionState[0].educationalSubDivision[0]
                        .subDivisionName !== ""
                    ? educationalDivisionState[0].educationalSubDivision[0]
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
