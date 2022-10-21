import { useSelector, useDispatch } from "react-redux";
import { forwardRef, useRef, useEffect } from "react";
import Textbox from "./Utilities/Textbox";
import EmptyField from "./Utilities/EmptyField";
import PaymentHeader from "./TableComponents/PaymentHeader";
import PaymentRowHeader from "./TableComponents/PaymentRowHeader";
import {
  updatePaymentDiscountUnit,
  updateGradeBasedDiscount,
} from "../../../../features/paymentBase/paymentBaseSlice";
import PaymentCaption from "./TableComponents/PaymentCaption";
import PaymentTerms from "../DynamicPayments1/PaymentTerms";
import DiscountUnits from "./DiscountUnits";
import DiscountBase from "./DiscountBase";
import { updatePaymentTerm } from "../../../../features/paymentBase/paymentBaseSlice";

const DiscountAmountsTabel = ({updateDiscountBase}) => {
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
  const updateDiscountUnits = (event, index) => {
    const { id } = event.target;
    paymentState.map((paymentState) => {
      if (paymentState.Id === index) {
        dispatch(
          updatePaymentDiscountUnit({
            paymentId: index,
            unitType: id,
          })
          );
        }
      });
    };
    
  

  const dispatch = useDispatch();
  const ref0 = useRef(null);
  const ref1 = useRef(null);
  const ref2 = useRef(null);
  const ref3 = useRef(null);
  const itemEls = useRef(new Array());
  const refEls = useRef(new Array());

  function handleClickRefs(index) {
    refEls.current.map((ref) => {
      for (let a = 0; a < refEls.current.length; a++) {
        if (a === index) continue;
        else {
          refEls.current[a].className = "pr-7";
        }
      }
      if (ref.className === refEls.current[index].className) {
        ref.className += " focused-labels";
      } else {
        for (let a = 0; a < refEls.current.length; a++) {
          if (a === index) continue;
          else {
            refEls.current[a].className = " pr-7";
          }
        }
      }
    });
  }
  function clearRefs(index) {
    for (let a = 0; a < refEls.current.length; a++) {
      if (a === index) continue;
      else {
        refEls.current[a].className = "pr-7";
      }
    }
  }

  const onAClick = (e, index) => {
    handleClickRefs(index);
    ref0.current.className = "focused-labels";
    ref1.current.className = "";
    ref2.current.className = "";
    ref3.current.className = "";
  };

  const onBClick = (e, index) => {
    handleClickRefs(index);
    ref0.current.className = "";
    ref1.current.className = "focused-labels";
    ref2.current.className = "";
    ref3.current.className = "";
  };

  const onCClick = (e, index) => {
    handleClickRefs(index);
    ref0.current.className = "";
    ref1.current.className = "";
    ref2.current.className = "focused-labels";
    ref3.current.className = "";
  };

  const onDClick = (e, index) => {
    handleClickRefs(index);
    ref0.current.className = "";
    ref1.current.className = "";
    ref2.current.className = "";
    ref3.current.className = "focused-labels";
  };

  return (
    <div className="field-group-container">
      <section>
        <table className="payment-tablea">
          <PaymentCaption label={"Payment Discount Tabel"} />
          <thead>
            <tr>
              <th>
                <span className="flex-ccc -ml-1">
                  <div className="checkbox-inputs input__group">
                    <label className="checkbox-items">
                      <p className=" table-headers flex-start pb-1 pt-1 ml-p5">
                        Payment Types
                      </p>
                    </label>
                  </div>
                </span>
              </th>

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
            {/* PAYMENT TYPES  */}
            {paymentState.map((payments, index) => (
              <tr key={index}>
                <td className={payments.paymentType.paymentName}>
                  <div
                    onClick={() => clearRefs(index)}
                    ref={(element) => {
                      refEls.current[index] = element;
                    }}
                    className="flex-c flex-start field-group-container pr-7"
                  >
                    <section className="row-headers flex-start flex-c">
                      <PaymentRowHeader
                        label={payments.paymentType.paymentName}
                      />
                      <DiscountUnits
                        singlePayment={payments}
                        index={index}
                        handleDiscountUnits={updateDiscountUnits}
                      />
                      <DiscountBase
                        singlePayment={payments}
                        index={index}
                        handleDiscountBase={updateDiscountBase}
                        division={division}
                      />
                    </section>
                  </div>
                  <br />
                </td>

                {/* INPUT CONTROL FOR GENDER DISCOUNTS */}
                {payments.discountParameters.genderBasedDiscount.value ? (
                  <td
                    ref={(element) => itemEls.current.push(element)}
                    onClick={(e) => onAClick(e, index)}
                    className={payments.paymentType.paymentName + " pr-4 pl-2"}
                  >
                    <span>
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
                    </span>
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
