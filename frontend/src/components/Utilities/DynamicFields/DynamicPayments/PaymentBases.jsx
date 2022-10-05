import AddMoreButton from "../../Buttons/AddMoreButton";
import RemoveLinksButton from "../../Buttons/RemoveLinksButton";

const PaymentBases = ({
  handlePaymentBase,
  handleAddCustomPaymentBasis,
  handleCustomPaymentBase,
  removeCustomPaymentBase,
  singlePayment,
  index,
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
  return (
    <>
      <div>
        <div className="checkbox-inputs input__group ">
          <div className="flex-cs checkbox-group field-group-container">
            <section className="flex-left">
              <label htmlFor="">
                <h3>Payment Base</h3>
              </label>
              <div className="flex block checkbox-group mbn5 ">
                {/* Checkbox for period based payment */}
                <label
                  className="checkbox-items flex flex-cs"
                  htmlFor={"periodBasedPayment" + index}
                >
                  <input
                    type="checkbox"
                    name="periodPaymentBase"
                    id={"periodBasedPayment" + index}
                    tabIndex={9}
                    value={periodPaymentBase}
                    checked={periodPaymentBase}
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
                  htmlFor={"gradeBasedPayment" + index}
                >
                  <input
                    type="checkbox"
                    name="gradeLevelPaymentBase"
                    id={"gradeBasedPayment" + index}
                    value={gradeLevelPaymentBase}
                    checked={gradeLevelPaymentBase}
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
                  htmlFor={"creditHoursBasedPayment" + index}
                >
                  <input
                    type="checkbox"
                    name="creditHoursPaymentBase"
                    id={"creditHoursBasedPayment" + index}
                    value={creditHourPaymentBase}
                    checked={creditHourPaymentBase}
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
                    htmlFor={"courseTypeBasedPayment" + index}
                  >
                    <input
                      type="checkbox"
                      name="courseTypePaymentBase"
                      id={"courseTypeBasedPayment" + index}
                      value={courseTypePaymentBase}
                      checked={courseTypePaymentBase}
                      onChange={(e) => handlePaymentBase(e, index)}
                      tabIndex={9}
                    />
                    <>
                      <span className="pl3">
                        &nbsp; <p>Course Type &nbsp;</p>
                      </span>
                    </>
                  </label>
                  {/*Checkbox for custom type based payment goes here */}
                  {/* Add custom basis button */}
                  <label
                    className="checkbox-items flex flex-cs mlnp7"
                    htmlFor={"customPaymentBase"}
                    onClick={() => handleAddCustomPaymentBasis(index)}
                  >
                    <AddMoreButton
                      index={index}
                      handleLinks={() => console.log("defined at label")}
                      // handleLinks={handleAddCustomPaymentBasis}
                    />
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
              {customPaymentBase.paymentBases.map((base, baseIndex) => (
                <div key={baseIndex} className="flex-cs mtn5">
                  <div className="flex-c inputs gapp5">
                    <div className="flex-cs gapp5">
                      <input
                        type="text"
                        className="cursor-auto"
                        name="paymentBase"
                        id={"courseTypeBasedPayment"}
                        placeholder={"Custom payment base"}
                        value={base.customPaymentBaseName}
                        onChange={(event) =>
                          handleCustomPaymentBase(event, index, baseIndex)
                        }
                        tabIndex={9}
                      />
                      <RemoveLinksButton
                        remove={removeCustomPaymentBase}
                        index={index}
                        subIndex={baseIndex}
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
