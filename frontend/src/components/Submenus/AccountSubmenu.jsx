import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import student_icon from "../../pages/LandingPage/images/student.svg";
import student_status from "../../pages/LandingPage/images/student_status.svg";
import signin_icon from "../../pages/LandingPage/images/signin.svg";
import signout_icon from "../../pages/LandingPage/images/signout.svg";
import settings_icon from "../../pages/LandingPage/images/settings.svg";
import user_icon from "../../pages/LandingPage/images/user-account-icon.svg";
import admin_icon from "../../pages/LandingPage/images/admin.svg";
import "./submenusStyles.css";

import { logout, reset } from "../../features/auth/authSlice";
import "./submenusStyles.css";

const AccountSubmenu = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);
  const onLogout = () => {
    dispatch(logout());
    dispatch(reset());
    navigate("/");
  };
  let user_value = {
    name: "some_user",
    email: "example@yahoo.com",
    role: "2001",
  };
  if (user) user_value = user;
  return (
    <>
      <div className="account-submenu-container">
        <div className="account__header">
          <h4>Account</h4>
        </div>
        <div className="account__main">
          <div className="user-circle">
            <h4>{"U"}</h4>
          </div>
          <div className="user-info__section">
            <h3>
              {"Sign In"}
            </h3>
            <p>{user ? user_value.email : "user@example.com"}</p>
          </div>
          <div className="optional-accounts__section">
            <div className="mini__circle">
              {!user ? (
                <Link to={"/login"}>
                  <img
                    className="user-bg__img"
                    src={signin_icon}
                    alt="User_img"
                  />
                </Link>
              ) : (
                <img
                  onClick={onLogout}
                  className="user-bg__img user-bg_sign-out"
                  src={signout_icon}
                  alt="sign out"
                />
              )}
            </div>
            {/* register circle button */}
            {!user ? (
              <div className="mini__circle">
                <Link to={"/register"}>
                  <img
                    className="user-bg__img"
                    src={user_icon}
                    alt="User_img"
                  />
                </Link>
              </div>
            ) : (
              <></>
            )}
            {/* settings circle button */}
            <div className="mini__circle">
              <Link to={user ? "/login" : "/login"}>
                <img
                  className="user-bg__img"
                  src={settings_icon}
                  alt="User_img"
                />
              </Link>
            </div>
          </div>
          <div>
            <div className="accounts__manage">
              <div className="manage manage__users">
                {/* manage account icon section */}
                {!user ? (
                  <Link className="manageLink" to={"/login"}>
                    <img
                      className="user-bg__img"
                      src={signin_icon}
                      alt="Sign In Icon"
                    />
                  </Link>
                ) : (
                  <img
                    onClick={onLogout}
                    className="user-bg__img"
                    src={signout_icon}
                    alt="sign out Icon"
                  />
                )}
                {/* manage account text section */}
                <div>
                  {user ? (
                    <p onClick={onLogout}>SignOut</p>
                  ) : (
                    <Link
                      style={{ textDecoration: "none" }}
                      className="manageLink"
                      to={"/login"}
                    >
                      <p>SignIn</p>
                    </Link>
                  )}
                </div>
              </div>
              {!user ? (
                <div className="manage manage__users">
                  <img
                    onClick={onLogout}
                    className="user-bg__img"
                    src={user_icon}
                    alt="sign out Icon"
                  />
                  <div>
                    <Link
                      style={{ textDecoration: "none" }}
                      className="manageLink"
                      to={"/register"}
                    >
                      <p>Create New Account</p>
                    </Link>
                  </div>
                </div>
              ) : (
                <div className="create_new_empty"></div>
              )}
              <hr></hr>

              <div className="manage manage__users">
                {!user ? (
                  <Link
                    className="manage_users_admin"
                    style={{ textDecoration: "none" }}
                    to={"/registerAdmin"}
                  >
                    <img
                      className="admin__img"
                      src={admin_icon}
                      alt="admin icon"
                    />
                    <p>Admin SignUp</p>
                  </Link>
                ) : (
                  <div className="account_copyright">
                    <p>&copy; 2022, Commercial Bank of Ethiopia</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
        <div className="account__footer"></div>
      </div>
    </>
  );
};

export default AccountSubmenu;
