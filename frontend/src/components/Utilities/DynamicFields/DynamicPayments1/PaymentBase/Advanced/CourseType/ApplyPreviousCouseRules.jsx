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
          <>
            {index > 0 ? (
              <label
                className="flex"
                htmlFor={"scholarshipBasedPaymentDiscount" + index}
              >
                <input
                  type="checkbox"
                  name="scholarshipBasedDiscount"
                  id={"scholarshipBasedPaymentDiscount" + index}
                  value={
                    paymentState[index].paymentBase.courseBasedPayment
                      .previousCourseRulesApplied
                  }
                  checked={
                    paymentState[index].paymentBase.courseBasedPayment
                      .previousCourseRulesApplied
                  }
                  onChange={() =>
                    handleAdvancedPaymentBaseApplyPreviousRulesForCourse(index)
                  }
                  tabIndex={9}
                />
                <span>
                  &nbsp; <p>Apply previous course rule</p>
                </span>
              </label>
            ) : (
              <></>
            )}
          </>
        )}
    </>
  );
};

export default ApplyPreviousCouseRules;
