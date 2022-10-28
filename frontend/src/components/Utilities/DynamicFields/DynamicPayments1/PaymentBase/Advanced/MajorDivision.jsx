import { useSelector } from "react-redux";
const MajorDivision = ({
  handleAdvancedPaymentBaseEducationalDivisionCheckboxSelection,
  index,
}) => {
  const educationalDivisionState = useSelector(
    (state) => state.educationalDivisions.educationalDivision
  );
  const paymentState = useSelector((state) => state.payments.paymentState);
  return (
    <>
      <div className="flex-cs mtn5">
        <label
          className="flex -mb-p4"
          htmlFor={"advancedMajorDivisionBase" + index}
        >
          <input
            type="checkbox"
            name="periodPaymentBase"
            id={"advancedMajorDivisionBase" + index}
            tabIndex={9}
            value={
              paymentState[index].paymentBase
                .advancedEducationalDivisionCheckbox
            }
            checked={
              paymentState[index].paymentBase
                .advancedEducationalDivisionCheckbox
            }
            onChange={(event) =>
              handleAdvancedPaymentBaseEducationalDivisionCheckboxSelection(
                event,
                index
              )
            }
          />
          <>
            <span>
              &nbsp; <p>{educationalDivisionState[index].divisionType}</p>
            </span>
          </>
        </label>
      </div>
    </>
  );
};

export default MajorDivision;
