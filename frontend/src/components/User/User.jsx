import userIcon from "./UserAssets/user-account.svg";
import "./userStyle.css";
import AccountsSubmenu from "../Submenus/AccountSubmenu";
import { useSelector, useDispatch } from "react-redux";
import { useState, useEffect, useRef } from "react";
import { setPopup, setPopupType } from "../../features/popups/popupSlice";
import SignInButton from "../Utilities/Buttons/SignInButton";

const User = () => {
  const dispatch = useDispatch();
  const { popup } = useSelector((state) => state.popups);
  const { popupType } = useSelector((state) => state.popups);
  const showLogin = () => {
    dispatch(setPopup(!popup));
    dispatch(setPopupType("Login"));
  };
  const [open, setOpen] = useState(false);
  const { user } = useSelector((state) => state.auth);
  const accountRef = useRef();
  useEffect(() => {
    let handler = (event) => {
      if (
        accountRef.current != null &&
        !accountRef.current.contains(event.target)
      ) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => {
      document.removeEventListener("mousedown", handler);
    };
  }, [accountRef]);
  return (
    <>
      {user ? (
        <div
          ref={accountRef}
          className="user-account"
          onClick={() => setOpen((open) => !open)}
        >
          <p>
            <img
              className="btn-account"
              src={userIcon}
              alt="User Account Icon"
            />
            {""}
          </p>
          <ul>
            <li>{open && <AccountsSubmenu />}</li>
          </ul>
        </div>
      ) : (
        <div onClick={showLogin}>
          <SignInButton />
        </div>
      )}
    </>
  );
};

export default User;
