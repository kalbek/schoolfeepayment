import RemoveButton from "../Buttons/RemoveButton";
import RemoveLinksButton from "../Buttons/RemoveLinksButton";
import "../../../Styles/dynamicButtonsStyle.css";
import AddMoreButton from "../Buttons/AddMoreButton";
import DeleteButton from "../Buttons/DeleteButton";
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
  handleNewSubPeriods,
  removeSubperiods,
  handleAnnualPeriodDuration,
  handleTopLevelPeriodUpdate,
  hadleTopLevelPeriodName,
  handleTopLevelPeriodValue,
  handleUpdateCustomSubPeriod,
  removeToplevelPeriod,
  handleUpdatePerods,
  handlePeriodShifts,
  handleUpdateSubperiods,
  handleNewTopLevelPeriod,
  includeTopLevelPeriod,
}) => {
  const topLevelPeirod = useSelector((state) => state.periods.topLevelPeriod);
  const lastToplevelPeriod = topLevelPeirod[topLevelPeirod.length - 1];
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
                checked={topLevelPeirod[0].value}
                // checked={false}
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
                    {lastToplevelPeriod.value && (
                      <div className="mb-p5">
                        <TopLevelAnnualPeriods
                          handleTopLevelPeriodValue={handleTopLevelPeriodValue}
                          handleTopLevelPeriodUpdate={
                            handleTopLevelPeriodUpdate
                          }
                          hadleTopLevelPeriodName={hadleTopLevelPeriodName}
                          removeToplevelPeriod={removeToplevelPeriod}
                          index={index}
                        />
                      </div>
                    )}
                    <div className="flex-start">
                      <AnnualSubPeriods
                        handleUpdateSubperiods={handleUpdateSubperiods}
                        handleUpdateCustomSubPeriod={
                          handleUpdateCustomSubPeriod
                        }
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
                  handleUpdateSubperiods={handleUpdateSubperiods}
                  handleAnnualPeriodDuration={handleAnnualPeriodDuration}
                  removeSubperiods={removeSubperiods}
                  index={index}
                />
              </div>
              <div className="flex-start mln3">
                <div>
                  {topLevelPeirod.length > 0 && topLevelPeirod.length < 20 ? (
                    <AddMoreButton
                      label={
                        period.subperiodTypeName === "Custom Period"
                          ? "Add one more "
                          : "Add one more " +
                            period.subperiodTypeName.charAt(0).toLowerCase() +
                            period.subperiodTypeName.slice(1)
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
                index={topLevelPeirod.length}
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
