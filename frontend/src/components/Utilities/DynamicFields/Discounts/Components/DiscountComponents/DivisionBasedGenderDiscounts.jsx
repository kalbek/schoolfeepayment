import Textbox from "../../Utilities/Textbox";
import { useSelector } from "react-redux";

const DivisionBasedGenderDiscounts = (props) => {
  const paymentState = useSelector((state) => state.payments.paymentState);
  return (
    <>
      <span>
        {paymentState[props.paymentIndex].discountParameters.genderBasedDiscount
          .gradesEligibleForDiscount.length > 0 &&
          paymentState[
            props.paymentIndex
          ].discountParameters.genderBasedDiscount.gradesEligibleForDiscount.map(
            (grade, subIndex) => (
              <span key={subIndex}>
                <Textbox
                  Id={props.paymentIndex}
                  gradeBase={true}
                  index={props.paymentIndex}
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
                      ? "grade-based-gender-percentage"
                      : "grade-based-gender-amount"
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

export default DivisionBasedGenderDiscounts;
