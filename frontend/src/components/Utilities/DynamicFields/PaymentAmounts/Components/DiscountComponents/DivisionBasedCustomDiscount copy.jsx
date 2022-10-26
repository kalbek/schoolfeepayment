import Textbox from "../../Utilities/Textbox";
import { useSelector } from "react-redux";

const DivisionBasedCustomDiscountCopy = (props) => {
  const paymentState = useSelector((state) => state.payments.paymentState);

  return (
    <>
      <div className="flex-c">
        {paymentState.map((payment, index) => (
          <span key={index}>
            {payment.discountParameters.customPaymentDiscount.customDiscounts.map(
              (customs, subIndex) =>
                customs.gradesEligibleForDiscount.map((grade) => (
                  <span key={subIndex}>
                    <Textbox
                      gradeBase={true}
                      type="number"
                      label={"For " + grade.gradeName}
                      placeholder={props.placeholder}
                      onChange={props.onChange}
                      name={
                        payment.discountParameters.discountUnit.charAt(0) ===
                        "p"
                          ? "grade-based-custom-percentage"
                          : "grade-based-custom-amount"
                      }
                      value={
                        payment.discountParameters.discountUnit.charAt(0) ===
                        "p"
                          ? customs.percentage
                          : customs.amount
                      }
                    />
                  </span>
                ))
            )}
          </span>
        ))}
      </div>
    </>
  );
};

export default DivisionBasedCustomDiscountCopy;
