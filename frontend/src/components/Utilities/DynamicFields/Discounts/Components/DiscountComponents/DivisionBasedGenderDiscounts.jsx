import Textbox from "../../Utilities/Textbox";
import { useSelector } from "react-redux";

const DivisionBasedGenderDiscounts = (props) => {
  const paymentState = useSelector((state) => state.payments.paymentState);
  return (
    <>
      <div className="flex-c">
        {paymentState.map((payment, index) => (
          <span key={index}>
            {payment.discountParameters.genderBasedDiscount.gradesEligibleForDiscount.map(
              (grades, subIndex) => (
                <span key={subIndex}>
                  <Textbox
                    gradeBase={true}
                    type="number"
                    label={props.nolabel ? "" : "For " + grades.gradeName}
                    placeholder={props.placeholder}
                    onChange={props.onChange}
                    name={
                      payment.discountParameters.discountUnit.charAt(0) === "p"
                        ? "grade-based-gender-percentage"
                        : "grade-based-gender-amount"
                    }
                    value={
                      payment.discountParameters.discountUnit.charAt(0) === "p"
                        ? grades.percentage
                        : grades.amount
                    }
                  />
                </span>
              )
            )}
          </span>
        ))}
      </div>
    </>
  );
};

export default DivisionBasedGenderDiscounts;
