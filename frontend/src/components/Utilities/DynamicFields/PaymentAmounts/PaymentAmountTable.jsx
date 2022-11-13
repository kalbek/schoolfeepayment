import { useSelector, useDispatch } from "react-redux";
import { forwardRef, useRef, useState, useEffect } from "react";
import Textbox from "./Utilities/Textbox";
import Textbox2 from "./Utilities/Textbox2";
import TableTextbox from "./Utilities/TableTextbox";
import EmptyField from "./Utilities/EmptyField";
import ColumnHeader from "./Components/TableComponents/ColumnHeader";
import RowHeader from "./Components/TableComponents/RowHeader";
import Label from "./Utilities/Label";
import { updatePaymentsForDivisions } from "../../../../features/Grades&Divisions/grades&DivisionsSlice";
import { updateDivisionsForAnnualPeriods } from "../../../../features/SchoolPeriods/annualPeriodSlice";
import { updatePaymentTypesForPaymentBase } from "../../../../features/paymentBase/paymentBaseSlice";
import TableCaption from "./Components/TableComponents/TableCaption";
const PaymentAmountTable = ({
  updateDiscountBase,
  handleTextboxValue,
  payments,
  index,
}) => {
  const dispatch = useDispatch();
  const paymentState = useSelector((state) => state.payments.paymentState);
  const educationalDivisionState = useSelector(
    (state) => state.educationalDivisions.educationalDivision
  );
  const periodState = useSelector((state) => state.periods.topLevelPeriod);
  const periodBasedPayment = payments.paymentBase.standardAnnualPeriodCheckbox;
  const divisionBasedPayment =
    payments.paymentBase.standardEducationalDivisionCheckbox;
  const topLevelPeriod = useSelector((state) => state.periods.topLevelPeriod);
  const divisionBasedPyament = payments.paymentBase.gradeLevelPaymentBase.value;
  const ref0 = useRef(null);
  const ref1 = useRef(null);
  const ref2 = useRef(null);
  const ref3 = useRef(null);
  const itemEls = useRef(new Array());
  const refEls = useRef(new Array());

  const handlePaymentValue = (
    event,
    index,
    divisionIndex,
    subDivisionIndex,
    periodIndex,
    subPeriodIndex,
    shiftIndex
  ) => {
    const { name, value } = event.target;
    console.log("all focus here;");
    console.log("name: " + name);
    console.log("name: " + "value: " + value);
    console.log("index: " + index);
    console.log("divisionIndex: " + divisionIndex);
    console.log("shiftindex: " + shiftIndex);
  };

  useEffect(() => {
    dispatch(updatePaymentsForDivisions());
  }, [
    paymentState[index].paymentBase.paymentBaseType,
    paymentState[index].paymentBase.standardAnnualPeriodCheckbox,
    paymentState[index].paymentBase.standardAnnualPeriodType,
    paymentState[index].paymentBase.standardEducationalDivisionCheckbox,
    paymentState[index].paymentBase.standardEducationalDivisionType,
    paymentState[index].paymentBase.standardShiftsCheckbox,
  ]);

  // handle pushing educational division states inside shifts of Major and Subannual periods
  //- accourding to selected annaul period type in standard payment base
  useEffect(() => {
    const StdPaymentBaseIsBasedOnDivisions =
      paymentState[index].paymentBase.standardEducationalDivisionCheckbox;
    const typeOfDivisionForStdPyamentBase =
      paymentState[index].paymentBase.standardEducationalDivisionType;
    const shiftsAreCheckedForStdPaymentBase =
      paymentState[index].paymentBase.standardShiftsCheckbox;
    dispatch(
      updateDivisionsForAnnualPeriods({
        StdPaymentBaseIsBasedOnDivisions,
        typeOfDivisionForStdPyamentBase:
          typeOfDivisionForStdPyamentBase.charAt(0) === "s"
            ? "subDivison"
            : "majorDivision",
        shiftsAreCheckedForStdPaymentBase,
        // only send the selected type of divisons from here
        divisions: educationalDivisionState,
      })
    );
  }, [
    paymentState[index].paymentBase.standardEducationalDivisionCheckbox,
    paymentState[index].paymentBase.standardEducationalDivisionType,
    paymentState[index].paymentBase.standardShiftsCheckbox,
  ]);

  useEffect(() => {
    dispatch(
      updatePaymentTypesForPaymentBase({
        periods: periodState,
        paymentIndex: index,
        paymentBaseType:
          paymentState[index].paymentBase.paymentBaseType.charAt(0),
        standardAnnualPeriodCheckbox:
          paymentState[index].paymentBase.standardAnnualPeriodCheckbox,
        standardAnnualPeriodType:
          paymentState[index].paymentBase.standardAnnualPeriodType,
        standardEducationalDivisionCheckbox:
          paymentState[index].paymentBase.standardEducationalDivisionCheckbox,
        standardEducationalDivisionType:
          paymentState[index].paymentBase.standardEducationalDivisionType,
        standardShiftsCheckbox:
          paymentState[index].paymentBase.standardShiftsCheckbox,
        divisions: educationalDivisionState.map((division) => {
          return division;
        }),
      })
    );
  }, [
    paymentState[index].paymentBase.paymentBaseType,
    paymentState[index].paymentBase.standardAnnualPeriodCheckbox,
    paymentState[index].paymentBase.standardAnnualPeriodType,
    paymentState[index].paymentBase.standardEducationalDivisionCheckbox,
    paymentState[index].paymentBase.standardEducationalDivisionType,
    paymentState[index].paymentBase.standardShiftsCheckbox,
    // periodState,
  ]);

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
        <>
          <table className="payment-tableaaa">
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
                    {periodBasedPayment ? (
                      payments.paymentType.selectedPeriodType ===
                      "subPeirod" ? (
                        payments.paymentType.periods.map((period) =>
                          period.subPeriods.map((subPeriod, subPeriodIndex) => (
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
                          ))
                        )
                      ) : (
                        // For annual sub periods
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
                        ))
                      )
                    ) : (
                      // if not period based payment
                      <>
                        <th>
                          <span className=" mr-1 flex-start">
                            <span ref={ref0}>
                              <ColumnHeader label={"One time payment"} />
                            </span>
                          </span>
                          <br />
                        </th>
                      </>
                    )}
                  </>
                ) : (
                  //COLUMNS WHEN SHIFT ARE SELECTED
                  // else if shifts are selected
                  <>
                    {/* COLUMNS FOR SUB-PERIODS */}
                    {periodBasedPayment ? (
                      payments.paymentType.selectedPeriodType ===
                      "subPeirod" ? (
                        payments.paymentType.periods.map((period) => (
                          <>
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
                      ) : (
                        // For annual sub periods
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
                        )
                      )
                    ) : (
                      <>
                        <th>
                          <span className=" mr-1 flex-start">
                            <span ref={ref0}>
                              <ColumnHeader label={"One time payment"} />
                            </span>
                          </span>
                          <br />
                        </th>
                      </>
                    )}
                  </>
                )}
              </tr>
            </thead>
            {/* controlling what's on the rows */}
            <tbody className="last-element">
              {divisionBasedPayment && periodBasedPayment ? (
                payments.paymentType.divisions.map((division, divisionIndex) =>
                  // IF MAJOR DIVISION IS SELECTED THE FIRST MAJOR CONDITION
                  payments.paymentType.selectedDivisionType === "division" ? (
                    <>
                      {/* THIS <tr> is for the first columns when major division is selected */}
                      <tr>
                        <td>
                          <div>
                            <RowHeader label={division.divisionName} />
                          </div>
                        </td>
                        {/* CHECK  IF PAYMENT IS PERIOD BASED PAYEMENT */}
                        {!payments.paymentBase.standardShiftsCheckbox ? (
                          payments.paymentType.selectedPeriodType ===
                          "subPeirod" ? (
                            // NOT-SHIFTS + SUB-DIVISIONS +
                            // SUB-PERIODS FOR VALUE DISPLAYING
                            payments.paymentType.periods.map(
                              (period, periodIndex) =>
                                period.subPeriods.map(
                                  (subPeriod, subPeriodIndex) => (
                                    <>
                                      {/* not shifts + subdivisions + subperiods */}
                                      <td
                                        key={subPeriodIndex}
                                        ref={(element) =>
                                          itemEls.current.push(element)
                                        }
                                        onClick={(e) => onAClick(e, index)}
                                      >
                                        {/* CASE-1 */}
                                        <TableTextbox
                                          name={
                                            "MajorDivision-subAnnualPeirod-not--shifts"
                                          }
                                          id={0}
                                          paymentBaseType="standard"
                                          index={index}
                                          subIndex={divisionIndex}
                                          subSubIndex={periodIndex}
                                          subSubSubIndex={subPeriodIndex}
                                          placeholder={"ETB"}
                                          value={subPeriod.paymentAmount.amount}
                                          onChange={(event) =>
                                            handlePaymentValue(
                                              event,
                                              index,
                                              divisionIndex,
                                              periodIndex,
                                              subPeriodIndex
                                            )
                                          }
                                        />
                                      </td>
                                    </>
                                  )
                                )
                            )
                          ) : (
                            payments.paymentType.periods.map(
                              (period, periodIndex) => (
                                <>
                                  {/* not shifts + subdivisions + periods */}
                                  <td
                                    key={periodIndex}
                                    ref={(element) =>
                                      itemEls.current.push(element)
                                    }
                                    onClick={(e) => onAClick(e, index)}
                                  >
                                    {/* CASE-2 */}
                                    <TableTextbox
                                      name={
                                        "MajorDivision-MajorAnnualPeirod-not--shifts"
                                      }
                                      paymentBaseType="standard"
                                      index={index}
                                      id={1}
                                      subIndex={divisionIndex}
                                      subSubIndex={periodIndex}
                                      placeholder={"ETB"}
                                      value={period.paymentAmount.amount}
                                      onChange={(event) =>
                                        handlePaymentValue(
                                          event,
                                          index,
                                          divisionIndex,
                                          periodIndex
                                        )
                                      }
                                    />
                                  </td>
                                </>
                              )
                            )
                          )
                        ) : (
                          // CASE 2- WHEN SHIFTS ARE SELECTED
                          // rasu
                          <>
                            {payments.paymentType.selectedPeriodType ===
                            "subPeirod"
                              ? // NOT-SHIFTS + SUB-DIVISIONS +
                                // SUB-PERIODS FOR VALUE DISPLAYING
                                payments.paymentType.periods.map(
                                  (period, periodIndex) =>
                                    period.subPeriods.map(
                                      (subPeriod, subPeriodIndex) =>
                                        subPeriod.shifts.map(
                                          (shift, shiftIndex) => (
                                            <>
                                              {/* not shifts + subdivisions + subperiods */}
                                              <td
                                                key={shiftIndex}
                                                ref={(element) =>
                                                  itemEls.current.push(element)
                                                }
                                                onClick={(e) =>
                                                  onAClick(e, index)
                                                }
                                              >
                                                <TableTextbox
                                                  name={
                                                    "MajorDivision-subAnnualPeirod-shifts"
                                                  }
                                                  id={2}
                                                  paymentBaseType="standard"
                                                  index={index}
                                                  subIndex={divisionIndex}
                                                  subSubIndex={periodIndex}
                                                  subSubSubIndex={
                                                    subPeriodIndex
                                                  }
                                                  subSubSubSubIndex={shiftIndex}
                                                  value={
                                                    shift.paymentAmount.amount
                                                  }
                                                  onChange={(event) =>
                                                    handlePaymentValue(
                                                      event,
                                                      index,
                                                      divisionIndex,
                                                      periodIndex,
                                                      subPeriodIndex,
                                                      shiftIndex
                                                    )
                                                  }
                                                  placeholder={"ETB"}
                                                />
                                              </td>
                                            </>
                                          )
                                        )
                                    )
                                )
                              : payments.paymentType.periods.map(
                                  (period, periodIndex) =>
                                    period.shifts.map((shift, shiftIndex) => (
                                      <>
                                        {/* not shifts + subdivisions + periods */}
                                        <td
                                          ref={(element) =>
                                            itemEls.current.push(element)
                                          }
                                          onClick={(e) => onAClick(e, index)}
                                        >
                                          <TableTextbox
                                            name={
                                              "MajorDivision-MajorAnnualPeirod-shifts"
                                            }
                                            id={3}
                                            index={index}
                                            subIndex={divisionIndex}
                                            subSubIndex={periodIndex}
                                            subSubSubIndex={shiftIndex}
                                            value={shift.paymentAmount.amount}
                                            onChange={(event) =>
                                              handlePaymentValue(
                                                event,
                                                index,
                                                divisionIndex,
                                                periodIndex,
                                                shiftIndex
                                              )
                                            }
                                            placeholder={"ETB"}
                                          />
                                        </td>
                                      </>
                                    ))
                                )}
                          </>
                        )}
                      </tr>
                    </>
                  ) : (
                    // IF SUB-DIVISION IS SELECTED THE SECOND MAJOR CONDITION
                    division.educationalSubDivision.map(
                      (subDivision, subDivisionIndex) => (
                        <>
                          {/* THIS <tr> is for the first columns when sub-division is selected */}
                          <tr key={subDivisionIndex}>
                            <td>
                              <div>
                                <RowHeader
                                  label={subDivision.subDivisionName}
                                />
                              </div>
                            </td>
                            {!payments.paymentBase.standardShiftsCheckbox ? (
                              payments.paymentType.selectedPeriodType ===
                              "subPeirod" ? (
                                // NOT-SHIFTS + SUB-DIVISIONS +
                                // SUB-PERIODS FOR VALUE DISPLAYING
                                payments.paymentType.periods.map(
                                  (period, periodIndex) =>
                                    period.subPeriods.map(
                                      (subPeriod, subPeriodIndex) => (
                                        <>
                                          {/* not shifts + subdivisions + subperiods */}
                                          <td
                                            key={subPeriodIndex}
                                            ref={(element) =>
                                              itemEls.current.push(element)
                                            }
                                            onClick={(e) => onAClick(e, index)}
                                          >
                                            <TableTextbox
                                              name={
                                                "SubDivision-subAnnualPeirod-not--shifts"
                                              }
                                              id={4}
                                              placeholder={"ETB"}
                                              index={index}
                                              subIndex={divisionIndex}
                                              subSubIndex={subDivisionIndex}
                                              subSubSubSubIndex={periodIndex}
                                              subSubSubIndex={subPeriodIndex}
                                              value={
                                                subPeriod.paymentAmount.amount
                                              }
                                              onChange={(event) =>
                                                handlePaymentValue(
                                                  event,
                                                  index,
                                                  divisionIndex,
                                                  subDivisionIndex,
                                                  periodIndex,
                                                  subPeriodIndex
                                                )
                                              }
                                            />
                                          </td>
                                        </>
                                      )
                                    )
                                )
                              ) : (
                                payments.paymentType.periods.map(
                                  (period, periodIndex) => (
                                    <>
                                      {/* not shifts + subdivisions + periods */}
                                      <td
                                        key={periodIndex}
                                        ref={(element) =>
                                          itemEls.current.push(element)
                                        }
                                        onClick={(e) => onAClick(e, index)}
                                      >
                                        <TableTextbox
                                          name={
                                            "SubDivision-MajorAnnualPeirod-not--shifts"
                                          }
                                          id={5}
                                          index={index}
                                          subIndex={divisionIndex}
                                          subSubIndex={subDivisionIndex}
                                          subSubSubIndex={periodIndex}
                                          value={period.paymentAmount.amount}
                                          onChange={(event) =>
                                            handlePaymentValue(
                                              event,
                                              index,
                                              divisionIndex,
                                              subDivisionIndex,
                                              periodIndex
                                            )
                                          }
                                          placeholder={"ETB"}
                                        />
                                      </td>
                                    </>
                                  )
                                )
                              )
                            ) : (
                              // CASE 2- WHEN SHIFTS ARE SELECTED
                              // rasu
                              <>
                                {payments.paymentType.selectedPeriodType ===
                                "subPeirod"
                                  ? // NOT-SHIFTS + SUB-DIVISIONS +
                                    // SUB-PERIODS FOR VALUE DISPLAYING
                                    payments.paymentType.periods.map(
                                      (period, periodIndex) =>
                                        period.subPeriods.map(
                                          (subPeriod, subPeriodIndex) =>
                                            subPeriod.shifts.map(
                                              (shift, shiftIndex) => (
                                                <>
                                                  {/* not shifts + subdivisions + subperiods */}
                                                  <td
                                                    key={shiftIndex}
                                                    ref={(element) =>
                                                      itemEls.current.push(
                                                        element
                                                      )
                                                    }
                                                    onClick={(e) =>
                                                      onAClick(e, index)
                                                    }
                                                  >
                                                    <TableTextbox
                                                      name={
                                                        "SubDivision-subAnnualPeirod-shifts"
                                                      }
                                                      id={6}
                                                      index={index}
                                                      subIndex={divisionIndex}
                                                      subSubIndex={
                                                        subDivisionIndex
                                                      }
                                                      subSubSubIndex={
                                                        periodIndex
                                                      }
                                                      subSubSubSubIndex={
                                                        subPeriodIndex
                                                      }
                                                      subSubSubSubSubIndex={
                                                        shiftIndex
                                                      }
                                                      value={
                                                        shift.paymentAmount
                                                          .amount
                                                      }
                                                      onChange={(event) =>
                                                        handlePaymentValue(
                                                          event,
                                                          index,
                                                          divisionIndex,
                                                          subDivisionIndex,
                                                          periodIndex,
                                                          subPeriodIndex,
                                                          shiftIndex
                                                        )
                                                      }
                                                      placeholder={"ETB"}
                                                    />
                                                  </td>
                                                </>
                                              )
                                            )
                                        )
                                    )
                                  : payments.paymentType.periods.map(
                                      (period, periodIndex) =>
                                        period.shifts.map(
                                          (shift, shiftIndex) => (
                                            <>
                                              <td
                                                key={shiftIndex}
                                                ref={(element) =>
                                                  itemEls.current.push(element)
                                                }
                                                onClick={(e) =>
                                                  onAClick(e, index)
                                                }
                                              >
                                                <TableTextbox
                                                  name={
                                                    "SubDivision-MajorAnnualPeirod-shifts"
                                                  }
                                                  id={7}
                                                  index={index}
                                                  subIndex={divisionIndex}
                                                  subSubIndex={subDivisionIndex}
                                                  subSubSubIndex={periodIndex}
                                                  subSubSubSubIndex={shiftIndex}
                                                  value={
                                                    shift.paymentAmount.amount
                                                  }
                                                  onChange={(event) =>
                                                    handlePaymentValue(
                                                      event,
                                                      index,
                                                      divisionIndex,
                                                      subDivisionIndex,
                                                      periodIndex,
                                                      shiftIndex
                                                    )
                                                  }
                                                  placeholder={"ETB"}
                                                />
                                              </td>
                                            </>
                                          )
                                        )
                                    )}
                              </>
                            )}
                          </tr>
                        </>
                      )
                    )
                  )
                )
              ) : !divisionBasedPayment && periodBasedPayment ? (
                <>
                  <tr>
                    <td>
                      <div>
                        <RowHeader
                          label={
                            "All  " +
                            payments.paymentType.divisions[0].divisionType +
                            "s"
                          }
                        />
                        <br />
                      </div>
                    </td>
                    {/* MAPPING VALUES FOR ALL DIVISIONS AT ONCE */}

                    {!payments.paymentBase.standardShiftsCheckbox ? (
                      payments.paymentType.selectedPeriodType ===
                      "subPeirod" ? (
                        // NOT-SHIFTS + SUB-DIVISIONS +
                        // SUB-PERIODS FOR VALUE DISPLAYING
                        payments.paymentType.periods.map(
                          (period, periodIndex) =>
                            period.subPeriods.map(
                              (subPeriod, subPeriodIndex) => (
                                <>
                                  {/* not shifts + subdivisions + subperiods */}
                                  <td
                                    key={subPeriodIndex}
                                    ref={(element) =>
                                      itemEls.current.push(element)
                                    }
                                    onClick={(e) => onAClick(e, index)}
                                  >
                                    <TableTextbox
                                      name={
                                        "not--Division-SubAnnualPeirod-not--shifts"
                                      }
                                      id={8}
                                      index={index}
                                      subIndex={periodIndex}
                                      subSubIndex={subPeriodIndex}
                                      value={subPeriod.paymentAmount.amount}
                                      onChange={(event) =>
                                        handlePaymentValue(
                                          event,
                                          index,
                                          periodIndex,
                                          subPeriodIndex
                                        )
                                      }
                                      placeholder={"ETB"}
                                    />
                                  </td>
                                </>
                              )
                            )
                        )
                      ) : (
                        payments.paymentType.periods.map(
                          (period, periodIndex) => (
                            <>
                              {/* not shifts + subdivisions + periods */}
                              <td
                                key={periodIndex}
                                ref={(element) => itemEls.current.push(element)}
                                onClick={(e) => onAClick(e, index)}
                              >
                                <TableTextbox
                                  name={
                                    "not--Division-MajorAnnualPeirod-not--shifts"
                                  }
                                  id={9}
                                  placeholder={"ETB"}
                                  index={index}
                                  subIndex={periodIndex}
                                  value={period.paymentAmount.amount}
                                  onChange={(event) =>
                                    handlePaymentValue(
                                      event,
                                      index,
                                      periodIndex
                                    )
                                  }
                                />
                              </td>
                            </>
                          )
                        )
                      )
                    ) : (
                      // CASE 2- WHEN SHIFTS ARE SELECTED
                      // rasu
                      <>
                        {payments.paymentType.selectedPeriodType === "subPeirod"
                          ? // NOT-SHIFTS + SUB-DIVISIONS +
                            // SUB-PERIODS FOR VALUE DISPLAYING
                            payments.paymentType.periods.map(
                              (period, periodIndex) =>
                                period.subPeriods.map(
                                  (subPeriod, subPeriodIndex) =>
                                    subPeriod.shifts.map(
                                      (shift, shiftIndex) => (
                                        <>
                                          {/* not shifts + subdivisions + subperiods */}
                                          <td
                                            key={shiftIndex}
                                            ref={(element) =>
                                              itemEls.current.push(element)
                                            }
                                            onClick={(e) => onAClick(e, index)}
                                          >
                                            <TableTextbox
                                              name={
                                                "not--Division-SubAnnualPeirod-shifts"
                                              }
                                              id={10}
                                              index={index}
                                              subIndex={periodIndex}
                                              subSubIndex={subPeriodIndex}
                                              subSubSubIndex={shiftIndex}
                                              value={shift.paymentAmount.amount}
                                              onChange={(event) =>
                                                handlePaymentValue(
                                                  event,
                                                  index,
                                                  periodIndex,
                                                  subPeriodIndex,
                                                  shiftIndex
                                                )
                                              }
                                              placeholder={"ETB"}
                                            />
                                          </td>
                                        </>
                                      )
                                    )
                                )
                            )
                          : payments.paymentType.periods.map(
                              (period, periodIndex) =>
                                period.shifts.map((shift, shiftIndex) => (
                                  <>
                                    <td
                                      key={shiftIndex}
                                      ref={(element) =>
                                        itemEls.current.push(element)
                                      }
                                      onClick={(e) => onAClick(e, index)}
                                    >
                                      <TableTextbox
                                        name={
                                          "not--Division-MajorAnnualPeirod-shifts"
                                        }
                                        id={11}
                                        index={index}
                                        subIndex={periodIndex}
                                        subSubIndex={shiftIndex}
                                        value={shift.paymentAmount.amount}
                                        onChange={(event) =>
                                          handlePaymentValue(
                                            event,
                                            index,
                                            periodIndex,
                                            shiftIndex
                                          )
                                        }
                                        placeholder={"ETB"}
                                      />
                                    </td>
                                  </>
                                ))
                            )}
                      </>
                    )}
                  </tr>
                </>
              ) : // PAYMENT BASED ON DIVISION BUT NOT ON ANNURAL-PERIOD
              divisionBasedPayment && !periodBasedPayment ? (
                <>
                  {payments.paymentType.selectedDivisionType === "division"
                    ? payments.paymentType.divisions.map(
                        (division, divisionIndex) => (
                          <tr key={divisionIndex}>
                            <td>
                              <div>
                                <RowHeader label={division.divisionName} />
                                <br />
                              </div>
                            </td>
                            <td
                              ref={(element) => itemEls.current.push(element)}
                              onClick={(e) => onAClick(e, index)}
                            >
                              <TableTextbox
                                name={"MajorDivision-not--AnnualPeirod"}
                                id={12}
                                placeholder={"ETB"}
                                index={index}
                                subIndex={divisionIndex}
                                value={division.paymentAmount.amount}
                                onChange={(event) =>
                                  handlePaymentValue(
                                    event,
                                    index,
                                    divisionIndex
                                  )
                                }
                              />
                            </td>
                          </tr>
                        )
                      )
                    : payments.paymentType.divisions.map(
                        (division, divisionIndex) =>
                          division.educationalSubDivision.map(
                            (subDivision, subDivisionIndex) => (
                              <tr>
                                <td>
                                  <div>
                                    <RowHeader
                                      label={subDivision.subDivisionName}
                                    />
                                    <br />
                                  </div>
                                </td>
                                <td
                                  ref={(element) =>
                                    itemEls.current.push(element)
                                  }
                                  onClick={(e) => onAClick(e, index)}
                                >
                                  <TableTextbox
                                    name={"SubDivision-not--AnnualPeirod"}
                                    id={13}
                                    placeholder={"ETB"}
                                    index={index}
                                    subIndex={divisionIndex}
                                    subSubIndex={subDivisionIndex}
                                    value={subDivision.paymentAmount.amount}
                                    onChange={(event) =>
                                      handlePaymentValue(
                                        event,
                                        index,
                                        divisionIndex,
                                        subDivisionIndex
                                      )
                                    }
                                  />
                                </td>
                              </tr>
                            )
                          )
                      )}
                </>
              ) : // IF PAYMENT IS BASED ON NEITHER EDUCATIONAL DIVISIONS NOT ANNUAL PERIODS

              !divisionBasedPayment && !periodBasedPayment ? (
                <>
                  {" "}
                  <tr>
                    <td>
                      <div>
                        <RowHeader
                          label={
                            "All " +
                            payments.paymentType.divisions[0]
                              .educationalSubDivision[0].subDivisionType +
                            "s"
                          }
                        />
                        <br />
                      </div>
                    </td>
                    <td
                      ref={(element) => itemEls.current.push(element)}
                      onClick={(e) => onAClick(e, index)}
                    >
                      <TableTextbox
                        name={"not--Division-not--AnnualPeirod"}
                        id={14}
                        index={index}
                        placeholder={"ETB"}
                      />
                    </td>
                  </tr>
                </>
              ) : (
                <>
                  <label htmlFor="">
                    Illegal Argument!! Check your settings!
                  </label>
                </>
              )}
            </tbody>
            <br />
          </table>
        </>
      </section>
    </div>
  );
};

export default PaymentAmountTable;
