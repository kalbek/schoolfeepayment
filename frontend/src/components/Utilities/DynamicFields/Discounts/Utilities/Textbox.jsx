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

const Textbox = (props) => {
  const dispatch = useDispatch();
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
            <label htmlFor={props.Id}>
              <p>{props.label}</p>
              <div className="mb-1 inputs input--small">
                <input
                  name={props.name}
                  type={props.type}
                  value={props.value}
                  placeholder={props.placeholder}
                  id={props.Id}
                  tabIndex={1}
                  label={props.label}
                  onChange={props.onChange}
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
