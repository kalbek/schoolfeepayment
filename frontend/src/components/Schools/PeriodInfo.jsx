import DynamicPeriods from "../Utilities/DynamicFields/DynamicPeriods";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import {
  createSubPeriods,
  createTopLevelPeriods,
  includeTopLevelPeriods,
  resetToplevelPeriod,
  updateTopLevelAnnualPeriod,
  updateSubperiods,
  deleteToplevelPeriod,
  updateShifts,
  deletePeriods,
  resetPeriods,
} from "../../features/SchoolPeriods/annualPeriodSlice";

const PeriodInfo = ({ formData, setFormData }) => {
  const formDataPeriod = [...formData.annualPeriod];
  const dispatch = useDispatch();
  const topLevelPeirod = useSelector((state) => state.periods.topLevelPeriod);
  const lastToplevelPeriod = topLevelPeirod[topLevelPeirod.length - 1];
  const handleNewSubPeriods = (index) => {
    console.log("index is: " + index);
    topLevelPeirod.map((topLevelPeirod) => {
      const lastSubPeriod =
        topLevelPeirod.subPeriods[topLevelPeirod.subPeriods.length - 1];
      if (topLevelPeirod.id === index) {
        dispatch(
          createSubPeriods({
            periodIndex: index,
            subPeriod: {
              id: topLevelPeirod.subPeriods.length,
              periodTypeName: lastSubPeriod.periodTypeName,
              periodName: "",
              shiftName: lastSubPeriod.shiftName,
              periodStartDate: lastSubPeriod.periodEndDate,
              periodEndDate: new Date().toISOString(),
              hasRegularShift: true,
              hasExtensionShift: false,
              hasWeekendShift: false,
              hasCustomShift: false,
              customShiftName: "",
              periodToUpdate: "periodType",
            },
          })
        );
      }
    });
  };

  // Watch out for first top level value
  useEffect(() => {
    if (topLevelPeirod[0].value === false) {
      console.log("inside");
      dispatch(resetToplevelPeriod({ id: topLevelPeirod[0].id }));
      dispatch(
        updateTopLevelAnnualPeriod({
          periodIndex: 0,
          periodTypeName: "Quarter",
          hasCustomValue: false,
        })
      );
    }
    console.log("useEffect: "+ topLevelPeirod[0].value)

  },[topLevelPeirod[0].value])
  const includeTopLevelPeriod = () => {
    console.log("hey: " + topLevelPeirod[0].value);
    dispatch(
      includeTopLevelPeriods({ id: 0, value: !topLevelPeirod[0].value })
    );
    

    console.log("first is: " + topLevelPeirod[0].value);
  };

  function removeToplevelPeriod(index) {
    dispatch(deleteToplevelPeriod({ id: index }));
    // if (topLevelPeirod.length === 2) {
    //   console.log("hdflsdk");
    //   dispatch(includeTopLevelPeriods({ id: index, value: false }));
    // }
    console.log(topLevelPeirod.length);
  }

  const handleTopLevelPeriodUpdate = (event, index) => {
    const { id, name, value } = event.target;
    dispatch(
      updateTopLevelAnnualPeriod({
        periodIndex: index,
        periodTypeName: id,
        hasCustomValue: false,
      })
    );
  };
  const handlePeriodShifts = (event, index) => {
    const { id } = event.target;
    console.log("id: " + id);
    console.log("index: " + index);
    topLevelPeirod.map((period) => {
      if (period.id === index) {
        dispatch(
          updateShifts({
            periodIndex: index,
            shiftName: id,
            hasRegularShift: !period.hasRegularShift,
            hasExtensionShift: !period.hasExtensionShift,
            hasWeekendShift: !period.hasWeekendShift,
            hasCustomShift: !period.hasCustomShift,
          })
        );
      }
    });
  };

  const handleUpdateSubperiods = (event, index, subPeriodIndex) => {
    const { id, value } = event.target;
    dispatch(
      updateSubperiods({
        periodIndex: index,
        subPeriodIndex: subPeriodIndex,
        subperiodTypeName: id,
        value: value,
      })
    );
  };

  const handleNewTopLevelPeriod = (index) => {
    topLevelPeirod.map((period) => {
      if (period.id === index - 1) {
        dispatch(
          createTopLevelPeriods({
            id: index,
            value: true,
            periodTypeName: "Quarter",
            subperiodTypeName: "Semester",
            periodName: "",
            shiftName: "regularShift",
            periodStartDate: new Date().toISOString(),
            periodEndDate: new Date().toISOString(),
            hasRegularShift: true,
            hasExtensionShift: false,
            hasWeekendShift: false,
            hasCustomShift: false,
            customShiftName: "",
            periodToUpdate: "periodType",
            subPeriods: [
              {
                id: 0,
                periodTypeName: "Semester",
                periodName: "",
                shiftName: "regularShift",
                periodStartDate: new Date().toISOString(),
                periodEndDate: new Date().toISOString(),
                hasRegularShift: true,
                hasExtensionShift: false,
                hasWeekendShift: false,
                hasCustomShift: false,
                customShiftName: "",
                periodToUpdate: "periodType",
              },
            ],
          })
        );
      }
    });
  };

  const handleTopLevelPeriod = (event, index) => {
    // const {id, name, value} = event.target
    // console.log("id: "+id)
    // console.log("name: " + name)
    // console.log("value: " + value)
    // console.log("index: " + index)
  };

  const resetAllPeriods = () => {
    if (topLevelPeirod.length > 0) {
      dispatch(resetPeriods({ id: topLevelPeirod[0].id }));
    }
  };
  const removePeriods = (index) => {
    // const list = formDataPeriod;
    // list.splice(index, 1);
    // setFormData({ ...formData, annualPeriod: list });
    dispatch(deletePeriods({ id: index, topLevelId: 0 }));
  };

  function handleSchoolsPeriodRadioSelection(event, index) {
    const { name, value } = event.target;
    const periods = formDataPeriod;
    periods[index][name] = value;
    setFormData({ ...formData, annualPeriod: periods });
  }
  function handlePeriodsSelect(event, index) {
    const { name, value } = event.target;
    const periods = formDataPeriod;
    periods[index][name] = value;
    setFormData({ ...formData, annualPeriod: periods });
  }
  function handleAnnualPeriodDuration(date, index, subPeriodIndex) {
    const { name, value, id } = date.target;
    console.log("index: " + index);
    console.log("name: " + name);
    console.log("value: " + value);
    console.log("id: " + id);
    dispatch(
      updateSubperiods({
        periodIndex: index,
        subPeriodIndex: subPeriodIndex,
        periodToUpdate: name,
        periodTypeName: id,
        periodDetailsType: id,
        periodStartDate: value.toISOString(),
        periodEndDate: value.toISOString(),
      })
    );
  }

  function handleUpdateCustomTopPeriod(event, index) {
    const { value } = event.target;
    dispatch(
      updateTopLevelAnnualPeriod({
        periodIndex: index,
        hasCustomValue: true,
        value: value,
      })
    );
  }
  function handleUpdateCustomSubPeriod(event, index) {
    const { value } = event.target;
    dispatch(
      updateSubperiods({
        periodIndex: index,
        hasCustomValue: true,
        value: value,
      })
    );
  }

  return (
    <>
      <div className="flex gapfull ">
        <div className="school-info pt1">
          <div>
            <h1 className="form__titles--mid -ml-3-5">
              {" "}
              And now, tell us about your school's Semisters and Terms{" "}
            </h1>
            <h3 className="form__subtitle">
              What are the major annual periods in your school?
            </h3>
          </div>
          <>
            <br />
            <br />
            <br />
          </>
          <DynamicPeriods
            formData={formData}
            setFormData={setFormData}
            handlePeriodsSelect={handlePeriodsSelect}
            handleFormRadioSelection={handleSchoolsPeriodRadioSelection}
            removePeriods={removePeriods}
            handleAnnualPeriodDuration={handleAnnualPeriodDuration}
            handleTopLevelPeriod={handleTopLevelPeriod}
            handleUpdateCustomTopPeriod={handleUpdateCustomTopPeriod}
            removeToplevelPeriod={removeToplevelPeriod}
            handlePeriodShifts={handlePeriodShifts}
            handleNewTopLevelPeriod={handleNewTopLevelPeriod}
            handleUpdateCustomSubPeriod={handleUpdateCustomSubPeriod}
            handleTopLevelPeriodUpdate={handleTopLevelPeriodUpdate}
            includeTopLevelPeriod={includeTopLevelPeriod}
            handleUpdateSubperiods={handleUpdateSubperiods}
            handleNewSubPeriods={handleNewSubPeriods}
            resetAllPeriods={resetAllPeriods}
          />
        </div>
        {/* <div className="flex-ccc">
          <SmallCard formData={formData} />
          <Preview />
        </div> */}
      </div>
    </>
  );
};

export default PeriodInfo;
