import more from "../../Assets/Images/more.svg";
import "../../Styles/navigationMenuStyles.css";
import SchoolsSubmenu from "../Submenus/SchoolsSubmenu";
import StudentsSubmenu from "../Submenus/StudentsSubmenu";
import PaymentsSubmenu from "../Submenus/PaymentsSubmenu";
import { useState } from "react";
import SignInButton from "../Utilities/Buttons/SignInButton";

const NavigationMenu = () => {
  const [schoolsDropdown, setSchoolsDropdown] = useState(false);
  const [studentsDropdown, setStudentsDropdown] = useState(false);
  const [paymentsDropdown, setPaymentsDropdown] = useState(false);
 
  return (
    <>
      <nav className="navigation_menu-container">
        {/* {popupType === "Login" && (
        <div className="flex-ccca">
          <Login />
        </div>
      )} */}
        <ul>
          <li
            onMouseEnter={() => {
              setSchoolsDropdown(true);
            }}
            onMouseLeave={() => {
              setSchoolsDropdown(false);
            }}
          >
            <div className="mg schools-mg">
              <p className="mg-link">Schools &nbsp;</p>
              <img className="more" src={more} alt="More arrow Icon" />
            </div>
            {schoolsDropdown && <SchoolsSubmenu />}
          </li>
          <li
            onMouseEnter={() => {
              setStudentsDropdown(true);
            }}
            onMouseLeave={() => {
              setStudentsDropdown(false);
            }}
          >
            <div className="mg students-mg">
              <p className="mg-link">Students &nbsp;</p>
              <img className="more" src={more} alt="More arrow Icon" />
            </div>
            {studentsDropdown && <StudentsSubmenu />}
          </li>
          <li
            onMouseEnter={() => {
              setPaymentsDropdown(true);
            }}
            onMouseLeave={() => {
              setPaymentsDropdown(false);
            }}
          >
            <div className="mg payments-mg">
              <p className="mg-link">Payments &nbsp;</p>
              <img className="more" src={more} alt="More arrow Icon" />
            </div>
            {paymentsDropdown && <PaymentsSubmenu />}
          </li>
          <li>
            <div className="mg receipts-mg">
              <p className="mg-link">Receipts&nbsp;</p>
            </div>
          </li>
          <li>
            <div className="mg about_us-mg">
              <p className="mg-link">About Us</p>
            </div>
          </li>
        
        </ul>
      </nav>
    </>
  );
};

export default NavigationMenu;
