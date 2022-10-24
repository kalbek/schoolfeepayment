import { useDispatch, useSelector } from "react-redux";
import {
  updateGradeBasedDiscount,
  updateEligibleGradesforDiscount,
  updateEligibleSpecialneedsforDiscount,
  updateEligibleScholarshipsforDiscount,
} from "../../../../../../features/paymentBase/paymentBaseSlice";
const DiscountBase = (props) => {
  const isGradeBasedDiscount =
    props.singlePayment.discountParameters.isGradeBasedDiscountType;
  const educationalDivisionState = useSelector(
    (state) => state.educationalDivisions.educationalDivision
  );
  const dispatch = useDispatch();
  const updateDiscountBase = () => {
    dispatch(
      updateGradeBasedDiscount({
        paymentId: props.index,
        value: !props.singlePayment.discountParameters.isGradeBasedDiscountType,
      })
    );
    if (!props.singlePayment.discountParameters.isGradeBasedDiscountType) {
      educationalDivisionState.map((division) => {
        {
          division.educationalSubDivision.map((subDivision, subIndex) => {
            dispatch(
              updateEligibleGradesforDiscount({
                paymentId: props.index,
                value:
                  !props.singlePayment.discountParameters
                    .isGradeBasedDiscountType,
                eligibelGrade: {
                  Id: subIndex,
                  gradeName: subDivision.subDivisionName,
                  percentage: "",
                  amount: "",
                },
              })
            );
            dispatch(
              updateEligibleSpecialneedsforDiscount({
                paymentId: props.index,
                value:
                  !props.singlePayment.discountParameters
                    .isGradeBasedDiscountType,
                eligibelGrade: {
                  Id: subIndex,
                  gradeName: subDivision.subDivisionName,
                  percentage: "",
                  amount: "",
                },
              })
            );
            dispatch(
              updateEligibleScholarshipsforDiscount({
                paymentId: props.index,
                value:
                  !props.singlePayment.discountParameters
                    .isGradeBasedDiscountType,
                eligibelGrade: {
                  Id: subIndex,
                  gradeName: subDivision.subDivisionName,
                  percentage: "",
                  amount: "",
                },
              })
            );
          });
        }
      });
    }
  };
  return (
    <div className="flex-start checkbox-group">
      <div className="flex-c">
        {/* Payment unit radio buttons */}
        <div className="field-group-container">
          <section>
            <div className="flex-c flex-start input__group inputs ">
              <label htmlFor="" className="-mb-p5f ">
                <p>Discount Base</p>
              </label>
              <div className="flex gapp5 -mt-p5">
                <div className="input__group pr-6">
                  <label
                    className="checkbox-items flex flex-cs   pr-1 "
                    htmlFor={props.index}
                  >
                    <input
                      type="checkbox"
                      id={props.index}
                      value={isGradeBasedDiscount}
                      checked={isGradeBasedDiscount}
                      onChange={updateDiscountBase}
                    />
                    <>
                      <span className="mt-p2">
                        &nbsp; <p>Based on {props.division}</p>
                      </span>
                    </>
                  </label>
                </div>
              </div>
            </div>
          </section>
        </div>
        &nbsp;
      </div>
    </div>
  );
};

export default DiscountBase;
