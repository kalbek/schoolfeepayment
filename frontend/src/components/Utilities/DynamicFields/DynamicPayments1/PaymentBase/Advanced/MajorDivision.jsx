import { useSelector } from "react-redux";
const MajorDivision = ({
  handleAdvancedPaymentBaseEducationalDivisionCheckboxSelection,
  handleAdvancedPaymentBaseMajorEducationalDivisionCheckboxSelection,
  index,
}) => {
  const educationalDivisionState = useSelector(
    (state) => state.educationalDivisions.educationalDivision
  );
  const paymentState = useSelector((state) => state.payments.paymentState);
  return (
    <>
      <div className="flex-cs">
        <div className="flex-start flex-c">
          <label className="flex ">
            <input
              type="checkbox"
              name="periodPaymentBase"
              id={"advancedDivisionBase" + index}
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
            <span>
              &nbsp; <p>Divisions</p>
            </span>
          </label>
          <label
            className="flex  -mt-1"
            htmlFor={"advancedMajorDivisionBase" + index}
          >
            <input
              type="checkbox"
              name="periodPaymentBase"
              id={"advancedMajorDivisionBase" + index}
              tabIndex={9}
              value={
                paymentState[index].paymentBase
                  .advancedMajorEducationalDivisionCheckbox
              }
              disabled={
                !paymentState[index].paymentBase
                  .advancedEducationalDivisionCheckbox
              }
              checked={
                paymentState[index].paymentBase
                  .advancedMajorEducationalDivisionCheckbox
              }
              onChange={(event) =>
                handleAdvancedPaymentBaseMajorEducationalDivisionCheckboxSelection(
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
                &nbsp; <p>{educationalDivisionState[index].divisionType}</p>
              </span>
            </>
          </label>
        </div>
      </div>
    </>
  );
};

export default MajorDivision;
