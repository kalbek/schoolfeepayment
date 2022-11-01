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
      <div>
        <label className="flex -mb-1" htmlFor={"paymentState" + index}>
          <input
            type="checkbox"
            name={"standardAnnualBase" + index}
            tabIndex={9}
            id={"paymentState" + index}
            value={paymentState[index].paymentBase.standardAnnualPeriodCheckbox}
            checked={
              paymentState[index].paymentBase.standardAnnualPeriodCheckbox
            }
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

      <div>
        {/* TOP LEVEL PERIOD */}
        {/* {periodState[index].value && ( */}
        {true && (
          <div className="flex-cs">
            <label
              className="checkbox-items flex flex-cs -mb-p5"
              // htmlFor={"standard" + index}
            >
              <input
                type="radio"
                id={"period" + index}
                disabled={
                  !paymentState[index].paymentBase.standardAnnualPeriodCheckbox
                }
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
              <span
                className={
                  !paymentState[index].paymentBase.standardAnnualPeriodCheckbox
                    ? "inactive-label"
                    : ""
                }
              >
                &nbsp; <p>{periodState[index].periodTypeName} </p>
              </span>
            </label>
            <></>
          </div>
        )}
        {/* TOP LEVEL SUBPERIOD */}
        <div className="flex-cs -mt-p5">
          {/* TOP LEVEL PERIOD */}
          <label
            className="checkbox-items flex flex-cs"
            // htmlFor={"advanced" + index}
          >
            <input
              type="radio"
              id={"subperiod" + index}
              disabled={
                !paymentState[index].paymentBase.standardAnnualPeriodCheckbox
              }
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
            <span
              className={
                !paymentState[index].paymentBase.standardAnnualPeriodCheckbox
                  ? "inactive-label"
                  : ""
              }
            >
              &nbsp; <p>{periodState[index].subperiodTypeName}</p>
            </span>
          </label>
        </div>
      </div>
    </>
  );
};

export default AnnualPeriod;
