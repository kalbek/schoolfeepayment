import { useState } from "react";
import { useSelector } from "react-redux";
import RemoveLinksButton from "../../Buttons/RemoveLinksButton";

const PaymentType = ({
  handleCustomPaymentType,
  handlePaymentType,
  removeCustomPaymentType,
  singlePayment,
  index,
}) => {
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
    { id: "7", label: "Custom (Other) Fees", value: "Custom Fees" },
  ];

  const { popup } = useSelector((state) => state.popups);
  const paymentState = useSelector((state) => state.payments);
  return (
    <>
      <div>
        {/* PAYMENT TYPE */}
        <div className="input__group mt-1p3">
          <div className="input__group flex-cr inputs input--bleow-medium">
            {/* INPUT BOX FOR CUSTOM PAYMENT TYPE */}
            {paymentState.paymentState[index].paymentType
              .isCustomPaymentType ? (
              <div className="flex">
                <div className="flex-cr">
                  <input
                    type="text"
                    name="creditHoursPaymentBase"
                    id={"creditHoursBasedPayment"}
                    placeholder="e.g. Club Activity Fee"
                    value={
                      paymentState.paymentState[index].paymentType
                        .customPaymentName
                    }
                    // checked={creditHourPaymentBase}
                    onChange={(e) => handleCustomPaymentType(e, index)}
                    tabIndex={9}
                  />
                  <label htmlFor="paymentType">
                    {" "}
                    <p className="mlp3">Custom Payment Type</p>
                  </label>
                </div>
                <RemoveLinksButton
                  remove={removeCustomPaymentType}
                  index={index}
                />
              </div>
            ) : (
              <>
                <select
                  className={popup ? "inactive-bg" : "select-box"}
                  name={"paymentType"}
                  id={"paymentType" + index}
                  onChange={(event) => handlePaymentType(event, index)}
                  tabIndex={9}
                  value={singlePayment.paymentType.paymentName}
                >
                  {paymentType.map((payment) => (
                    <option value={payment.value} key={payment.value}>
                      {payment.label}
                    </option>
                  ))}
                </select>

                <label htmlFor="paymentType">
                  {" "}
                  <p className="mlp3">Payment Type</p>
                </label>
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default PaymentType;
