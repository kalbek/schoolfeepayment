import { useEffect, useState, useRef, useCallback } from "react";
import useClickaway from "../../hooks/useClickAway";
import useKeyToClose from "../../hooks/useKeyToClose";
import useKeyToNavigate from "../../hooks/useKeyToNavigate";
import "../../Styles/gettingStartedStyle.css";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setPopupType } from "../../features/popups/popupSlice";
import { setPopup } from "../../features/popups/popupSlice";
import GetStartedFirstPage from "./GetStartedFirstPage";
import GetStartedSchools from "./GetStartedSchools";
import GetStartedStudents from "./GetStartedStudents";
import useSelectCard from "../../hooks/useSelectCard";

const GetStarted = () => {
  const navigate = useNavigate();

  const dispatch = useDispatch();
  const getStartedRef = useRef(null);
  const popup = useSelector((state) => state.popups);
  useClickaway(getStartedRef, () => {});
  useKeyToClose("Escape", () => {});
  const [selected, setSelected] = useState("");
  const [nextStep, setNextStep] = useState(0);
  const { nextKeyStep } = useKeyToNavigate();
  const [schoolSelected, setSchoolSelected] = useState(false);
  const [studentSelected, setStudentSelected] = useState(false);
  const [createNewSchool, setCreateNewSchool] = useState(false);
  const [manageSchool, setManageSchool] = useState(false);
  const [manageStudents, setManageStudents] = useState(false);
  const [paySchoolFee, setPaySchoolFee] = useState(false);
  const [findSchool, setFindSchool] = useState(false);
  const [status, setStatus] = useState(false);
  const cardRef = useRef();
  function next() {
    setNextStep(nextStep + 1);
  }
  function back() {
    setNextStep(nextStep - 1);
    setSelected("");
  }
  const handleSchoolSelection = () => {
    setSchoolSelected(true);
    setStudentSelected(false);
    setSelected("schools");
  };
  const handleStudentSelection = () => {
    setStudentSelected(true);
    setSchoolSelected(false);
    setSelected("students");
  };

  const handleCreateSchoolSelection = () => {
    setCreateNewSchool(true);
    setManageSchool(false);
    setManageStudents(false);
    setSelected("createSchool");
  };
  const handleManageSchoolSelection = () => {
    setCreateNewSchool(false);
    setManageSchool(true);
    setManageStudents(false);
    setSelected("manageSchool");
  };
  const handleManageStudentsSelection = () => {
    setCreateNewSchool(false);
    setManageSchool(false);
    setManageStudents(true);
    setSelected("manageStudent");
  };
  /////////////////////
  const handlePaySchoolFeeSelection = () => {
    setPaySchoolFee(true);
    setFindSchool(false);
    setStatus(false);
    setSelected("paySchoolFee");
  };
  const handleFindSchoolSelection = () => {
    setPaySchoolFee(false);
    setFindSchool(true);
    setStatus(false);
    setSelected("findSchool");
  };
  const handleCheckStatusSelection = () => {
    setPaySchoolFee(false);
    setFindSchool(false);
    setStatus(true);
    setSelected("status");
  };

  useSelectCard(cardRef, () => {});
  useEffect(() => {
    if (nextStep === 2 && selected === "createSchool") {
      navigate("/createSchool");
      dispatch(setPopup(!popup));
      dispatch(setPopupType(""));
    } else if (nextStep === 2) {
      dispatch(setPopup(!popup));
      dispatch(setPopupType(""));
      navigate("/");
    }
  }, [nextStep, selected]);
  useKeyToNavigate(nextStep, setNextStep, () => {});

  return (
    <div className="getting-started--container flex-c">
      {/* first step of getting started */}
      {nextStep === 0 && (
        <GetStartedFirstPage
          getStartedRef={getStartedRef}
          cardRef={cardRef}
          nextKeyStep={nextKeyStep}
          schoolSelected={schoolSelected}
          studentSelected={studentSelected}
          handleStudentSelection={handleStudentSelection}
          handleSchoolSelection={handleSchoolSelection}
          next={next}
          back={back}
        />
      )}
      {/* SECCOND STEP OF GETTING STARTED */}
      {nextStep === 1 && schoolSelected && (
        <GetStartedSchools
          getStartedRef={getStartedRef}
          cardRef={cardRef}
          nextKeyStep={nextKeyStep}
          next={next}
          back={back}
          createNewSchool={createNewSchool}
          manageSchool={manageSchool}
          manageStudents={manageStudents}
          handleCreateSchoolSelection={handleCreateSchoolSelection}
          handleManageSchoolSelection={handleManageSchoolSelection}
          handleManageStudentsSelection={handleManageStudentsSelection}
        />
      )}

      {/* SECOND STEP AT STUDENTS */}
      {nextStep === 1 && studentSelected && (
        <GetStartedStudents
          getStartedRef={getStartedRef}
          cardRef={cardRef}
          nextKeyStep={nextKeyStep}
          paySchoolFee={paySchoolFee}
          findSchool={findSchool}
          status={status}
          handlePaySchoolFeeSelection={handlePaySchoolFeeSelection}
          handleFindSchoolSelection={handleFindSchoolSelection}
          handleCheckStatusSelection={handleCheckStatusSelection}
          next={next}
          back={back}
        />
      )}
    </div>
  );
};

export default GetStarted;
