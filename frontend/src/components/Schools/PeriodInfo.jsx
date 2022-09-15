import DynamicPeriods from "../Utilities/DynamicFields/DynamicPeriods";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { updatePeriods } from "../../features/SchoolPeriods/annualPeriodSlice";
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
            PeriodName: "Semester",
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
  const handlePerodTypes = (event) => {
    const { id, name, value } = event.target;
    const formDataPeriodType = formDataPeriod;
    periodState.map((basePeriod) => {
      console.log(
        "periodState.isSemesterPeriodType: " + basePeriod.isSemesterPeriodType
      );
      console.log(
        "periodState.isTermPeriodType: " + basePeriod.isTermPeriodType
      );
      console.log(
        "periodState.isQuarterPeriodType: " + basePeriod.isQuarterPeriodType
      );
      console.log(
        "periodState.isCustomPeriodType: " + basePeriod.isCustomPeriodType
      );
      periodState.map((basePeriod) => {
        dispatch(
          updatePeriods({
            periodToUpdate: name,
            isSemesterPeriodType: !basePeriod.isSemesterPeriodType,
            isTermPeriodType: !basePeriod.isTermPeriodType,
            isQuarterPeriodType: !basePeriod.isQuarterPeriodType,
            isCustomPeriodType: !basePeriod.isCustomPeriodType,
          })
        );
      });
      formDataPeriodType["isSemesterPeriodType"] =
        !basePeriod.isSemesterPeriodType;
      formDataPeriodType["isTermPeriodType"] = !basePeriod.isTermPeriodType;
      formDataPeriodType["isQuarterPeriodType"] =
        !basePeriod.isQuarterPeriodType;
      formDataPeriodType["isCustomPeriodType"] = !basePeriod.isCustomPeriodType;

      // setFormData({ ...formData, annualPeriod: formDataPeriodType });
    });

    console.log("then");
    periodState.map((basePeriod) => {
      console.log(
        "periodState.isSemesterPeriodType: " + basePeriod.isSemesterPeriodType
      );
      console.log(
        "periodState.isTermPeriodType: " + basePeriod.isTermPeriodType
      );
      console.log(
        "periodState.isQuarterPeriodType: " + basePeriod.isQuarterPeriodType
      );
      console.log(
        "periodState.isCustomPeriodType: " + basePeriod.isCustomPeriodType
      );
    });
    //   setFormData({
    //     ...formData,
    //     annualPeriod: [
    //       ...formDataPeriod,
    //       {
    //         periodType: event.target.value,
    //         periodName: event.target.name,
    //       },
    //     ],
    //   });
    // });
  };
  const removePeriods = (index) => {
    const list = formDataPeriod;
    list.splice(index, 1);
    setFormData({ ...formData, annualPeriod: list });
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
    const { name, value } = date.target;
    const dates = formDataPeriod;
    dates[index][name] = value;
    setFormData({ ...formData, schoolPayments: dates });
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
            handlePerodTypes={handlePerodTypes}
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
