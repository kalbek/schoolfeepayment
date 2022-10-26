import Textbox from "../../Utilities/Textbox";
import { useSelector } from "react-redux";
const DivisionBasedCustomDiscount = (props) => {
  const paymentState = useSelector((state) => state.payments.paymentState);
  return (
    <>
      <span>
        {paymentState[props.paymentIndex].discountParameters
          .customPaymentDiscount.customDiscounts.length > 0 &&
          props.currentCustom.gradesEligibleForDiscount.map(
            (grade, subIndex) => (
              <span key={subIndex}>
                <Textbox
                  Id={props.paymentIndex}
                  gradeBase={true}
                  index={props.paymentIndex}
                  subIndex={props.currentCustom.Id}
                  dicountType={props.dicountType}
                  subSubIndex={grade.Id}
                  type="number"
                  label={"For " + grade.gradeName}
                  placeholder={props.placeholder}
                  onChange={props.onChange}
                  name={
                    paymentState[
                      props.paymentIndex
                    ].discountParameters.discountUnit.charAt(0) === "p"
                      ? "grade-based-custom-percentage"
                      : "grade-based-custom-amount"
                  }
                  value={
                    paymentState[
                      props.paymentIndex
                    ].discountParameters.discountUnit.charAt(0) === "p"
                      ? grade.percentage
                      : grade.amount
                  }
                />
              </span>
            )
          )}
      </span>
    </>
  );
};

export default DivisionBasedCustomDiscount;
