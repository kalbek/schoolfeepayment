import { useSelector } from "react-redux";

const PaymentType = ({ handlePaymentType, singlePayment, index }) => {
  const paymentType = [
    { id: "0", label: "Tuition Fee", value: "Tuition Fee" },
    { id: "1", label: "Transport Service fee", value: "Transport Service fee" },
    { id: "2", label: "Registration Fee", value: "Registration Fee" },
    { id: "3", label: "School Material Fee", value: "School Material Fee" },
    { id: "4", label: "Tutorial Fee", value: "Tutorial Fee" },
    {
      id: "5",
      label: "Recreational Fee (Trip, Visit ...)",
      value: "Recreational Fee",
    },
    { id: "6", label: "Penality Fee", value: "Penality Fee" },
    { id: "7", label: "Other Fees (if any)", value: "Other Fees" },
  ];

  const { popup } = useSelector((state) => state.popups);

  return (
    <>
      <div>
        {/* PAYMENT TYPE */}
        <div className="input__group">
          <div className="input__group flex-cr inputs input--bleow-medium">
            <select
              className={popup ? "inactive-bg" : "select-box"}
              name={"paymentType"}
              id={"paymentType" + index}
              onChange={(event) => handlePaymentType(event, index)}
              tabIndex={9}
              value={singlePayment.paymentType.paymentName}
              // value={singlePayment.paymentType.paymentName}
            >
              {paymentType.map((payment) => (
                <option value={payment.value} key={payment.value}>
                  {payment.label}
                </option>
              ))}
            </select>
            <label htmlFor="paymentType">
              {" "}
              <p>Payment Type</p>
            </label>
          </div>
        </div>
      </div>
    </>
  );
};

export default PaymentType;
