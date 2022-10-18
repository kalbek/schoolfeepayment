import { useSelector } from "react-redux";
import { useRef, useState } from "react";
import Textbox from "./Utilities/Textbox";
import EmptyField from "./Utilities/EmptyField";
import PaymentHeader from "./TableComponents/PaymentHeader";
import PaymentCaption from "./TableComponents/PaymentCaption";
import { useEffect } from "react";

const DiscountAmountsTabel = () => {
  const paymentState = useSelector((state) => state.payments.paymentState);
  const ref = useRef(null);
  const ref0 = useRef(null);
  const ref1 = useRef(null);
  const ref2 = useRef(null);
  const ref3 = useRef(null);
  const itemEls = useRef(new Array());
  const refEls = useRef(new Array());

  const onAClick = (e, index) => {
    for (let i = 0; i < refEls.current.length; i++) {
      let refs = refEls.current[i];
      if (refs.className === refEls.current[index].className) {
        refEls.current[i].className += " focused-labels";
      } else {
        if (refEls.current[i].className.includes("focused-labels")) {
          const len = refEls.current[i].className.length;
          refEls.current[i].className = refEls.current[i].className.slice(
            0,
            len - 15
          );
        }
      }
    }

    console.log(e)
    ref0.current.className = "focused-labels";
    ref1.current.className = "";
    ref2.current.className = "";
    ref3.current.className = "";
  };
  const onBClick = () => {
    // console.log(refEls.current[1]);
    console.log(itemEls.current[1].className);
    console.log("so: " + itemEls.current[1].className);
    ref0.current.className = "";
    ref1.current.className = "focused-labels";
    ref2.current.className = "";
    ref3.current.className = "";
  };
  const onCClick = () => {
    console.log(itemEls.current[2].className);
    ref0.current.className = "";
    ref1.current.className = "";
    ref2.current.className = "focused-labels";
    ref3.current.className = "";
  };
  const onDClick = () => {
    console.log(itemEls.current[3].className);
    ref0.current.className = "";
    ref1.current.className = "";
    ref2.current.className = "";
    ref3.current.className = "focused-labels";
  };

  function rowClicked(index) {
    console.log(index.target.lastChild.data);
    for (let i = 0; i < refEls.current.length; i++) {
      let refs = refEls.current[i];
      if (refs.className === "pr-7 " + index.target.lastChild.data) {
        refEls.current[i].className += " focused-labels";
      } else {
        if (refEls.current[i].className.includes("focused-labels")) {
          const len = refEls.current[i].className.length;
          refEls.current[i].className = refEls.current[i].className.slice(
            0,
            len - 15
          );
        }
      }
    }
  }

  function BKUP(index) {
    console.log(index.target.lastChild);
    for (let i = 0; i < refEls.current.length; i++) {
      let refs = refEls.current[i];
      if (refs.className === "pr-7 " + index.target.lastChild.data) {
        refEls.current[i].className += " focused-labels";
      } else {
        if (refEls.current[i].className.includes("focused-labels")) {
          const len = refEls.current[i].className.length;
          refEls.current[i].className = refEls.current[i].className.slice(
            0,
            len - 15
          );
        }
      }
    }
  }

  // const rowClicked = (index) => {};

  return (
    <div className="field-group-container">
      <section>
        {/* payment types goes here */}
        <table className="payment-tablea">
          <PaymentCaption label={"Payment Discount Percentages"} />
          <thead>
            <tr>
              <th></th>
              {/* headers for discount parameters */}
              <th className="pl-2">
                <span ref={ref0}>
                  <PaymentHeader label={"Gender Discounts"} />
                </span>
              </th>
              <th className="pl-2">
                <span ref={ref1}>
                  <PaymentHeader label={"Special Need Discounts"} />
                </span>
              </th>
              <th className="pl-2">
                <span ref={ref2}>
                  <PaymentHeader label={"Scholarship Discounts"} />
                </span>
              </th>
              <th className="pl-2">
                <span ref={ref3}>
                  <PaymentHeader label={"Custom Discounts"} />
                </span>
              </th>
            </tr>
          </thead>
          <tbody>
            {paymentState.map((payments, index) => (
              <tr key={index}>
                <td
                  // ref={(element) => refEls.current.push(element)}
                  ref={(element) => {
                    refEls.current[index] = element;
                  }}
                  className={"pr-7 " + payments.paymentType.paymentName}
                  onClick={rowClicked}
                >
                  <span>
                    <PaymentHeader label={payments.paymentType.paymentName} />
                  </span>
                </td>

                {/* INPUT CONTROL FOR GENDER DISCOUNTS */}
                {payments.discountParameters.genderBasedDiscount.value ? (
                  <td
                    ref={(element) => itemEls.current.push(element)}
                    onClick={(e) => onAClick(e, index)}
                    className={payments.paymentType.paymentName + " pr-4 pl-2 "}
                  >
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
                  <td>
                    <EmptyField />
                    <span>&nbsp;</span>
                  </td>
                )}

                {/* INPUT CONTROL FOR SPECIALNEED DISCOUNTS */}
                <td
                  ref={(element) => itemEls.current.push(element)}
                  onClick={(e) => onAClick(e, index)}
                  className={payments.paymentType.paymentName + " pr-4 pl-2"}
                >
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
                    <span>
                      <EmptyField />
                      <span>&nbsp;</span>
                    </span>
                  )}
                </td>

                {/* INPUT CONTROL FOR SCHOLARSHIP DISCOUNTS */}
                <td
                  ref={(element) => itemEls.current.push(element)}
                  onClick={(e) => onAClick(e, index)}
                  className={payments.paymentType.paymentName + " pr-4 pl-2"}
                >
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
                    <span>
                      <EmptyField />
                      <span>&nbsp;</span>
                    </span>
                  )}
                </td>

                {/* INPUT CONTROL FOR CUSTOM DISCOUNTS */}
                <td
                  ref={(element) => itemEls.current.push(element)}
                  onClick={(e) => onAClick(e, index)}
                  className={payments.paymentType.paymentName}
                >
                  {payments.discountParameters.customPaymentDiscount.value ? (
                    payments.discountParameters.customPaymentDiscount.customDiscounts.map(
                      (customDiscount, subIndex) => (
                        <span key={subIndex}>
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
                    <span>
                      <EmptyField />
                      <span>&nbsp;</span>
                    </span>
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
