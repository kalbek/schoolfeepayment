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
  handleNewSubPeriods,
  removePeriods,
  handleAnnualPeriodDuration,
  handleUpdatePerods,
  handleNewTopLevelPeriod,
  handleTopLevelPeriod,
  resetAllPeriods,
}) => {
  const topLevelPeirod = useSelector((state) => state.periods.topLevelPeriod);
  const lastSubperiod =
    topLevelPeirod[topLevelPeirod.length - 1].subPeriods[
      topLevelPeirod[topLevelPeirod.length - 1].subPeriods.length - 1
    ];

  return (
    <>
      {/* {console.log(topLevelPeirod)} */}

      <div className="flex-cr field-group-container -mt-3">
        <section>
          <div>
            <div className="flex-c">
              <div className="pr1rem flex-end">
                <div className="flex-left">
                  {topLevelPeirod.length > 1 && (
                    <div className="mb-p5">
                      <TopLevelAnnualPeriods
                        handleUpdatePerods={handleUpdatePerods}
                        handleTopLevelPeriod={handleTopLevelPeriod}
                      />
                    </div>
                  )}
                  <div className="flex">
                    <AnnualPeriods
                      handleUpdatePerods={handleUpdatePerods}
                      handleNewTopLevelPeriod={handleNewTopLevelPeriod}
                    />
                    <Shifts handleUpdatePerods={handleUpdatePerods} />
                  </div>
                </div>
              </div>
            </div>
            <>
              {topLevelPeirod.length > 1 ? (
                <RemoveLinksButton
                  remove={resetAllPeriods}
                  label={
                    "Reset " +
                    topLevelPeirod[topLevelPeirod.length - 1].periodTypeName +
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
                {topLevelPeirod.length > 0 && topLevelPeirod.length < 20 ? (
                  <AddMoreButton
                    label={
                      lastSubperiod.periodTypeName === "Custom"
                        ? "Add One More "
                        : "Add One More " + lastSubperiod.periodTypeName
                    }
                    handleLinks={handleNewSubPeriods}
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
          <div className="checkbox-inputs input__group flex-cs checkbox-group">
            {/* Checkbox for period based payment */}
            <label
              className="checkbox-items flex flex-cs"
              htmlFor={"newToplevelAnnualPeriod"}
            >
              <input
                type="checkbox"
                name="topLevelAnnualPeriod"
                id={"newToplevelAnnualPeriod"}
                tabIndex={9}
                // value={topLevelPeirod[topLevelPeirod.length - 1].hasRegularShift}
                // checked={topLevelPeirod[topLevelPeirod.length - 1].hasRegularShift}
                onChange={(event) => handleNewTopLevelPeriod(event)}
              />
              <>
                <span>
                  &nbsp; <p>Add top-level period</p>
                </span>
              </>
            </label>
          </div>
        </div>
      </div>
    </>
  );
};

export default DynamicPeriods;
