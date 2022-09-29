import AddMoreButton from "../../Buttons/AddMoreButton";
import RemoveLinksButton from "../../Buttons/RemoveLinksButton";
import Remove from "../../Buttons/Remove";
import Add from "../../Buttons/Add";
import Radio from "../../../InputControls/Radio";
const PaymentDiscounts = ({
  handlePaymentDiscount,
  handleAddCustomPaymentDiscount,
  singlePayment,
  index,
  addSpcialNeedPaymentDiscount,
  addScholarshipsPaymentDiscount,
  handleSpcialNeedPaymentDiscount,
  handleScholarshipsPaymentDiscount,
  remvoeSpcialNeedPaymentDiscount,
  remvoeScholarshipsPaymentDiscount,
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
        <div className="checkbox-inputs input__group field-subgroup-container">
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
                        {/*   */}
                        {/* handleScholarshipsPaymentDiscount  */}
                        {/*   */}
                        {/* remvoeScholarshipsPaymentDiscount  */}
                        {specialNeedsBasedDiscount.value && (
                          <label
                            className="checkbox-items flex flex-cs mln4"
                            htmlFor={"gradeBasedPayment_" + index}
                            onClick={() => addSpcialNeedPaymentDiscount(index)}
                          >
                            {/* <Add /> */}
                            <AddMoreButton
                              index={index}
                              handleLinks={handleAddCustomPaymentDiscount}
                            />
                            <>
                              <span className="mlnp9">
                                &nbsp;&nbsp;<p>Add Types</p>
                              </span>
                            </>
                          </label>
                        )}
                      </div>
                      <></>
                    </div>

                    {/* SPECIAL NEED INPUT BOX AND ITS REMOVE BUTTON GOES HERE */}
                    {specialNeedsBasedDiscount.specialNeeds.map(
                      (specialNeed, specialNeedIndex) => (
                        <div key={specialNeedIndex} className="flex-cs mtn5">
                          <div className="flex-c inputs gapp5">
                            <div className="flex-cs gapp5">
                              <input
                                type="text"
                                name="specialNeedsBasedDiscount"
                                id={"specialNeedPaymentDiscount"}
                                value={specialNeed.specialNeedName}
                                onChange={(event) =>
                                  handleSpcialNeedPaymentDiscount(
                                    event,
                                    index,
                                    specialNeedIndex
                                  )
                                }
                                tabIndex={9}
                              />

                              <RemoveLinksButton
                                remove={remvoeSpcialNeedPaymentDiscount}
                                index={index}
                                subIndex={specialNeedIndex}
                              />
                              {/* <Remove
                                action={remvoeSpcialNeedPaymentDiscount}
                                index={index}
                                subIndex={specialNeedIndex}
                              /> */}
                            </div>
                            <div className="mb5px"></div>
                          </div>
                        </div>
                      )
                    )}

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
                            onClick={() =>
                              addScholarshipsPaymentDiscount(index)
                            }
                          >
                            <AddMoreButton
                              index={index}
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

                    {scholarshipBasedDiscount.scholarships.map(
                      (scholarship, scholarshipIndex) => (
                        <div key={scholarshipIndex} className="flex-cs mtn5">
                          <div className="flex-c inputs gapp5">
                            <div className="flex-cs gapp5">
                              <input
                                type="text"
                                name="specialNeedsBasedDiscount"
                                id={"specialNeedPaymentDiscount"}
                                value={scholarship.scholarshipName}
                                onChange={(event) =>
                                  handleScholarshipsPaymentDiscount(
                                    event,
                                    index,
                                    scholarshipIndex
                                  )
                                }
                                tabIndex={9}
                              />

                              <RemoveLinksButton
                                remove={remvoeScholarshipsPaymentDiscount}
                                index={index}
                                subIndex={scholarshipIndex}
                              />
                              {/* <Remove
                                action={remvoeScholarshipsPaymentDiscount}
                                index={index}
                                subIndex={scholarshipIndex}
                              /> */}
                            </div>
                            <div className="mb5px"></div>
                          </div>
                        </div>
                      )
                    )}

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
