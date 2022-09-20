import DynamicPeriods from "../Utilities/DynamicFields/DynamicPeriods";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  createPeriods,
  updatePeriods,
  deletePeriods,
  resetPeriods,
} from "../../features/SchoolPeriods/annualPeriodSlice";
const PeriodInfo = ({ formData, setFormData }) => {
  const formDataPeriod = [...formData.annualPeriod];
  const dispatch = useDispatch();
  const periodState = useSelector((state) => state.periods.annualPeriodState);

  useEffect(() => {
    if (formDataPeriod.length === 0)
      setFormData({
        ...formData,
        annualPeriod: [
          ...formDataPeriod,
          {
            periodType: "Semester",
            PeriodTypeName: "Semester",
            periodStartDate: new Date(),
            periodEndDate: new Date(),
            hasRegularShift: true,
            hasExtensionShift: false,
            hasWeekendShift: false,
            hasCustomShift: false,
            customShiftName: "",
            customShift: [],
          },
        ],
      });
  }, []);

  const handleNewPeriods = () => {
    periodState.length < 30 &&
      dispatch(
        createPeriods({
          id: periodState[periodState.length - 1].id + 1,
          periodTypeName: periodState[periodState.length - 1].periodTypeName,
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
        })
      );

    // setFormData({
    //   ...formData,
    //   annualPeriod: [
    //     ...formDataPeriod,
    //     {
    //       periodType: formDataPeriod[formDataPeriod.length - 1].periodType,
    //       PeriodTypeName: formDataPeriod[formDataPeriod.length - 1].periodTypeName,
    //       annualPeriodStartDate: new Date(),
    //       annualPeriodEndDate: new Date(),
    //     },
    //   ],
    // });
  };
  const handleUpdatePerods = (event, index) => {
    const { id, name, value } = event.target;
    const formDataPeriodType = formDataPeriod;
    periodState.map((basePeriod) => {
      dispatch(
        updatePeriods({
          id: index,
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
      periodState.map((basePeriod) => {});
      formDataPeriodType["isSemesterPeriodType"] =
        !basePeriod.isSemesterPeriodType;
      formDataPeriodType["isTermPeriodType"] = !basePeriod.isTermPeriodType;
      formDataPeriodType["isQuarterPeriodType"] =
        !basePeriod.isQuarterPeriodType;
      formDataPeriodType["isCustomPeriodType"] = !basePeriod.isCustomPeriodType;
      // setFormData({ ...formData, annualPeriod: formDataPeriodType });
    });
    periodState.map((basePeriod) => {});
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
    if (periodState.length > 0) {
      dispatch(resetPeriods({ id: periodState[0].id }));
    }

    // const list = formDataPeriod;
    // list.splice(1, list.length);
    // setFormData({ ...formData, annualPeriod: list });
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
  function handleAnnualPeriodDuration(date, index) {
    const { name, value, id } = date.target;
    dispatch(
      updatePeriods({
        id: index,
        periodToUpdate: name,
        periodTypeName: id,
        periodDetailsType: id,
        periodStartDate: value.toISOString(),
        periodEndDate: value.toISOString(),
      })
    );

    // const dates = formDataPeriod;
    // dates[index][name] = value;
    // setFormData({ ...formData, schoolPayments: dates });
  }

  return (
    <>
      <div className="flex gapfull">
        <div className="school-info pt1">
          <div>
            <h1 className="form__titles--mid">
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
            handleUpdatePerods={handleUpdatePerods}
            handleNewPeriods={handleNewPeriods}
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
