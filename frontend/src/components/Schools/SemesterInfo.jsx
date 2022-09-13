import DynamicPeriods from "../Utilities/DynamicFields/DynamicPeriods";
import { useEffect } from "react";
import SmallCard from "../Utilities/Cards/SmallCard";
import Preview from "../Utilities/Buttons/Preview";
const SemesterInfo = ({ formData, setFormData }) => {
  const formDataPeriod = [...formData.annualPeriod];
  useEffect(() => {
    if (formDataPeriod.length === 0)
      setFormData({
        ...formData,
        annualPeriod: [
          ...formDataPeriod,
          {
            periodType: "Semester",
            PeriodName: "Semester",
            annualPeriodStartDate: new Date(),
            annualPeriodEndDate: new Date(),
            hasRegularShift: true,
            hasExtensionShift: false,
            hasWeekendShift: false,
            hasCustomShift: false,
            customShift: [],
          },
        ],
      });
  }, []);


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

export default SemesterInfo;
