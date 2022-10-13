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
import { useEffect } from "react";
import TopLevelAnnualPeriods from "./AnnualPeriods/TopLevelAnnualPeriods";
import AnnualSubPeriods from "./AnnualPeriods/AnnualSubPeriods";
import Shifts from "./AnnualPeriods/Shifts";
import DateRanges from "./AnnualPeriods/DateRanges";

const DynamicPeriods = ({
  formData,
  setFormData,
  handleNewSubPeriods,
  removePeriods,
  handleAnnualPeriodDuration,
  handleTopLevelPeriodUpdate,
  handleUpdatePerods,
  handlePeriodShifts,
  handleUpdateSubperiods,
  handleNewTopLevelPeriod,
  includeTopLevelPeriod,
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
      <div className="-mt-3">
        <div>
          <div className="checkbox-inputs input__group flex-cs checkbox-group ml-p3">
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
                onChange={includeTopLevelPeriod}
              />
              <>
                <span>
                  &nbsp; <p>Include a top-level period</p>
                </span>
              </>
            </label>
          </div>
        </div>
        {topLevelPeirod.map((period, index) => (
          <div
            key={index}
            className={
              topLevelPeirod[0].value
                ? "flex-cr field-group-container"
                : "flex-cr"
            }
          >
            <section>
              <div className="flex-c">
                <div className="pr1rem flex-end">
                  <div className="flex-left">
                    {topLevelPeirod[0].value && (
                      <div className="mb-p5">
                        <TopLevelAnnualPeriods
                          handleTopLevelPeriodUpdate={
                            handleTopLevelPeriodUpdate
                          }
                          index={index}
                        />
                      </div>
                    )}
                    <div className="flex">
                      <AnnualSubPeriods
                        handleUpdateSubperiods={handleUpdateSubperiods}
                        index={index}
                      />
                      <Shifts
                        handlePeriodShifts={handlePeriodShifts}
                        index={index}
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex-c -ml-p7">
                <DateRanges
                  handleUpdatePerods={handleUpdatePerods}
                  handleAnnualPeriodDuration={handleAnnualPeriodDuration}
                  removePeriods={removePeriods}
                  index={index}
                />
              </div>
              <div className="flex-start mln3">
                <div>
                  {topLevelPeirod.length > 0 && topLevelPeirod.length < 20 ? (
                    <AddMoreButton
                      label={
                        lastSubperiod.periodTypeName === "Custom Period"
                          ? "Add one more "
                          : "Add one more " +
                            lastSubperiod.periodTypeName
                              .charAt(0)
                              .toLowerCase() +
                            lastSubperiod.periodTypeName.slice(1)
                      }
                      handleLinks={handleNewSubPeriods}
                      index={index}
                    />
                  ) : (
                    ""
                  )}
                </div>
              </div>
            </section>
          </div>
          // topLevelPeirod[0].value
        ))}
        {/* Add top level period */}
        <div className="flex-ccc mln3">
          <div>
            {topLevelPeirod[0].value && (
              <AddMoreButton
                label={"Add new top-level period"}
                handleLinks={handleNewTopLevelPeriod}
              />
            )}
          </div>
        </div>
        {/* <div className="flex-c">
          <SmallCard formData={formData} />
          <Preview />
        </div> */}
      </div>
    </>
  );
};

export default DynamicPeriods;
