import { useSelector } from "react-redux";
const Shifts = ({
  handleStandardPaymentBaseShiftsCheckboxSelection,
  index,
}) => {
  const paymentState = useSelector((state) => state.payments.paymentState);
  return (
    <div className="field-subgroup-containers">
      <section className="flex-cs -mt-p5">
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
              &nbsp; <p>Shifts</p>
            </span>
          </>
        </label>
        {/* <div className="w-50"></div> */}
        <div></div>
        <></>
      </section>
    </div>
  );
};

export default Shifts;
