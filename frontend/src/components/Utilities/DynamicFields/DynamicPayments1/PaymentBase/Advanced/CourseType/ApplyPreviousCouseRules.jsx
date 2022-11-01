import { useSelector } from "react-redux";

const ApplyPreviousCouseRules = ({
  handleAdvancedPaymentBaseApplyPreviousRulesForCourse,
  index,
}) => {
  const paymentState = useSelector((state) => state.payments.paymentState);

  return (
    <>
      {paymentState.length > 0 &&
        paymentState[index].paymentBase.courseBasedPayment.value &&
        paymentState[index].paymentBase.courseBasedPayment.visible && (
          <label
            className="flex"
            htmlFor={"scholarshipBasedPaymentDiscount" + index}
          >
            <input
              type="checkbox"
              name="scholarshipBasedDiscount"
              id={"scholarshipBasedPaymentDiscount" + index}
              // value={scholarshipBasedDiscount}
              //   checked={scholarshipBasedDiscount}
              onChange={(e) =>
                handleAdvancedPaymentBaseApplyPreviousRulesForCourse(e, index)
              }
              tabIndex={9}
            />
            <>
              <span>
                &nbsp; <p>Apply previous Course</p>
              </span>
            </>
          </label>
        )}
    </>
  );
};

export default ApplyPreviousCouseRules;
