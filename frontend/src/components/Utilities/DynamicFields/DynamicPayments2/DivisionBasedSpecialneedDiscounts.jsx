import Textbox from "./Utilities/Textbox";
import { useSelector } from "react-redux";

const DivisionBasedSpecialneedDiscounts = (props) => {
  const educationalDivisionState = useSelector(
    (state) => state.educationalDivisions.educationalDivision
  );
  const divisions = educationalDivisionState[0].educationalSubDivision;
  const paymentState = useSelector((state) => state.payments.paymentState);
  return (
    <>
      <div className="flex-c">
        {paymentState.map((payment, index) =>
          payment.discountParameters.specialNeedsBasedDiscount
            .gradesEligibleForDiscount.length > 0 &&
          payment.Id === props.paymentId ? (
            <span key={index}>
              {payment.discountParameters.specialNeedsBasedDiscount.gradesEligibleForDiscount.map(
                (grades, subIndex) => (
                  <span key={subIndex}>
                    <Textbox
                      type="number"
                      label={"For " + grades.gradeName}
                      placeholder={props.placeholder}
                      onChange={props.onChange}
                      name={
                        payment.discountParameters.discountUnit.charAt(0) ===
                        "p"
                          ? "grade-based-specialneed-percentage"
                          : "grade-based-specialneed-amount"
                      }
                      value={
                        payment.discountParameters.discountUnit.charAt(0) ===
                        "p"
                          ? grades.percentage
                          : grades.amount
                      }
                    />
                  </span>
                )
              )}
            </span>
          ) : (
            <>
              <p className="primary-label">
                <br />
                <br />
                <br />
                No {divisions[0].subDivisionType} found!
              </p>
            </>
          )
        )}
      </div>
    </>
  );
};

export default DivisionBasedSpecialneedDiscounts;
