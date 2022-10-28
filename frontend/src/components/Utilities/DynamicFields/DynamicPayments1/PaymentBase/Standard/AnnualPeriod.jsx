import { useSelector } from "react-redux";
const AnnualPeriod = ({
  handleStandardPaymentBaseAnnualPeriodTypeRadioSelection,
  handleStandardPaymentBaseAnnualPeriodCheckboxSelection,
  handlePaymentBaseTypeSelection,
  index,
}) => {
  const periodState = useSelector((state) => state.periods.topLevelPeriod);
  const paymentState = useSelector((state) => state.payments.paymentState);
 

  return (
    <>
      <div className="flex-cs mtn5">
        <label className="flex flex-cs -mb-p5" htmlFor={"standardAnnualBase" + index}>
          <input
            type="checkbox"
            name="standardAnnualBase"
            tabIndex={9}
            id={"paymentState" + index}
            value={paymentState[index].paymentBase.standardAnnualPeriodCheckbox}
            checked={paymentState[index].paymentBase.standardAnnualPeriodCheckbox}
            onChange={(event) =>
              handleStandardPaymentBaseAnnualPeriodCheckboxSelection(
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

      <div className="ml-1">
        {/* TOP LEVEL PERIOD */}
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
                // value={paymentState[index].paymentBase.standardAnnualPeriodType}
                checked={
                  paymentState[index].paymentBase.standardAnnualPeriodType ===
                  "period" + index
                }
                onChange={(event) =>
                  handleStandardPaymentBaseAnnualPeriodTypeRadioSelection(
                    event,
                    index
                  )
                }
                tabIndex={9}
              />
              <span>
                &nbsp; <p>{periodState[index].periodTypeName} </p>
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
              // value={paymentState[index].paymentBase.standardAnnualPeriodType}
              checked={
                paymentState[index].paymentBase.standardAnnualPeriodType ===
                "subperiod" + index
              }
              onChange={(event) =>
                handleStandardPaymentBaseAnnualPeriodTypeRadioSelection(
                  event,
                  index
                )
              }
              tabIndex={9}
            />
            <span>
              &nbsp; <p>{periodState[index].subperiodTypeName}</p>
            </span>
          </label>
        </div>
      </div>
    </>
  );
};

export default AnnualPeriod;
