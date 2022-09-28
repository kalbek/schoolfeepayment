import AddMoreButton from "../../Buttons/AddMoreButton";
import Radio from "../../../InputControls/Radio";
const PaymentDiscounts = ({
  handlePaymentDiscount,
  handleAddCustomPaymentDiscount,
  singlePayment,
  index,
}) => {
  const genderBasedDiscount =
    singlePayment.discountParameters.genderBasedDiscount;
  const specialNeedsBasedDiscount =
    singlePayment.discountParameters.specialNeedsBasedDiscount;
  const scholarshipBasedDiscount =
    singlePayment.discountParameters.scholarshipBasedDiscount;
  return (
    <>
      <div>
        <div className="checkbox-inputs input__group field-group-container">
          <div className="flex-cs checkbox-group">
            <section className="flex-left">
              <label htmlFor="">
                <h3>Discount Parameters</h3>
              </label>
              {/*Checkbox for gender based payment */}
              <div className="flex block checkbox-group">
                <div className="">
                  <div>
                    <div className="flex-cs">
                      <div className="flex gap2vw ">
                        <label
                          htmlFor={"default"}
                          className="checkbox-items flex flex-left"
                        >
                          <input
                            type="checkbox"
                            name="genderBasedDiscount"
                            id={"default"}
                            value={genderBasedDiscount.value}
                            checked={genderBasedDiscount.value}
                            onChange={(e) => handlePaymentDiscount(e, index)}
                            tabIndex={9}
                          />
                          <>
                            <span>
                              &nbsp; <p>Gender Based</p>
                            </span>
                          </>
                        </label>
                        {/* If gender based payment discount is checked display for gender types */}
                        {genderBasedDiscount.value && (
                          <div className="flex-cs gapp5 mlp3">
                            <Radio
                              label="M"
                              name={"genderBasedDiscount"}
                              id={"Male"}
                              className={"flex-cs"}
                              value={genderBasedDiscount.genderType}
                              checked={
                                genderBasedDiscount.genderType === "Male"
                              }
                              onChange={(event) =>
                                handlePaymentDiscount(event, index)
                              }
                            />
                            <Radio
                              label="F"
                              className={"flex-cs"}
                              checked={
                                genderBasedDiscount.genderType === "Female"
                              }
                              name={"genderBasedDiscount"}
                              id={"Female"}
                              value={genderBasedDiscount.genderType}
                              onChange={(event) =>
                                handlePaymentDiscount(event, index)
                              }
                            />
                          </div>
                        )}
                      </div>
                      <></>
                    </div>

                    {/*Checkbox for special need based payment */}
                    <div className="flex-cs mtn5">
                      <div className="flex-cs gap2vw">
                        <label
                          className="checkbox-items flex flex-cs"
                          htmlFor={"specialNeedPaymentDiscount"}
                        >
                          <input
                            type="checkbox"
                            name="specialNeedsBasedDiscount"
                            id={"specialNeedPaymentDiscount"}
                            value={specialNeedsBasedDiscount.value}
                            checked={specialNeedsBasedDiscount.value}
                            onChange={(e) => handlePaymentDiscount(e, index)}
                            tabIndex={9}
                          />
                          <>
                            <span>
                              &nbsp; <p>Special Needs</p>
                            </span>
                          </>
                        </label>
                        {/* If Special Needs is checked display add types for special needs */}

                        {specialNeedsBasedDiscount.value && (
                          <label
                            className="checkbox-items flex flex-cs mln4"
                            htmlFor={"gradeBasedPayment_" + index}
                          >
                            <AddMoreButton
                              handleLinks={handleAddCustomPaymentDiscount}
                            />
                            <>
                              <span className="mlnp9">
                                &nbsp;&nbsp; <p>Add Types</p>
                              </span>
                            </>
                          </label>
                        )}
                      </div>
                      <></>
                    </div>

                    {/*Checkbox for scholarships based payment */}
                    <div className="flex-cs mtn5">
                      <div className="flex gap2p5vw">
                        <label
                          className="checkbox-items flex flex-cs"
                          htmlFor={"scholarshipBasedPaymentDiscount"}
                        >
                          <input
                            type="checkbox"
                            name="scholarshipBasedDiscount"
                            id={"scholarshipBasedPaymentDiscount"}
                            value={scholarshipBasedDiscount.value}
                            checked={scholarshipBasedDiscount.value}
                            onChange={(e) => handlePaymentDiscount(e, index)}
                            tabIndex={9}
                          />
                          <>
                            <span>
                              &nbsp; <p>Scholarships</p>
                            </span>
                          </>
                        </label>
                        {scholarshipBasedDiscount.value && (
                          <label
                            className="checkbox-items flex flex-cs mln4"
                            htmlFor={"gradeBasedPayment_" + index}
                          >
                            <AddMoreButton
                              handleLinks={handleAddCustomPaymentDiscount}
                            />
                            <>
                              <span className="mlnp9">
                                &nbsp;&nbsp; <p>Add Types</p>
                              </span>
                            </>
                          </label>
                        )}
                      </div>
                      <></>
                    </div>

                    <div className="flex-cs mtn7">
                      <div className="flex block checkbox-group">
                        {/*Checkbox for course based payment */}

                        <label
                          className="checkbox-items flex flex-cs mln4"
                          htmlFor={"gradeBasedPayment_" + index}
                        >
                          <AddMoreButton
                            handleLinks={handleAddCustomPaymentDiscount}
                          />
                          <>
                            <span className="mlnp9">
                              &nbsp;&nbsp; <p>Custom Parameters</p>
                            </span>
                          </>
                        </label>
                      </div>
                      <></>
                    </div>
                  </div>
                  <></>
                </div>
              </div>

              {/*Checkbox for custom discount parameters payment */}
            </section>
          </div>
        </div>
      </div>
    </>
  );
};

export default PaymentDiscounts;
