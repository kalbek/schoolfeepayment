import { useSelector, useDispatch } from "react-redux";
import AddMoreButton from "../../Buttons/AddMoreButton";
import RemoveButton from "../../Buttons/RemoveButton";
import PaymentTypes from "./PaymentTypes";
import PaymentTerms from "./PaymentTerms";
import PaymentBases from "./PaymentBases";
import PaymentDiscounts from "./PaymentDiscounts";
import "react-datepicker/dist/react-datepicker.css";
import {
  createPayments,
  createCustomPaymentBase,
  deletePayments,
  updatePaymentType,
  updateCustomPaymentType,
  deleteCustomPaymentType,
  updatePaymentBase,
  updateGenderBasedPaymentDiscount,
  updateScholarshipBasedPaymentDiscount,
  updateSpecialNeedBasedPaymentDiscount,
  updatePaymentDiscount,
  updateCustomDiscount,
  updateCustomPaymentBase,
  updateGendersForPaymentDiscount,
  updatePaymentTerm,
  deleteCustomPaymentBase,
  createSpecialNeedDiscount,
  createScholarshipDiscount,
  createCustomDiscount,
  updateSpecialNeedDiscount,
  updateScholarshipDiscount,
  deleteSpecialNeedDiscount,
  deleteScholarshipDiscount,
  deleteCustomDiscount,
} from "../../../../features/paymentBase/paymentBaseSlice";

