import { useSelector, useDispatch } from "react-redux";
import { updateGradeBasedDiscount } from "../../../../features/paymentBase/paymentBaseSlice";
const DiscountBase = (props) => {
  const isGradeBasedDiscount =
    props.singlePayment.discountParameters.isGradeBasedDiscountType;
  const dispatch = useDispatch();
  const updateDiscountBase = () => {
    console.log("index: " + props.index )
      dispatch(
        updateGradeBasedDiscount({
          paymentId: props.index,
          value: !props.singlePayment.discountParameters.isGradeBasedDiscountType,
        })
      );
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
                    htmlFor={"grade-based-discount " + props.index}
                  >
                    <input
                      type="checkbox"
                      // name={name}
                      id={"grade-based-discount" + props.index}
                      // id={id}
                      value={isGradeBasedDiscount}
                      checked={isGradeBasedDiscount}
                      onChange={ updateDiscountBase}
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
