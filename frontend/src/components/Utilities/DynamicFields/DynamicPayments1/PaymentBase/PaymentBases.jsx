import StandardPaymentBase from "./Standard/StandardPaymentBase";
import AdvancedPaymentBase from "./Advanced/AdvancedPaymentBase";

const PaymentBases = ({
  handlePaymentBase,
  handleAddCustomPaymentBasis,
  handleCustomPaymentBase,
  removeCustomPaymentBase,
  singlePayment,
  index,
  // FOR PAYMENT TERM
  handlePaymentBaseTypeSelection,
}) => {
  // const customPaymentBase = singlePayment.paymentBase.customPaymentBased;
  const periodPaymentBase = singlePayment.paymentBase.periodPaymentBase.value;
  const gradeLevelPaymentBase =
    singlePayment.paymentBase.gradeLevelPaymentBase.value;
  const creditHourPaymentBase =
    singlePayment.paymentBase.creditHoursPaymentBase.value;
  const courseTypePaymentBase =
    singlePayment.paymentBase.courseTypePaymentBase.value;
  const customPaymentBase = singlePayment.paymentBase.customPaymentBase;
  const paymentBaseType = singlePayment.paymentBase.paymentBaseType;

  return (
    <>
      <div>
        <div className=" input__group">
          <div className="flex-cs checkbox-group field-subgroup-container">
            <div className="flex-left mt-1">
              <label htmlFor="">
                <h3>Payment Base</h3>
              </label>
              {/*Checkbox for gender based payment */}
              <section className=" flex block checkbox-group">
                <div>
                  <>
                    {/* paymentBaseType.charAt(0) === "s" ? */}
                    <div className="flex  gap1 ml-1p5">
                      <label
                        className="checkbox-items flex-r flex-cs "
                        htmlFor={"standard" + index}
                      >
                        <span>
                          &nbsp; <p>Standard &nbsp;</p>
                        </span>
                        &nbsp;
                        <input
                          type="radio"
                          id={"standard" + index}
                          value={paymentBaseType}
                          checked={paymentBaseType === "standard" + index}
                          onChange={(event) =>
                            handlePaymentBaseTypeSelection(event, index)
                          }
                          tabIndex={9}
                        />
                      </label>
                      <div className="flex-cs ">
                        {/* TOP LEVEL PERIOD */}
                        <label
                          className="checkbox-items flex flex-cs"
                          htmlFor={"advanced" + index}
                        >
                          <input
                            type="radio"
                            id={"advanced" + index}
                            value={paymentBaseType}
                            checked={paymentBaseType === "advanced" + index}
                            onChange={(event) =>
                              handlePaymentBaseTypeSelection(event, index)
                            }
                            tabIndex={9}
                          />
                          <span>
                            &nbsp; <p>Advanced </p>
                          </span>
                        </label>
                      </div>
                      <></>
                    </div>

                    {paymentBaseType.charAt(0) === "s" ? (
                      <>
                        <StandardPaymentBase
                          singlePayment={singlePayment}
                          index={index}
                        />
                      </>
                    ) : (
                      <>
                        <AdvancedPaymentBase
                          singlePayment={singlePayment}
                          index={index}
                        />
                      </>
                    )}
                  </>
                </div>

                <></>
              </section>
              {/*Checkbox for custom discount parameters payment */}
              {/* paymentBaseType.charAt(0) === "s" ? */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PaymentBases;
