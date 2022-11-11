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

const TableTextbox = (props) => {
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

  return (
    <>
      <div className="flex-cs">
        <label>
          <p>{props.label}</p>
          {/* <div className="mb-p46 input-xs-lower-border"> */}
          {/* <div className="mb-p45 input-xs-lower-border"> */}
          <div className="mb-p6 input-xs-lower-border">
            <input
              type={"number"}
              name={props.name}
              value={props.value}
              placeholder={" "+props.placeholder}
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
      </div>
    </>
  );
};

export default TableTextbox;
