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
        <div className=" input__group field-subgroup-container">
          <div className="flex-cs checkbox-group">
            <div className="flex-left mt-1">
              <label htmlFor="">
                <h3>Payment Base</h3>
              </label>
              {/*Checkbox for gender based payment */}
              <section className="w-1 flex block checkbox-group">
                <div className="w-1">
                  <>
                    {/* paymentBaseType.charAt(0) === "s" ? */}
                    <div className="flex-cs">
                      <div className="flex gap2vw ">
                        <label
                          className="checkbox-items flex flex-cs "
                          htmlFor={"standard" + index}
                        >
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
                          <span>
                            &nbsp; <p>Standard </p>
                          </span>
                        </label>
                        {/* If gender based payment discount is checked display for gender types */}
                        {true && (
                          <div className="flex-cs gapp5 mlp3">
                            {/* {index} */}
                          </div>
                        )}
                      </div>
                      <div className="flex-cs ">
                        <div className="flex-cs gap2vw">
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
                              &nbsp; <p>Advanced Base </p>
                            </span>
                          </label>
                        </div>
                        <></>
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
