import AddMoreButton from "../../../Buttons/AddMoreButton";
import RemoveLinksButton from "../../../Buttons/RemoveLinksButton";

const AdvancedPaymentBaseCopy = ({
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
        <div className="checkbox-inputs input__group field-subgroup-container">
          <div className="flex-cs checkbox-group">
            <div className="flex-left">
              <div className="flex block checkbox-group">
                <div>
                  <>
                    <>
                      <div className="flex-cs mtn5">
                        <div className="flex-cs gap2vw">
                          <label
                            className="flex flex-cs"
                            htmlFor={"periodBasedPayment" + index}
                          >
                            <input
                              type="checkbox"
                              name="periodPaymentBase"
                              id={"periodBasedPayment" + index}
                              tabIndex={9}
                              value={periodPaymentBase}
                              checked={periodPaymentBase}
                              onChange={(event) =>
                                handlePaymentBase(event, index)
                              }
                            />
                            <>
                              <span>
                                &nbsp; <p>Annual Period (Adv)</p>
                              </span>
                            </>
                          </label>
                        </div>
                        <></>
                      </div>
                      {/* TOP LEVEL PERIOD */}
                      <div className="flex-cs mtn5">
                        <div className="flex-cs gap2vw">
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
                              &nbsp; <p>Top Level Peirod (Adv) </p>
                            </span>
                          </label>
                        </div>
                        <></>
                      </div>
                      {/* TOP LEVEL SUBPERIOD */}
                      <div className="flex-cs mtn5">
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
                              &nbsp; <p>Sub Period (Adv) </p>
                            </span>
                          </label>
                        </div>
                        <></>
                      </div>
                      ------------------------------------------
                      <div className="flex-cs mtn5">
                        <div className="flex-cs gap2vw">
                          <label
                            className="flex flex-cs"
                            htmlFor={"periodBasedPayment" + index}
                          >
                            <input
                              type="checkbox"
                              name="periodPaymentBase"
                              id={"periodBasedPayment" + index}
                              tabIndex={9}
                              value={periodPaymentBase}
                              checked={periodPaymentBase}
                              onChange={(event) =>
                                handlePaymentBase(event, index)
                              }
                            />
                            <>
                              <span>
                                &nbsp; <p>Major Division</p>
                              </span>
                            </>
                          </label>
                        </div>
                        <></>
                      </div>
                      <div className="flex-cs mtn5">
                        <div className="flex-cs gap2vw">
                          <label
                            className="flex flex-cs"
                            htmlFor={"periodBasedPayment" + index}
                          >
                            <input
                              type="checkbox"
                              name="periodPaymentBase"
                              id={"periodBasedPayment" + index}
                              tabIndex={9}
                              value={periodPaymentBase}
                              checked={periodPaymentBase}
                              onChange={(event) =>
                                handlePaymentBase(event, index)
                              }
                            />
                            <>
                              <span>
                                &nbsp; <p>Sub-division</p>
                              </span>
                            </>
                          </label>
                        </div>
                        <></>
                      </div>
                      {/* SPECIAL NEED INPUT BOX AND ITS REMOVE BUTTON GOES HERE */}
                      {/*Checkbox for scholarships based payment */}
                      <div className="flex-cs mtn5">
                        <div className="flex gap2p5vw">
                          <label
                            className="checkbox-items flex flex-cs"
                            htmlFor={"scholarshipBasedPaymentDiscount" + index}
                          >
                            <input
                              type="checkbox"
                              name="scholarshipBasedDiscount"
                              id={"scholarshipBasedPaymentDiscount" + index}
                              // value={scholarshipBasedDiscount}
                              // checked={scholarshipBasedDiscount}
                              // onChange={(e) =>
                              //   handlePaymentDiscountTypesSelection(e, index)
                              // }
                              tabIndex={9}
                            />
                            <>
                              <span>
                                &nbsp; <p>Credit Hours</p>
                              </span>
                            </>
                          </label>
                          {true && (
                            <label
                              className="checkbox-items flex flex-cs mln4"
                              htmlFor={"gradeBasedPayment_" + index}
                              // onClick={() =>
                              //   addScholarshipsPaymentDiscount(index)
                              // }
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
                      <div className="flex-cs mtn5">
                        <div className="flex-c inputs gapp5">
                          <div className="flex-cs gapp5">
                            <input
                              type="text"
                              name="specialNeedsBasedDiscount"
                              id={"specialNeedPaymentDiscount"}
                              placeholder="Cr. Hr."
                              // value={scholarship.scholarshipName}
                              // onChange={(event) =>
                              //   handleScholarshipsPaymentDiscount(
                              //     event,
                              //     index,
                              //     scholarshipIndex
                              //   )
                              // }
                              tabIndex={9}
                            />
                            <RemoveLinksButton
                            // remove={remvoeScholarshipsPaymentDiscount}
                            // index={index}
                            // subIndex={scholarshipIndex}
                            />
                          </div>
                          <div className="mb5px"></div>
                        </div>
                      </div>
                      <div className="flex-cs mtn5">
                        <div className="flex gap2p5vw">
                          <label
                            className="checkbox-items flex flex-cs"
                            htmlFor={"scholarshipBasedPaymentDiscount" + index}
                          >
                            <input
                              type="checkbox"
                              name="scholarshipBasedDiscount"
                              id={"scholarshipBasedPaymentDiscount" + index}
                              // value={scholarshipBasedDiscount}
                              // checked={scholarshipBasedDiscount}
                              // onChange={(e) =>
                              //   handlePaymentDiscountTypesSelection(e, index)
                              // }
                              tabIndex={9}
                            />
                            <>
                              <span>
                                &nbsp; <p>Course Type</p>
                              </span>
                            </>
                          </label>
                          {true && (
                            <label
                              className="checkbox-items flex flex-cs mln4"
                              htmlFor={"gradeBasedPayment_" + index}
                              // onClick={() =>
                              //   addScholarshipsPaymentDiscount(index)
                              // }
                            >
                              <AddMoreButton />
                              <>
                                <span className="mlnp9">
                                  &nbsp;&nbsp; <p>Add Course</p>
                                </span>
                              </>
                            </label>
                          )}
                        </div>
                        <></>
                      </div>
                      <div className="flex-cs mtn5">
                        <div className="flex-c inputs gapp5">
                          <div className="flex-cs gapp5">
                            <input
                              type="text"
                              name="specialNeedsBasedDiscount"
                              id={"specialNeedPaymentDiscount"}
                              placeholder="Course Name"
                              // value={scholarship.scholarshipName}
                              // onChange={(event) =>
                              //   handleScholarshipsPaymentDiscount(
                              //     event,
                              //     index,
                              //     scholarshipIndex
                              //   )
                              // }
                              tabIndex={9}
                            />
                            <RemoveLinksButton
                            // remove={remvoeScholarshipsPaymentDiscount}
                            // index={index}
                            // subIndex={scholarshipIndex}
                            />
                          </div>
                          <div className="mb5px"></div>
                        </div>
                      </div>
                    </>
                  </>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AdvancedPaymentBaseCopy;
