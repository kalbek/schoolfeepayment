import { useSelector, useDispatch } from "react-redux";
import AnnualPeriod from "./AnnualPeriod";
import { useEffect } from "react";
import { initializeValueForDueDates } from "../../../../../../features/paymentBase/paymentBaseSlice";
import EducationalDivision from "./EducationalDivision";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { parse } from "date-fns";
import Shifts from "./Shifts";
import DueDatesShiftsAndPenalityOptions from "./DueDatesShiftsAndPenalityOptions";
import {
  updateStandardPaymentBaseAnnualPeriodCheckboxSelection,
  updateStandardPaymentBaseAnnualPeriodTypeRadioSelection,
  updateStandardPaymentBaseEducationalDivisionCheckboxSelection,
  updateStandardPaymentBaseEducationalDivisionTypeRadioSelection,
  updateStandardPaymentBaseShiftsCheckboxSelection,
  updateStandardPaymentDueDatesCheckboxSelection,
  updateStandardPaymentPenalityCheckboxSelection,
  // REMOVE THIS
  updatePaymentBaseTypeSelection,
  updateDueDates,
  initializeValueForPeiordDueDates,
  initializeValueForSubPeriodDueDates,
} from "../../../../../../features/paymentBase/paymentBaseSlice";

const StandardPaymentBase = ({
  handlePaymentBase,
  handleAddCustomPaymentBasis,
  handleCustomPaymentBase,
  removeCustomPaymentBase,
  singlePayment,
  index,
  // FOR PAYMENT TERM
}) => {
  const dispatch = useDispatch();
  const paymentState = useSelector((state) => state.payments.paymentState);
  // const customPaymentBase = singlePayment.paymentBase.customPaymentBased;
  const periodState = useSelector((state) => state.periods.topLevelPeriod);
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
    // paymentState[index].paymentBase.periodDueDate.splice(0);
    periodState.map((period, periodIndex) => {
      if (
        paymentState[index].paymentBase.periodDueDate.length <
        periodState.length
      ) {
        console.log("yey " + periodIndex)
        dispatch(
          initializeValueForPeiordDueDates({
            index: index,
            periodLength: periodState.length,
            peirodDueDates: {
              Id: paymentState[index].paymentBase.periodDueDate.length,
              periodId: periodIndex,
              periodName: period.periodName,
              dueDate: new Date().toISOString(),
            },
          })
        );
      }
    });
    console.log("üpdateded periodDueDate");
  }, [periodState]);
  useEffect(() => {
    periodState.map((period) => {
      period.subPeriods.map((subPeriod, subPeriodIndex) => {
        dispatch(
          initializeValueForSubPeriodDueDates({
            index: index,
            subPeriodDueDates: {
              Id: paymentState[index].paymentBase.periodDueDate.length,
              subPeriodId: subPeriodIndex,
              periodName: subPeriod.periodName,
              dueDate: new Date().toISOString(),
            },
          })
        );
      });
    });

    console.log("üpdated subPeriodDueDate");
  }, [periodState]);
  // DEFINING METHODS FOR ANNUAL PERIOD

  //  updateSubperiods

  function handleDueDates(date, periodIndex, subPeriodIndex) {
    const { value, name, id } = date.target;

    dispatch(
      updateDueDates({
        periodIndex,
        peirodType: name,
        periodDueDates: {
          Id:
            name === "period"
              ? paymentState[index].paymentBase.periodDueDate.length
              : paymentState[index].paymentBase.subPeriodDueDate.length,
          periodId: periodIndex,
          periodName: id,
          dueDate: value.toISOString(), // oct 1 , 2023
        },
        subPeriodDueDates: {
          Id:
            name === "period"
              ? paymentState[index].paymentBase.periodDueDate.length
              : paymentState[index].paymentBase.subPeriodDueDate.length,
          subPeirodId: subPeriodIndex,
          subPeriodName: id,
          dueDate: value.toISOString(), // oct 1 , 2023
        },
      })
    );
  }
  const handleStandardPaymentBaseAnnualPeriodCheckboxSelection = () => {
    dispatch(
      updateStandardPaymentBaseAnnualPeriodCheckboxSelection({
        paymentId: index,
        value: !singlePayment.paymentBase.standardAnnualPeriodCheckbox,
      })
    );
  };

  const handleStandardPaymentBaseAnnualPeriodTypeRadioSelection = (
    event,
    index
  ) => {
    const { id } = event.target;
    paymentState.map((paymentState) => {
      if (paymentState.Id === index) {
        dispatch(
          updateStandardPaymentBaseAnnualPeriodTypeRadioSelection({
            paymentId: index,
            annualPeriodType: id,
          })
        );
      }
    });
  };

  // DEFINING METHODS FOR EDUCATIONAL DIVISIONS
  const handleStandardPaymentBaseEducationalDivisionCheckboxSelection = (
    event,
    index
  ) => {
    dispatch(
      updateStandardPaymentBaseEducationalDivisionCheckboxSelection({
        paymentId: index,
        value: !singlePayment.paymentBase.standardEducationalDivisionCheckbox,
      })
    );
  };

  const handleStandardPaymentBaseEducationalDivisionTypeRadioSelection = (
    event,
    index
  ) => {
    const { id } = event.target;
    paymentState.map((paymentState) => {
      if (paymentState.Id === index) {
        dispatch(
          updateStandardPaymentBaseEducationalDivisionTypeRadioSelection({
            paymentId: index,
            divisionType: id,
          })
        );
      }
    });
  };

  // DEFINING METHODS FOR SHIFTS
  const handleStandardPaymentBaseShiftsCheckboxSelection = (event, index) => {
    dispatch(
      updateStandardPaymentBaseShiftsCheckboxSelection({
        paymentId: index,
        value: !singlePayment.paymentBase.standardShiftsCheckbox,
      })
    );
  };
  const handleStandardPaymentBaseDueDatesCheckboxSelection = (event, index) => {
    dispatch(
      updateStandardPaymentDueDatesCheckboxSelection({
        paymentId: index,
        value: !singlePayment.paymentBase.standardDueDatesCheckbox,
      })
    );
  };
  const handleStandardPaymentBasePenalityCheckboxSelection = (event, index) => {
    dispatch(
      updateStandardPaymentPenalityCheckboxSelection({
        paymentId: index,
        value: !singlePayment.paymentBase.standardPenalityCheckbox,
      })
    );
  };

  return (
    <>
      <div>
        <div className="flex">
          <div className="flex-c flex-start">
            <AnnualPeriod
              handleStandardPaymentBaseAnnualPeriodCheckboxSelection={
                handleStandardPaymentBaseAnnualPeriodCheckboxSelection
              }
              handleStandardPaymentBaseAnnualPeriodTypeRadioSelection={
                handleStandardPaymentBaseAnnualPeriodTypeRadioSelection
              }
              index={index}
            />
          </div>
          &nbsp; &nbsp;
          <div className="flex-c flex-start">
            <EducationalDivision
              handleStandardPaymentBaseEducationalDivisionCheckboxSelection={
                handleStandardPaymentBaseEducationalDivisionCheckboxSelection
              }
              handleStandardPaymentBaseEducationalDivisionTypeRadioSelection={
                handleStandardPaymentBaseEducationalDivisionTypeRadioSelection
              }
              index={index}
            />
          </div>
        </div>
        <div className="flex-container gapp8 mb-p5 flex-left ">
          <DueDatesShiftsAndPenalityOptions
            index={index}
            handleStandardPaymentBaseDueDatesCheckboxSelection={
              handleStandardPaymentBaseDueDatesCheckboxSelection
            }
            handleStandardPaymentBaseShiftsCheckboxSelection={
              handleStandardPaymentBaseShiftsCheckboxSelection
            }
            handleStandardPaymentBasePenalityCheckboxSelection={
              handleStandardPaymentBasePenalityCheckboxSelection
            }
          />
        </div>
        {paymentState[index].paymentBase.standardAnnualPeriodCheckbox &&
        paymentState[index].paymentBase.standardDueDatesCheckbox &&
        paymentState[index].paymentBase.standardAnnualPeriodType ===
          "period" + index ? (
          paymentState[index].paymentBase.periodDueDate.map(
            (periodDueDate, periodDueDateId) => (
              <div className=" ml-p5 flex-cr mb-1   inputs input--small">
                {console.log(periodDueDate)}
                <DatePicker
                  selected={parse(
                    periodDueDate.dueDate,
                    "yyyy-MM-dd'T'HH:mm:ss.SSSX",
                    new Date()
                  )}
                  value={periodDueDate.dueDate.substring(0, 10)}
                  onChange={(date) =>
                    handleDueDates(
                      {
                        target: {
                          value: date,
                          name: "period",
                          id: periodDueDate.periodName,
                        },
                      },
                      index,
                      periodDueDateId
                    )
                  }
                />
                <label> {periodDueDate.periodName}</label>
              </div>
            )
          )
        ) : paymentState[index].paymentBase.standardAnnualPeriodCheckbox &&
          paymentState[index].paymentBase.standardDueDatesCheckbox &&
          paymentState[index].paymentBase.standardAnnualPeriodType ===
            "subperiod" + index ? (
          periodState.map((period, periodIndex) =>
            period.subPeriods.map((subPeriod, subPeriodIndex) => (
              <div className=" ml-p5 flex-cr mb-1 inputs input--small">
                <DatePicker
                  // selected={parse(
                  //   paymentState[
                  //     index
                  //   ].paymentBase.subPeriodDueDate[subPeriodIndex].dueDate,
                  //   "yyyy-MM-dd'T'HH:mm:ss.SSSX",
                  //   new Date()
                  // )}
                  // value={paymentState[
                  //   index
                  // ].paymentBase.subPeriodDueDate[subPeriodIndex].dueDate.substring(0, 10)}
                  onChange={(date) =>
                    handleDueDates(
                      {
                        target: {
                          value: date,
                          name: "subperiod",
                          id: subPeriod.periodName,
                        },
                      },
                      index,
                      periodIndex,
                      subPeriodIndex
                    )
                  }
                />
                <label> {subPeriod.periodName}</label>
              </div>
            ))
          )
        ) : (
          <></>
        )}
      </div>
    </>
  );
};

export default StandardPaymentBase;
