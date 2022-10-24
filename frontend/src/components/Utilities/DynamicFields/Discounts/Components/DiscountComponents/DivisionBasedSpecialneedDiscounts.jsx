import Textbox from "../../Utilities/Textbox";
import { useSelector } from "react-redux";

const DivisionBasedSpecialneedDiscounts = (props) => {
  const paymentState = useSelector((state) => state.payments.paymentState);
  return (
    <>
      <div className="flex-c">
        {paymentState.map((payment, index) => (
          <span key={index}>
            {payment.discountParameters.specialNeedsBasedDiscount.gradesEligibleForDiscount.map(
              (specialneeds, subIndex) => (
                <span key={subIndex}>
                  <Textbox
                    hasTopLevelContainer={props.hasTopLevelContainer}
                    gradeBase={true}
                    type="number"
                    label={"For " + specialneeds.gradeName}
                    placeholder={props.placeholder}
                    onChange={props.onChange}
                    name={
                      payment.discountParameters.discountUnit.charAt(0) === "p"
                        ? "grade-based-specialneed-percentage"
                        : "grade-based-specialneed-amount"
                    }
                    value={
                      payment.discountParameters.discountUnit.charAt(0) === "p"
                        ? specialneeds.percentage
                        : specialneeds.amount
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

export default DivisionBasedSpecialneedDiscounts;
