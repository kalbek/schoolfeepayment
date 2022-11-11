import { useSelector } from "react-redux";
const AnnualPeriod = ({
  handleAdvancedPaymentBaseAnnualPeriodCheckboxSelection,
  handleAdvancedPaymentBaseAnnualPeriodTypeRadioSelection,
  handleAdvancedPaymentBaseEducationalDivisionCheckboxSelection,
  index,
}) => {
  const periodState = useSelector((state) => state.periods.topLevelPeriod);
  const paymentState = useSelector((state) => state.payments.paymentState);
  return (
    <div className="field-subgroup-container">
      <section className="flex-c flex-start">
        <div>
          <label className="flex  -mb-1">
            <input
              type="checkbox"
              name="periodPaymentBase"
              id={"advancedDivisionBase" + index}
              tabIndex={9}
              value={
                paymentState[index].paymentBase
                  .advancedEducationalDivisionCheckbox
              }
              checked={
                paymentState[index].paymentBase
                  .advancedEducationalDivisionCheckbox
              }
              onChange={(event) =>
                handleAdvancedPaymentBaseEducationalDivisionCheckboxSelection(
                  event,
                  index
                )
              }
            />
            <span>
              &nbsp; <p>Division Based</p>
            </span>
          </label>
          <label className="-ml-p3 flex" htmlFor={"advancedAnnualBase" + index}>
            <input
              type="checkbox"
              name="periodPaymentBase"
              tabIndex={9}
              id={"advancedAnnualBase" + index}
              value={
                paymentState[index].paymentBase.advancedAnnualPeriodCheckbox
              }
              checked={
                paymentState[index].paymentBase.advancedAnnualPeriodCheckbox
              }
              onChange={(event) =>
                handleAdvancedPaymentBaseAnnualPeriodCheckboxSelection(
                  event,
                  index
                )
              }
            />
            <>
              <span>
                &nbsp; <p>Annual Period</p>
              </span>
            </>
          </label>

          <></>
        </div>
        {/* TOP LEVEL PERIOD */}
        <div>
          {/* {periodState[index].value && ( */}
          {periodState[0].value && (
            <div className="flex-cs ml-1  -mt-1p1">
              <label
                className={
                  !paymentState[index].paymentBase.advancedAnnualPeriodCheckbox
                    ? "inactive-label checkbox-items flex flex-cs"
                    : "checkbox-items flex flex-cs"
                }
                // htmlFor={"standard" + index}
              >
                <input
                  type="radio"
                  id={"period" + index}
                  disabled={
                    !paymentState[index].paymentBase
                      .advancedAnnualPeriodCheckbox
                  }
                  checked={
                    paymentState[index].paymentBase.advancedAnnualPeriodType ===
                    "period" + index
                  }
                  onChange={(event) =>
                    handleAdvancedPaymentBaseAnnualPeriodTypeRadioSelection(
                      event,
                      index
                    )
                  }
                  tabIndex={9}
                />
                <span
                  className={
                    !paymentState[index].paymentBase
                      .advancedAnnualPeriodCheckbox
                      ? "inactive-label"
                      : ""
                  }
                >
                  &nbsp; <p>{periodState[0].periodTypeName} </p>
                </span>
              </label>
              <></>
            </div>
          )}
          {/* TOP LEVEL SUBPERIOD */}
          <div className="flex-cs  -mt-1p3">
            {/* TOP LEVEL PERIOD */}
            <label
              className="checkbox-items ml-1   flex flex-cs"
              // htmlFor={"advanced" + index}
            >
              <input
                type="radio"
                id={"subperiod" + index}
                disabled={
                  !paymentState[index].paymentBase.advancedAnnualPeriodCheckbox
                }
                checked={
                  paymentState[index].paymentBase.advancedAnnualPeriodType ===
                  "subperiod" + index
                }
                onChange={(event) =>
                  handleAdvancedPaymentBaseAnnualPeriodTypeRadioSelection(
                    event,
                    index
                  )
                }
                tabIndex={9}
              />
              <span
                className={
                  !paymentState[index].paymentBase.advancedAnnualPeriodCheckbox
                    ? "inactive-label"
                    : ""
                }
              >
                &nbsp; <p>{periodState[0].subperiodTypeName} </p>
              </span>
            </label>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AnnualPeriod;
