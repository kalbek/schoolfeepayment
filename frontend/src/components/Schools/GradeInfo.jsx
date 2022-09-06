import DynamicGrades from "../Utilities/DynamicFields/DynamicGrades";
import SmallCard from "../Utilities/Cards/SmallCard";
import Preview from "../Utilities/Buttons/Preview";
const GradeInfo = ({ formData, setFormData }) => {
  const formDataGrade = [...formData.schoolGrade];
  // formData.length > 0
  //   ? (formDataSubPeriod = [formDataGrade[0]["subPeriod"]])
  //   : (formDataSubPeriod = "");
  const handleGrades = () => {
    setFormData({
      ...formData,
      schoolGrade: [...formDataGrade, { grade: "", level: "" }],
    });
  };

  const handleGradesSelection = (event, index) => {
    const { name, value } = event.target;
    const grades = formDataGrade;
    grades[index][name] = value;
    setFormData({ ...formData, schoolGrade: grades });
  };
  const handleGradeLevels = (event, index) => {
    const { name, value } = event.target;
    const levels = formDataGrade;
    levels[index][name] = value;
    setFormData({ ...formData, schoolGrade: levels });
  };

  const removeGrades = (index) => {
    const list = formDataGrade;
    list.splice(index, 1);
    setFormData({ ...formData, schoolGrade: list });
  };

  return (
    <>
      <div className="flex">
        <div className="school-info">
          <div className="fl">
            <h1 className="form__titles">
              {" "}
              Let us start filling out schools Grade info's
            </h1>
            <h3 className="form__subtitle">Remember start form lower grades</h3>

            <DynamicGrades
              formData={formData}
              setFormData={setFormData}
              handleGradeLevels={handleGradeLevels}
              handleGradesSelection={handleGradesSelection}
              removeGrades={removeGrades}
              handleGrades={handleGrades}
            />
          </div>
        </div>
        <div className="flex-c">
          <SmallCard formData={formData} />
          <Preview />
        </div>
      </div>
    </>
  );
};

export default GradeInfo;
