import { useSelector, useDispatch } from "react-redux";
import { useRef } from "react";
import Textbox from "./Utilities/Textbox";
import EmptyField from "./Utilities/EmptyField";
import PaymentHeader from "./TableComponents/PaymentHeader";
import PaymentRowHeader from "./TableComponents/PaymentRowHeader";
import { updatePaymentDiscountUnit } from "../../../../features/paymentBase/paymentBaseSlice";
import PaymentCaption from "./TableComponents/PaymentCaption";
import Radio from "./Utilities/Radio";
import Checkbox from "./Utilities/Checkbox";

const DiscountAmountsTabel = () => {
  const paymentState = useSelector((state) => state.payments.paymentState);
  const educationalDivisionState = useSelector(
    (state) => state.educationalDivisions.educationalDivision
  );
  const division =
    educationalDivisionState[0].educationalSubDivision[0].subDivisionType;
  const lastDivisionState =
    educationalDivisionState[educationalDivisionState.length - 1];
  const lastSubDivisionState =
    lastDivisionState.educationalSubDivision[
      lastDivisionState.educationalSubDivision.length - 1
    ];

  const dispatch = useDispatch();
  const ref0 = useRef(null);
  const ref1 = useRef(null);
  const ref2 = useRef(null);
  const ref3 = useRef(null);
  const itemEls = useRef(new Array());
  const refEls = useRef(new Array());

  const onAClick = (e, index) => {
    refEls.current.map((cu) => {
      if (cu.className === refEls.current[index].className) {
        cu.className += " focused-labels";
      } else {
        for (let a = 0; a < refEls.current.length; a++) {
          if (a === index) continue;
          refEls.current[a].className = "";
        }
      }
    });
    ref0.current.className = "focused-labels";
    ref1.current.className = "";
    ref2.current.className = "";
    ref3.current.className = "";
  };

  const onBClick = (e, index) => {
    refEls.current.map((cu) => {
      if (cu.className === refEls.current[index].className) {
        cu.className += " focused-labels";
      } else {
        for (let a = 0; a < refEls.current.length; a++) {
          if (a === index) continue;
          refEls.current[a].className = "";
        }
      }
    });
    ref0.current.className = "";
    ref1.current.className = "focused-labels";
    ref2.current.className = "";
    ref3.current.className = "";
  };

  const onCClick = (e, index) => {
    refEls.current.map((cu) => {
      if (cu.className === refEls.current[index].className) {
        cu.className += " focused-labels";
      } else {
        for (let a = 0; a < refEls.current.length; a++) {
          if (a === index) continue;
          refEls.current[a].className = "";
        }
      }
    });
    ref0.current.className = "";
    ref1.current.className = "";
    ref2.current.className = "focused-labels";
    ref3.current.className = "";
  };

  const onDClick = (e, index) => {
    refEls.current.map((cu) => {
      if (cu.className === refEls.current[index].className) {
        cu.className += " focused-labels";
      } else {
        for (let a = 0; a < refEls.current.length; a++) {
          if (a === index) continue;
          refEls.current[a].className = "";
        }
      }
    });
    ref0.current.className = "";
    ref1.current.className = "";
    ref2.current.className = "";
    ref3.current.className = "focused-labels";
  };

  function BKUP(index) {
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

  const handleDiscountUnits = (event, index) => {
    // console.log("index: " + index);
    const { id } = event.target;
    paymentState.map((paymentState) => {
      console.log(paymentState.discountParameters.discountUnit);
        dispatch(
          updatePaymentDiscountUnit({
            paymentId: index,
            discountUnitType: id,
          })
        );
    });
  };

  return (
    <div className="field-group-container">
      <section>
        <table className="payment-tablea">
          <PaymentCaption label={"Payment Discount Tabel"} />
          <thead>
            <tr>
              <th></th>
              {/* headers for discount parameters */}
              <th className="pl-2">
                <span>
                  <span ref={ref0}>
                    <PaymentHeader label={"Gender Discounts"} />
                  </span>
                </span>
                <br />
              </th>
              <th className="pl-2">
                <span>
                  <span ref={ref1}>
                    <PaymentHeader label={"Special Need Discounts"} />
                  </span>
                </span>
                <br />
              </th>
              <th className="pl-2">
                <span ref={ref2}>
                  <PaymentHeader label={"Scholarship Discounts"} />
                </span>
                <br />
              </th>
              <th className="pl-2">
                <span ref={ref3}>
                  <PaymentHeader label={"Custom Discounts"} />
                </span>
                <br />
              </th>
            </tr>
          </thead>
          <tbody>
            {paymentState.map((payments, index) => (
              <tr key={index}>
                <td className={payments.paymentType.paymentName}>
                  <div className="flex-c field-group-container pr-7">
                    <section>
                      <span
                        ref={(element) => {
                          refEls.current[index] = element;
                        }}
                        className="mt-1"
                      >
                        <PaymentRowHeader
                          label={payments.paymentType.paymentName}
                        />
                      </span>
                      {/* checkbox-inputs input__group field-group-container pt2 */}
                      <div className="flex checkbox-group">
                        <div className="flex-c">
                          {/* Payment unit radio buttons */}
                          <div className="field-group-container">
                            <section>
                              <div className="flex-c flex-start input__group inputs ">
                                <label htmlFor="" className="-mb-p5f ">
                                  <p>Discount Units</p>
                                </label>
                                <div className="flex gapp5 -mt-p5">
                                  <div className="input__groupa -mt-1s">
                                    <label
                                      className="flex-cs"
                                      htmlFor={"percentage" + index}
                                    >
                                      <input
                                        name={"genderDiscount"}
                                        id={"percentage" + index}
                                        type="radio"
                                        // value={
                                        //   payments.discountParameters
                                        //     .discountUnit
                                        // }
                                        checked={
                                          payments.discountParameters
                                            .discountUnit ===
                                          "percentage" + index
                                        }
                                        onChange={(event) =>
                                          handleDiscountUnits(event, index)
                                        }
                                      />
                                      <span>
                                        &nbsp; <p>{"(%) pct"}</p>
                                      </span>
                                    </label>
                                  </div>

                                  <div className="input__groupa -mt-1s">
                                    <label
                                      className="flex-cs"
                                      htmlFor={"amount" + index}
                                    >
                                      <input
                                        name={"genderDiscount"}
                                        id={"amount" + index}
                                        type={"radio"}
                                        // value={
                                        //   payments.discountParameters
                                        //     .discountUnit
                                        // }
                                        checked={
                                          payments.discountParameters
                                            .discountUnit ===
                                          "amount" + index
                                        }
                                        onChange={(event) =>
                                          handleDiscountUnits(event, index)
                                        }
                                      />
                                      <span>
                                        &nbsp; <p>Amount</p>
                                      </span>
                                    </label>
                                  </div>
                                  {console.log(
                                    payments.discountParameters.discountUnit ===
                                      "amount" + index
                                  )}
                                </div>
                              </div>
                            </section>
                          </div>
                          {/* Payment Discount Bases */}
                          <div className="field-group-container">
                            <section>
                              <div className="flex-c flex-start input__group inputs ">
                                <label htmlFor="" className="-mb-p5f ">
                                  <p>Discount Base</p>
                                </label>
                                <div className="flex gapp5 -mt-p5">
                                  <div className="input__group pr-6">
                                    <label
                                      className="checkbox-items flex flex-cs   pr-1 "
                                      htmlFor={"aditional-parameters"}
                                    >
                                      <input
                                        type="checkbox"
                                        // name={name}
                                        id={"aditional-parameters"}
                                        // id={id}
                                        // value={value}
                                        // checked={checked}
                                        // onChange={onChange}
                                      />
                                      <>
                                        <span>
                                          &nbsp; <p>Based on {division}</p>
                                        </span>
                                      </>
                                    </label>
                                  </div>
                                </div>
                              </div>
                            </section>
                          </div>
                          &nbsp;
                        </div>
                      </div>
                    </section>
                  </div>
                  <br />
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
                  onClick={(e) => onBClick(e, index)}
                  className={payments.paymentType.paymentName + " pr-4 pl-2"}
                >
                  {payments.discountParameters.specialNeedsBasedDiscount
                    .value &&
                  payments.discountParameters.specialNeedsBasedDiscount
                    .specialNeeds.length === 0 ? (
                    <>
                      <Textbox
                        label={"Discount Specialneeds"}
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
                  onClick={(e) => onCClick(e, index)}
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
                  onClick={(e) => onDClick(e, index)}
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
