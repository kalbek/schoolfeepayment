import DynamicPeriods from "../Utilities/DynamicFields/DynamicPeriods";
import { useSelector, useDispatch } from "react-redux";
import {
  createSubPeriods,
  createTopLevelPeriods,
  includeTopLevelPeriods,
  updateTopLevelAnnualPeriod,
  updateSubperiods,
  updateShifts,
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

  const includeTopLevelPeriod = () => {
    dispatch(includeTopLevelPeriods({ value: !topLevelPeirod[0].value }));
    if (topLevelPeirod[0].value === false) {
      dispatch(
        updateTopLevelAnnualPeriod({
          periodTypeName: "TopQuarter",
        })
      );
    }
  };

  const handleTopLevelPeriodUpdate = (event, index) => {
    const { id, name, value } = event.target;
    dispatch(
      updateTopLevelAnnualPeriod({
        periodIndex: index,
        periodTypeName: id,
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

  const handleUpdateSubperiods = (event, index) => {
    const { id } = event.target;
    dispatch(
      updateSubperiods({
        periodIndex: index,
        subperiodTypeName: id,
      })
    );
  };
  const handleNewTopLevelPeriod = () => {
    dispatch(
      createTopLevelPeriods({
        id: topLevelPeirod.length,
        value: false,
        periodTypeName: "TopSemester",
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
            id: topLevelPeirod[topLevelPeirod.length - 1].subPeriods.length,
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
    console.log("hit");
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
    dispatch(
      updateSubperiods({
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
            handlePeriodShifts={handlePeriodShifts}
            handleNewTopLevelPeriod={handleNewTopLevelPeriod}
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
