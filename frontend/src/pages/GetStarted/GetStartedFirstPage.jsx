import school_icon from "../LandingPage/images/school.svg";
import student_icon from "../LandingPage/images/student.svg";
import FormPageControl from "../../components/FormItems/FormPageControl";

const GetStartedFirstPage = ({
  getStartedRef,
  cardRef,
  schoolSelected,
  studentSelected,
  nextKeyStep,
  setNextKeyStep,
  handleStudentSelection,
  handleSchoolSelection,
  next,
  back,
}) => {
  return (
    <div ref={getStartedRef} className="flex-cc getting-started--sub-container">
      <div className="getting-started__title">
        Select a role to get started with.
      </div>
      <div className="flex-cs get-started--card-container">
        <div
          onClick={handleSchoolSelection}
          ref={cardRef}
          className={
            schoolSelected || nextKeyStep === 1
              ? "getting-started-card--selected get-started--card"
              : "get-started--card"
          }
        >
          <img src={school_icon} alt="" />
          <h3>SCHOOL REPRESENTATIVE</h3>
          <p>I am a school owner or a representative on behalf of a school?</p>
        </div>
        <div
          onClick={handleStudentSelection}
          ref={cardRef}
          className={
            studentSelected || nextKeyStep === 2
              ? "getting-started-card--selected get-started--card"
              : "get-started--card"
          }
        >
          <img src={student_icon} alt="" />
          <h3>STUDENT OR PARENT</h3>
          <p>I am a student or a parent on behalf of a student!</p>
        </div>
      </div>
      <div className="getting-started--navigate">
        <FormPageControl nextFormStep={next} backFormStep={back} />
      </div>
    </div>
  );
};

export default GetStartedFirstPage;
