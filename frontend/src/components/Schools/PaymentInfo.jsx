import AddMoreButton from "../Utilities/Buttons/AddMoreButton";
import RemoveLinksButton from "../Utilities/Buttons/RemoveLinksButton";
import DynamicPayments from "../Utilities/DynamicFields/DynamicPayments";
import SmallCard from "../Utilities/Cards/SmallCard";
import Preview from "../Utilities/Buttons/Preview";

import "../../Styles/utilities.css";
import {
  createPaymentBase,
  updatePayments,
  deletePaymentBase,
  resetPaymentStates,
} from "../../features/paymentBase/paymentBaseSlice";
import "../../Styles/formStyles.css";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";

function PaymentInfo({ formData, setFormData }) {
  const dispatch = useDispatch();
  const paymentState = useSelector((state) => state.payments.paymentState);

  const formDataPayments = [...formData.schoolPayments];
  const addPayments = () => {
    formData.schoolPayments.length < 30 &&
      setFormData({
        ...formData,
        schoolPayments: [
          ...formDataPayments,
          {
            paymentType: "Tuition Fee",
            // paymentAmount: 0,
            paymentTerm: "One time payment",
            paymentDueDate: new Date(),
            periodBasedPayment: true,
            gradeLevelBasedPayment: true,
            genderBasedPayment: false,
            specialNeedBasedPayment: false,
            scholarshipBasedPayment: false,
            standardPaymentTerm: true,
            advancedPaymentTerm: false,
          },
        ],
      });
    dispatch(
      createPaymentBase({
        id: paymentState[paymentState.length - 1].id + 1,
        periodChecked: true,
        gradeLevelChecked: true,
        genderChecked: false,
        specialNeedChecked: false,
        scholarshipChecked: false,
        standardPaymentTermSelected: true,
        advancedPaymentTermSelected: false,
      })
    );
  };
  useEffect(() => {
    console.log("sp fd");
    console.log(formData.annualPeroid);
    if (formData.schoolPayments.length === 0)
      setFormData({
        ...formData,
        schoolPayments: [
          ...formDataPayments,
          {
            paymentType: "Tuition Fee",
            // paymentAmount: 0,
            paymentTerm: "One time payment",
            paymentDueDate: new Date(),
            periodBasedPayment: true,
            gradeLevelBasedPayment: true,
            genderBasedPayment: false,
            specialNeedBasedPayment: true,
            scholarshipBasedPayment: false,
            standardPaymentTerm: true,
            advancedPaymentTerm: false,
          },
        ],
      });
    console.log("use effect");
    console.log(formDataPayments);
  }, []);

  // handling payment types dropdown onselect/on change event
  function handlePaymentTypeSelect(e, index) {
    const { name, value } = e.target;
    const payments = formDataPayments;
    payments[index][name] = value;
    setFormData({ ...formData, schoolPayments: payments });
  }

  // handling payment term change
  const handlePaymentTermSelect = (e, index) => {
    const { name, value } = e.target;
    paymentState.map((baseState) => {
      if (baseState.id === index) {
        dispatch(
          updatePayments({
            termToUpdate: name,
            // standardPaymentTerm: !baseState.standardPaymentTerm,
            standardPaymentTerm: true,
            advancedPaymentTerm: !baseState.advancedPaymentTerm,
          })
        );
      }
    });

    const term = formDataPayments;
    term[index][name] = value;
    setFormData({ ...formData, schoolPayments: term });
  };

  // handling payment amount change
  const handlePaymentAmount = (e, index) => {
    const { name, value } = e.target;
    const amount = formDataPayments;
    amount[index][name] = value;
    setFormData({ ...formData, schoolPayments: amount });
  };

  function handlePayments(e, index) {
    const { name, value } = e.target;
    console.log("name: " + name);
    paymentState.map((baseState) => {
      if (baseState.id === index) {
        dispatch(
          updatePayments({
            id: index,
            paymentToUpdate: name,
            periodChecked: !baseState.periodChecked,
            gradeLevelChecked: !baseState.gradeLevelChecked,
            genderChecked: !baseState.genderChecked,
            specialNeedChecked: !baseState.specialNeedChecked,
            scholarshipChecked: !baseState.scholarshipChecked,

            standardPaymentTermSelected: !baseState.standardPaymentTermSelected,
            advancedPaymentTermSelected: !baseState.advancedPaymentTermSelected,
          })
        );
      }
    });
    const base = formDataPayments;
    base[index][name] = value;
    setFormData({ ...formData, schoolPayments: base });
  }
  console.log(formDataPayments);
  console.log("*********");
  console.log(paymentState);

  const removePayments = (index) => {
    const list = formDataPayments;
    list.splice(index, 1);
    setFormData({ ...formData, schoolPayments: list });
    dispatch(deletePaymentBase({ id: index }));
  };

  const resetPayments = () => {
    const list = formDataPayments;
    list.splice(1, list.length);
    list[0].paymentType = "Tuition Fee";
    setFormData({ ...formData, schoolPayments: list });
    dispatch(resetPaymentStates());
  };

  return (
    <div className="flex">
      <div className="school-info">
        {/* Main titles section */}
        <div>
          <div>
            <h1 className="form__titles--mid">
              Now let us fill your school payment info
            </h1>
            <h3 className="form__subtitle">
              Please be precise while filling payment details.
            </h3>
          </div>

          {formDataPayments.length > 1 ? (
            <RemoveLinksButton
              remove={resetPayments}
              label={"Reset Payments"}
            />
          ) : (
            <>
              <br />
              <br />
              <br />
            </>
          )}
          <DynamicPayments
            formData={formData}
            handlePaymentTypeSelect={handlePaymentTypeSelect}
            handlePaymentAmount={handlePaymentAmount}
            handlePaymentTermSelect={handlePaymentTermSelect}
            removePayments={removePayments}
            addPayments={addPayments}
            handlePayments={handlePayments}
          />
          <div className="flex-ccc">
            {formDataPayments.length === 0 ? (
              <AddMoreButton label="Add Payments" handleLinks={addPayments} />
            ) : (
              ""
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
export default PaymentInfo;
