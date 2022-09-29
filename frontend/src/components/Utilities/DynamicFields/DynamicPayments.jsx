import { useSelector, useDispatch } from "react-redux";
import AddMoreButton from "../Buttons/AddMoreButton";
import RemoveButton from "../Buttons/RemoveButton";
import PaymentTypes from "./DynamicPayments/PaymentTypes";
import PaymentTerms from "./DynamicPayments/PaymentTerms";
import PaymentBases from "./DynamicPayments/PaymentBases";
import DiscountParameters from "./DynamicPayments/PaymentDiscounts";
import "react-datepicker/dist/react-datepicker.css";
import {
  createPayments,
  createPaymentBase,
  deletePayments,
  updatePaymentType,
  updatePaymentBase,
  updatePaymentDiscount,
  updateCustomPaymentBase,
  updatePaymentTerm,
  deletePaymentBase,
  createSpecialNeedDiscount,
  createScholarshipDiscount,
  updateSpecialNeedDiscount,
  updateScholarshipDiscount,
  deleteSpecialNeedDiscount,
  deleteScholarshipDiscount,
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
    const { value } = event.target;
    dispatch(
      updatePaymentType({
        paymentId: index,
        paymentName: value,
      })
    );
  };

  const handlePaymentBase = (event, index) => {
    const { name } = event.target;
    paymentState.map((state) => {
      if (state.id === index) {
        dispatch(
          updatePaymentBase({
            paymentId: index,
            selectedValue: !state.paymentBase[name].value,
            paymentBaseType: name,
          })
        );
      }
    });
  };
  const handlePaymentDiscount = (event, index) => {
    const { name, id } = event.target;
    paymentState.map((state) => {
      if (state.id === index) {
        dispatch(
          updatePaymentDiscount({
            paymentId: index,
            selectedValue: !state.discountParameters[name].value,
            paymentDiscountType: name,
            genderType: id,
            gender: state.discountParameters[name].genders,
          })
        );
      }
    });
  };
  const handleCustomPaymentBase = (event, index, baseIndex) => {
    const { name, id, value } = event.target;
    paymentState.map((state) => {
      if (state.id === index) {
        dispatch(
          updateCustomPaymentBase({
            paymentId: index,
            customPaymentBaseId: baseIndex,
            value: value,
          })
        );
      }
    });
  };
  const handleAddCustomPaymentBasis = (index) => {
    paymentState.map((payment) => {
      if (payment.id === index) {
        dispatch(
          createPaymentBase({
            paymentIndex: index,
            paymentBase: {
              id: payment.paymentBase.customPaymentBase.paymentBases.length,
              customPaymentBaseName: "",
              paymentDueDates: "",
            },
          })
        );
      }
    });
  };
  const handlePaymentTerm = (event, index) => {};
  const removeCustomPaymentBase = (index, subIndex) => {
    paymentState.map((payment) => {
      if (payment.id === index) {
        dispatch(
          deletePaymentBase({
            paymentIndex: index,
            baseIndex: subIndex,
          })
        );
      }
    });
  };

  // METHODS TO HANDLE CRUD OPERATIONS FOR PAYMENT DISCOUNTS
  const addSpcialNeedPaymentDiscount = (index) => {
    paymentState.map((payment) => {
      if (payment.id === index) {
        dispatch(
          createSpecialNeedDiscount({
            paymentId: index,
            specialNeeds: {
              id: payment.discountParameters.specialNeedsBasedDiscount
                .specialNeeds.length,
              specialNeedName: "",
              discountPercentage: 0,
            },
          })
        );
      }
    });
  };

  const addScholarshipsPaymentDiscount = (index) => {
    paymentState.map((payment) => {
      if (payment.id === index) {
        dispatch(
          createScholarshipDiscount({
            paymentId: index,
            scholarships: {
              id: payment.discountParameters.scholarshipBasedDiscount
                .scholarships.length,
              scholarshipName: "",
              discountPercentage: 0,
            },
          })
        );
      }
    });
  };

  const handleSpcialNeedPaymentDiscount = (event, index, specialNeedIndex) => {
    const { value } = event.target;
    paymentState.map((payment) => {
      if (payment.id === index) {
        dispatch(
          updateSpecialNeedDiscount({
            paymentId: index,
            specialNeedId: specialNeedIndex,
            value: value,
          })
        );
      }
    });
  };

  const handleScholarshipsPaymentDiscount = (
    event,
    index,
    scholarshipIndex
  ) => {
    console.log("go");
    const { value } = event.target;
    paymentState.map((payment) => {
      if (payment.id === index) {
        dispatch(
          updateScholarshipDiscount({
            paymentId: index,
            scholarshipId: scholarshipIndex,
            scholarshipName: value,
          })
        );
      }
    });
  };

  const remvoeSpcialNeedPaymentDiscount = (index, specialNeedIndex) => {
    paymentState.map((payment) => {
      if (payment.id === index) {
        dispatch(
          deleteSpecialNeedDiscount({
            paymentId: index,
            specialNeedId: specialNeedIndex,
          })
        );
      }
    });
  };

  const remvoeScholarshipsPaymentDiscount = (index, scholarshipIndex) => {
    paymentState.map((payment) => {
      if (payment.id === index) {
        dispatch(
          deleteScholarshipDiscount({
            paymentId: index,
            scholarshipId: scholarshipIndex,
          })
        );
      }
    });
  };
  // END OFMETHODS TO HANDLE CRUD OPERATIONS FOR PAYMENT DISCOUNTS

  const handleAddCustomPaymentDiscount = (event, index) => {};

  return (
    <>
      {paymentState.map((singlePayment, index) => (
        <div key={index}>
          <div className="flex-start gapp6 field-group-container">
            <section className="flex-start gapp6 pb2">
              <PaymentTypes
                singlePayment={singlePayment}
                index={index}
                handlePaymentType={handlePaymentType}
              />
              <PaymentBases
                singlePayment={singlePayment}
                index={index}
                handlePaymentBase={handlePaymentBase}
                handleCustomPaymentBase={handleCustomPaymentBase}
                handleAddCustomPaymentBasis={handleAddCustomPaymentBasis}
                removeCustomPaymentBase={removeCustomPaymentBase}
              />

              <DiscountParameters
                singlePayment={singlePayment}
                index={index}
                handlePaymentDiscount={handlePaymentDiscount}
                handleAddCustomPaymentDiscount={handleAddCustomPaymentDiscount}
                addSpcialNeedPaymentDiscount={addSpcialNeedPaymentDiscount}
                addScholarshipsPaymentDiscount={addScholarshipsPaymentDiscount}
                handleSpcialNeedPaymentDiscount={
                  handleSpcialNeedPaymentDiscount
                }
                handleScholarshipsPaymentDiscount={
                  handleScholarshipsPaymentDiscount
                }
                remvoeSpcialNeedPaymentDiscount={
                  remvoeSpcialNeedPaymentDiscount
                }
                remvoeScholarshipsPaymentDiscount={
                  remvoeScholarshipsPaymentDiscount
                }
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
            </section>
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
