import { useSelector } from "react-redux";

const EducationalDivision = ({
  handleStandardPaymentBaseEducationalDivisionCheckboxSelection,
  handleStandardPaymentBaseEducationalDivisionTypeRadioSelection,
  index,
}) => {
  const educationalDivisionState = useSelector(
    (state) => state.educationalDivisions.educationalDivision
  );
  const paymentState = useSelector((state) => state.payments.paymentState);

  return (
    <>
      <div className="flex-cs -mt-p5">
        <label
          className="flex -mb-p5"
          // htmlFor={"periodBasedPayment" + index}
        >
          <input
            type="checkbox"
            name="periodPaymentBase"
            //   id={"periodBasedPayment" + index}  inginix
            //   tabIndex={9}
            //   value={periodPaymentBase}
            id={"standarddivision" + index}
            checked={
              paymentState[index].paymentBase
                .standardEducationalDivisionCheckbox
            }
            value={
              paymentState[index].paymentBase
                .standardEducationalDivisionCheckbox
            }
            onChange={(event) =>
              handleStandardPaymentBaseEducationalDivisionCheckboxSelection(
                event,
                index
              )
            }
          />
          <>
            <span>
              &nbsp; <p>Educational Division</p>
            </span>
          </>
        </label>
        <></>
      </div>
      <div className="ml-1">
        <div className="mtn5 flex-cs">
          <label
            className="flex -mb-p5 "
            // htmlFor={"standard" + index}
          >
            <input
              type="radio"
              //   id={"standard" + index}
              //   value={paymentBaseType}
              //   checked={paymentBaseType === "standard" + index}
              id={"division" + index}
              checked={
                paymentState[index].paymentBase
                  .standardEducationalDivisionType ===
                "division" + index
              }
              onChange={(event) =>
                handleStandardPaymentBaseEducationalDivisionTypeRadioSelection(
                  event,
                  index
                )
              }
              tabIndex={9}
            />
            <span>
              &nbsp; <p>{educationalDivisionState[index].divisionType} </p>
            </span>
          </label>
        </div>
        <div className="flex-cs mtn5">
          {/* SUB DIVISION*/}
          <label
            className=" flex"
            // htmlFor={"advanced" + index}
          >
            <input
              type="radio"
              //   id={"advanced" + index}
              //   value={paymentBaseType}
              id={"subdivision" + index}
              //   checked={paymentBaseType === "advanced" + index}
              checked={
                paymentState[index].paymentBase
                  .standardEducationalDivisionType ===
                "subdivision" + index
              }
              onChange={(event) =>
                handleStandardPaymentBaseEducationalDivisionTypeRadioSelection(
                  event,
                  index
                )
              }
              tabIndex={9}
            />
            <span>
              &nbsp; <p>{educationalDivisionState[index].subDivisionType}</p>
            </span>
          </label>
        </div>
      </div>
    </>
  );
};

export default EducationalDivision;
