import SemestersTips from "./Tips/SemestersTips";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setPopup, setPopupType } from "../../features/popups/popupSlice";
import {
  increment,
  decrement,
  trackStep,
} from "../../features/steps/counterSlice";
import { useNavigate } from "react-router-dom";
import { reset } from "../../features/auth/authSlice";
import Achievements from "./Achievements";
import CompleteSteps from "./CompleteSteps";
import Spinner from "../Utilities/Progress/Spinner";
import SchoolInfo from "../../components/Schools/SchoolInfo";
import TipsCard from "../Utilities/Cards/TipsCard";
import PaymentScale from "./PaymentScale";
import FormsFooter from "../../components/FormItems/FormsFooter";
import FormPageControl from "../../components/FormItems/FormPageControl";
import FormNavbar from "../../components/FormItems/FormNavbar";
import PeriodInfo from "./PeriodInfo";
import PaymentInfo from "./PaymentInfo";
import GradeInfo from "./GradeInfo";
import GradeTips from "./Tips/GradeTips";
import PaymentTips from "./Tips/PaymentTips";
import LandingPage from "../../pages/LandingPage";
import "../../Styles/formPageControlButtonStyles.css";
import "../../Styles/formsNavbarStyle.css";
import AchievementsTips from "./Tips/AchievementsTips";

