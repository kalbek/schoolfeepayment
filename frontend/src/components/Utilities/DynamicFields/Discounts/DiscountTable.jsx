import { useSelector, useDispatch } from "react-redux";
import { forwardRef, useRef, useState, useEffect } from "react";
import Textbox from "./Utilities/Textbox";
import EmptyField from "./Utilities/EmptyField";
import ColumnHeader from "./Components/TableComponents/ColumnHeader";
import RowHeader from "./Components/TableComponents/RowHeader";
import Label from "./Utilities/Label";
import {
  updatePaymentDiscountUnit,
  updateScholarshipDiscountValue,
  updateCustomDiscount,
  updateGenderDiscountsValue,
  updateSpecialNeedDiscountValue,
} from "../../../../features/paymentBase/paymentBaseSlice";
// import DiscountTableFunctions.updateDiscountUnits from
import { updateGradeBasedDiscountValues } from "../../../../features/Grades&Divisions/grades&DivisionsSlice";
import TableCaption from "./Components/TableComponents/TableCaption";
import DiscountUnits from "./Components/DiscountComponents/DiscountUnits";
import DiscountBase from "./Components/DiscountComponents/DiscountBase";
import DivisionBasedGenderDiscounts from "./Components/DiscountComponents/DivisionBasedGenderDiscounts";
import DivisionBasedSpecialneedDiscounts from "./Components/DiscountComponents/DivisionBasedSpecialneedDiscounts";
import DivisionBasedScholarshipDiscounts from "./Components/DiscountComponents/DivisionBasedScholarshipDiscounts";
import DivisionBasedCustomDiscount from "./Components/DiscountComponents/DivisionBasedCustomDiscount";
const DiscountTable = ({
  updateDiscountBase,
  handleGradebasedDiscountAmount,
}) => {
  const paymentState = useSelector((state) => state.payments.paymentState);
  const educationalDivisionState = useSelector(
    (state) => state.educationalDivisions.educationalDivision
  );

  const division =
    educationalDivisionState[0].educationalSubDivision[0].subDivisionType;
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

  const handleDiscountAmountInputs = (event, index, subIndex) => {
    const { id, name, valueAsNumber } = event.target;
    paymentState.map((paymentState) => {
      if (paymentState.Id === index) {
        if (name === "gender-by-percent" || name === "gender-by-amount") {
          dispatch(
            updateGenderDiscountsValue({
              discountType: name,
              paymentId: index,
              unitType: id,
              value: valueAsNumber,
            })
          );
        } else if (
          name === "specialneed-by-percent" ||
          name === "specialneed-by-amount"
        ) {
          console.log("ind");
          dispatch(
            updateSpecialNeedDiscountValue({
              discountType: name,
              specialNeedId: subIndex,
              paymentId: index,
              unitType: id,
              value: valueAsNumber,
            })
          );
        } else if (
          name === "scholarship-by-percent" ||
          name === "scholarship-by-amount"
        ) {
          dispatch(
            updateScholarshipDiscountValue({
              discountType: name,
              paymentId: index,
              scholarshipId: subIndex,
              unitType: id,
              value: valueAsNumber,
            })
          );
        } else if (
          name === "custom-by-percent" ||
          name === "custom-by-amount"
        ) {
          dispatch(
            updateCustomDiscount({
              paymentId: index,
              discountIndex: subIndex,
              discountUnit: name,
              value: valueAsNumber,
            })
          );
        }
      }
    });
  };

  const updateValuesforGradebasedGenderDiscounts = (event, index) => {
    const { id, name, valueAsNumber } = event.target;
    educationalDivisionState.map((division, index) => {
      paymentState.map((paymentState) => {
        console.log("name: " + name);
        if (division.id === paymentState.Id) {
          console.log("oha: " + division.id);
        }
        if (paymentState.Id === index) {
          dispatch(
            updateGradeBasedDiscountValues({
              discountType: name,
              paymentId: index,
              unitType: id,
              value: valueAsNumber,
            })
          );
        }
      });
    });
  };

  const dispatch = useDispatch();
  const ref0 = useRef(null);
  const ref1 = useRef(null);
  const ref2 = useRef(null);
  const ref3 = useRef(null);
  const itemEls = useRef(new Array());
  const refEls = useRef(new Array());

  function clearRefs(index) {
    for (let a = 0; a < refEls.current.length; a++) {
      if (a === index) continue;
      else {
        refEls.current[a].className = "pr-7";
      }
    }
  }

  function handleClickRefs(index) {
    refEls.current.map((ref) => {
      clearRefs(index);
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

  const onAClick = (e, index) => {
    handleClickRefs(index);
    if (ref0.current !== null) ref0.current.className = "focused-labels";
    if (ref1.current !== null) ref1.current.className = "";
    if (ref2.current !== null) ref2.current.className = "";
    if (ref3.current !== null) ref3.current.className = "";
  };

  const onBClick = (e, index) => {
    handleClickRefs(index);
    if (ref0.current !== null) ref0.current.className = "";
    if (ref1.current !== null) ref1.current.className = "focused-labels";
    if (ref2.current !== null) ref2.current.className = "";
    if (ref3.current !== null) ref3.current.className = "";
  };

  const onCClick = (e, index) => {
    handleClickRefs(index);
    if (ref0.current !== null) ref0.current.className = "";
    if (ref1.current !== null) ref1.current.className = "";
    if (ref2.current !== null) ref2.current.className = "focused-labels";
    if (ref3.current !== null) ref3.current.className = "";
  };

  const onDClick = (e, index) => {
    handleClickRefs(index);
    if (ref0.current !== null) ref0.current.className = "";
    if (ref1.current !== null) ref1.current.className = "";
    if (ref2.current !== null) ref2.current.className = "";
    if (ref3.current !== null) ref3.current.className = "focused-labels";
  };

  const [gender, setGender] = useState(false);
  const [specialneed, setSpecialneed] = useState(false);
  const [scholarship, setScholarship] = useState(false);
  const [custom, setCustom] = useState(false);

  // Check existance of each discount parameter to display their names as column header
  useEffect(() => {
    paymentState.map((payment) => {
      if (payment.discountParameters.genderBasedDiscount.value === true) {
        setGender(true);
      }
      if (payment.discountParameters.specialNeedsBasedDiscount.value === true) {
        setSpecialneed(true);
      }
      if (payment.discountParameters.scholarshipBasedDiscount.value === true) {
        setScholarship(true);
      }
      if (payment.discountParameters.customPaymentDiscount.value === true) {
        setCustom(true);
      }
    });
  }, [paymentState]);

  return (
    <div className="field-group-container">
      <section>
        <table className="payment-tablea">
          <TableCaption label={"Payment Discount Tabel"} />
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
              {gender && (
                <th className="pr-6 ">
                  <span className="flex-ccc ">
                    {/* {console.log(gender)} */}
                    <span ref={ref0}>
                      <ColumnHeader label={"Gender Discounts"} />
                    </span>
                  </span>
                  <br />
                </th>
              )}
              {specialneed && (
                <th className="pr-6 ">
                  <span className="flex-ccc ">
                    <span ref={ref1}>
                      <ColumnHeader label={"Special Need Discounts"} />
                    </span>
                  </span>
                  <br />
                </th>
              )}
              {scholarship && (
                <th className="pr-6 ">
                  <span className="flex-ccc ">
                    <span ref={ref2}>
                      <ColumnHeader label={"Scholarship Discounts"} />
                    </span>
                  </span>
                  <br />
                </th>
              )}
              {custom && (
                <th className="pr-6 ">
                  <span className="flex-ccc ">
                    <span ref={ref3}>
                      <ColumnHeader label={"Custom Discounts"} />
                    </span>
                  </span>
                  <br />
                </th>
              )}
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
                      <RowHeader label={payments.paymentType.paymentName} />
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
                {!gender && !scholarship && !specialneed && !custom ? (
                  <td className="flex-ccc">
                    {" "}
                    <Label
                      label={
                        "You have NO Discount Rules!! Go to Payments 1 to define discount rules"
                      }
                    />{" "}
                    <br />
                  </td>
                ) : gender &&
                  payments.discountParameters.genderBasedDiscount.value ? (
                  <td
                    ref={(element) => itemEls.current.push(element)}
                    onClick={(e) => onAClick(e, index)}
                    // className={payments.paymentType.paymentName}
                    className={payments.paymentType.paymentName + " pr-2"}
                    // className={payments.paymentType.paymentName + " pr-4 pl-2"}
                  >
                    <>
                      {/* IF SCHOOLS HAVE A GENDER BASED DISCOUNT RECIVE PERCERTAGE OR AMOUNT VALUES FOR GENDER DISCOUNTS */}
                      {payments.discountParameters.isGradeBasedDiscountType ? (
                        <>
                          <span className="field-group-container">
                            <section className="focused-label">
                              <Label
                                label={
                                  payments.discountParameters.genderBasedDiscount.genderType.charAt(
                                    0
                                  ) === "f"
                                    ? "Discount for female"
                                    : "Discount for male"
                                }
                              />
                              <DivisionBasedGenderDiscounts
                                dicountType={"gender-discount"}
                                paymentIndex={index}
                                // onChange={
                                //   updateValuesforGradebasedGenderDiscounts
                                // }
                              />
                              <span>&nbsp;</span>
                            </section>
                          </span>
                        </>
                      ) : (
                        // ELSE IF SCHOOLS HAVE GENDER BASED DISCOUNT SYSTEM WHICH IS NOT BASED ON GRADE LEVELS SIMPLY SHOW SINGE INPUT BOX
                        <span>
                          <Textbox
                            gradeBase={false}
                            hasTopLevelContainer={true}
                            type="number"
                            label={
                              payments.discountParameters.genderBasedDiscount.genderType.charAt(
                                0
                              ) === "f"
                                ? "Discount for female"
                                : "Discount for male"
                            }
                            placeholder={
                              payments.discountParameters.discountUnit.charAt(
                                0
                              ) === "p"
                                ? "In Percentage (%)"
                                : "Amount in ETB"
                            }
                            onChange={(event) =>
                              handleDiscountAmountInputs(event, index)
                            }
                            name={
                              payments.discountParameters.discountUnit.charAt(
                                0
                              ) === "p"
                                ? "gender-by-percent"
                                : "gender-by-amount"
                            }
                            value={
                              payments.discountParameters.discountUnit.charAt(
                                0
                              ) === "p"
                                ? payments.discountParameters
                                    .genderBasedDiscount.percentage
                                : payments.discountParameters
                                    .genderBasedDiscount.amount
                            }
                          />
                        </span>
                      )}
                      <span>&nbsp;</span>
                    </>
                  </td>
                ) : gender ? (
                  <td className="pl-6">
                    <Label label={"No Gender Rule!"} />
                    &nbsp;
                  </td>
                ) : (
                  <>
                    <></>
                  </>
                )}
                {/* INPUT CONTROL FOR SPECIALNEED DISCOUNTS */}
                {/* IF SCHOOLS HAVE A SCHOLARSHIP BASED DISCOUNT RECIVE PERCERTAGE OR AMOUNT VALUES FOR SCHOLARSHIP DISCOUNTS */}

                {specialneed &&
                payments.discountParameters.specialNeedsBasedDiscount.value ? (
                  <td
                    ref={(element) => itemEls.current.push(element)}
                    onClick={(e) => onBClick(e, index)}
                    className={payments.paymentType.paymentName + " pr-2"}
                    // className={payments.paymentType.paymentName + " pr-4 pl-2"}
                  >
                    {/* IF SCHOLARSHIP DISCOUNT IS BASED ON GRADES  */}
                    {/* MAP THROUGH SCHOLARSHIP AMOUNTS AND DISPLAY GRADES FOR EACH SCHOLARSHIP AMOUNTS */}
                    {payments.discountParameters.isGradeBasedDiscountType &&
                    payments.discountParameters.specialNeedsBasedDiscount
                      .value ? (
                      <span>
                        {payments.discountParameters.specialNeedsBasedDiscount.specialNeeds.map(
                          (specialneed, subIndex) =>
                            // IF NUMBER OF SPECIALNEEDS ARE MORE THAN ONE DISPLAY SPECIALNEEDS TYPE NAMES AS LABEL
                            payments.discountParameters
                              .specialNeedsBasedDiscount.specialNeeds.length >
                            0 ? (
                              <span
                                className="field-group-container"
                                key={subIndex}
                              >
                                {console.log(specialneed)}
                                <section className="focused-label">
                                  <Label label={specialneed.specialNeedName} />
                                  <DivisionBasedSpecialneedDiscounts
                                    dicountType={"specialneed-discount"}
                                    paymentIndex={index}
                                    currentSpecialneed={specialneed}
                                    onChange={
                                      updateValuesforGradebasedGenderDiscounts
                                    }
                                  />
                                  <span>&nbsp;</span>
                                </section>
                              </span>
                            ) : (
                              // IF NUM OF SCHOLARSHIPS ARE ONLY 1 DO NOT DISPLAY SCHOLARSHIPT TYPE NAMES AS LABEL
                              <>
                                <DivisionBasedSpecialneedDiscounts
                                  dicountType={"specialneed-discount"}
                                  paymentIndex={index}
                                  currentSpecialneed={specialneed}
                                  onChange={
                                    updateValuesforGradebasedGenderDiscounts
                                  }
                                />
                              </>
                            )
                        )}
                      </span>
                    ) : (
                      <>
                        {/*ELSE IF SPECIALNEED DISCOUNT DO NOT BASE ON GRADE LEVELS JUST DISPLAY A SIMPLE TEXT BOX FOR EVERY SPECIALNEED TYPES  */}
                        {/*  */}
                        {payments.discountParameters.specialNeedsBasedDiscount.specialNeeds.map(
                          (specialneed, index) => (
                            <span key={index}>
                              <Textbox
                                type="number"
                                hasTopLevelContainer={true}
                                label={specialneed.specialNeedName}
                                placeholder={
                                  payments.discountParameters.discountUnit.charAt(
                                    0
                                  ) === "p"
                                    ? "In Percentage (%)"
                                    : "Amount in ETB"
                                }
                                onChange={(event) =>
                                  handleDiscountAmountInputs(event, index)
                                }
                                value={
                                  payments.discountParameters.discountUnit.charAt(
                                    0
                                  ) === "p"
                                    ? specialneed.percentage
                                    : specialneed.amount
                                }
                                name={
                                  payments.discountParameters.discountUnit.charAt(
                                    0
                                  ) === "p"
                                    ? "specialneed-by-percent"
                                    : "specialneed-by-amount"
                                }
                              />
                            </span>
                          )
                        )}
                      </>
                    )}
                    <span>&nbsp;</span>
                  </td>
                ) : specialneed ? (
                  // ELSE IF SCHOOLS DO NOT HAVE A SPECIALNEED BASED DISCOUNTS DISPLAY EMPTY FIELD
                  <td className="pl-6">
                    <Label label={"No Specialneed Rule!"} />
                    <>&nbsp;</>
                  </td>
                ) : (
                  <>
                    <></>
                  </>
                )}
                {/* INPUT CONTROL FOR SCHOLARSHIP DISCOUNTS */}

                {/* IF SCHOOLS HAVE A SCHOLARSHIP BASED DISCOUNT RECIVE PERCERTAGE OR AMOUNT VALUES FOR SCHOLARSHIP DISCOUNTS */}
                {payments.discountParameters.scholarshipBasedDiscount.value ? (
                  <td
                    ref={(element) => itemEls.current.push(element)}
                    onClick={(e) => onCClick(e, index)}
                    className={payments.paymentType.paymentName + " pr-2"}
                  >
                    {/* IF SCHOLARSHIP DISCOUNT IS BASED ON GRADES  */}
                    {/* MAP THROUGH SCHOLARSHIP AMOUNTS AND DISPLAY GRADES FOR EACH SCHOLARSHIP AMOUNTS */}
                    {scholarship &&
                    payments.discountParameters.isGradeBasedDiscountType &&
                    payments.discountParameters.scholarshipBasedDiscount
                      .value ? (
                      <span>
                        {payments.discountParameters.scholarshipBasedDiscount.scholarships.map(
                          (scholarships, subIndex) =>
                            // IF NUM OF SCHOLARSHIPS ARE MORE THAN ONE DISPLAY SCHOLARSHIPT TYPE NAMES AS LABEL
                            payments.discountParameters.scholarshipBasedDiscount
                              .scholarships.length > 0 ? (
                              <span
                                className="field-group-container"
                                key={subIndex}
                              >
                                <section className="focused-label">
                                  {console.log(scholarships)}
                                  <Label label={scholarships.scholarshipName} />
                                  <DivisionBasedScholarshipDiscounts
                                    dicountType={"scholarship-discount"}
                                    paymentIndex={index}
                                    currentScholarship={scholarships}
                                    onChange={
                                      updateValuesforGradebasedGenderDiscounts
                                    }
                                  />
                                  <span>&nbsp;</span>
                                </section>
                              </span>
                            ) : (
                              // IF NUM OF SCHOLARSHIPS ARE ONLY 1 DO NOT DISPLAY SCHOLARSHIPT TYPE NAMES AS LABEL
                              <>
                                <DivisionBasedScholarshipDiscounts
                                  dicountType={"scholarship-discount"}
                                  paymentIndex={index}
                                  currentScholarship={scholarships}
                                  onChange={
                                    updateValuesforGradebasedGenderDiscounts
                                  }
                                />
                              </>
                            )
                        )}
                      </span>
                    ) : (
                      <>
                        {/*ELSE IF SCHOLARSHIP DISCOUNT DO NOT BASE ON GRADE LEVELS JUST DISPLAY A SIMPLE TEXT BOX FOR EVERY SCHOLARSHIP TYPES  */}
                        {/*  */}
                        {payments.discountParameters.scholarshipBasedDiscount.scholarships.map(
                          (scholarship, index) => (
                            <span key={index}>
                              <Textbox
                                type="number"
                                hasTopLevelContainer={true}
                                label={scholarship.scholarshipName}
                                placeholder={
                                  payments.discountParameters.discountUnit.charAt(
                                    0
                                  ) === "p"
                                    ? "In Percentage (%)"
                                    : "Amount in ETB"
                                }
                                onChange={(event) =>
                                  handleDiscountAmountInputs(event, index)
                                }
                                value={
                                  payments.discountParameters.discountUnit.charAt(
                                    0
                                  ) === "p"
                                    ? scholarship.percentage
                                    : scholarship.amount
                                }
                                name={
                                  payments.discountParameters.discountUnit.charAt(
                                    0
                                  ) === "p"
                                    ? "scholarship-by-percent"
                                    : "scholarship-by-amount"
                                }
                              />
                            </span>
                          )
                        )}
                      </>
                    )}
                    <>
                      <span>&nbsp;</span>
                    </>
                  </td>
                ) : scholarship ? (
                  // ELSE IF SCHOOLS DO NOT HAVE A SCHOLARSHIP BASED DISCOUNTS DISPLAY EMPTY FIELD
                  <td className="pl-6">
                    <Label label={"No Scholarship Rule!"} />
                    <>&nbsp;</>
                  </td>
                ) : (
                  <>
                    <></>
                  </>
                )}

                {/* START HERE  */}
                {/* IF SCHOOLS HAVE A CUSTOMS BASED DISCOUNT RECIVE PERCERTAGE OR AMOUNT VALUES FOR CUSTOMS DISCOUNTS */}
                {/* {console.log(payments.discountParameters.customPaymentDiscount.value)} */}

                {payments.discountParameters.customPaymentDiscount.value ? (
                  <td
                    ref={(element) => itemEls.current.push(element)}
                    onClick={(e) => onCClick(e, index)}
                    className={payments.paymentType.paymentName + " pr-2"}
                  >
                    {/* IF CUSTOMS DISCOUNT IS BASED ON GRADES  */}
                    {/* MAP THROUGH CUSTOMS AMOUNTS AND DISPLAY GRADES FOR EACH CUSTOMS AMOUNTS */}
                    {custom &&
                    payments.discountParameters.isGradeBasedDiscountType &&
                    payments.discountParameters.customPaymentDiscount.value ? (
                      <span>
                        {payments.discountParameters.customPaymentDiscount.customDiscounts.map(
                          (custom, subIndex) =>
                            // IF NUM OF CUSTOMS ARE MORE THAN ONE DISPLAY CUSTOMS TYPE NAMES AS LABEL
                            payments.discountParameters.customPaymentDiscount
                              .customDiscounts.length > 0 ? (
                              <span
                                className="field-group-container"
                                key={subIndex}
                              >
                                <section className="focused-label">
                                  <Label label={custom.discountName} />
                                  <DivisionBasedCustomDiscount
                                    dicountType={"custom-discount"}
                                    paymentIndex={index}
                                    currentCustom={custom}
                                    onChange={
                                      updateValuesforGradebasedGenderDiscounts
                                    }
                                  />
                                  <span>&nbsp;</span>
                                </section>
                              </span>
                            ) : (
                              // IF NUM OF SCHOLARSHIPS ARE ONLY 1 DO NOT DISPLAY SCHOLARSHIPT TYPE NAMES AS LABEL
                              <>
                                <DivisionBasedCustomDiscount
                                  dicountType={"custom-discount"}
                                  paymentIndex={index}
                                  currentCustom={custom}
                                  onChange={
                                    updateValuesforGradebasedGenderDiscounts
                                  }
                                />
                              </>
                            )
                        )}
                      </span>
                    ) : (
                      <>
                        {/*ELSE IF SCHOLARSHIP DISCOUNT DO NOT BASE ON GRADE LEVELS JUST DISPLAY A SIMPLE TEXT BOX FOR EVERY SCHOLARSHIP TYPES  */}
                        {/*  */}
                        {payments.discountParameters.customPaymentDiscount.customDiscounts.map(
                          (custom, subIndex) => (
                            <span key={subIndex}>
                              <Textbox
                                type="number"
                                hasTopLevelContainer={true}
                                label={custom.discountName}
                                placeholder={
                                  payments.discountParameters.discountUnit.charAt(
                                    0
                                  ) === "p"
                                    ? "In Percentage (%)"
                                    : "Amount in ETB"
                                }
                                onChange={(event) =>
                                  handleDiscountAmountInputs(event, index)
                                }
                                value={
                                  payments.discountParameters.discountUnit.charAt(
                                    0
                                  ) === "p"
                                    ? custom.percentage
                                    : custom.amount
                                }
                                name={
                                  payments.discountParameters.discountUnit.charAt(
                                    0
                                  ) === "p"
                                    ? "custom-by-percent"
                                    : "custom-by-amount"
                                }
                              />
                            </span>
                          )
                        )}
                      </>
                    )}
                    <>
                      <span>&nbsp;</span>
                    </>
                  </td>
                ) : custom ? (
                  // ELSE IF SCHOOLS DO NOT HAVE A SCHOLARSHIP BASED DISCOUNTS DISPLAY EMPTY FIELD
                  <td className="pl-6">
                    <Label label={"No Custom Rule!"} />
                    <>&nbsp;</>
                  </td>
                ) : (
                  <>
                    <></>
                  </>
                )}
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    </div>
  );
};

export default DiscountTable;