const Payments1Actions = ({}) => {
  const dispatch = useDispatch();
  const paymentState = useSelector((state) => state.payments.paymentState);
  const lastPaymentState = paymentState[paymentState.length - 1];
  const { popup } = useSelector((state) => state.popups);
  // const formDataPayments = [...formData.schoolPayments];
  const handleAddPayments = () => {
    dispatch(
      createPayments({
        Id: paymentState.length,
        paymentType: {
          isCustomPaymentType: false,
          paymentName: "Tuiton Fee",
          customPaymentName: "",
          paymentAmount: 0,
          discountUnits: "amount" + paymentState.length,
        },
        paymentBase: {
          periodPaymentBase: {
            value: true,
            periods: [
              {
                Id: 0,
                periodName: "",
                startDate: "",
                endDate: "",
                paymentDueDate: "",
                paymentAmount: "",
              },
            ],
          },
          gradeLevelPaymentBase: {
            value: true,
            grades: [
              {
                Id: 0,
                gradeName: "",
                numberOfSections: "",
                paymentAmount: "",
              },
            ],
          },
          creditHoursPaymentBase: {
            value: false,
          },
          courseTypePaymentBase: {
            value: false,
            courses: [
              {
                Id: 0,
                courseName: "",
                creditHour: 0,
                contactHour: 0,
                paymentAmount: 0,
              },
            ],
          },
          customPaymentBase: {
            value: false,
            paymentBases: [],
          },
        },

        // payment discount parameters
        discountParameters: {
          Id: 0,
          isGradeBasedDiscountType: false,
          discountUnit: "amount" + paymentState.length,
          genderBasedDiscount: {
            value: false,
            amount: "",
            genderType: "female",
            discountFormale: false,
            discountForfemale: true,
            male: false,
            female: true,
          },
          specialNeedsBasedDiscount: {
            value: false,
            amount: "",
            specialNeeds: [],
          },
          scholarshipBasedDiscount: {
            value: false,
            amount: "",
            scholarships: [],
          },
          customPaymentDiscount: {
            value: false,
            amount: "",
            customDiscounts: [],
          },
        },
        paymentTerm: {
          paymentTermType: "standard" + paymentState.length,
          // standardPaymentTerm: true,
          // advancedPaymenTerm: false,
        },

        totalPaymentAmount: {
          Id: 0,
          paymentAmount: 0,
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
        isCustomPaymentType: value === "Custom Fees",
        paymentId: index,
        paymentName: value,
      })
    );
  };

  const handleCustomPaymentType = (event, index) => {
    const { value } = event.target;
    dispatch(
      updateCustomPaymentType({
        paymentId: index,
        paymentName: value,
      })
    );
  };

  const removeCustomPaymentType = (index) => {
    dispatch(
      deleteCustomPaymentType({
        paymentIndex: index,
      })
    );
  };

  const handlePaymentBase = (event, index) => {
    const { name } = event.target;
    paymentState.map((state) => {
      if (state.Id === index) {
        dispatch(
          updatePaymentBase({
            paymentId: index,
            selectedValue: !state.paymentBase[name].value,
            paymentBaseType: name + index,
          })
        );
      }
    });
  };

  const handleSelectGenderBasedPaymentDiscount = (event, index) => {
    const { name } = event.target;
    paymentState.map((payment) => {
      if (payment.Id === index) {
        dispatch(
          updateGenderBasedPaymentDiscount({
            paymentId: index,
            selectedValue: !payment.discountParameters[name].value,
            paymentDiscountType: name + index,
          })
        );
      }
    });
  };

  const handlePaymentDiscount = (event, index) => {
    const { name } = event.target;
    paymentState.map((state) => {
      if (state.Id === index) {
        dispatch(
          updatePaymentDiscount({
            paymentId: index,
            selectedValue: !state.discountParameters[name].value,
            paymentDiscountType: name + index,
            // I'm not sure if these two are useful
          })
        );
      }
    });
  };

  const handleCustomPaymentBase = (event, index, baseIndex) => {
    const { value } = event.target;
    paymentState.map((state) => {
      if (state.Id === index) {
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
      if (payment.Id === index) {
        dispatch(
          createCustomPaymentBase({
            paymentIndex: index,
            paymentBase: {
              Id: payment.paymentBase.customPaymentBase.paymentBases.length,
              customPaymentBaseName: "",
              paymentDueDates: "",
            },
          })
        );
      }
    });
  };
  const handlePaymentTerm = (event, index) => {
    const { id } = event.target;
    paymentState.map((paymentState) => {
      if (paymentState.Id === index) {
        dispatch(
          updatePaymentTerm({
            paymentId: index,
            paymentTermType: id,
          })
        );
      }
    });
  };
  const removeCustomPaymentBase = (index, subIndex) => {
    paymentState.map((payment) => {
      if (payment.Id === index) {
        dispatch(
          deleteCustomPaymentBase({
            paymentIndex: index,
            baseIndex: subIndex,
          })
        );
      }
    });
  };

  // METHODS TO HANDLE CRUD OPERATIONS FOR PAYMENT DISCOUNTS
  const handleGenderTypesForDiscount = (event, index) => {
    const { id } = event.target;
    paymentState.map((payment) => {
      if (payment.Id === index) {
        dispatch(
          updateGendersForPaymentDiscount({
            paymentId: index,
            // genderType: value,
            genderName: id,
            // selectedValue: !payment.discountParameters[name].value,
          })
        );
      }
    });
  };
  const handleSelectSpecialNeedBasedPaymentDiscount = (index) => {
    paymentState.map((payment) => {
      if (payment.Id === index) {
        dispatch(
          updateScholarshipBasedPaymentDiscount({
            paymentId: index,
            selectedValue:
              !payment.discountParameters.specialNeedsBasedDiscount.value,
          })
        );
      }
    });
  };
  const handleSelectScholarshipBasedPaymentDiscount = (index) => {
    paymentState.map((payment) => {
      if (payment.Id === index) {
        dispatch(
          updateSpecialNeedBasedPaymentDiscount({
            paymentId: index,
            selectedValue:
              !payment.discountParameters.scholarshipBasedDiscount.value,
          })
        );
      }
    });
  };

  const addSpcialNeedPaymentDiscount = (index) => {
    paymentState.map((payment) => {
      if (payment.Id === index) {
        dispatch(
          createSpecialNeedDiscount({
            paymentId: index,
            specialNeeds: {
              Id: payment.discountParameters.specialNeedsBasedDiscount
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
      if (payment.Id === index) {
        dispatch(
          createScholarshipDiscount({
            paymentId: index,
            scholarships: {
              Id: payment.discountParameters.scholarshipBasedDiscount
                .scholarships.length,
              scholarshipName: "",
              discountPercentage: 0,
            },
          })
        );
      }
    });
  };

  const addCustomPaymentDiscount = (index) => {
    paymentState.map((payment) => {
      if (payment.Id === index) {
        dispatch(
          createCustomDiscount({
            paymentId: index,
            discounts: {
              Id: payment.discountParameters.customPaymentDiscount
                .customDiscounts.length,
              discountName: "",
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
      if (payment.Id === index) {
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
    const { value } = event.target;
    paymentState.map((payment) => {
      if (payment.Id === index) {
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

  const handleCustomDiscount = (event, index, customDiscountIndex) => {
    const { value } = event.target;
    paymentState.map((payment) => {
      if (payment.Id === index) {
        dispatch(
          updateCustomDiscount({
            paymentId: index,
            discountName: value,
            discountIndex: customDiscountIndex,
            discountPercentage: 0,
          })
        );
      }
    });
  };

  const remvoeSpcialNeedPaymentDiscount = (index, specialNeedIndex) => {
    paymentState.map((payment) => {
      if (payment.Id === index) {
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
      if (payment.Id === index) {
        dispatch(
          deleteScholarshipDiscount({
            paymentId: index,
            scholarshipId: scholarshipIndex,
          })
        );
      }
    });
  };
  const remvoeCustomPaymentDiscount = (index, discountIndex) => {
    paymentState.map((payment) => {
      if (payment.Id === index) {
        dispatch(
          deleteCustomDiscount({
            paymentId: index,
            customDiscountIndex: discountIndex,
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
              {/* {index} */}
              <PaymentTypes
                singlePayment={singlePayment}
                index={index}
                handlePaymentType={handlePaymentType}
                handleCustomPaymentType={handleCustomPaymentType}
                removeCustomPaymentType={removeCustomPaymentType}
              />
              <PaymentBases
                singlePayment={singlePayment}
                index={index}
                handlePaymentBase={handlePaymentBase}
                handleCustomPaymentBase={handleCustomPaymentBase}
                handleAddCustomPaymentBasis={handleAddCustomPaymentBasis}
                removeCustomPaymentBase={removeCustomPaymentBase}
              />

              <PaymentDiscounts
                singlePayment={singlePayment}
                index={index}
                handleSelectGenderBasedPaymentDiscount={
                  handleSelectGenderBasedPaymentDiscount
                }
                handleSelectSpecialNeedBasedPaymentDiscount={
                  handleSelectSpecialNeedBasedPaymentDiscount
                }
                handleSelectScholarshipBasedPaymentDiscount={
                  handleSelectScholarshipBasedPaymentDiscount
                }
                //
                handlePaymentDiscount={handlePaymentDiscount}
                handleAddCustomPaymentDiscount={handleAddCustomPaymentDiscount}
                addSpcialNeedPaymentDiscount={addSpcialNeedPaymentDiscount}
                addScholarshipsPaymentDiscount={addScholarshipsPaymentDiscount}
                handleSpcialNeedPaymentDiscount={
                  handleSpcialNeedPaymentDiscount
                }
                handleCustomDiscount={handleCustomDiscount}
                addCustomPaymentDiscount={addCustomPaymentDiscount}
                handleScholarshipsPaymentDiscount={
                  handleScholarshipsPaymentDiscount
                }
                remvoeSpcialNeedPaymentDiscount={
                  remvoeSpcialNeedPaymentDiscount
                }
                remvoeScholarshipsPaymentDiscount={
                  remvoeScholarshipsPaymentDiscount
                }
                remvoeCustomPaymentDiscount={remvoeCustomPaymentDiscount}
                handleGenderTypesForDiscount={handleGenderTypesForDiscount}
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
              handleLinks={handleAddPayments}
            />
          ) : (
            ""
          )}
        </div>
      ))}
    </>
  );
};

export default Payments1Actions;
