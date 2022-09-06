import SmallCard from "../Utilities/Cards/SmallCard";
import Preview from "../Utilities/Buttons/Preview";
const CompleteSteps = ({ formData, setFormData }) => {
  return (
    <>
      <div className="flex">
        <div className="form--container">
          <div className="form__titles-big pt20">
            <h1 className="pt-3">Congratulation!!</h1>
            <br />
            <h3>
              You have successfully registered your school to CbePay&trade;
            </h3>
            <hr />
            <div className="school-info-subtitle">
              <h3 className="form__sub-titles-main">
                Review and comfirm your steps to complete.
              </h3>
              <h3 className="form__sub-titles-main">
                Browse next steps from your dashboard.
              </h3>
            </div>
          </div>
        </div>
        <div className="flex-c">
          <SmallCard formData={formData} setFormData={setFormData} />
          <Preview />
        </div>
      </div>
    </>
  );
};

export default CompleteSteps;
