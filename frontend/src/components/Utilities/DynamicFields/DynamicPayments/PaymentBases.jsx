import AddMoreButton from "../../Buttons/AddMoreButton";
import RemoveLinksButton from "../../Buttons/RemoveLinksButton";

const PaymentBases = ({
  handlePaymentBase,
  handleAddCustomPaymentBasis,
  handleCustomPaymentBase,
  singlePayment,
  index,
  removeCustomPaymentBase,
}) => {
  // const customPaymentBase = singlePayment.paymentBase.customPaymentBased;
  const periodPaymentBase = singlePayment.paymentBase.periodPaymentBase;
  const gradeLevelPaymentBase = singlePayment.paymentBase.gradeLevelPaymentBase;
  const creditHourPaymentBase =
    singlePayment.paymentBase.creditHoursPaymentBase;
  const courseTypePaymentBase = singlePayment.paymentBase.courseTypePaymentBase;
  const customPaymentBase = singlePayment.paymentBase.customPaymentBase;

  return (
    <>
      <div>
        <div className="checkbox-inputs input__group field-group-container">
          <div className="flex-cs checkbox-group">
            <section className="flex-left">
              <label htmlFor="">
                <h3>Payment Base</h3>
              </label>
              <div className="flex block checkbox-group mbn5 ">
                {/* Checkbox for period based payment */}
                <label
                  className="checkbox-items flex flex-cs"
                  htmlFor={"periodBasedPayment"}
                >
                  {console.log(periodPaymentBase.value === "true")}
                  <input
                    type="checkbox"
                    name="paymentBase"
                    id={"periodBasedPayment"}
                    tabIndex={9}
                    value={periodPaymentBase.value}
                    checked={periodPaymentBase.value}
                    onChange={(event) => handlePaymentBase(event, index)}
                  />
                  <>
                    <span>
                      &nbsp; <p>Annual Period</p>
                    </span>
                  </>
                </label>

                {/*Checkbox for grade based payment */}
                <label
                  className="checkbox-items flex flex-cs"
                  htmlFor={"gradeBasedPayment"}
                >
                  <input
                    type="checkbox"
                    name="paymentBase"
                    id={"gradeBasedPayment"}
                    value={gradeLevelPaymentBase.value}
                    checked={gradeLevelPaymentBase.value}
                    onChange={(e) => handlePaymentBase(e, index)}
                    tabIndex={9}
                  />
                  <>
                    <span>
                      &nbsp; <p>Grade Level</p>
                    </span>
                  </>
                </label>
                {/*Checkbox for credit hours based payment */}
                <label
                  className="checkbox-items flex flex-cs"
                  htmlFor={"creditHoursBasedPayment"}
                >
                  <input
                    type="checkbox"
                    name="paymentBase"
                    id={"creditHoursBasedPayment"}
                    value={creditHourPaymentBase.value}
                    checked={creditHourPaymentBase.value}
                    onChange={(e) => handlePaymentBase(e, index)}
                    tabIndex={9}
                  />
                  <>
                    <span>
                      &nbsp; <p>Credit Hours</p>
                    </span>
                  </>
                </label>
              </div>
              <div className="flex-cs">
                <div className="flex block checkbox-group">
                  {/*Checkbox for course based payment */}
                  <label
                    className="checkbox-items flex flex-cs"
                    htmlFor={"courseTypeBasedPayment"}
                  >
                    <input
                      type="checkbox"
                      name="paymentBase"
                      id={"courseTypeBasedPayment"}
                      // value={singlePayment.gradeLevelChecked}
                      // checked={singlePayment.gradeLevelChecked}
                      value={courseTypePaymentBase.value}
                      checked={courseTypePaymentBase.value}
                      onChange={(e) => handlePaymentBase(e, index)}
                      tabIndex={9}
                    />
                    <>
                      <span className="pl3">
                        &nbsp; <p>Course Type &nbsp;</p>
                      </span>
                    </>
                  </label>
                  {/*Checkbox for custom type based payment */}
                  {/* Add custom basis button */}
                  <label
                    className="checkbox-items flex flex-cs mlnp7"
                    htmlFor={"gradeBasedPayment_" + index}
                  >
                    <AddMoreButton handleLinks={handleAddCustomPaymentBasis} />
                    <>
                      <span className="mln5">
                        &nbsp; <p>Add Custom Basis</p>
                      </span>
                    </>
                  </label>
                </div>
                <></>
              </div>
              {/* INPUT FOR DYNAMIC CUSTOM PAYMENT BASE */}
              {customPaymentBase.map((base, index) => (
                <div key={index} className="flex-cs">
                  <div className="flex-c inputs gapp5">
                    <div className="flex-cs gapp5">
                      <input
                        type="text"
                        className="cursor-auto"
                        name="paymentBase"
                        id={"courseTypeBasedPayment"}
                        placeholder={"Custom payment base name"}
                        // value={base.customPaymentBaseName}
                        onChange={(e) => handleCustomPaymentBase(e, index)}
                        tabIndex={9}
                      />
                      <RemoveLinksButton
                        remove={removeCustomPaymentBase}
                        index={index}
                      />
                    </div>
                    <div className="mb5px"></div>
                  </div>
                  <>&nbsp;</>
                  &nbsp;
                </div>
              ))}
            </section>
          </div>
        </div>
      </div>
    </>
  );
};

export default PaymentBases;
