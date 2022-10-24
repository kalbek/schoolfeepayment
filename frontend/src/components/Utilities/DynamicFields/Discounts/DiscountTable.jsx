import { useSelector, useDispatch } from "react-redux";
import { forwardRef, useRef } from "react";
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
import DiscountTableFunctions from "./Functions/DiscountTableFunctions";
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
              <th className="pl-2">
                <span>
                  <span ref={ref0}>
                    <ColumnHeader label={"Gender Discounts"} />
                  </span>
                </span>
                <br />
              </th>
              <th className="pl-2">
                <span>
                  <span ref={ref1}>
                    <ColumnHeader label={"Special Need Discounts"} />
                  </span>
                </span>
                <br />
              </th>
              <th className="pl-2">
                <span ref={ref2}>
                  <ColumnHeader label={"Scholarship Discounts"} />
                </span>
                <br />
              </th>
              <th className="pl-2">
                <span ref={ref3}>
                  <ColumnHeader label={"Custom Discounts"} />
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
                {payments.discountParameters.genderBasedDiscount.value ? (
                  <td
                    ref={(element) => itemEls.current.push(element)}
                    onClick={(e) => onAClick(e, index)}
                    className={payments.paymentType.paymentName + " pr-4 pl-2"}
                  >
                    <span className="-mt-1">
                      <>
                        {/* IF SCHOOLS HAVE A GENDER BASED DISCOUNT RECIVE PERCERTAGE OR AMOUNT VALUES FOR GENDER DISCOUNTS */}
                        {payments.discountParameters
                          .isGradeBasedDiscountType ? (
                          <>
                            <span
                              className="field-group-container"
                              // key={specialneed.Id}
                            >
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
                                  // nolabel={true}
                                  hasTopLevelContainer={true}
                                  paymentId={index}
                                  onChange={
                                    updateValuesforGradebasedGenderDiscounts
                                  }
                                />
                                <span>&nbsp;</span>
                              </section>
                            </span>
                          </>
                        ) : (
                          // ELSE IF SCHOOLS HAVE GENDER BASED DISCOUNT SYSTEM WHICH IS NOT BASED ON GRADE LEVELS SIMPLY SHOW SINGE INPUT BOX

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
                        )}
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
                  {/* IF SCHOOLS HAVE A SCHOLARSHIP BASED DISCOUNT RECIVE PERCERTAGE OR AMOUNT VALUES FOR SCHOLARSHIP DISCOUNTS */}
                  {payments.discountParameters.specialNeedsBasedDiscount
                    .value ? (
                    <>
                      {/* IF SCHOLARSHIP DISCOUNT IS BASED ON GRADES  */}
                      {/* MAP THROUGH SCHOLARSHIP AMOUNTS AND DISPLAY GRADES FOR EACH SCHOLARSHIP AMOUNTS */}
                      {payments.discountParameters.isGradeBasedDiscountType &&
                      payments.discountParameters.specialNeedsBasedDiscount
                        .value ? (
                        <span>
                          {payments.discountParameters.specialNeedsBasedDiscount.specialNeeds.map(
                            (specialneed) =>
                              // IF NUMBER OF SPECIALNEEDS ARE MORE THAN ONE DISPLAY SPECIALNEEDS TYPE NAMES AS LABEL
                              payments.discountParameters
                                .specialNeedsBasedDiscount.specialNeeds.length >
                              0 ? (
                                <span
                                  className="field-group-container"
                                  key={specialneed.Id}
                                >
                                  {console.log(specialneed)}
                                  <section className="focused-label">
                                    <Label
                                      label={specialneed.specialNeedName}
                                    />
                                    <DivisionBasedSpecialneedDiscounts
                                      hasTopLevelContainer={false}
                                      paymentId={index}
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
                                    paymentId={index}
                                    hasTopLevelContainer={true}
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
                            (specialneed) => (
                              <span key={specialneed.Id}>
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
                    </>
                  ) : (
                    // ELSE IF SCHOOLS DO NOT HAVE A SCHOLARSHIP BASED DISCOUNTS DISPLAY EMPTY FIELD
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
                  {/* IF SCHOOLS HAVE A SCHOLARSHIP BASED DISCOUNT RECIVE PERCERTAGE OR AMOUNT VALUES FOR SCHOLARSHIP DISCOUNTS */}
                  {payments.discountParameters.scholarshipBasedDiscount
                    .value ? (
                    <>
                      {/* IF SCHOLARSHIP DISCOUNT IS BASED ON GRADES  */}
                      {/* MAP THROUGH SCHOLARSHIP AMOUNTS AND DISPLAY GRADES FOR EACH SCHOLARSHIP AMOUNTS */}
                      {payments.discountParameters.isGradeBasedDiscountType &&
                      payments.discountParameters.scholarshipBasedDiscount
                        .value ? (
                        <span>
                          {payments.discountParameters.scholarshipBasedDiscount.scholarships.map(
                            (scholarships) =>
                              // IF NUM OF SCHOLARSHIPS ARE MORE THAN ONE DISPLAY SCHOLARSHIPT TYPE NAMES AS LABEL
                              payments.discountParameters
                                .scholarshipBasedDiscount.scholarships.length >
                              0 ? (
                                <span
                                  className="field-group-container"
                                  key={scholarships.Id}
                                >
                                  <section className="focused-label">
                                    <Label
                                      label={scholarships.scholarshipName}
                                    />
                                    <DivisionBasedSpecialneedDiscounts
                                      hasTopLevelContainer={false}
                                      paymentId={index}
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
                                    paymentId={index}
                                    hasTopLevelContainer={true}
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
                            (scholarship) => (
                              <span key={scholarship.Id}>
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
                      <span>&nbsp;</span>
                    </>
                  ) : (
                    // ELSE IF SCHOOLS DO NOT HAVE A SCHOLARSHIP BASED DISCOUNTS DISPLAY EMPTY FIELD
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
                          {payments.discountParameters
                            .isGradeBasedDiscountType ? (
                            <>
                              <span className="primary-label pb-1 ml-80">
                                {/* Hide */}
                              </span>
                              <br />
                              <DivisionBasedScholarshipDiscounts
                                paymentId={index}
                                onChange={
                                  updateValuesforGradebasedGenderDiscounts
                                }
                              />
                            </>
                          ) : (
                            <Textbox
                              type="number"
                              label={
                                "Discount for " + customDiscount.discountName
                              }
                              placeholder={
                                payments.discountParameters.discountUnit.charAt(
                                  0
                                ) === "p"
                                  ? "In Percentage (%)"
                                  : "Amount in ETB"
                              }
                              onChange={(event) =>
                                handleDiscountAmountInputs(
                                  event,
                                  index,
                                  subIndex
                                )
                              }
                              value={
                                payments.discountParameters.discountUnit.charAt(
                                  0
                                ) === "p"
                                  ? customDiscount.discountPercentage
                                  : customDiscount.discountAmount
                              }
                              name={
                                payments.discountParameters.discountUnit.charAt(
                                  0
                                ) === "p"
                                  ? "custom-by-percent"
                                  : "custom-by-amount"
                              }
                            />
                          )}
                          {console.log(
                            payments.discountParameters.discountUnit.charAt(0)
                          )}
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

export default DiscountTable;
