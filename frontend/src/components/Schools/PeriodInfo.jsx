import DynamicPeriods from "../Utilities/DynamicFields/DynamicPeriods";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  createSubPeriods,
  createTopLevelPeriods,
  updatePeriods,
  deletePeriods,
  resetPeriods,
} from "../../features/SchoolPeriods/annualPeriodSlice";
const PeriodInfo = ({ formData, setFormData }) => {
  const formDataPeriod = [...formData.annualPeriod];
  const dispatch = useDispatch();
  const topLevelPeirod = useSelector((state) => state.periods.topLevelPeriod);
  const handleNewSubPeriods = () => {
    topLevelPeirod.map((topLevelPeirod) => {
      const lastSubPeriod =
        topLevelPeirod.subPeriods[topLevelPeirod.subPeriods.length - 1];
      dispatch(
        createSubPeriods({
          topLevelId: topLevelPeirod.id,
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
    });
  };

  const handleNewTopLevelPeriod = (event, index) => {
    const { id, name, value } = event.target;

    // console.log(topLevelPeirod.length);

    dispatch(
      createTopLevelPeriods({
        id: topLevelPeirod.length,
        value: false,
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
        subPeriods: [],
      })
    );
    console.log("id: " + id);
    console.log("name: " + name);
    console.log("value: " + value);
  };

  const handleTopLevelPeriod = (event, index) => {
    // const {id, name, value} = event.target
    // console.log("id: "+id)
    // console.log("name: " + name)
    // console.log("value: " + value)
    // console.log("index: " + index)
  };
  const handleUpdatePerods = (event, index, subPeriodIndex) => {
    const { id, name, value } = event.target;
    // console.log("id: " + id);
    // console.log("name: " + name);
    // console.log("value: " + value);
    // console.log("subPeriodIndex: " + subPeriodIndex);
    const formDataPeriodType = formDataPeriod;
    topLevelPeirod.map((basePeriod) => {
      // console.log("basePeriod.id : " + basePeriod.id);
      dispatch(
        updatePeriods({
          topLevelPeirodId: index,
          subPeriodId: subPeriodIndex,
          periodToUpdate: name,
          periodTypeName: id,
          periodDetailsType: id,
          shiftName: id,
          periodName: value,
          periodStartDate: value,
          periodEndDate: value,
          hasRegularShift: !basePeriod.hasRegularShift,
          hasExtensionShift: !basePeriod.hasExtensionShift,
          hasWeekendShift: !basePeriod.hasWeekendShift,
          hasCustomShift: !basePeriod.hasCustomShift,
        })
      );
      // CHECK THIS LOGIC
      topLevelPeirod.map((basePeriod) => {});
      formDataPeriodType["isSemesterPeriodType"] =
        !basePeriod.isSemesterPeriodType;
      formDataPeriodType["isTermPeriodType"] = !basePeriod.isTermPeriodType;
      formDataPeriodType["isQuarterPeriodType"] =
        !basePeriod.isQuarterPeriodType;
      formDataPeriodType["isCustomPeriodType"] = !basePeriod.isCustomPeriodType;
      // setFormData({ ...formData, annualPeriod: formDataPeriodType });
    });
    topLevelPeirod.map((basePeriod) => {});
    //   setFormData({
    //     ...formData,
    //     annualPeriod: [
    //       ...formDataPeriod,
    //       {
    //         periodType: event.target.value,
    //         periodTypeName: event.target.name,
    //       },
    //     ],
    //   });
    // });
  };

  const resetAllPeriods = () => {
    if (topLevelPeirod.length > 0) {
      dispatch(resetPeriods({ id: topLevelPeirod[0].id }));
    }
  };
  const removePeriods = (index) => {
    const list = formDataPeriod;
    list.splice(index, 1);
    setFormData({ ...formData, annualPeriod: list });
    dispatch(deletePeriods({ id: index }));
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
    dispatch(
      updatePeriods({
        id: index,
        subPeriodId: subPeriodIndex,
        periodToUpdate: name,
        periodTypeName: id,
        periodDetailsType: id,
        periodStartDate: value.toISOString(),
        periodEndDate: value.toISOString(),
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
            handleNewTopLevelPeriod={handleNewTopLevelPeriod}
            handleUpdatePerods={handleUpdatePerods}
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
