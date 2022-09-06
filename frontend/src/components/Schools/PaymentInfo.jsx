import AddMoreButton from "../Utilities/Buttons/AddMoreButton";
import RemoveLinksButton from "../Utilities/Buttons/RemoveLinksButton";
import DynamicPayments from "../Utilities/DynamicFields/DynamicPayments";
import "../../Styles/utilities.css";
import {
  setPeriodBasedPayments,
  setGradeLevelBasedPayments,
  setGenderPayments,
  setSpecialNeedPayments,
  setScholarshipBasedPayments,
  deletePeriodBasedPayments,
  deleteGradeLevelBasedPayments,
  deleteGenderBasedPayments,
  deleteSpecialNeedPayments,
  deleteScholarshipBasedPayments,
} from "../../features/paymentBase/paymentBaseSlice";
import "../../Styles/formStyles.css";
import { useSelector, useDispatch } from "react-redux";
import { useState, useEffect } from "react";

function PaymentInfo({ formData, setFormData }) {
  const dispatch = useDispatch();
  const annualPayments = useSelector(
    (state) => state.payments.initialAnnualPaymentBaseState
  );
  const formDataPayments = [...formData.schoolPayments];
  const handlePayments = () => {
    // setting form data for schoolPayments
    dispatch(setPeriodBasedPayments, {
      id: annualPayments[annualPayments.length - 1].id + 1,
      apChecked: false,
    });
    dispatch(
      setGradeLevelBasedPayments({
        id: annualPayments[annualPayments.length - 1].id + 1,
        glChecked: false,
      })
    );
    formData.schoolPayments.length < 30 &&
      setFormData({
        ...formData,
        schoolPayments: [
          ...formDataPayments,
          {
            paymentType: "Tuition Fee",
            payment_amount: 0,
            payment_term: "One time payment",
            payment_due_date: new Date(),

            periodBasedPayment: false,
            gradeLevelBasedPayment: false,
            genderBasedPayment: false,
            specialNeedBasedPayment: false,
            scholarshipBasedPayment: false,
          },
        ],
      });
  };
  useEffect(() => {
    if (formData.schoolPayments.length === 0)
      setFormData({
        ...formData,
        schoolPayments: [
          ...formDataPayments,
          {
            payment_type: "Tuition Fee",
            payment_amount: null,
            periodBasedPayment: false,
            gradeBasedPayment: false,
            payment_term: "One time payment",
            payment_due_date: new Date(),
          },
        ],
      });
  }, []);

  // console.log(formData);

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

  function handlePaymentDuedate(date, index) {
    const { name, value } = date.target;
    const dates = formDataPayments;
    dates[index][name] = value;
    setFormData({ ...formData, schoolPayments: dates });
  }

  function handlePaymentBase(e, index) {
    const { name, value } = e.target;
    const base = formDataPayments;
    base[index][name] = value;
    setFormData({ ...formData, schoolPayments: base });
  }

  const removePayments = (index) => {
    const list = formDataPayments;
    list.splice(index, 1);
    setFormData({ ...formData, schoolPayments: list });
    // console.log(index)
    dispatch(deletePeriodBasedPayments({ id: index }));
    dispatch(deleteGradeLevelBasedPayments({ id: index }));
  };

  const removeAllPayments = () => {
    const list = formDataPayments;
    list.splice(1, list.length);
    setFormData({ ...formData, schoolPayments: list });
  };

  return (
    <div className="flex">
      <div className="school-info">
        {/* Main titles section */}
        <div className="fl">
          <div>
            <h1 className="form__titles--mid">
              Now let us fill your school payment info
            </h1>
            <h3 className="form__subtitle">
              Please be precise while filling payment details.
            </h3>
          </div>

          {formData.schoolPayments.length >= 1 ? (
            <RemoveLinksButton
              remove={removeAllPayments}
              label={"Remove Other Payments"}
            />
          ) : (
            <></>
          )}
        </div>
        <DynamicPayments
          formData={formData}
          handlePaymentTypeSelect={handlePaymentTypeSelect}
          handlePaymentAmount={handlePaymentAmount}
          handlePaymentTermSelect={handlePaymentTermSelect}
          handlePaymentDuedate={handlePaymentDuedate}
          removePayments={removePayments}
          handlePayments={handlePayments}
          handlePaymentBase={handlePaymentBase}
          // handleSelect={handleSelect}
        />
        <div className="flex-ccc">
          {formDataPayments.length === 0 ? (
            <AddMoreButton label="Add Payments" handleLinks={handlePayments} />
          ) : (
            ""
          )}
        </div>
      </div>
    </div>
  );
}
export default PaymentInfo;
