import { useRef } from "react";
import DeleteButton from "../../../Buttons/DeleteButton";
import { useDispatch } from "react-redux";
import RemoveButton from "../../../Buttons/RemoveButton";
import RemoveButtonSmall from "../../../Buttons/RemoveButtonSmall";
import RemoveLinksButton from "../../../Buttons/RemoveLinksButton";
import { deleteEligibleGradeforGenderDiscounts } from "../../../../../features/paymentBase/paymentBaseSlice";
import { deleteEligibleGradeforScholarshipDiscounts } from "../../../../../features/paymentBase/paymentBaseSlice";
import { deleteEligibleGradeforSpecialneedDiscounts } from "../../../../../features/paymentBase/paymentBaseSlice";
import { deleteEligibleGradeforCustomDiscounts } from "../../../../../features/paymentBase/paymentBaseSlice";
import {
  setValuesForGradeBasedGenderDiscount,
  setValuesForGradeBasedSpecialneedDiscount,
  setValuesForGradeBasedScholarshipDiscount,
  setValuesForGradeBasedCustomDiscount,
} from "../../../../../features/paymentBase/paymentBaseSlice";

const Textbox = (props) => {
  const dispatch = useDispatch();
  const handleTextboxValue = (event) => {
    const { id, name, valueAsNumber } = event.target;
    console.log(name);
    if (
      name === "grade-based-gender-amount" ||
      name === "grade-based-gender-percentage"
    ) {
      dispatch(
        setValuesForGradeBasedGenderDiscount({
          paymentId: props.index,
          eligibelGradeId: props.subSubIndex,
          unitType: name,
          value: valueAsNumber,
        })
      );
    } else if (
      name === "grade-based-specialneed-amount" ||
      name === "grade-based-specialneed-percentage"
    ) {
      dispatch(
        setValuesForGradeBasedSpecialneedDiscount({
          paymentId: props.index,
          specialNeedId: props.subIndex,
          eligibelGradeId: props.subSubIndex,
          unitType: name,
          value: valueAsNumber,
        })
      );
    } else if (
      name === "grade-based-scholarship-amount" ||
      name === "grade-based-scholarship-percentage"
    ) {
      dispatch(
        setValuesForGradeBasedScholarshipDiscount({
          paymentId: props.index,
          scholarshipId: props.subIndex,
          eligibelGradeId: props.subSubIndex,
          unitType: name,
          value: valueAsNumber,
        })
      );
    } else if (
      name === "grade-based-custom-amount" ||
      name === "grade-based-custom-percentage"
    ) {
      dispatch(
        setValuesForGradeBasedCustomDiscount({
          paymentId: props.index,
          customId: props.subIndex,
          eligibelGradeId: props.subSubIndex,
          unitType: name,
          value: valueAsNumber,
        })
      );
    }
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
                  onChange={(event) => handleTextboxValue(event)}
                  onFocus={props.onFocus}
                />
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

export default Textbox;
