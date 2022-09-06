import school_icon from "../LandingPage/images/school.svg";
import student_icon from "../LandingPage/images/student.svg";
import edit_icon from "../LandingPage/images/edit-svg2.svg";
import FormPageControl from "../../components/FormItems/FormPageControl";

const GetStartedSchools = ({
  getStartedRef,
  cardRef,
  createNewSchool,
  manageSchool,
  manageStudents,
  handleCreateSchoolSelection,
  handleManageSchoolSelection,
  handleManageStudentsSelection,
  next,
  back,
}) => {
  return (
    <div ref={getStartedRef} className="flex-cc getting-started--sub-container">
      <div className="getting-started__title">
        Choose your next step with schools
      </div>
      <div className="flex-cs get-started--card-container">
        {/* FIRST CARD */}
        <div
          onClick={handleCreateSchoolSelection}
          ref={cardRef}
          className={
            createNewSchool
              ? "getting-started-card--selected get-started--card"
              : "get-started--card"
          }
        >
          <div className="getting-started--card-content">
            <img src={school_icon} alt="" />
            <h3>ADD A NEW SCHOOL</h3>
            <p>Register your school to CbePay&trade;</p>
          </div>
        </div>
        {/* SECOND CARD */}
        <div
          onClick={handleManageSchoolSelection}
          ref={cardRef}
          className={
            manageSchool
              ? "getting-started-card--selected get-started--card"
              : "get-started--card"
          }
        >
          <div className="getting-started--card-content">
            <img src={edit_icon} alt="" />
            <h3>MANAGE SCHOOLS</h3>
            <p>Go to your dashboard to manage schools</p>
          </div>
        </div>
        {/* THIRD CARD */}
        <div
          onClick={handleManageStudentsSelection}
          ref={cardRef}
          className={
            manageStudents
              ? "getting-started-card--selected get-started--card"
              : "get-started--card"
          }
        >
          <img src={student_icon} alt="" />
          <h3>MANAGE STUDENTS</h3>
          <p>Easily manage students from your dashboard </p>
        </div>
      </div>
      <div className="getting-started--navigate">
        <FormPageControl nextFormStep={next} backFormStep={back} />
      </div>
    </div>
  );
};

export default GetStartedSchools;
