import { useSelector } from "react-redux";
import Textbox from "../../../InputControls/Textbox";
import PaymentHeader from "./TableComponents/PaymentHeader";
import PaymentCaption from "./TableComponents/PaymentCaption";
const DiscountAmountsTabel = () => {
  const paymentState = useSelector((state) => state.payments.paymentState);
  // const genderDiscount = paymentState.discountParameters.genderBasedDiscount.value

  return (
    <div className="field-group-container">
      <section>
        {/* payment types goes here */}
        <table className="payment-table">
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
              {paymentState.map((payments, index) =>
                payments.discountParameters.customPaymentDiscount.customDiscounts.map(
                  (customDiscount, subIndex) => (
                    <th className="pl-2">
                      <PaymentHeader
                        key={subIndex}
                        label={customDiscount.discountName}
                      />
                    </th>
                  )
                )
              )}
            </tr>
          </thead>
          <tbody>
            {paymentState.map((payments, index) => (
              <tr key={index}>
                <td className="pr-7">
                  <PaymentHeader label={payments.paymentType.paymentName} />
                </td>
                {payments.discountParameters.genderBasedDiscount.value ? (
                  <td className="pr-4 pl-2">
                    <Textbox divClassName={"input--small input"} />
                  </td>
                ) : (
                  <td></td>
                )}
                {payments.discountParameters.specialNeedsBasedDiscount.value ? (
                  <td className="pr-4 pl-2">
                    <Textbox divClassName={"input--small input"} />
                  </td>
                ) : (
                  <td></td>
                )}
                {payments.discountParameters.scholarshipBasedDiscount.value ? (
                  <td className="pr-4 pl-2">
                    <Textbox divClassName={"input--small input"} />
                  </td>
                ) : (
                  <td></td>
                )}
                {payments.discountParameters.customPaymentDiscount.customDiscounts.map(
                  (customDiscount, subIndex) =>
                    customDiscount.discountName !== "" ? (
                      <td key={subIndex} className="pr-4 pl-2">
                        <Textbox divClassName={"input--small input"} />
                      </td>
                    ) : (
                      <></>
                    )
                )}
              </tr>
            ))}
            <tr>
              <td>{/* <Textbox /> */}</td>
              <td>{/* <Textbox /> */}</td>
            </tr>
          </tbody>
        </table>
      </section>
    </div>
  );
};

export default DiscountAmountsTabel;
