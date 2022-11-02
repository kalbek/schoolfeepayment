import { useSelector } from "react-redux";

const EducationalDivision = ({
  handleStandardPaymentBaseEducationalDivisionCheckboxSelection,
  handleStandardPaymentBaseEducationalDivisionTypeRadioSelection,
  index,
}) => {
  const educationalDivisionState = useSelector(
    (state) => state.educationalDivisions.educationalDivision
  );
  const paymentState = useSelector((state) => state.payments.paymentState);

  return (
    <div className="field-subgroup-containers">
      <section>
        <div className="flex-cs">
          <label className="flex -mb-1">
            <input
              type="checkbox"
              name="periodPaymentBase"
              id={"standarddivision" + index}
              checked={
                paymentState[index].paymentBase
                  .standardEducationalDivisionCheckbox
              }
              value={
                paymentState[index].paymentBase
                  .standardEducationalDivisionCheckbox
              }
              onChange={(event) =>
                handleStandardPaymentBaseEducationalDivisionCheckboxSelection(
                  event,
                  index
                )
              }
            />
            <>
              <span>
                &nbsp; <p>Educational Division</p>
              </span>
            </>
          </label>
          <></>
        </div>
        <div>
          <div className="  flex-cs">
            <label className="flex -mb-p5 ">
              <input
                type="radio"
                disabled={
                  !paymentState[index].paymentBase
                    .standardEducationalDivisionCheckbox
                }
                id={"division" + index}
                checked={
                  paymentState[index].paymentBase
                    .standardEducationalDivisionType ===
                  "division" + index
                }
                onChange={(event) =>
                  handleStandardPaymentBaseEducationalDivisionTypeRadioSelection(
                    event,
                    index
                  )
                }
                tabIndex={9}
              />
              <span
                className={
                  !paymentState[index].paymentBase
                    .standardEducationalDivisionCheckbox
                    ? "inactive-label"
                    : ""
                }
              >
                &nbsp; <p>{educationalDivisionState[0].divisionType} </p>
              </span>
            </label>
          </div>
          <div className="flex-cs mtn5">
            {/* SUB DIVISION*/}
            <label className=" flex">
              <input
                type="radio"
                id={"subdivision" + index}
                disabled={
                  !paymentState[index].paymentBase
                    .standardEducationalDivisionCheckbox
                }
                checked={
                  paymentState[index].paymentBase
                    .standardEducationalDivisionType ===
                  "subdivision" + index
                }
                onChange={(event) =>
                  handleStandardPaymentBaseEducationalDivisionTypeRadioSelection(
                    event,
                    index
                  )
                }
                tabIndex={9}
              />
              <span
                className={
                  !paymentState[index].paymentBase
                    .standardEducationalDivisionCheckbox
                    ? "inactive-label"
                    : ""
                }
              >
                &nbsp; <p>{educationalDivisionState[0].subDivisionType}</p>
              </span>
            </label>
          </div>
        </div>
      </section>
    </div>
  );
};

export default EducationalDivision;
