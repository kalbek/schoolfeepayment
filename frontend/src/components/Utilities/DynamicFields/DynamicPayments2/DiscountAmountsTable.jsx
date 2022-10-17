import { useSelector } from "react-redux";
import { useEffect, useRef, useState } from "react";
// import Textbox from "../../../InputControls/Textbox";
import Textbox from "./Utilities/Textbox";
import useClickAwayForClassnames from "../../../../hooks/useClickAwayForClassnames";
import EmptyField from "./Utilities/EmptyField";
import PaymentHeader from "./TableComponents/PaymentHeader";
import PaymentCaption from "./TableComponents/PaymentCaption";
const DiscountAmountsTabel = () => {
  const paymentState = useSelector((state) => state.payments.paymentState);
  // const genderDiscount = paymentState.discountParameters.genderBasedDiscount.value
  const ref = useRef(null);
  const ref0 = useRef(null);
  const ref1 = useRef(null);
  const ref2 = useRef(null);
  const ref3 = useRef(null);

  const itemEls = useRef(new Array());
  const refEls = useRef(new Array());

  const onAClick = (index) => {
    // console.log(ref)
    console.log(index)
    // console.log(refEls.current);
    if (itemEls.current[0].className.slice(2) === "pr-4 pl-2") {
      ref0.current.className = "focused-labels";
      ref1.current.className = "";
      ref2.current.className = "";
      ref3.current.className = "";
      // console.log(refEls.current[0])
      // console.log("one: "+ index.currentTarget.className.slice(0,1))
      if (index.currentTarget.className.slice(0, 1) === "0") {
        // console.log(refEls.current[0])
      }
    }
  };
  const onBClick = (index) => {
    // console.log(ref)
    console.log(index)
    // console.log(refEls.current);
    if (itemEls.current[1].className.slice(2) === "pr-4 pl-2") {
      ref0.current.className = "";
      ref1.current.className = "focused-labels";
      ref2.current.className = "";
      ref3.current.className = "";
      // console.log(refEls.current[1])
      // console.log("two: "+ index.currentTarget.className.slice(0,1))
      if (index.currentTarget.className.slice(0, 1) === "1") {
        // console.log(refEls.current[1])
        ref.current = "one";
      }
    }
  };
  const onCClick = (index) => {
    if (itemEls.current[2].className.slice(2) === "pr-4 pl-2") {
      ref0.current.className = "";
      ref1.current.className = "";
      ref2.current.className = "focused-labels";
      ref3.current.className = "";
      // console.log("three: " + index.currentTarget.className.slice(0, 1));
      if (index.currentTarget.className.slice(0, 1) === "2") {
        // console.log(refEls.current[2]);
        ref.current = "two";
      }
    }
  };
  const onDClick = (index) => {
    // console.log(index.currentTarget.className.slice(0, 1));
    if (itemEls.current[3].className === "0") {
      ref0.current.className = "";
      ref1.current.className = "";
      ref2.current.className = "";
      ref3.current.className = "focused-labels";
    }
  };

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
                  ref={(element) => refEls.current.push(element)}
                  className={"pr-7 " + index}
                >
                  <span>
                    <PaymentHeader label={payments.paymentType.paymentName} />
                  </span>
                </td>

                {/* INPUT CONTROL FOR GENDER DISCOUNTS */}
                {payments.discountParameters.genderBasedDiscount.value ? (
                  <td
                    ref={(element) => itemEls.current.push(element)}
                    onClick={onAClick}
                    className={index + " pr-4 pl-2"}
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
                  onClick={onBClick}
                  className={index + " pr-4 pl-2"}
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
                  onClick={onCClick}
                  className={index + " pr-4 pl-2"}
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
                  onClick={onDClick}
                  className={index}
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
