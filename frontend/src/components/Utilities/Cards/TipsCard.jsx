import "../../../Styles/tipsStyles.css";
import { useEffect, useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setPopup, setPopupType } from "../../../features/popups/popupSlice";
import TipsAcceptButton from "../Buttons/TipsAcceptButton";
import TipsDeclineButton from "../Buttons/TipsDeclineButton";
const TipsCard = ({
  tipsCardTitle,
  tipsCardMessage,
  tipsCardAcceptLabel,
  tipsCardDeclineLabel,
}) => {
  const dispatch = useDispatch();
  const { popup } = useSelector((state) => state.popups);
  const escFunction = useCallback(
    (event) => {
      if (event.key === "Escape") {
        dispatch(setPopup(!popup));
      }
    },
    [popup]
  );
  useEffect(() => {
    document.addEventListener("keydown", escFunction, false);
    return () => {
      document.removeEventListener("keydown", escFunction, false);
    };
  }, []);
  const handlePopup = () => {
    dispatch(setPopup(!popup));
    dispatch(setPopupType(""));
  };
  return (
    <div className="tips-main--container flex">
      <div className="tips-container">
        <div
          // onClick={() => dispatch(setPopup(!popup))}
          onClick={() => handlePopup()}
          className="tips-card--close flex"
        >
          x
        </div>
        <div className="tips-card--body">
          {" "}
          <div className="tips-card--title">{tipsCardTitle}</div>
          <div className="tips-card--message">{tipsCardMessage}</div>
          <div
            className={
              tipsCardAcceptLabel && tipsCardDeclineLabel
                ? "tips-card--nav flex-cs"
                : "tips-card--nav flex-ccc"
            }
          >
            {tipsCardDeclineLabel && (
              <div className="tips-card-decline">
                <TipsDeclineButton label={tipsCardDeclineLabel} />
              </div>
            )}
            {tipsCardAcceptLabel && (
              <div
                className="tips-card-accept flex-end"
                onClick={() => handlePopup()}
              >
                <TipsAcceptButton label={tipsCardAcceptLabel} />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TipsCard;
