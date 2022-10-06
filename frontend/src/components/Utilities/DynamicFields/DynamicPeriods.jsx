import RemoveButton from "../Buttons/RemoveButton";
import RemoveLinksButton from "../Buttons/RemoveLinksButton";
import "../../../Styles/dynamicButtonsStyle.css";
import AddMoreButton from "../Buttons/AddMoreButton";
import { useSelector } from "react-redux";
import SmallCard from "../Cards/SmallCard";
import Preview from "../Buttons/Preview";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { parse } from "date-fns";

import TopLevelAnnualPeriods from "./AnnualPeriods/TopLevelAnnualPeriods";
import AnnualPeriods from "./AnnualPeriods/AnnualPeriods";
import Shifts from "./AnnualPeriods/Shifts";
import DateRanges from "./AnnualPeriods/DateRanges";

const DynamicPeriods = ({
  formData,
  setFormData,
  handleNewPeriods,
  removePeriods,
  handleAnnualPeriodDuration,
  handleUpdatePerods,
  handleTopLevelPeriod,
  resetAllPeriods,
}) => {
  const formDataPeriod = [...formData.annualPeriod];
  const periodState = useSelector((state) => state.periods.annualPeriodState);
  periodState.map(periods => {
    console.log(periods.topLevelPeriod)

  })
  return (
    <>
      {/* {console.log(periodState)} */}

      <div className="flex-cr field-group-container -mt-3">
        <section>
          <div>
            <div className="flex-c">
              <div className="pr1rem flex-end">
                <div className="flex-left">
                  <div className="mb-p5">
                    <TopLevelAnnualPeriods
                      handleUpdatePerods={handleUpdatePerods}
                      handleTopLevelPeriod={handleTopLevelPeriod}
                    />
                  </div>

                  <div className="flex">
                    <AnnualPeriods
                      handleUpdatePerods={handleUpdatePerods}
                      handleTopLevelPeriod={handleTopLevelPeriod}
                    />
                    <Shifts handleUpdatePerods={handleUpdatePerods} />
                  </div>
                </div>
              </div>
            </div>
            <>
              {periodState.length > 1 ? (
                <RemoveLinksButton
                  remove={resetAllPeriods}
                  label={
                    "Reset " +
                    periodState[periodState.length - 1].periodTypeName +
                    "s"
                  }
                />
              ) : (
                <></>
              )}
            </>
            <DateRanges
              handleUpdatePerods={handleUpdatePerods}
              handleAnnualPeriodDuration={handleAnnualPeriodDuration}
              removePeriods={removePeriods}
            />
            <div className="flex-start mln3">
              <div>
                {periodState.length > 0 && periodState.length < 20 ? (
                  <AddMoreButton
                    label={
                      periodState[periodState.length - 1].periodTypeName ===
                      "Custom"
                        ? "Add One More "
                        : "Add One More " +
                          periodState[periodState.length - 1].periodTypeName
                    }
                    handleLinks={handleNewPeriods}
                  />
                ) : (
                  ""
                )}
              </div>
            </div>
          </div>

          {/* <div className="flex-c">
          <SmallCard formData={formData} />
          <Preview />
        </div> */}
        </section>
        <div>
          <AddMoreButton
            label={"Add top-level period"}
            handleLinks={handleTopLevelPeriod}
            // index={index}
          />
        </div>
      </div>
    </>
  );
};

export default DynamicPeriods;
