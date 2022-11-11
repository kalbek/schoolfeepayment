import StandardPaymentBase from "./Standard/StandardPaymentBase";
import AdvancedPaymentBase from "./Advanced/AdvancedPaymentBase";
import HideOrshow from "../../../Buttons/hideOrshow";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { updatePaymentsForDivisions } from "../../../../../features/Grades&Divisions/grades&DivisionsSlice";
import { updateDivisionsForAnnualPeriods } from "../../../../../features/SchoolPeriods/annualPeriodSlice";
import { updatePaymentTypesForPaymentBase } from "../../../../../features/paymentBase/paymentBaseSlice";
const PaymentBases = ({
  handlePaymentBase,
  handleAddCustomPaymentBasis,
  handleCustomPaymentBase,
  removeCustomPaymentBase,
  handlePayementBaseHideOrShow,
  singlePayment,
  index,
  // FOR PAYMENT TERM
  handlePaymentBaseTypeSelection,
}) => {
  const paymentState = useSelector((state) => state.payments.paymentState);
  const periodState = useSelector((state) => state.periods.topLevelPeriod);
  const educationalDivisionState = useSelector(
    (state) => state.educationalDivisions.educationalDivision
  );
  const dispatch = useDispatch();

  // const customPaymentBase = singlePayment.paymentBase.customPaymentBased;
  const periodPaymentBase = singlePayment.paymentBase.periodPaymentBase.value;
  const gradeLevelPaymentBase =
    singlePayment.paymentBase.gradeLevelPaymentBase.value;
  const creditHourPaymentBase =
    singlePayment.paymentBase.creditHoursPaymentBase.value;
  const courseTypePaymentBase =
    singlePayment.paymentBase.courseTypePaymentBase.value;
  const customPaymentBase = singlePayment.paymentBase.customPaymentBase;
  const paymentBaseType = singlePayment.paymentBase.paymentBaseType;
  useEffect(() => {
    // console.log(
    //   "1) paymentBaseType is :" +
    //     paymentState[index].paymentBase.paymentBaseType
    // );
    // console.log(
    //   "2) annaul-Period Checkbox is checked:" +
    //     paymentState[index].paymentBase.standardAnnualPeriodCheckbox
    // );
    // console.log(
    //   "3) selected annaul-Period type is :" +
    //     paymentState[index].paymentBase.standardAnnualPeriodType
    // );
    // console.log(
    //   "4) Educational division is checked:" +
    //     paymentState[index].paymentBase.standardEducationalDivisionCheckbox
    // );
    // console.log(
    //   "5) Selected educational division type is:" +
    //     paymentState[index].paymentBase.standardEducationalDivisionType
    // );
    // console.log(
    //   "6) Shifts checkbox is selected:" +
    //     paymentState[index].paymentBase.standardShiftsCheckbox
    // );

    // first steps
    // inside each major and sub-educational divisions push payment objects
    // inside each major and sub-annual periods push 1) educational division state
    //- and payemnts object
    dispatch(updatePaymentsForDivisions());
    // what to watch
    // 1) selected paymentbase type i.e. [paymentState[index].paymentBase.paymentBaseType]
    // 2) if AP in payment base is check or not i.e. paymentState[index].paymentBase.standardAnnualPeriodCheckbox
    // 3) if Major AP or Sub-AP is selected i.e. paymentState[index].paymentBase.standardAnnualPeriodType
    // 4) if Educational division is selected i.e. paymentState[index].paymentBase.standardEducationalDivisionCheckbox
    // 5) the type of educatinal division selected paymentState[index].paymentBase.standardEducationalDivisionType
    // 6) if shifts checkbox is selected paymentState[index].paymentBase.standardShiftsCheckbox
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
    console.log("watching");
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
  ]);

  // watch payment state
  return (
    <>
      <div>
        <div className=" input__group ">
          {/* <div className="flex-cs checkbox-group field-subgroup-container"> */}
          <div className="flex-cs checkbox-group">
            <div className="flex-left mt-1 field-subgroup-containers">
              <div
                onClick={() => handlePayementBaseHideOrShow(index)}
                htmlFor=""
              >
                <label className="flex-cs">
                  <h3>Payment Base </h3>
                  <>
                    <div className="ml-40">
                      <div className="flex">
                        <HideOrshow
                          toogleValue={singlePayment.paymentBase.value}
                        />
                        &nbsp;
                        {singlePayment.paymentBase.value ? "Hide" : "Show"}
                      </div>
                    </div>
                    &nbsp;
                  </>
                </label>
              </div>

              {/*Checkbox for gender based payment */}
              <section className=" flex block checkbox-group">
                {singlePayment.paymentBase.value ? (
                  <>
                    <div>
                      <>
                        {/* paymentBaseType.charAt(0) === "s" ? */}
                        <div className="flex  gap1 ml-1p5">
                          <label
                            className="checkbox-items flex-r flex-cs "
                            htmlFor={"standard" + index}
                          >
                            <span>
                              &nbsp; <p>Standard&nbsp;</p>
                            </span>
                            &nbsp;
                            <input
                              type="radio"
                              id={"standard" + index}
                              value={paymentBaseType}
                              checked={paymentBaseType === "standard" + index}
                              onChange={(event) =>
                                handlePaymentBaseTypeSelection(event, index)
                              }
                              tabIndex={9}
                            />
                          </label>
                          <div className="flex-cs ">
                            {/* TOP LEVEL PERIOD */}
                            <label
                              className="checkbox-items flex flex-cs"
                              htmlFor={"advanced" + index}
                            >
                              <input
                                type="radio"
                                id={"advanced" + index}
                                value={paymentBaseType}
                                checked={paymentBaseType === "advanced" + index}
                                onChange={(event) =>
                                  handlePaymentBaseTypeSelection(event, index)
                                }
                                tabIndex={9}
                              />
                              <span>
                                &nbsp; <p>Advanced </p>
                              </span>
                            </label>
                          </div>
                          <></>
                        </div>

                        {paymentBaseType.charAt(0) === "s" ? (
                          <>
                            <StandardPaymentBase
                              singlePayment={singlePayment}
                              index={index}
                            />
                          </>
                        ) : (
                          <>
                            <AdvancedPaymentBase
                              singlePayment={singlePayment}
                              index={index}
                            />
                          </>
                        )}
                      </>
                    </div>
                  </>
                ) : (
                  <>
                    <label
                      onClick={() => handlePayementBaseHideOrShow(index)}
                      className=" flex-ccc w-20v h-2"
                      htmlFor=""
                    >
                      Hidden
                    </label>
                  </>
                )}

                <></>
              </section>
              {/*Checkbox for custom discount parameters payment */}
              {/* paymentBaseType.charAt(0) === "s" ? */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PaymentBases;
