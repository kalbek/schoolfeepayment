import { useRef, forwardRef } from "react";
const DiscountUnits = forwardRef((props, parentref) => {
  const paymentType = props.singlePayment.discountParameters.discountUnit;
  return (
    <>
      <div className="flex checkbox-group">
        {/* PAYMENT TERM SELECT OPTION */}
        <div className="field-group-container">
          <section
          //    ref={parentref}
          >
            <div className="flex-c flex-start input__group inputs ">
              <label htmlFor="" className="-mb-p5f ">
                <p>Discount Units</p>
              </label>
              <div className="flex gapp5 -mt-p5">
                <div className="input__groupa ">
                  <label
                    className="checkbox-items flex flex-cs"
                    htmlFor={"percentage" + props.index}
                  >
                    <input
                      type="radio"
                      id={"percentage" + props.index}
                      value={paymentType}
                      checked={paymentType === "percentage" + props.index}
                      onChange={(event) =>
                        props.handleDiscountUnits(event, props.index)
                      }
                      tabIndex={9}
                      
                    />
                    <span className="mt-p2">
                      &nbsp; <p>{"(%) pct"}</p>
                    </span>
                  </label>
                </div>

                <div
                  //   ref={
                  //     paymentType === "amount" + props.index ? parentref : null
                  //   }
                  className="input__groupa "
                >
                  <label
                    className="checkbox-items flex flex-cs "
                    htmlFor={"amount" + props.index}
                  >
                    <input
                      type="radio"
                      id={"amount" + props.index}
                      value={paymentType}
                      checked={paymentType === "amount" + props.index}
                      onChange={(event) =>
                        props.handleDiscountUnits(event, props.index)
                      }
                      tabIndex={9}
                    />
                    <span className="mt-p2">
                      &nbsp; <p>Amount</p>
                    </span>
                  </label>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
});

export default DiscountUnits;
