import { useRef } from "react";
import DeleteButton from "../../../Buttons/DeleteButton";
import { useDispatch, useSelector } from "react-redux";
import RemoveButton from "../../../Buttons/RemoveButton";
import RemoveButtonSmall from "../../../Buttons/RemoveButtonSmall";
import RemoveLinksButton from "../../../Buttons/RemoveLinksButton";
import { deleteEligibleGradeforGenderDiscounts } from "../../../../../features/paymentBase/paymentBaseSlice";
import { deleteEligibleGradeforScholarshipDiscounts } from "../../../../../features/paymentBase/paymentBaseSlice";
import { deleteEligibleGradeforSpecialneedDiscounts } from "../../../../../features/paymentBase/paymentBaseSlice";
import { deleteEligibleGradeforCustomDiscounts } from "../../../../../features/paymentBase/paymentBaseSlice";
import {
  updateScholarshipDiscountValue,
  updateCustomDiscount,
  updateGenderDiscountsValue,
  updateSpecialNeedDiscountValue,
} from "../../../../../features/paymentBase/paymentBaseSlice";

const Textbox2 = (props) => {
  const dispatch = useDispatch();
  const paymentState = useSelector((state) => state.payments.paymentState);
  const handleDiscountAmountInputs = (event) => {
    const { id, name, valueAsNumber } = event.target;
    paymentState.map((paymentState) => {
      if (paymentState.Id === props.index) {
        if (name === "gender-by-percent" || name === "gender-by-amount") {
          dispatch(
            updateGenderDiscountsValue({
              discountType: name,
              paymentId: props.index,
              unitType: id,
              value: valueAsNumber,
            })
          );
        } else if (
          name === "specialneed-by-percent" ||
          name === "specialneed-by-amount"
        ) {
          dispatch(
            updateSpecialNeedDiscountValue({
              discountType: name,
              specialNeedId: props.subIndex,
              paymentId: props.index,
              unitType: id,
              value: valueAsNumber,
            })
          );
        } else if (
          name === "scholarship-by-percent" ||
          name === "scholarship-by-amount"
        ) {
          dispatch(
            updateScholarshipDiscountValue({
              discountType: name,
              paymentId: props.index,
              scholarshipId: props.subIndex,
              unitType: id,
              value: valueAsNumber,
            })
          );
        } else if (
          name === "custom-by-percent" ||
          name === "custom-by-amount"
        ) {
          dispatch(
            updateCustomDiscount({
              paymentId: props.index,
              discountIndex: props.subIndex,
              discountUnit: name,
              value: valueAsNumber,
            })
          );
        }
      }
    });
  };
  const removeEligibleGradeforDiscounts = (props) => {
    // console.log("paymentIndex: " + props.index);
    // console.log("discountTypeIndex: " + props.subIndex);
    // console.log("eligibleGradeIndex: " + props.subSubIndex);
    // console.log("dicountType: " + props.dicountType);
    if (props.dicountType === "gender-discount") {
      dispatch(
        deleteEligibleGradeforGenderDiscounts({
          paymentId: props.index,
          eligibelGradeId: props.subSubIndex,
        })
      );
    } else if (props.dicountType === "specialneed-discount") {
      dispatch(
        deleteEligibleGradeforSpecialneedDiscounts({
          paymentId: props.index,
          specialNeedId: props.subIndex,
          eligibelGradeId: props.subSubIndex,
        })
      );
    } else if (props.dicountType === "scholarship-discount") {
      dispatch(
        deleteEligibleGradeforScholarshipDiscounts({
          paymentId: props.index,
          scholarshipId: props.subIndex,
          eligibelGradeId: props.subSubIndex,
        })
      );
    } else if (props.dicountType === "custom-discount") {
      dispatch(
        deleteEligibleGradeforCustomDiscounts({
          paymentId: props.index,
          customId: props.subIndex,
          eligibelGradeId: props.subSubIndex,
        })
      );
    }
  };
  return (
    <>
      <div
        className={!props.hasTopLevelContainer ? "" : "field-group-container"}
      >
        <section className="flex-cr input__group inputs">
          <div className="flex-cs">
            <label>
              <p>{props.label}</p>
              <div className="mb-1 inputs input--small">
                <input
                  type={"number"}
                  name={props.name}
                  value={props.value}
                  placeholder={props.placeholder}
                  id={props.Id}
                  tabIndex={1}
                  label={props.label}
                  onChange={(event) => handleDiscountAmountInputs(event)}
                  onFocus={props.onFocus}
                />
              </div>
              <div className="-mt-p5 flex-end">
                {props.bottomLabel ? <>Not {props.gradeType} based </> : <></>}
              </div>
            </label>
            {props.gradeBase && (
              <div
                onClick={(event) =>
                  removeEligibleGradeforDiscounts({
                    dicountType: props.dicountType,
                    paymentIndex: props.Id,
                    index: props.index,
                    subIndex: props.subIndex,
                    subSubIndex: props.subSubIndex,
                  })
                }
                className="-mt-4"
              >
                <RemoveButtonSmall />
                {""}
              </div>
            )}
          </div>
        </section>
      </div>
    </>
  );
};

export default Textbox2;
