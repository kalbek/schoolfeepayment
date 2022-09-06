// import '../../styles/landingPage.css'
import "../Styles/landingpage.css";
import girl from "../Assets/Images/girl.png";
import boy from "../Assets/Images/boy.png";
import User from "../components/User/User";
import Logo from "../components/Logo/Logo";
import useClickAway from "../hooks/useClickAway";
import GetStarted from "./GetStarted/GetStarted";
import NavigationMenu from "../components/Navigation/NavigationMenu";
import HeaderLine from "../components/HeaderLine/HeaderLine";
import { useState, useEffect,useRef, useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import Login from "./Login";
import Register from "./Register";
import { setPopup, setPopupType } from "../features/popups/popupSlice";
import ProgressWidget from "../components/Utilities/Progress/ProgressWidget/ProgressWidget";

const LandingPage = () => {
  const { popup } = useSelector((state) => state.popups);
  const { popupType } = useSelector((state) => state.popups);

  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);
  const roles = user ? Object.values(user) : null;
  const gettingStartedRef = useRef();
  const showGettingStarted = () => {
    dispatch(setPopup(!popup));
    dispatch(setPopupType("GettingStarted"));
  };
  return (
    <div className="landing-page-body">
      {popupType === "Login" && (
        <div>
          <Login />
        </div>
      )}
      {popupType === "Register" && (
        <div>
          <Register />
        </div>
      )}
      {popupType === "GettingStarted" && (
        <div>
          <GetStarted />
        </div>
      )}
      <div className="header-container">
        <div className="header-subcontainer">
          <header className="landing-header-contents">
            <Logo />
            <NavigationMenu />
            <User />
          </header>
          <HeaderLine />
        </div>
      </div>
      <main>
        <div className="main-title-wrapper">
          <div className="main-title love-icon">
            <h1>Better Future For Our Kids</h1>
          </div>
          <div className="sub-title">
            <h3>School Fee payments are now much easier than ever</h3>
          </div>
        </div>
        <div>
          <div className="wrapper hero-section">
            <div className="hero-left-card">
              <img src={girl} alt="girl with book image" className="girl" />
            </div>
            <div className="hero-center">
              <div className="get-started">
                <a
                  href="#"
                  className="btn btn-get_started btn-icon"
                  onClick={showGettingStarted}
                >
                  Get Started
                </a>
              </div>
              <div className="time">
                <span></span>
                <p className="waste-time">
                  Why waste your time on school fee payments while you can pay
                  instantly on CbePay&trade;
                </p>
              </div>
              <div className="somek sevenfivek">
                7.5k+
                <p>
                  planning to address <br /> more than7.5k students
                </p>
              </div>
              <div className="arrow-pic"></div>
              <div className="somek fivehundred">
                500+
                <p>
                  planning to address <br /> more than 500 schools
                </p>
              </div>
              <div className="five-hundred"></div>
            </div>
            <div className="hero-right">
              <div className="hero-right-card">
                <img src={boy} alt="" />
              </div>
            </div>
          </div>
        </div>
        {/* <!-- Hero section ends here --> */}
        {/* <!-- Header ends here --> */}

        <section className="full-roles-section">
          <div className="wrapper">
            <div className="pay-school-fee">
              <h3>Pay School Fee</h3>
              <p>
                Find your school and your related info and pay your school fee
                in seconds
              </p>
              <a href="#" className="btn btn-icon pay-now">
                Pay Now
              </a>
            </div>
            {/* <div className="bubble separation">bubble</div> */}
            <div className="register-school">
              <h3>Register Your School</h3>
              <p>
                Follow simple steps to register your school into our system and
                automate future payments
              </p>
              <a href="#" className="btn btn-icon add-school">
                Add School
              </a>
            </div>
            <div className="register-students">
              <h3>Register Student</h3>
              <p>Manage student registration with celar and simple steps</p>
              <a href="#" className="btn btn-icon register">
                Register
              </a>
            </div>
          </div>
        </section>
        <div className="help-students wrapper">
          {/* <h1>We help students to push dreams to the next step.</h1> */}
        </div>
      </main>
      <div className="footer wrapper">
        <div className="quick-links">
          <h3>Add Schools</h3>
          <p>Students</p>
          <p>Sign Up</p>
          <p>Home</p>
        </div>
        <div className="payments">
          <h3>School Fee</h3>
          <p>CbePay Service Fee</p>
        </div>
        <div className="contact-us">
          <p>Commercial Bank of Ethiopia</p>
          <p>contact@cbe.com.et</p>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
