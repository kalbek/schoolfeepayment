import AddMoreButton from "../../../../Buttons/AddMoreButton";
import RemoveLinksButton from "../../../../Buttons/RemoveLinksButton";

const CreditHours = ({
  handleAdvancedCreditHoursBaseSelection,
  handleAdvancedCreditHoursForPaymentBaseAdding,
  handleAdvancedPaymentBaseCreditHoursValue,
  handleAdvancedPaymentBaseCreditHoursRemove,
  handleAdvancedPaymentBaseApplyPreviousRules,
  index,
}) => {
  return (
    <>
      <div className="flex-cs -mt-5">
        <label
          className="checkbox-items flex flex-cs "
          // htmlFor={"scholarshipBasedPaymentDiscount" + index}
        >
          <input
            type="checkbox"
            name="scholarshipBasedDiscount"
            //   id={"scholarshipBasedPaymentDiscount" + index}
            // value={scholarshipBasedDiscount}
            // checked={scholarshipBasedDiscount}
            onChange={(e) => handleAdvancedCreditHoursBaseSelection(e, index)}
            tabIndex={9}
          />
          <>
            <span>
              &nbsp; <p> Credit Hours</p>
            </span>
          </>
        </label>

        <></>
      </div>
    </>
  );
};

export default CreditHours;
