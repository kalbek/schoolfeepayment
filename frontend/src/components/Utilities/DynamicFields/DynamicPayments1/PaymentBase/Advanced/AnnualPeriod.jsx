import { useSelector } from "react-redux";
const AnnualPeriod = ({
  handleAdvancedPaymentBaseAnnualPeriodCheckboxSelection,
  handleAdvancedPaymentBaseAnnualPeriodTypeRadioSelection,
  index,
}) => {
  const periodState = useSelector((state) => state.periods.topLevelPeriod);
  const paymentState = useSelector((state) => state.payments.paymentState);
  return (
    <>
      <div className="flex-cs mtn5">
        <label
          className="flex flex-cs -mb-p5"
          htmlFor={"advancedAnnualBase" + index}
        >
          <input
            type="checkbox"
            name="periodPaymentBase"
            tabIndex={9}
            id={"advancedAnnualBase" + index}
            value={paymentState[index].paymentBase.advancedAnnualPeriodCheckbox}
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
      <div className="ml-1">
        {/* {periodState[index].value && ( */}
        {true && (
          <div className="flex-cs mtn5">
            <label
              className="checkbox-items flex flex-cs -mb-p5"
              // htmlFor={"standard" + index}
            >
              <input
                type="radio"
                id={"period" + index}
                //   value={paymentBaseType}
                //   checked={paymentBaseType === "standard" + index}
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
              <span>
                &nbsp; <p>{periodState[index].periodTypeName}</p>
              </span>
            </label>
            <></>
          </div>
        )}
        {/* TOP LEVEL SUBPERIOD */}
        <div className="flex-cs mtn5">
          {/* TOP LEVEL PERIOD */}
          <label
            className="checkbox-items flex flex-cs"
            // htmlFor={"advanced" + index}
          >
            <input
              type="radio"
              id={"subperiod" + index}
              //   value={paymentBaseType}
              //   checked={paymentBaseType === "advanced" + index}
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
            <span>
              &nbsp; <p>{periodState[index].subperiodTypeName} </p>
            </span>
          </label>
        </div>
      </div>
    </>
  );
};

export default AnnualPeriod;
