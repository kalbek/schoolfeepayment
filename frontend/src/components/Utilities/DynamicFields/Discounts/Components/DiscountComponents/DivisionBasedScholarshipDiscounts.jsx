import Textbox from "../../Utilities/Textbox";
import { useSelector } from "react-redux";

const DivisionBasedScholarshipDiscounts = (props) => {
  const paymentState = useSelector((state) => state.payments.paymentState);

  return (
    <>
      <div className="flex-c">
        {paymentState.map((payment, index) => (
          <span key={index}>
            {payment.discountParameters.scholarshipBasedDiscount.gradesEligibleForDiscount.map(
              (scholarships, subIndex) => (
                <span key={subIndex}>
                  <Textbox
                    gradeBase={true}
                    type="number"
                    label={"For " + scholarships.gradeName}
                    placeholder={props.placeholder}
                    onChange={props.onChange}
                    name={
                      payment.discountParameters.discountUnit.charAt(0) === "p"
                        ? "grade-based-scholarship-percentage"
                        : "grade-based-scholarship-amount"
                    }
                    value={
                      payment.discountParameters.discountUnit.charAt(0) === "p"
                        ? scholarships.percentage
                        : scholarships.amount
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

export default DivisionBasedScholarshipDiscounts;
