import AddMoreButton from "../../Buttons/AddMoreButton";
import RemoveLinksButton from "../../Buttons/RemoveLinksButton";
import HideOrshow from "../../Buttons/hideOrshow";
import Radio from "../../../InputControls/Radio";
import { useSelector } from "react-redux";
const PaymentDiscounts = ({
  handlePaymentDiscountTypesSelection,

  handleAddCustomPaymentDiscount,
  singlePayment,
  index,
  addSpcialNeedPaymentDiscount,
  addScholarshipsPaymentDiscount,
  handleGenderTypesForDiscount,
  addCustomPaymentDiscount,
  handleSpcialNeedPaymentDiscountNames,
  handleScholarshipsPaymentDiscount,
  handleCustomDiscount,
  remvoeSpcialNeedPaymentDiscount,
  remvoeScholarshipsPaymentDiscount,
  remvoeCustomPaymentDiscount,
  handlePayementDiscountHideOrShow,
}) => {
  const genderBasedDiscount =
    singlePayment.discountParameters.genderBasedDiscount.value;
  const genderType =
    singlePayment.discountParameters.genderBasedDiscount.genderType;
  const specialNeedsBasedDiscount =
    singlePayment.discountParameters.specialNeedsBasedDiscount.value;
  const scholarshipBasedDiscount =
    singlePayment.discountParameters.scholarshipBasedDiscount.value;

  const customDiscount = singlePayment.discountParameters.customPaymentDiscount;
  const paymentState = useSelector((state) => state.payments);

  const gender =
    paymentState.paymentState[index].discountParameters.genderBasedDiscount
      .genderType;

  return (
    <>
      <div>
        <div className="checkbox-inputs input__group field-subgroup-container">
          <div className="flex-cs checkbox-group">
            <div className="flex-left mt-p6">
              <label htmlFor="" className="mt-1">
                <div
                  onClick={() => handlePayementDiscountHideOrShow(index)}
                  className="flex-cs mt-p2"
                >
                  <h3>Discounts </h3>
                  <>
                    <div className="ml-40">
                      <label className="flex">
                        <HideOrshow
                          toogleValue={singlePayment.discountParameters.value}
                        />
                        &nbsp;
                        {singlePayment.discountParameters.value
                          ? "Hide"
                          : "Show"}
                      </label>
                    </div>
                    &nbsp;
                  </>
                </div>
              </label>
              {/*Checkbox for gender based payment */}
              <div className="flex block checkbox-group">
                <section className="">
                  {singlePayment.discountParameters.value ? (
                    <>
                      <div>
                        <div className="flex-cs">
                          <div className="flex gap2vw ">
                            <label
                              className="checkbox-items flex flex-left"
                              htmlFor={"genderBasedDiscount" + index}
                            >
                              <input
                                type="checkbox"
                                name="genderBasedDiscount"
                                id={"genderBasedDiscount" + index}
                                value={genderBasedDiscount}
                                checked={genderBasedDiscount}
                                onChange={(event) =>
                                  handlePaymentDiscountTypesSelection(
                                    event,
                                    index
                                  )
                                }
                                tabIndex={9}
                              />
                              <>
                                <span>
                                  &nbsp; <p>Gender Based</p>
                                </span>
                              </>
                            </label>
                            {/* If gender based payment discount is checked display for gender types */}
                            {genderBasedDiscount && (
                              <div className="flex-cs gapp5 mlp3">
                                {/* {index} */}
                                <Radio
                                  label="M"
                                  id={"male" + index}
                                  className={"flex-cs"}
                                  value={genderType}
                                  checked={genderType === "male" + index}
                                  onChange={(event) =>
                                    handleGenderTypesForDiscount(event, index)
                                  }
                                />
                                <Radio
                                  label="F"
                                  className={"flex-cs"}
                                  value={genderType}
                                  checked={genderType === "female" + index}
                                  id={"female" + index}
                                  onChange={(event) =>
                                    handleGenderTypesForDiscount(event, index)
                                  }
                                />
                              </div>
                            )}
                          </div>
                          <></>
                        </div>

                        {/* CHECKBOX FOR SPECIAL NEED DISCOUNT INPUTS */}
                        <div className="flex-cs mtn5">
                          <div className="flex-cs gap2vw">
                            <label
                              className="checkbox-items flex flex-cs"
                              htmlFor={"specialNeedPaymentDiscount" + index}
                            >
                              <input
                                type="checkbox"
                                name="specialNeedsBasedDiscount"
                                id={"specialNeedPaymentDiscount" + index}
                                value={specialNeedsBasedDiscount}
                                checked={specialNeedsBasedDiscount}
                                onChange={(e) =>
                                  handlePaymentDiscountTypesSelection(e, index)
                                }
                                tabIndex={9}
                              />
                              <>
                                <span>
                                  &nbsp; <p>Special Needs</p>
                                </span>
                              </>
                            </label>
                            {specialNeedsBasedDiscount && (
                              <label
                                className="checkbox-items flex flex-cs mln4"
                                htmlFor={"gradeBasedPayment_" + index}
                                onClick={() =>
                                  addSpcialNeedPaymentDiscount(index)
                                }
                              >
                                <AddMoreButton />
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
                        {singlePayment.discountParameters.specialNeedsBasedDiscount.specialNeeds.map(
                          (specialNeed, specialNeedIndex) => (
                            <div
                              key={specialNeedIndex}
                              className="flex-cs mtn5"
                            >
                              <div className="flex-c inputs gapp5">
                                <div className="flex-cs gapp5">
                                  <input
                                    type="text"
                                    name="specialNeedsBasedDiscount"
                                    id={"specialNeedPaymentDiscount"}
                                    placeholder="Special Need type"
                                    value={specialNeed.specialNeedName}
                                    onChange={(event) =>
                                      handleSpcialNeedPaymentDiscountNames(
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
                              htmlFor={
                                "scholarshipBasedPaymentDiscount" + index
                              }
                            >
                              <input
                                type="checkbox"
                                name="scholarshipBasedDiscount"
                                id={"scholarshipBasedPaymentDiscount" + index}
                                value={scholarshipBasedDiscount}
                                checked={scholarshipBasedDiscount}
                                onChange={(e) =>
                                  handlePaymentDiscountTypesSelection(e, index)
                                }
                                tabIndex={9}
                              />
                              <>
                                <span>
                                  &nbsp; <p>Scholarships</p>
                                </span>
                              </>
                            </label>
                            {scholarshipBasedDiscount && (
                              <label
                                className="checkbox-items flex flex-cs mln4"
                                htmlFor={"gradeBasedPayment_" + index}
                                onClick={() =>
                                  addScholarshipsPaymentDiscount(index)
                                }
                              >
                                <AddMoreButton />
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
                        {singlePayment.discountParameters.scholarshipBasedDiscount.scholarships.map(
                          (scholarship, scholarshipIndex) => (
                            <div
                              key={scholarshipIndex}
                              className="flex-cs mtn5"
                            >
                              <div className="flex-c inputs gapp5">
                                <div className="flex-cs gapp5">
                                  <input
                                    type="text"
                                    name="specialNeedsBasedDiscount"
                                    id={"specialNeedPaymentDiscount"}
                                    placeholder="Scholarship type"
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
                              onClick={() => addCustomPaymentDiscount(index)}
                            >
                              <AddMoreButton />
                              <>
                                <span className="mlnp9">
                                  &nbsp;&nbsp; <p>Custom Discount Parameters</p>
                                </span>
                              </>
                            </label>
                          </div>
                          <></>
                        </div>

                        {customDiscount.customDiscounts.map(
                          (discount, discountIndex) => (
                            <div key={discountIndex} className="flex-cs mtn5">
                              <div className="flex-c inputs gapp5">
                                <div className="flex-cs gapp5">
                                  <input
                                    type="text"
                                    name="customDiscount"
                                    id={"customDiscount"}
                                    placeholder="Discount name"
                                    value={discount.discountName}
                                    onChange={(event) =>
                                      handleCustomDiscount(
                                        event,
                                        index,
                                        discountIndex
                                      )
                                    }
                                    tabIndex={9}
                                  />

                                  <RemoveLinksButton
                                    remove={remvoeCustomPaymentDiscount}
                                    index={index}
                                    subIndex={discountIndex}
                                  />
                                </div>
                                <div className="mb5px"></div>
                              </div>
                            </div>
                          )
                        )}
                      </div>
                      <></>
                    </>
                  ) : (
                    <>
                      <label
                        onClick={() => handlePayementDiscountHideOrShow(index)}
                        className=" flex-ccc w-15v h-2"
                        htmlFor=""
                      >
                        Hidden
                      </label>
                    </>
                  )}
                </section>
              </div>
              {/*Checkbox for custom discount parameters payment */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PaymentDiscounts;
