import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import "./submenusStyles.css";
import { useState, useRef, useEffect } from "react";
import school_icon from "../../pages/LandingPage/images/school-svg.svg";
import edit_icon from "../../pages/LandingPage/images/edit-svg.svg";
import { setPopup, setPopupType } from "../../features/popups/popupSlice";
import find_icon from "../../pages/LandingPage/images/find-2.svg";
import arrow_red from "../../pages/LandingPage/images/arrow-red.svg";
import arrow_green from "../../pages/LandingPage/images/arrow-green.svg";
import arrow_purple from "../../pages/LandingPage/images/arrow-purple.svg";
import useClickAway from "../../hooks/useClickAway";
import useKeyToClose from "../../hooks/useKeyToClose";

const SchoolsSubmenu = () => {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);
  const { popup } = useSelector((state) => state.popups);

  const addSchoolsPath = user && user.roles === 2001 ? "./createSchool" : "/";
  const editSchoolsPath = user && user.roles === 2001 ? "./editSchool" : "/";
  const findSchoolsPath = user && user.roles === 2001 ? "./findSchool" : "/";

  const addSchoolsRef = useRef();
  const editSchoolRef = useRef();
  const findSchoolRef = useRef();

  const [openAddSchools, setOpenAddSchools] = useState(false);
  const [openEditSchools, setOpenEditSchools] = useState(false);
  const [openFindSchools, setOpenFindSchools] = useState(false);

  const showLogin = () => {
    // dispatch(setPopup(!popup));
    dispatch(setPopupType("Login"));
  };
  // 
  
  return (
    <div className="submenu-container schools-submenu-container">
      <ul>
        <div>
          <li className="sgs">
            <Link
              className="submenu-link"
              to={addSchoolsPath}
              onClick={() => {
                setOpenAddSchools((openAddSchools) => !openAddSchools);
                setOpenEditSchools(false);
                setOpenFindSchools(false);
              }}
            >
              <div className="sg add_schools-sg ">
                <img
                  className="sm-bullet-img"
                  src={school_icon}
                  alt="School Icon"
                />
                <div className="stg add_schools-stg">
                  <div className="sub-menu--main flex-cs">
                    <h4>Manage Schools</h4>
                    {!user && openAddSchools && (
                      <div onClick={showLogin} className="need_to_login">
                        <h4> Login Needed!</h4>
                      </div>
                    )}
                  </div>
                  <div className="submenu--description">
                    <p>Register your school to CbePay ...</p>
                    <p>Advertise your school with CbePay ...</p>
                  </div>
                </div>
                <div className="arrow_img">
                  <img
                    id="green-arrow-img"
                    className="arrow-img"
                    src={arrow_green}
                    alt=""
                  />
                </div>
              </div>
            </Link>
          </li>
          <li className="sgs">
            <Link
              className="submenu-link"
              to={editSchoolsPath}
              onClick={() => {
                setOpenEditSchools((openEditSchools) => !openEditSchools);
                setOpenAddSchools(false);
                setOpenFindSchools(false);
              }}
            >
              {user && (
                <div className="sg edit_schools-sg">
                  <img
                    className="sm-bullet-img"
                    src={edit_icon}
                    alt="Edit Icon"
                  />
                  <div className="stg edit_schools-stg">
                    <div className="sub-menu--main flex-cs">
                      <h4>Edit School Info</h4>
                      {!user && openEditSchools && (
                        <div className="need_to_login">
                          <h4> Login Needed!</h4>
                        </div>
                      )}
                    </div>
                    <p>Edit some details of your school ...</p>
                  </div>
                  <div className="arrow_img">
                    <img
                      id="purpple-arrow-img"
                      className="arrow-img"
                      src={arrow_purple}
                      alt=""
                    />
                  </div>
                </div>
              )}
            </Link>
          </li>
          <li className="sgs">
            <Link
              className="submenu-link"
              to={findSchoolsPath}
              onClick={() => {
                setOpenFindSchools((openFindSchools) => !openFindSchools);
                setOpenEditSchools(false);
                setOpenAddSchools(false);
              }}
            >
              <div className="sg find_schools-sg">
                <img
                  className="sm-bullet-img"
                  src={find_icon}
                  alt="Find or Search Icon"
                />
                {!user ? (
                  <div className="stg find_schools-stg">
                    <div className="sub-menu--main flex-cs">
                      <h4>Find a School</h4>
                      {!user && openFindSchools && (
                        <div className="need_to_login">
                          <h4> Login Needed!</h4>
                        </div>
                      )}
                    </div>
                    <p>
                      For students, easily find your school &amp; make instant
                      school fee payments ...
                    </p>
                  </div>
                ) : (
                  <div className="stg find_schools-stg">
                    <div className="sub-menu--main flex-cs">
                      <h4>Dashboard</h4>
                      {!user && openFindSchools && (
                        <div className="need_to_login">
                          <h4> Login Needed!</h4>
                        </div>
                      )}
                    </div>
                    <p>
                      Manage your school's and all other things from your
                      dashboard.
                    </p>
                  </div>
                )}
                <div className="arrow_img">
                  <img
                    id="red-arrow-img"
                    className="arrow-img"
                    src={arrow_red}
                    alt=""
                  />
                </div>
              </div>
            </Link>
          </li>
        </div>
      </ul>
    </div>
  );
};

export default SchoolsSubmenu;
