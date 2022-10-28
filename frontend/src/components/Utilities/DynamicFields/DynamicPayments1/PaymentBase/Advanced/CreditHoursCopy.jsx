import AddMoreButton from "../../../../Buttons/AddMoreButton";
import RemoveLinksButton from "../../../../Buttons/RemoveLinksButton";

const CreditHoursCopy = ({
  handleAdvancedCreditHoursBaseSelection,
  handleAdvancedCreditHoursForPaymentBaseAdding,
  handleAdvancedPaymentBaseCreditHoursValue,
  handleAdvancedPaymentBaseCreditHoursRemove,
  handleAdvancedPaymentBaseApplyPreviousRules,
  index,
}) => {
  return (
    <>
      <div className="flex-cs mtn5">
        <div className="flex">
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
                &nbsp; <p>Credit Hours</p>
              </span>
            </>
          </label>
          {true && (
            <label
              className="checkbox-items flex flex-cs mln4"
              //   htmlFor={"gradeBasedPayment_" + index}
              onClick={() =>
                handleAdvancedCreditHoursForPaymentBaseAdding(index)
              }
            >
              <AddMoreButton />
              <>
                <span className="mlnp9">
                  &nbsp;&nbsp; <p>Add Types</p>
                </span>
              </>
            </label>
          )}
        </div>
        <></>
      </div>

      <div className="flex-cs -mt-1p5">
        <div className="flex-c inputs gapp5">
          <div className="flex-cs gapp5">
            <input
              type="text"
              name="specialNeedsBasedDiscount"
              id={"specialNeedPaymentDiscount"}
              placeholder="Cr. Hr."
              // value={scholarship.scholarshipName}
              onChange={(event) =>
                handleAdvancedPaymentBaseCreditHoursValue(event, index)
              }
              tabIndex={9}
            />
            <RemoveLinksButton
              remove={handleAdvancedPaymentBaseCreditHoursRemove}
              // index={index}
              // subIndex={scholarshipIndex}
            />
          </div>
        </div>
      </div>
      <label
        className="flex "
        // htmlFor={"scholarshipBasedPaymentDiscount" + index}
      >
        <input
          type="checkbox"
          name="scholarshipBasedDiscount"
          //   id={"scholarshipBasedPaymentDiscount" + index}
          // value={scholarshipBasedDiscount}
          // checked={scholarshipBasedDiscount}
          onChange={(e) =>
            handleAdvancedPaymentBaseApplyPreviousRules(e, index)
          }
          tabIndex={9}
        />
        <>
          <span>
            &nbsp; <p>Apply previous rule</p>
          </span>
        </>
      </label>
    </>
  );
};

export default CreditHoursCopy;