function CreateSchool() {
  const { popup } = useSelector((state) => state.popups);
  const { popupType } = useSelector((state) => state.popups);

  const [formData, setFormData] = useState({
    schoolName: "",
    schoolEmail: "",
    schoolLevel: "",
    schoolPhone: "",
    schoolKebele: "",
    schoolCity: "Addis Ababa",
    schoolSubcity: "",
    schoolWoreda: "",
    schoolCbeMerchantCode: "",
    schoolCbeAccountNumber: "",
    schoolAchievements: [""],
    link: [],
    // annualPeriod: [{ periodType: "one", periodName: "", periodDuration: "" }],
    annualPeriod: [],
    schoolPayments: [],
    schoolGrade: [],
  });
  const [navDir, setNavDir] = useState("");
  // console.log(formData)
  // console.log([...formData.annualPeriod]);
  // Remove all empty valued link
  // iterate list and if list.url === "" then, remove it
  function removeEmptyValuedLinks() {
    let index = 0;
    const formDataLinks = [...formData.link];
    const list = formDataLinks;
    list.forEach((item) => {
      if (item.url === "") {
        list.splice(index, 1);
        setFormData({ ...formData, link: list });
      }
      index++;
    });
  }
  const NAME_REGEX = /[0-9a-zA-Z]{4,50}/;
  const EMAIL_REGEX =
    /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  const ACCOUNT_REGEX = /^[0-9]{13}$/;
  // const ACCOUNT_REGEX = /^$|^\d{13}$/;
  // const MERCHANT_CODE_REGEX = /^$|^\d{6,30}$/; /^[0-9]{6,30}$/
  const MERCHANT_CODE_REGEX = /^[0-9]{6,30}$/;

  const [onNextValidName, setValidName] = useState(false);
  const [onNextValidEmail, setValidEmail] = useState(false);
  const [onNextValidAccount, setValidAccount] = useState(false);
  const [onNextValidCBEBirrMerchantCode, setValidCBEBirrMerchantCode] =
    useState(false);
  const [triggerValidation, setTriggerValidation] = useState(false);

  function listOfEmptyFields() {
    if (
      (formData.schoolName === "" || onNextValidName === false) &&
      !emptyFields.includes("schoolName")
    ) {
      setEmptyFields((emptyFields) => emptyFields.concat("schoolName"));
    }
    if (
      (formData.schoolEmail === "" || onNextValidEmail === false) &&
      !emptyFields.includes("schoolEmail")
    ) {
      setEmptyFields((emptyFields) => emptyFields.concat("schoolEmail"));
    }
    if (
      (formData.schoolCbeMerchantCode === "" ||
        onNextValidCBEBirrMerchantCode === false) &&
      !emptyFields.includes("schoolCbeMerchantCode")
    ) {
      setEmptyFields((emptyFields) =>
        emptyFields.concat("schoolCbeMerchantCode")
      );
    }
    if (
      (formData.schoolCbeAccountNumber === "" ||
        onNextValidAccount === false) &&
      !emptyFields.includes("schoolCbeAccountNumber")
    ) {
      setEmptyFields((emptyFields) =>
        emptyFields.concat("schoolCbeAccountNumber")
      );
    }

    //  removes no empty fields form empty valued list of array
    const schoolNameIndex = emptyFields.indexOf("schoolName");
    if (
      schoolNameIndex !== -1 &&
      formData.schoolName != "" &&
      onNextValidName
    ) {
      emptyFields.splice(schoolNameIndex, 1);
    }
    const schoolEmailIndex = emptyFields.indexOf("schoolEmail");
    if (
      schoolEmailIndex !== -1 &&
      formData.schoolEmail != "" &&
      onNextValidEmail
    ) {
      emptyFields.splice(schoolEmailIndex, 1);
    }
    const schoolCbeMerchantCodeIndex = emptyFields.indexOf(
      "schoolCbeMerchantCode"
    );
    if (
      schoolCbeMerchantCodeIndex !== -1 &&
      formData.schoolCbeMerchantCode != "" &&
      onNextValidCBEBirrMerchantCode
    ) {
      emptyFields.splice(schoolCbeMerchantCodeIndex, 1);
    }
    const schoolCbeAccountNumberIndex = emptyFields.indexOf(
      "schoolCbeAccountNumber"
    );
    if (
      schoolCbeAccountNumberIndex !== -1 &&
      formData.schoolCbeAccountNumber != "" &&
      onNextValidAccount
    ) {
      emptyFields.splice(schoolCbeAccountNumberIndex, 1);
    }
  }

  useEffect(() => {
    setValidName(NAME_REGEX.test(formData.schoolName));
    setValidEmail(EMAIL_REGEX.test(formData.schoolEmail));
    setValidAccount(ACCOUNT_REGEX.test(formData.schoolCbeAccountNumber));
    setValidCBEBirrMerchantCode(
      MERCHANT_CODE_REGEX.test(formData.schoolCbeMerchantCode)
    );
  }, [formData, onNextValidName]);

  const [emptyFields, setEmptyFields] = useState([]);
  // inserts empty fields in to an array

  const nextFormStep = () => {
    setValidName(NAME_REGEX.test(formData.schoolName));
    setValidEmail(EMAIL_REGEX.test(formData.schoolEmail));
    setValidAccount(ACCOUNT_REGEX.test(formData.schoolCbeAccountNumber));
    setValidCBEBirrMerchantCode(
      MERCHANT_CODE_REGEX.test(formData.schoolCbeMerchantCode)
    );

    listOfEmptyFields();
    removeEmptyValuedLinks();
    if (
      onNextValidName &&
      onNextValidAccount &&
      onNextValidEmail &&
      onNextValidCBEBirrMerchantCode
    ) {
      dispatch(increment());
      dispatch(trackStep(count + 1));
      dispatch(setPopupType(""));
    } else if (
      formData.schoolName === "" ||
      formData.schoolEmail === "" ||
      formData.schoolCbeAccountNumber === "" ||
      formData.schoolCbeAccountNumber === ""
    ) {
      // dispatch(setPopup(!popup));
      // dispatch(setPopupType("IncompleteFields"));
      dispatch(increment());
      dispatch(trackStep(count + 1));
    } else {
      dispatch(setPopup(!popup));
      dispatch(setPopupType("InvalidFields"));
    }
    setNavDir("next");
  };
  const backFormStep = () => {
    setNavDir("back");
    removeEmptyValuedLinks();
    dispatch(decrement());
  };

  const count = useSelector((state) => state.counter.count);
  const { user } = useSelector((state) => state.auth);
  // const { name, level, address } = htmlFormData;
  const { isError, message, schoolLoading } = useSelector(
    (state) => state.schools
  );
  const [formStep, setFormStep] = useState(0);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // handle form steps
  useEffect(() => {
    setFormStep(count);
  }, [count]);

  useEffect(() => {
    formStep === 8 && navigate("/registerStudent");
    // console.log(count);
  }, [formStep, navigate, count]);

  // end of school state activation
  useEffect(() => {
    if (isError) {
    }

    if (!user) {
      navigate("/login");
    }

    return () => {
      dispatch(reset());
    };
  }, [user, navigate, isError, message, dispatch]);

  // const onSubmit = (e) => {
  //   e.preventDefault();
  //   const userData = {
  //     name,
  //     level,
  //     address,
  //   };
  //   sethtmlFormData("");
  // };

  // if (isLoading){
  //     return <Spinner/>
  // }

  if (schoolLoading) {
    return <Spinner />;
  }
  const InactiveText = (
    <div className="inactive-text">
      It appears that you have filled some fields incorrectly. Take your time to
      follow the <span className="red-tips"> Red Error Tips </span> to complete
      the form.
    </div>
  );

  return (
    <>
      <div
        className={
          popup ? " inactive-bg main__form flex-cc" : " main__form flex-cc"
        }
      >
        <FormNavbar
          progressItems={[
            "DETAILS",
            "PAYMENTS 1",
            "SEMISTERS & TERMS",
            "GRADES & DEPARTMENTS",
            "ACHIEVEMENTS",
            "PAYMENTS 2",
            "COMPLETE",
          ]}
          currentStep={formStep}
          className={popup ? " inactive-bg" : " "}
        />
        <div className="school-info flex-c">
          {count === -0.5 ? navigate("/") : ""}
          {count === 0 && (
            <SchoolInfo
              emptyFields={emptyFields}
              formData={formData}
              setFormData={setFormData}
            />
          )}
          {count === 0.5 && (
            <PaymentTips formData={formData} setFormData={setFormData} />
          )}
          {count === 1 && (
            <PaymentInfo formData={formData} setFormData={setFormData} />
          )}
          {count === 1.5 && (
            <SemestersTips formData={formData} setFormData={setFormData} />
          )}
          {count === 2 && (
            <PeriodInfo formData={formData} setFormData={setFormData} />
          )}
          {count === 2.5 && (
            <GradeTips formData={formData} setFormData={setFormData} />
          )}
          {count === 3 && (
            <GradeInfo formData={formData} setFormData={setFormData} />
          )}
          {count === 3.5 && (
            <AchievementsTips formData={formData} setFormData={setFormData} />
          )}
          {count === 4 && (
            <Achievements formData={formData} setFormData={setFormData} />
          )}
          {count === 4.5 && navDir === "next" ? dispatch(increment()) : null}
          {count === 4.5 && navDir === "back" ? dispatch(decrement()) : null}
          {count === 5 && (
            <CompleteSteps formData={formData} setFormData={setFormData} />
          )}
        </div>
        <div className="school-page-control page-control">
          <FormPageControl
            backFormStep={backFormStep}
            nextFormStep={nextFormStep}
          />
        </div>
        {popupType === "IncompleteFields" && (
          <TipsCard
            tipsCardTitle={"More Information Needed"}
            tipsCardMessage={
              "Looks like you haven't entered all info. We recommend that you fill at least your School's Name, school email, school CBE Account Number and CBE Merchant Code!"
            }
            tipsCardAcceptLabel={"OK"}
            tipsCardDeclineLabel={"I CAN'T PROVIDE THE INFORMATION"}
          />
        )}
        {popupType === "InvalidFields" && (
          <TipsCard
            tipsCardTitle={"Invalid Inputs"}
            tipsCardMessage={InactiveText}
            tipsCardAcceptLabel={"OK"}
            // tipsCardDeclineLabel={""}
          />
        )}
      </div>
      <FormsFooter />
    </>
  );
}

export default CreateSchool;
