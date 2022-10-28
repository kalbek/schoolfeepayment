import { useSelector, useDispatch } from "react-redux";
import { forwardRef, useRef, useState, useEffect } from "react";
import Textbox from "./Utilities/Textbox";
import Textbox2 from "./Utilities/Textbox2";
import EmptyField from "./Utilities/EmptyField";
import ColumnHeader from "./Components/TableComponents/ColumnHeader";
import RowHeader from "./Components/TableComponents/RowHeader";
import Label from "./Utilities/Label";
import { updatePaymentDiscountUnit } from "../../../../features/paymentBase/paymentBaseSlice";
// import DiscountTableFunctions.updateDiscountUnits from
import TableCaption from "./Components/TableComponents/TableCaption";
import DiscountUnits from "./Components/DiscountComponents/DiscountUnits";
import DiscountBase from "./Components/DiscountComponents/DiscountBase";
import DivisionBasedGenderDiscounts from "./Components/DiscountComponents/DivisionBasedGenderDiscounts";
import DivisionBasedSpecialneedDiscounts from "./Components/DiscountComponents/DivisionBasedSpecialneedDiscounts";
import DivisionBasedScholarshipDiscounts from "./Components/DiscountComponents/DivisionBasedScholarshipDiscounts";
import DivisionBasedCustomDiscount from "./Components/DiscountComponents/DivisionBasedCustomDiscount";
const DiscountTable = ({ updateDiscountBase, handleTextboxValue }) => {
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
        refEls.current[a].className = "pr-7 field-group-container";
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
            refEls.current[a].className = " pr-7 field-group-container";
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
    <div className="field-group-containera">
      <section>
        <table className="payment-tablea">
          {/* <TableCaption label={"Payment Discount Tabel"} /> */}
          <thead>
            <tr className="bg--th ">
              <th>
                <span className="flex-start ">
                  <div className="checkbox-inputs input__group">
                    <label className="checkbox-items">
                      <p className=" table-headers flex-start pb-1 pt-1 ml-p5">
                        Payment Types
                      </p>
                    </label>
                  </div>
                </span>
              </th>
              {gender && (
                <th className="pr-6 ">
                  <span className="flex-start ">
                    <span ref={ref0}>
                      <ColumnHeader label={"Gender Discounts"} />
                    </span>
                  </span>
                  <br />
                </th>
              )}
              {specialneed && (
                <th className="pr-6 ">
                  <span className="flex-start pr-6">
                    <span ref={ref1}>
                      <ColumnHeader label={"Special Need Discounts"} />
                    </span>
                  </span>
                  <br />
                </th>
              )}
              {scholarship && (
                <th className="pr-6 ">
                  <span className="flex-start ">
                    <span ref={ref2}>
                      <ColumnHeader label={"Scholarship Discounts"} />
                    </span>
                  </span>
                  <br />
                </th>
              )}
              {custom && (
                <th className="pr-6 ">
                  <span className="flex-start ">
                    <span ref={ref3}>
                      <ColumnHeader label={"Custom Discounts"} />
                    </span>
                  </span>
                  <br />
                </th>
              )}
            </tr>
          </thead>
          <tbody className=" last-oflast-element">
            {/* PAYMENT TYPES  */}
            {paymentState.map((payments, index) => (
              <tr
                key={index}
                className={"field-group-container bottom-boarder-not-last"}
              >
                <td className={payments.paymentType.paymentName}>
                  <div
                    onClick={() => clearRefs(index)}
                    ref={(element) => {
                      refEls.current[index] = element;
                    }}
                    className="flex-c flex-start mt-1 pr-7 field-group-container"
                  >
                    <section className="row-headers mt-1 flex-start flex-c">
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
                        "You have NO Discount Rules!! Go to Payment Types to define discount rules"
                      }
                    />{" "}
                    <br />
                  </td>
                ) : gender &&
                  payments.discountParameters.genderBasedDiscount.value ? (
                  <td
                    ref={(element) => itemEls.current.push(element)}
                    onClick={(e) => onAClick(e, index)}
                    className={payments.paymentType.paymentName + " pr-2"}
                    // className={payments.paymentType.paymentName + " pr-4 pl-2"}
                  >
                    <>
                      {/* IF SCHOOLS HAVE A GENDER BASED DISCOUNT RECIVE PERCERTAGE OR AMOUNT VALUES FOR GENDER DISCOUNTS */}
                      {payments.discountParameters.isGradeBasedDiscountType &&
                      payments.discountParameters.genderBasedDiscount
                        .gradesEligibleForDiscount.length > 0 ? (
                        <>
                          {/* <span className="field-group-container"> */}
                          <span className="field-group-container">
                            <section className="focused-label ">
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
                                onChange={handleTextboxValue}
                              />
                              <span>&nbsp;</span>
                            </section>
                          </span>
                        </>
                      ) : (
                        // ELSE IF SCHOOLS HAVE GENDER BASED DISCOUNT SYSTEM WHICH IS NOT BASED ON GRADE LEVELS SIMPLY SHOW SINGE INPUT BOX
                        <span>
                          <Textbox2
                            Id={index}
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
                            // onChange={(event) =>
                            //   handleDiscountAmountInputs(event, index)
                            // }
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
                            gradeType={division}
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
                  <></>
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
                              0 &&
                            specialneed.gradesEligibleForDiscount.length > 0 ? (
                              <span
                                className="field-group-container"
                                key={subIndex}
                              >
                                <section className="focused-label">
                                  <Label label={specialneed.specialNeedName} />
                                  <DivisionBasedSpecialneedDiscounts
                                    dicountType={"specialneed-discount"}
                                    paymentIndex={index}
                                    currentSpecialneed={specialneed}
                                    onChange={handleTextboxValue}
                                  />
                                  <span>&nbsp;</span>
                                </section>
                              </span>
                            ) : specialneed.gradesEligibleForDiscount.length ===
                              0 ? (
                              <>
                                <span>
                                  <Textbox2
                                    Id={index}
                                    index={index}
                                    subIndex={subIndex}
                                    hasTopLevelContainer={true}
                                    label={specialneed.specialNeedName}
                                    placeholder={
                                      payments.discountParameters.discountUnit.charAt(
                                        0
                                      ) === "p"
                                        ? "In Percentage (%)"
                                        : "Amount in ETB"
                                    }
                                    // onChange={(event) =>
                                    //   handleDiscountAmountInputs(event, index)
                                    // }
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
                                    bottomLabel={
                                      payments.discountParameters
                                        .isGradeBasedDiscountType
                                        ? true
                                        : false
                                    }
                                    gradeType={division}
                                  />
                                </span>
                              </>
                            ) : (
                              // IF NUM OF SCHOLARSHIPS ARE ONLY 1 DO NOT DISPLAY SCHOLARSHIPT TYPE NAMES AS LABEL
                              <>
                                <DivisionBasedSpecialneedDiscounts
                                  dicountType={"specialneed-discount"}
                                  paymentIndex={index}
                                  currentSpecialneed={specialneed}
                                  onChange={handleTextboxValue}
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
                          (specialneed, subIndex) => (
                            <span key={subIndex}>
                              <Textbox2
                                Id={index}
                                index={index}
                                subIndex={subIndex}
                                hasTopLevelContainer={true}
                                label={specialneed.specialNeedName}
                                placeholder={
                                  payments.discountParameters.discountUnit.charAt(
                                    0
                                  ) === "p"
                                    ? "In Percentage (%)"
                                    : "Amount in ETB"
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
                                bottomLabel={
                                  payments.discountParameters
                                    .isGradeBasedDiscountType
                                    ? true
                                    : false
                                }
                                gradeType={division}
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
                              .scholarships.length > 0 &&
                            scholarships.gradesEligibleForDiscount.length >
                              0 ? (
                              <span
                                className="field-group-container"
                                key={subIndex}
                              >
                                {console.log(
                                  "sch name: " + scholarships.scholarshipName
                                )}
                                <section className="focused-label">
                                  <Label label={scholarships.scholarshipName} />
                                  <DivisionBasedScholarshipDiscounts
                                    dicountType={"scholarship-discount"}
                                    paymentIndex={index}
                                    currentScholarship={scholarships}
                                    onChange={handleTextboxValue}
                                  />
                                  <span>&nbsp;</span>
                                </section>
                              </span>
                            ) : scholarships.gradesEligibleForDiscount
                                .length === 0 ? (
                              <>
                                <span>
                                  <Textbox2
                                    index={index}
                                    subIndex={subIndex}
                                    Id={index}
                                    type="number"
                                    hasTopLevelContainer={true}
                                    label={scholarships.scholarshipName}
                                    placeholder={
                                      payments.discountParameters.discountUnit.charAt(
                                        0
                                      ) === "p"
                                        ? "In Percentage (%)"
                                        : "Amount in ETB"
                                    }
                                    // onChange={(event) =>
                                    //   handleDiscountAmountInputs(event, index)
                                    // }
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
                                    bottomLabel={
                                      payments.discountParameters
                                        .isGradeBasedDiscountType
                                        ? true
                                        : false
                                    }
                                    gradeType={division}
                                  />
                                </span>
                              </>
                            ) : (
                              // IF NUM OF SCHOLARSHIPS ARE ONLY 1 DO NOT DISPLAY SCHOLARSHIPT TYPE NAMES AS LABEL
                              <>
                                <DivisionBasedScholarshipDiscounts
                                  dicountType={"scholarship-discount"}
                                  paymentIndex={index}
                                  currentScholarship={scholarships}
                                  onChange={handleTextboxValue}
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
                          (scholarship, subIndex) => (
                            <span key={subIndex}>
                              <Textbox2
                                index={index}
                                subIndex={subIndex}
                                Id={index}
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
                                // onChange={(event) =>
                                //   handleDiscountAmountInputs(event, index)
                                // }
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
                                bottomLabel={
                                  payments.discountParameters
                                    .isGradeBasedDiscountType
                                    ? true
                                    : false
                                }
                                gradeType={division}
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

                {payments.discountParameters.customPaymentDiscount.value ? (
                  <td
                    ref={(element) => itemEls.current.push(element)}
                    onClick={(e) => onDClick(e, index)}
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
                              .customDiscounts.length > 0 &&
                            custom.gradesEligibleForDiscount.length > 0 ? (
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
                                    onChange={handleTextboxValue}
                                  />
                                  <span>&nbsp;</span>
                                </section>
                              </span>
                            ) : custom.gradesEligibleForDiscount.length ===
                              0 ? (
                              <>
                                <span>
                                  <Textbox2
                                    Id={index}
                                    index={index}
                                    subIndex={subIndex}
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
                                    // onChange={(event) =>
                                    //   handleDiscountAmountInputs(event, index)
                                    // }
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
                                    bottomLabel={
                                      payments.discountParameters
                                        .isGradeBasedDiscountType
                                        ? true
                                        : false
                                    }
                                    gradeType={division}
                                  />
                                </span>
                              </>
                            ) : (
                              // IF NUM OF SCHOLARSHIPS ARE ONLY 1 DO NOT DISPLAY SCHOLARSHIPT TYPE NAMES AS LABEL
                              <>
                                <DivisionBasedCustomDiscount
                                  dicountType={"custom-discount"}
                                  paymentIndex={index}
                                  currentCustom={custom}
                                  onChange={handleTextboxValue}
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
                              <Textbox2
                                Id={index}
                                index={index}
                                subIndex={subIndex}
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
                                // onChange={(event) =>
                                //   handleDiscountAmountInputs(event, index)
                                // }
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
                                bottomLabel={
                                  payments.discountParameters
                                    .isGradeBasedDiscountType
                                    ? true
                                    : false
                                }
                                gradeType={division}
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
