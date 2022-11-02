import { useSelector, useDispatch } from "react-redux";
import AnnualPeriod from "./AnnualPeriod";
import EducationalDivision from "./EducationalDivision";
import Shifts from "./Shifts";
import {
  updateStandardPaymentBaseAnnualPeriodCheckboxSelection,
  updateStandardPaymentBaseAnnualPeriodTypeRadioSelection,
  updateStandardPaymentBaseEducationalDivisionCheckboxSelection,
  updateStandardPaymentBaseEducationalDivisionTypeRadioSelection,
  updateStandardPaymentBaseShiftsCheckboxSelection,
  // REMOVE THIS
  updatePaymentBaseTypeSelection,
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
  const periodPaymentBase = singlePayment.paymentBase.periodPaymentBase.value;
  const gradeLevelPaymentBase =
    singlePayment.paymentBase.gradeLevelPaymentBase.value;
  const creditHourPaymentBase =
    singlePayment.paymentBase.creditHoursPaymentBase.value;
  const courseTypePaymentBase =
    singlePayment.paymentBase.courseTypePaymentBase.value;
  const customPaymentBase = singlePayment.paymentBase.customPaymentBase;
  const paymentBaseType = singlePayment.paymentBase.paymentBaseType;

  // DEFINING METHODS FOR ANNUAL PERIOD
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
        <div className="mb-p5">
          <Shifts
            handleStandardPaymentBaseShiftsCheckboxSelection={
              handleStandardPaymentBaseShiftsCheckboxSelection
            }
            index={index}
          />
          {/* paymentBaseType.charAt(0) === "s" ? */}
        </div>
      </div>
    </>
  );
};

export default StandardPaymentBase;
