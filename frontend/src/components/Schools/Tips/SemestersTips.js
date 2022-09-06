import '../../../Styles/tipsStyle.css'
const SemestersTips = ({ formData, setFormData }) => {
  return (
    <div className="form-transition">
      <div>
        <h1 className="form__titles-big">
          {" "}
          Great, now let's fill your schools 
          <span className="fw400"> Semester Info </span>
        </h1>
        <h3 className="form__sub-titles-main">Few things you need to know:</h3>
        <ul className="form__sub-titles-basic tips-page--list">
          <li>
            Only list out the major annual periods in your school
          </li>
          <li>Only fill periods where school fee payments are based on</li>
       
        </ul>
      </div>
      {/* <div className="form-small-cards">
        <SmallCard formData={formData} />
      </div> */}
    </div>
  );
};

export default SemestersTips;
