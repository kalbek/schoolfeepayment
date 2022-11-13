import { useSelector } from "react-redux";
const DueDatesShiftsAndPenalityOptions = ({
  handleStandardPaymentBaseDueDatesCheckboxSelection,
  handleStandardPaymentBaseShiftsCheckboxSelection,
  handleStandardPaymentBasePenalityCheckboxSelection,
  index,
}) => {
  const paymentState = useSelector((state) => state.payments.paymentState);
  return (
    <div className="field-subgroup-containers">
      <section className="flex-cs -mt-p5">
        <label className="flex -mb-p5" htmlFor={"standardDueDate" + index}>
          <input
            type="checkbox"
            name="periodPaymentBase"
            //   id={"periodBasedPayment" + index}  inginix
            id={"standardDueDate" + index}
            //   tabIndex={9}
            checked={paymentState[index].paymentBase.standardDueDatesCheckbox}
            value={paymentState[index].paymentBase.standardDueDatesCheckbox}
            onChange={(event) =>
              handleStandardPaymentBaseDueDatesCheckboxSelection(event, index)
            }
          />
          <>
            <span>
              &nbsp; <p>Due Dates</p>
            </span>
          </>
        </label>
        &nbsp; &nbsp;&nbsp;&nbsp;
        <label className="flex -mb-p5" htmlFor={"standardPenality" + index}>
          <input
            type="checkbox"
            name="standardPenality"
            //   id={"periodBasedPayment" + index}  inginix
            id={"standardPenality" + index}
            //   tabIndex={9}
            checked={paymentState[index].paymentBase.standardPenalityCheckbox}
            value={paymentState[index].paymentBase.standardPenalityCheckbox}
            onChange={(event) =>
              handleStandardPaymentBasePenalityCheckboxSelection(event, index)
            }
          />
          <>
            <span>
              &nbsp; <p>Penality</p>
            </span>
          </>
        </label>
        &nbsp; &nbsp;&nbsp;&nbsp;
        <label className="flex -mb-p5" htmlFor={"standardShift" + index}>
          <input
            type="checkbox"
            name="periodPaymentBase"
            //   id={"periodBasedPayment" + index}  inginix
            id={"standardShift" + index}
            //   tabIndex={9}
            checked={paymentState[index].paymentBase.standardShiftsCheckbox}
            value={paymentState[index].paymentBase.standardShiftsCheckbox}
            onChange={(event) =>
              handleStandardPaymentBaseShiftsCheckboxSelection(event, index)
            }
          />
          <>
            <span>
              &nbsp; <p>Shift Based</p>
            </span>
          </>
        </label>
        &nbsp;
        {/* <div className="w-23"></div> */}
        <div></div>
        <></>
      </section>
    </div>
  );
};

export default DueDatesShiftsAndPenalityOptions;
