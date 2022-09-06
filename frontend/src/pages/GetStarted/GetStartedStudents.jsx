import school_icon from "../LandingPage/images/school.svg";
import student_icon from "../LandingPage/images/student.svg";
import edit_icon from "../LandingPage/images/edit-svg2.svg";
import FormPageControl from "../../components/FormItems/FormPageControl";

const GetStartedStudents = ({
  getStartedRef,
  cardRef,
  paySchoolFee,
  findSchool,
  status,
  nextKeyStep,
  setNextKeyStep,
  handlePaySchoolFeeSelection,
  handleFindSchoolSelection,
  handleCheckStatusSelection,
  next,
  back,
}) => {
  return (
    <div ref={getStartedRef} className="flex-cc getting-started--sub-container">
      <div className="getting-started__title">
        Top three things you can do with this role:
      </div>
      <div className="flex-cs get-started--card-container">
        {/* FIRST CARD */}
        <div
          onClick={handlePaySchoolFeeSelection}
          ref={cardRef}
          className={
            paySchoolFee
              ? "getting-started-card--selected get-started--card"
              : "get-started--card"
          }
        >
          <div className="getting-started--card-content">
            <img src={school_icon} alt="" />
            <h3>PAY SCHOOL FEE</h3>
            <p> Use your ID or name to pay your school fee</p>
          </div>
        </div>
        {/* SECOND CARD */}
        <div
          onClick={handleFindSchoolSelection}
          ref={cardRef}
          className={
            findSchool
              ? "getting-started-card--selected get-started--card"
              : "get-started--card"
          }
        >
          <div className="getting-started--card-content">
            <img src={edit_icon} alt="" />
            <h3>FIND A SCHOOL</h3>
            <p>Find a school that might interest you</p>
          </div>
        </div>
        {/* THIRD CARD */}
        <div
          onClick={handleCheckStatusSelection}
          ref={cardRef}
          className={
            status
              ? "getting-started-card--selected get-started--card"
              : "get-started--card"
          }
        >
          <img src={student_icon} alt="" />
          <h3>CHECK STATUS</h3>
          <p>Check schools or students payment &amp; other status</p>
        </div>
      </div>
      <div className="getting-started--navigate">
        <FormPageControl nextFormStep={next} backFormStep={back} />
      </div>
    </div>
  );
};

export default GetStartedStudents;
