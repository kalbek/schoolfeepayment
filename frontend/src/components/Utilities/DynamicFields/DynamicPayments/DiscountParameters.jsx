import AddMoreButton from "../../Buttons/AddMoreButton";

const DiscountParameters = ({
  handlePaymentDiscount,
  handleAddCustomPaymentDiscount,
  singlePayment,
  index,
}) => {
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
              <div className="flex block checkbox-group mbn5">
                <label
                  htmlFor={"genderBasedPayment_" + index}
                  className="checkbox-items flex flex-left"
                >
                  <input
                    type="checkbox"
                    name="genderBasedPayment"
                    id={"genderBasedPayment_" + index}
                    value={singlePayment.genderChecked}
                    checked={singlePayment.genderChecked}
                    onChange={(e) => handlePaymentDiscount(e, index)}
                    tabIndex={9}
                  />
                  <>
                    <span>
                      &nbsp; <p>Gender Based</p>
                    </span>
                  </>
                </label>
                {/*Checkbox for special need based payment */}
                <label
                  className="checkbox-items flex flex-cs"
                  htmlFor={"specialNeedBasedPayment_" + index}
                >
                  <input
                    type="checkbox"
                    name="specialNeedBasedPayment"
                    id={"specialNeedBasedPayment_" + index}
                    value={singlePayment.specialNeedChecked}
                    checked={singlePayment.specialNeedChecked}
                    onChange={(e) => handlePaymentDiscount(e, index)}
                    tabIndex={9}
                  />
                  <>
                    <span>
                      &nbsp; <p>Special Needs</p>
                    </span>
                  </>
                </label>

                {/*Checkbox for scholarships based payment */}
                <label
                  className="checkbox-items flex flex-cs"
                  htmlFor={"scholarshipBasedPayment_" + index}
                >
                  <input
                    type="checkbox"
                    name="scholarshipBasedPayment"
                    id={"scholarshipBasedPayment_" + index}
                    value={singlePayment.scholarshipChecked}
                    checked={singlePayment.scholarshipChecked}
                    onChange={(e) => handlePaymentDiscount(e, index)}
                    tabIndex={9}
                  />
                  <>
                    <span>
                      &nbsp; <p>Scholarships</p>
                    </span>
                  </>
                </label>
              </div>
              {/*Checkbox for custom discount parameters payment */}
              <div className="flex-cs">
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
                        &nbsp;&nbsp; <p>Add Custom Parameters</p>
                      </span>
                    </>
                  </label>
                </div>
                <></>
              </div>
            </section>
          </div>
        </div>
      </div>
    </>
  );
};

export default DiscountParameters;
