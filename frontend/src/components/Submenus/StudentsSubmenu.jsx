import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useRef, useState, useEffect } from "react";
import student_icon from "../../pages/LandingPage/images/student.svg";
import student_status from "../../pages/LandingPage/images/student_status.svg";
import edit_icon from "../../pages/LandingPage/images/edit-yellow.svg";
import arrow_green from "../../pages/LandingPage/images/arrow-green.svg";
import arrow_yellow from "../../pages/LandingPage/images/arrow-yellow.svg";
import arrow_purple from "../../pages/LandingPage/images/arrow-purple.svg";
import "./submenusStyles.css";
const StudentsSubmenu = () => {
  const { user } = useSelector((state) => state.auth);
  const registerStudentsPath =
    user && user.roles === 2001 ? "./registerStudent" : "/";
  const studentStatusPath =
    user && user.roles === 2001 ? "./studentStatus" : "/";
  const editStudentsPath =
    user && user.roles === 2001 ? "./studentStatus" : "/";
  const registerStudentsRef = useRef();
  const studentStatusRef = useRef();
  const editStudentsRef = useRef();

  const [openRegisterStudent, setOpenRegisterStudent] = useState(false);
  const [openStudentStatus, setOpenStudentStauts] = useState(false);
  const [openEditStudentInfo, setOpenEditStudentInfo] = useState(false);

  useEffect(() => {
    let handler = (event) => {
      if (
        registerStudentsRef.current != null &&
        !registerStudentsRef.current.contains(event.target)
      ) {
        setOpenRegisterStudent(false);
      }
      if (
        studentStatusRef.current != null &&
        !studentStatusRef.current.contains(event.target)
      ) {
        setOpenStudentStauts(false);
      }
      if (
        editStudentsRef.current != null &&
        !editStudentsRef.current.contains(event.target)
      ) {
        setOpenEditStudentInfo(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => {
      document.addEventListener("mousedown", handler);
    };
  }, [registerStudentsRef, studentStatusRef, editStudentsRef]);
  return (
    <>
      <div className="submenu-container students-submenu-container">
        <ul>
          <div>
            <li>
              <Link
                ref={registerStudentsRef}
                className="submenu-link"
                to={registerStudentsPath}
                onClick={() => {
                  setOpenRegisterStudent(
                    (openRegisterStudent) => !openRegisterStudent
                  );
                  setOpenStudentStauts(false);
                  setOpenEditStudentInfo(false);
                }}
              >
                {user && (
                  <div className="sg register_students-sg">
                    <img
                      className="sm-bullet-img"
                      src={student_icon}
                      alt="a Child Student Icon"
                    />
                    <div className="stg register_students-stg">
                      <div className="login_warnning">
                        <h4>Register Students</h4>
                        {!user && openRegisterStudent && (
                          <div className="need_to_login">
                            <h4>Login Needed!</h4>
                          </div>
                        )}
                      </div>
                      <p>Register Students to a specific school</p>
                    </div>
                    <div className="arrow_img">
                      <img
                        id="purpple-arrow-img"
                        className="arrow-img"
                        src={arrow_green}
                        alt=""
                      />
                    </div>
                  </div>
                )}
              </Link>
            </li>
            <li>
              <Link
                ref={studentStatusRef}
                className="submenu-link"
                to={studentStatusPath}
                onClick={() => {
                  setOpenRegisterStudent(false);
                  setOpenStudentStauts(
                    (openRegisterStudent) => !openRegisterStudent
                  );
                  setOpenEditStudentInfo(false);
                }}
              >
                <div className="sg student_status-sg">
                  <img
                    className="sm-bullet-img"
                    src={student_status}
                    alt="Check Icon"
                  />
                  <div className="stg student_status-stg">
                    <div className="login_warnning">
                      <h4>Student Status</h4>
                      {!user && openStudentStatus && (
                        <div className="need_to_login">
                          <h4>Login Needed!</h4>
                        </div>
                      )}
                    </div>
                    <div className="submenu--description">
                      <p>Check your registration status</p>
                      <p>Check your payment status . . .</p>
                      {/* <p>Check your payment, registration and other status</p> */}
                    </div>
                  </div>
                  <div className="arrow_img">
                    <img
                      id="green-arrow-img"
                      className="arrow-img"
                      src={arrow_purple}
                      alt=""
                    />
                  </div>
                </div>
              </Link>
            </li>
            <li>
              <Link
                ref={editStudentsRef}
                className="submenu-link"
                to={editStudentsPath}
                onClick={() => {
                  setOpenRegisterStudent(false);
                  setOpenStudentStauts(false);
                  setOpenEditStudentInfo(
                    (openRegisterStudent) => !openRegisterStudent
                  );
                }}
              >
                {user && (
                  <div className="sg edit_students-sg">
                    <img
                      className="sm-bullet-img"
                      src={edit_icon}
                      alt="Edit Icon"
                    />
                    <div className="stg edit_students-stg">
                      <div className="login_warnning">
                        <h4>Edit Students info</h4>
                        {!user && openEditStudentInfo && (
                          <div className="need_to_login">
                            <h4>Login Needed!</h4>
                          </div>
                        )}
                      </div>
                      <p>
                        Easily find and edit a student based on schools or their
                        ID
                      </p>
                    </div>
                    <div className="arrow_img">
                      <img
                        id="yellow-arrow-img"
                        className="arrow-img"
                        src={arrow_yellow}
                        alt=""
                      />
                    </div>
                  </div>
                )}
              </Link>
            </li>
          </div>
        </ul>
      </div>
    </>
  );
};

export default StudentsSubmenu;
