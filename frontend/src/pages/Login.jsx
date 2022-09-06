import { useState, useEffect, useRef, useCallback } from "react";
import { FaSignInAlt } from "react-icons/fa";
import { useSelector, useDispatch } from "react-redux";
import Logo from "../components/Logo/Logo";
import CbeLogoSmall from "./LandingPage/images/cbe2.svg";
import { useNavigate } from "react-router-dom";
import { login, reset } from "../features/auth/authSlice";
import { setPopup, setPopupType } from "../features/popups/popupSlice";
import Spinner from "../components/Utilities/Progress/Spinner";
import "./Login/loginStyless.css";
import useClickAway from "../hooks/useClickAway";
import useKeyToClose from "../hooks/useKeyToClose";
function Login() {
  const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;
  const EMAIL_REGEX =
    /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [validEmail, setValidEmail] = useState(false);
  const [validPwd, setValidPwd] = useState(false);
  const [emailFocus, setEmailFocus] = useState(false);
  const [pwdFocus, setPwdFocus] = useState(false);

  const [someMessage, setMessage] = useState("");
  const [errMsg, setErrMsg] = useState("");

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { user, isLoading, isError, isSuccess, message } = useSelector(
    (state) => state.auth
  );
  const { popup } = useSelector((state) => state.popups);
  const loginRef = useRef();
  const showRegister = () => {
    dispatch(setPopup(!popup));
    dispatch(setPopupType("Register"));
  };

  useEffect(() => {
    if (isError) {
      setMessage(message);
    }
    if (isSuccess || user) {
      dispatch(setPopupType(""));
      if (user.roles === 5150) navigate("/admindashboard");
      else {
        dispatch(setPopupType(""));
        navigate("/");
      }
    }
    dispatch(reset());
  }, [user, isError, isSuccess, message, navigate, dispatch]);

  // validate email
  useEffect(() => {
    setValidEmail(EMAIL_REGEX.test(email));
    setValidPwd(PWD_REGEX.test(password));
  }, [email, password]);

  const onSubmit = (e) => {
    e.preventDefault();

    const userData = {
      email,
      password,
    };
    dispatch(login(userData));
  };
  //  close popup on click away
  useClickAway(loginRef, () => {});
  useKeyToClose("Escape", () => {});

  return (
    <>
      {isLoading && <Spinner />}
      {/* <Spinner/> */}
      <div className="account-container flex-ccc">
        <div ref={loginRef} className="account-sub-container">
          <div className="">
            <section className="heading">
              <div className="flex-c">
                <Logo />
              </div>
              <h1 className="gradient__text">Sign In</h1>

              {/* <p>Please Login</p> */}
            </section>
            <section className="form">
              <form onSubmit={onSubmit}>
                <div className="form-group">
                  <input
                    className={validEmail ? "valid" : "invalid"}
                    id={email ? "email" : "idle-email"}
                    type="email"
                    name="email"
                    value={email}
                    placeholder="Email"
                    aria-invalid={validEmail ? "false" : "true"}
                    aria-describedby="email"
                    onChange={(e) => setEmail(e.target.value)}
                    onFocus={() => setEmailFocus(true)}
                    onBlur={() => setEmailFocus(false)}
                  />
                </div>
                <div className="form-group">
                  <input
                    className={validPwd ? "valid" : "invalid"}
                    id={password ? "password" : "idle-password"}
                    type="password"
                    name="password"
                    value={password}
                    placeholder="Password"
                    aria-invalid={validPwd ? "false" : "true"}
                    aria-describedby="password"
                    onChange={(e) => setPassword(e.target.value)}
                    onFocus={() => setPwdFocus(true)}
                    onBlur={() => setPwdFocus(false)}
                  />
                </div>

                <p
                  id="errMsg"
                  className={errMsg ? "errMsg" : "offscreen"}
                  aria-live="assertive"
                >
                  {" "}
                  {someMessage}{" "}
                </p>
                <div className="form-group">
                  {/* <button type='submit' className='btn btn-block'> */}
                  <button
                    type="submit"
                    className={
                      !validEmail || !validPwd ? "btn-signup" : "btn-valid"
                    }
                  >
                    {" "}
                    Log In{" "}
                  </button>
                  <p className="sign-in already  flex-c">
                    Not registered yet?{" "}
                    <span
                      href="#"
                      className="sign-i "
                      onClick={showRegister}
                    ></span>{" "}
                  </p>
                  <button className={"btn-valid"} onClick={showRegister}>
                    {" "}
                    Sign Up{" "}
                  </button>

                  {/* <br /> */}
                  <p className="terms">
                    By signing up you agree to CBE School Fee{" "}
                    <a href="#" className="terms-a">
                      {" "}
                      <u> terms and conditions</u>
                    </a>
                  </p>
                </div>
                <img src={CbeLogoSmall} alt="" />
              </form>
            </section>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
