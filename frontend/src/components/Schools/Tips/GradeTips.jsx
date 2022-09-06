import "../../../Styles/tipsStyle.css";
const GradeTips = ({ formData, setFormData }) => {
  return (
    <div className="form-transition">
      <div>
        <h1 className="form__titles-big">
          {" "}
          Wonderful, now let's talk about your schools
          <span className="fw400"> Grade details </span>
        </h1>
        <h3 className="form__sub-titles-main">Few things you need to know:</h3>
        <ul className="form__sub-titles-basic tips-page--list">
          <li>Start from lower grades and work your way up to higher ones</li>
          <li>Do not miss grades in between</li>
          <li>
            This is usefull for later, especially if your payments are based on
            grades
          </li>
          <li>
            Please fill the form clearly so that students will easily find their
            way by their grades
          </li>
        </ul>
      </div>
      {/* <div className="form-small-cards">
        <SmallCard formData={formData} />
      </div> */}
    </div>
  );
};

export default GradeTips;
