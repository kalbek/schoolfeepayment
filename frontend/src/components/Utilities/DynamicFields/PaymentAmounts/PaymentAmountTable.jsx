import { useSelector, useDispatch } from "react-redux";
import { forwardRef, useRef, useState, useEffect } from "react";
import Textbox from "./Utilities/Textbox";
import Textbox2 from "./Utilities/Textbox2";
import TableTextbox from "./Utilities/TableTextbox";
import EmptyField from "./Utilities/EmptyField";
import ColumnHeader from "./Components/TableComponents/ColumnHeader";
import RowHeader from "./Components/TableComponents/RowHeader";
import Label from "./Utilities/Label";
import { updatePaymentDiscountUnit } from "../../../../features/paymentBase/paymentBaseSlice";
import { updateDivisionsForAnnualPeriods } from "../../../../features/SchoolPeriods/annualPeriodSlice";
import { updatePaymentTypesForPaymentBase } from "../../../../features/paymentBase/paymentBaseSlice";
// import DiscountTableFunctions.updateDiscountUnits from
import TableCaption from "./Components/TableComponents/TableCaption";
const PaymentAmountTable = ({ updateDiscountBase, handleTextboxValue }) => {
  const paymentState = useSelector((state) => state.payments.paymentState);
  const educationalDivisionState = useSelector(
    (state) => state.educationalDivisions.educationalDivision
  );

  const topLevelPeriod = useSelector((state) => state.periods.topLevelPeriod);
  const periodState = useSelector((state) => state.periods.topLevelPeriod);

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

  // Check existance of each discount parameter to display their names as column header

  return (
    <div className="field-group-containeraa">
      <section>
        {/* If shifts are not selected map with periods and divisions from payment base slice   */}
        {paymentState.map((payments, index) => (
          <>
            <table key={index} className="payment-tableaaa">
              {/* controlling payment types i.e. on column header */}
              <thead>
                <tr className="bg-th--dark ">
                  <th>
                    <span className="flex-start mr-3  mt-p3 -mb-1">
                      <div className="checkbox-inputs input__group">
                        <label className="checkbox-items">
                          <p className=" text-white text-base break-all  pb-1 pt-1 ml-p5">
                            {/* {payments.paymentType.paymentName.toUpperCase()} */}
                            {payments.paymentType.paymentName}
                          </p>
                        </label>
                      </div>
                    </span>
                  </th>
                  {/* Controlling what's on the columns */}
                  {/* For major annual periods */}
                  {/* COLUMNS WHEN SHIFTS ARE NOT SELECTED */}
                  {!payments.paymentBase.standardShiftsCheckbox ? (
                    <>
                      {/* For major annual period */}
                      {payments.paymentType.selectedPeriodType === "subPeirod"
                        ? payments.paymentType.periods.map((period) =>
                            period.subPeriods.map(
                              (subPeriod, subPeriodIndex) => (
                                <>
                                  <th key={subPeriodIndex}>
                                    <span className="mlp5 mr-2 flex-start ">
                                      <span ref={ref0}>
                                        <ColumnHeader
                                          label={subPeriod.periodName}
                                        />
                                      </span>
                                    </span>
                                    <br />
                                  </th>
                                </>
                              )
                            )
                          )
                        : // For annual sub periods
                          payments.paymentType.periods.map((period) => (
                            <>
                              <th>
                                <span className=" mr-1 flex-start">
                                  <span ref={ref0}>
                                    <ColumnHeader label={period.periodName} />
                                  </span>
                                </span>
                                <br />
                              </th>
                            </>
                          ))}
                    </>
                  ) : (
                    //COLUMNS WHEN SHIFT ARE SELECTED
                    // else if shifts are selected
                    <>
                      {/* COLUMNS FOR SUB-PERIODS */}
                      {payments.paymentType.selectedPeriodType === "subPeirod"
                        ? payments.paymentType.periods.map((period) => (
                            <>
                              {console.log("here sp")}
                              {console.log(payments.paymentType.periods)}
                              {period.subPeriods.map((subPeriod) =>
                                subPeriod.shifts.map((shift) => (
                                  <th>
                                    <span className="mlp5  mr-2 flex-start">
                                      <span ref={ref0}>
                                        <ColumnHeader
                                          shiftName={
                                            shift.shiftName
                                              .charAt(0)
                                              .toUpperCase() +
                                            shift.shiftName.slice(1)
                                          }
                                          label={subPeriod.periodName}
                                        />
                                      </span>
                                    </span>
                                  </th>
                                ))
                              )}
                            </>
                          ))
                        : // For annual sub periods
                          // COLUMNS FOR MAJOR-PERIODS
                          payments.paymentType.periods.map((period) =>
                            period.shifts.map((shift) => (
                              <>
                                <th>
                                  <span className=" mr-1 flex-start">
                                    <span ref={ref0}>
                                      <ColumnHeader
                                        shiftName={
                                          shift.shiftName
                                            .charAt(0)
                                            .toUpperCase() +
                                          shift.shiftName.slice(1)
                                        }
                                        label={period.periodName}
                                      />
                                    </span>
                                  </span>
                                  <br />
                                </th>
                              </>
                            ))
                          )}
                    </>
                  )}
                </tr>
              </thead>
              {/* controlling what's on the rows */}

              <tbody className="last-element">
                {/* PAYMENT TYPES  */}
                {/* SUB PERIOD SELECTED AND MAJOR-DIVISION SELECTED */}
                {payments.paymentType.selectedDivisionType === "division" ? (
                  payments.paymentType.divisions.map((division) => (
                    <>
                      <tr>
                        <td>
                          <div>
                            <RowHeader label={division.divisionName} />
                          </div>
                          {/* <br /> */}
                        </td>
                        {/* INPUT CONTROL FOR GENDER DISCOUNTS */}
                      </tr>
                    </>
                  ))
                ) : // {/* SUB PERIOD SELECTED AND SUB-DIVISION SELECTED */}
                // HERE WE CARE ABOUT SELECTION OF  SHIFTS
                // CASE 1- WHEN SHIFTS ARE NOT SELECTED
                !payments.paymentBase.standardShiftsCheckbox ? (
                  payments.paymentType.divisions.map((division) =>
                    division.educationalSubDivision.map((subDivision) => (
                      <>
                        <tr>
                          <td>
                            <div className="mb-p5">
                              <RowHeader label={subDivision.subDivisionName} />
                            </div>
                          </td>
                          {/* TAKE PAYMENT AMOUNT VALUES BASED ON SUB-PERIODS-AND SUB-DIVISIONS (which is a common scenario) */}
                          {payments.paymentType.selectedPeriodType ===
                          "subPeirod"
                            ? payments.paymentType.periods.map((period) =>
                                period.subPeriods.map((subPeriod) => (
                                  <>
                                    <td
                                      ref={(element) =>
                                        itemEls.current.push(element)
                                      }
                                      onClick={(e) => onAClick(e, index)}
                                    >
                                      <TableTextbox placeholder={"ETB"} />
                                    </td>
                                  </>
                                ))
                              )
                            : payments.paymentType.periods.map((period) => (
                                <>
                                  <td
                                    ref={(element) =>
                                      itemEls.current.push(element)
                                    }
                                    onClick={(e) => onAClick(e, index)}
                                  >
                                    <TableTextbox placeholder={"ETB"} />
                                  </td>
                                </>
                              ))}
                        </tr>
                      </>
                    ))
                  )
                ) : (
                  // CASE 2- WHEN SHIFTS ARE SELECTED
                  <>
                    {console.log("when shifts are selected")}
                    {console.log(payments.paymentType)}
                    {payments.paymentType.divisions.map((division) =>
                      division.educationalSubDivision.map((subDivision) => (
                        <>
                          <tr>
                            <td>
                              <div className="mb-p5">
                                <RowHeader
                                  label={subDivision.subDivisionName}
                                />
                              </div>
                            </td>
                            {/* TAKE PAYMENT AMOUNT VALUES BASED ON SUB-PERIODS-AND SUB-DIVISIONS (which is a common scenario) */}
                            {payments.paymentType.selectedPeriodType ===
                            "subPeirod"
                              ? payments.paymentType.periods.map((period) =>
                                  period.subPeriods.map((subPeriod) =>
                                    subPeriod.shifts.map((subPeriod) => (
                                      <>
                                        {console.log("so the period are")}
                                        {/* {console.log(period)} */}
                                        <td
                                          ref={(element) =>
                                            itemEls.current.push(element)
                                          }
                                          onClick={(e) => onAClick(e, index)}
                                        >
                                          <TableTextbox placeholder={"ETB"} />
                                        </td>
                                      </>
                                    ))
                                  )
                                )
                              : // if period is selected
                                payments.paymentType.periods.map((period) =>
                                  period.shifts.map((shift) => (
                                    <>
                                      <td
                                        ref={(element) =>
                                          itemEls.current.push(element)
                                        }
                                        onClick={(e) => onAClick(e, index)}
                                      >
                                        <TableTextbox placeholder={"ETB"} />
                                      </td>
                                    </>
                                  ))
                                )}
                          </tr>
                        </>
                      ))
                    )}
                  </>
                )}
              </tbody>
              <br />
            </table>
          </>
        ))}
      </section>
    </div>
  );
};

export default PaymentAmountTable;
