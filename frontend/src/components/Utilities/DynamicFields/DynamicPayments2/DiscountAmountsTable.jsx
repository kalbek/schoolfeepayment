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
        <table>
          <PaymentCaption label={" Payment Discount Percentages"} />
          <thead>
            <tr>
              <th></th>
              {/* headers for discount parameters */}
              <th className="pr-7">
                <PaymentHeader label={"Gender Discounts"} />
              </th>
              <th className="pr-4">
                <PaymentHeader label={"Special Needs"} />
              </th>
              <th className="pr-4">
                <PaymentHeader label={"Scholarships"} />
              </th>
            </tr>
            {/* payment types goes here */}
          </thead>
          <tbody>
            {paymentState.map((payments, index) => (
              <tr key={index}>
                <td className="pr-7">
                  <PaymentHeader label={payments.paymentType.paymentName} />
                </td>
                {payments.discountParameters.genderBasedDiscount.value ? (
                  <td className="pr-4">
                    <Textbox divClassName={"bgr input--small input"} />
                  </td>
                ) : <td></td>}
                {payments.discountParameters.specialNeedsBasedDiscount
                  .value ? (
                  <td className="pr-4">
                    <Textbox divClassName={"bgr input--small input"} />
                  </td>
                ) : <td></td>}
                {payments.discountParameters.scholarshipBasedDiscount.value ? (
                  <td>
                    <Textbox divClassName={"bgr input--small input"} />
                  </td>
                ) : <td></td>}
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
