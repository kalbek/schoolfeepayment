import Textbox from "../../Utilities/Textbox";
import { useSelector } from "react-redux";

const DivisionBasedSpecialneedDiscounts = (props) => {
  const paymentState = useSelector((state) => state.payments.paymentState);
  return (
    <>
      <span>
        {paymentState[props.paymentIndex].discountParameters
          .specialNeedsBasedDiscount.specialNeeds.length > 0 &&
          props.currentSpecialneed.gradesEligibleForDiscount.map(
            (grade, subIndex) => (
              <span key={subIndex}>
                <Textbox
                  Id={props.paymentIndex}
                  gradeBase={true}
                  index={props.paymentIndex}
                  subIndex={props.currentSpecialneed.Id}
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
                      ? "grade-based-specialneed-percentage"
                      : "grade-based-specialneed-amount"
                  }
                  value={
                    paymentState[
                      props.paymentIndex
                    ].discountParameters.discountUnit.charAt(0) === "p"
                      ? props.currentSpecialneed.percentage
                      : props.currentSpecialneed.amount
                  }
                />
              </span>
            )
          )}
      </span>
    </>
  );
};

export default DivisionBasedSpecialneedDiscounts;
