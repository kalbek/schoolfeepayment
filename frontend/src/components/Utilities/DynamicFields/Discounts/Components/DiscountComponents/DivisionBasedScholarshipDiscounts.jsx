import Textbox from "../../Utilities/Textbox";
import { useSelector } from "react-redux";
const DivisionBasedScholarshipDiscounts = (props) => {
  const paymentState = useSelector((state) => state.payments.paymentState);
  return (
    <>
      <span>
        {console.log(paymentState)}
        {paymentState[props.paymentIndex].discountParameters
          .scholarshipBasedDiscount.scholarships.length > 0 &&
          props.currentScholarship.gradesEligibleForDiscount.map(
            (grade, subIndex) => (
              <span key={subIndex}>
                <Textbox
                  Id={props.paymentIndex}
                  gradeBase={true}
                  index={props.paymentIndex}
                  subIndex={props.currentScholarship.Id}
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
                      ? "grade-based-scholarship-percentage"
                      : "grade-based-scholarship-amount"
                  }
                  value={
                    paymentState[
                      props.paymentIndex
                    ].discountParameters.discountUnit.charAt(0) === "p"
                      ? props.currentScholarship.percentage
                      : props.currentScholarship.amount
                  }
                />
              </span>
            )
          )}
      </span>
    </>
  );
};

export default DivisionBasedScholarshipDiscounts;
