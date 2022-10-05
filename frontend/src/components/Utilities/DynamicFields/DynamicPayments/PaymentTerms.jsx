const PaymentTerms = ({ handlePaymentTerm, singlePayment, index }) => {
  const standardPaymentTerm = singlePayment.paymentTerm.standardPaymentTerm  
  const advancedPaymenTerm = singlePayment.paymentTerm.advancedPaymenTerm  
  return (
    <>
      <div>
        {/* PAYMENT TERM SELECT OPTION */}
        <div className="checkbox-inputs input__group field-group-container pt2">
          <section className="flex-left">
            <label htmlFor="">
              <h3>Payment Term</h3>
            </label>
            <div className="flex-c checkbox-group flex-start">
              <label
                className="checkbox-items flex flex-cs"
                htmlFor={"standardPaymentTerm" + index}
              >
                <input
                  type="radio"
                  name={"schoolPaymentTerm"}
                  id={"standardPaymentTerm" + index}
                  // value={paymentTerm}
                  // checked={paymentTerm === "standard" + index}
                  onChange={(event) => handlePaymentTerm(event, index)}
                  tabIndex={9}
                />
                <span>
                  &nbsp; <p>Standard</p>
                </span>
              </label>
              <label
                className="checkbox-items flex flex-cs mtn30"
                htmlFor={"advancedPaymentTerm" + index}
              >
                <input
                  type="radio"
                  name={"schoolPaymentTerm"}
                  id={"advancedPaymentTerm" + index}
                  // value={paymenTerm}
                  // checked={paymentTerm === "advanced" + index}
                  onChange={(event) => handlePaymentTerm(event, index)}
                  tabIndex={9}
                />
                <span>
                  &nbsp; <p>Advanced</p>
                </span>
              </label>
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default PaymentTerms;
