import DynamicPeriods from "../Utilities/DynamicFields/DynamicPeriods";
import SmallCard from "../Utilities/Cards/SmallCard";
import Preview from "../Utilities/Buttons/Preview";
 

const SemesterInfo = ({ formData, setFormData }) => {
  const formDataPeriod = [...formData.annualPeriod];

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

  return (
    <>
      <div className="flex">
        <div>
          <h1 className="form__titles">
            {" "}
            And now, tell us about your school's Semisters and Terms{" "}
          </h1>
          <h3 className="form__subtitle">
            What are the major annual periods in your school?
          </h3>
          <DynamicPeriods
            formData={formData}
            setFormData={setFormData}
            handlePeriodsSelect={handlePeriodsSelect}
            handleFormRadioSelection={handleSchoolsPeriodRadioSelection}
            removePeriods={removePeriods}
          />
        </div>
        <div className="flex-c">
          <SmallCard formData={formData} />
          <Preview />
        </div>
      </div>
    </>
  );
};

export default SemesterInfo;
