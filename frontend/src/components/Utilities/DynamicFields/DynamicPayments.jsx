import { useSelector, useDispatch } from "react-redux";
import AddMoreButton from "../Buttons/AddMoreButton";
import RemoveButton from "../Buttons/RemoveButton";
import PaymentType from "./DynamicPayments/PaymentTypes";
import PaymentTerms from "./DynamicPayments/PaymentTerms";
import PaymentBases from "./DynamicPayments/PaymentBases";
import DiscountParameters from "./DynamicPayments/DiscountParameters";
import "react-datepicker/dist/react-datepicker.css";
import {
  createPayments,
  deletePayments,
  updatePayments,
} from "../../../features/paymentBase/paymentBaseSlice";

const DynamicPayments = ({ formData }) => {
  const dispatch = useDispatch();
  const paymentState = useSelector((state) => state.payments.paymentState);
  const lastPaymentState = paymentState[paymentState.length - 1];
  const { popup } = useSelector((state) => state.popups);
  const formDataPayments = [...formData.schoolPayments];
  const addPayments = () => {
    dispatch(
      createPayments({
        id: lastPaymentState.id + 1,
        paymentType: [],
        paymentBase: {
          periodPaymentBase: {
            value: true,
            periods: [],
          },
          gradeLevelPaymentBase: {
            value: true,
            grades: [],
          },
          creditHoursPaymentBase: {
            value: false,
          },
          courseTypePaymentBase: {
            value: false,
            courses: [],
          },

          customPaymentBase: [],
        },
        discountParameters: {
          id: lastPaymentState.discountParameters.id + 1,
          discountType: {
            genderBasedDiscount: {
              value: false,
              genders: [],
            },
            specialNeedsBasedDiscount: {
              value: false,
              specialNeeds: [],
            },
            scholarshipBasedDiscount: {
              value: false,
              scholarships: [],
            },
            customPaymentDiscount: {
              value: false,
              customDiscounts: [],
            },
          },
        },
      })
    );
  };
  const removePayments = (index) => {
    dispatch(
      deletePayments({
        paymentId: index,
      })
    );
  };
  const handlePaymentType = (event, index) => {
    const { id, name, value } = event.target;
    console.log("id: " + id);
    console.log("name: " + name);
    console.log("value: " + value);

    dispatch(
      updatePayments({
        paymentId: index,
        paymentToUpdate: name,
        paymentName: value,
      })
    );
  };
  const handlePaymentBase = (event, index) => {
    console.log("hey")
    const { id, name } = event.target;
    paymentState.map((state) => {
      if (state.id === index) {
        // identify the current payment base type to update
        const paymentBaseToUpdate =
          id === "periodBasedPayment"
            ? !state.paymentBase.periodPaymentBase.value
            : id === "gradeBasedPayment"
            ? !state.paymentBase.gradeLevelPaymentBase.value
            : id === "creditHoursBasedPayment"
            ? !state.paymentBase.creditHoursPaymentBase.value
            : id === "courseTypeBasedPayment"
            ? !state.paymentBase.courseTypePaymentBase.value
            : null;

        // update the payment base
        console.log("paymentBaseToUpdate: " + id)
        dispatch(
          updatePayments({
            paymentId: index,
            paymentToUpdate: name,
            selectedValue: paymentBaseToUpdate,
            paymentBaseType: id,
          })
        );
      }
    });
  };
  const handlePaymentDiscount = (event, index) => {};
  const handlePaymentTerm = (event, index) => {};
  const handleAddCustomPaymentBasis = (event, index) => {};
  const handleAddCustomPaymentDiscount = (event, index) => {};

  return (
    <>
      {paymentState.map((singlePayment, index) => (
        <div key={index}>
          <div className="flex-start gapp6">
            <PaymentType
              singlePayment={singlePayment}
              index={index}
              handlePaymentType={handlePaymentType}
            />
            <PaymentBases
              singlePayment={singlePayment}
              index={index}
              handlePaymentBase={handlePaymentBase}
              handleAddCustomPaymentBasis={handleAddCustomPaymentBasis}
            />

            <DiscountParameters
              singlePayment={singlePayment}
              index={index}
              handlePaymentDiscount={handlePaymentDiscount}
              handleAddCustomPaymentDiscount={handleAddCustomPaymentDiscount}
            />

            <PaymentTerms
              singlePayment={singlePayment}
              index={index}
              handlePaymentTerm={handlePaymentTerm}
            />

            {paymentState.length > 1 ? (
              <RemoveButton removables={removePayments} index={index} />
            ) : (
              <></>
            )}
          </div>

          {paymentState.length - 1 === index && paymentState.length < 24 ? (
            <AddMoreButton
              label="Add Payment Types"
              handleLinks={addPayments}
            />
          ) : (
            ""
          )}
        </div>
      ))}
    </>
  );
};

export default DynamicPayments;
