import { useSelector } from "react-redux";
// import Textbox from "../../../InputControls/Textbox";
import Textbox from "./Utilities/Textbox";
import EmptyField from "./Utilities/EmptyField";
import PaymentHeader from "./TableComponents/PaymentHeader";
import PaymentCaption from "./TableComponents/PaymentCaption";
const DiscountAmountsTabel = () => {
  const paymentState = useSelector((state) => state.payments.paymentState);
  // const genderDiscount = paymentState.discountParameters.genderBasedDiscount.value

  return (
    <div className="field-group-container">
      <section>
        {/* payment types goes here */}
        <table className="payment-tablea">
          <PaymentCaption label={" Payment Discount Percentages"} />
          <thead>
            <tr>
              <th></th>
              {/* headers for discount parameters */}
              <th className="pl-2">
                <PaymentHeader label={"Gender Discounts"} />
              </th>
              <th className="pl-2">
                <PaymentHeader label={"Special Need Discounts"} />
              </th>
              <th className="pl-2">
                <PaymentHeader label={"Scholarship Discounts"} />
              </th>
              <th className="pl-2">
                <PaymentHeader label={"Custom Discounts"} />
              </th>
            </tr>
          </thead>
          <tbody>
            {paymentState.map((payments, index) => (
              <tr>
                <td key={index} className="pr-7">
                  <PaymentHeader
                    label={payments.paymentType.paymentName}
                  />
                </td>
                {/* HANDLE GENDER DISOCOUNT AMOUNTS */}
                {payments.discountParameters.genderBasedDiscount.value ? (
                  <td className="pr-4 pl-2">
                    <>
                      <Textbox
                        label={
                          payments.discountParameters.genderBasedDiscount.genderType.charAt(
                            0
                          ) === "f"
                            ? "Discount for female"
                            : "Discount for male"
                        }
                        divClassName={"input--small input"}
                      />
                      <span>&nbsp;</span>
                    </>
                  </td>
                ) : (
                  <>
                    <EmptyField />
                    <span>&nbsp;</span>
                  </>
                )}

                <td className="pr-4 pl-2">
                  {payments.discountParameters.specialNeedsBasedDiscount
                    .value &&
                  payments.discountParameters.specialNeedsBasedDiscount
                    .specialNeeds.length === 0 ? (
                    <>
                      <Textbox
                        label={"Discount for Specialneeds"}
                        placeholder={"Amount Etb"}
                      />
                      <span>&nbsp;</span>
                    </>
                  ) : payments.discountParameters.specialNeedsBasedDiscount
                      .specialNeeds.length > 0 ? (
                    payments.discountParameters.specialNeedsBasedDiscount.specialNeeds.map(
                      (specialNeeds, index) => (
                        <span key={index}>
                          <Textbox
                            label={
                              "Discount for " + specialNeeds.specialNeedName
                            }
                          />
                          <span>&nbsp;</span>
                        </span>
                      )
                    )
                  ) : (
                    <>
                      <EmptyField />
                      <span>&nbsp;</span>
                    </>
                  )}
                </td>
                {/* HANDLE SCHOLARSHIP DISCOUNT AMOUNTS */}
                <td className="pr-4 pl-2">
                  {payments.discountParameters.scholarshipBasedDiscount.value &&
                  payments.discountParameters.scholarshipBasedDiscount
                    .scholarships.length === 0 ? (
                    <>
                      <Textbox
                        label={"Discount for Scholarship"}
                        placeholder={"Amount Etb"}
                      />
                      <span>&nbsp;</span>
                    </>
                  ) : payments.discountParameters.scholarshipBasedDiscount
                      .scholarships.length > 0 ? (
                    payments.discountParameters.scholarshipBasedDiscount.scholarships.map(
                      (scholarship) => (
                        <span>
                          <Textbox
                            label={
                              "Discount for " + scholarship.scholarshipName
                            }
                          />
                          <span>&nbsp;</span>
                        </span>
                      )
                    )
                  ) : (
                    <>
                      <EmptyField />
                      <span>&nbsp;</span>
                    </>
                  )}
                </td>
                {/* HANDE CUSTOM DISCOUNT AMOUNTS */}
                <td>
                  {payments.discountParameters.customPaymentDiscount.value ? (
                    payments.discountParameters.customPaymentDiscount.customDiscounts.map(
                      (customDiscount, subIndex) => (
                        <span>
                          <Textbox
                            label={
                              "Discount for " + customDiscount.discountName
                            }
                          />
                          <span>&nbsp;</span>
                        </span>
                      )
                    )
                  ) : (
                    <>
                      <EmptyField />
                      <span>&nbsp;</span>
                    </>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    </div>
  );
};

export default DiscountAmountsTabel;
