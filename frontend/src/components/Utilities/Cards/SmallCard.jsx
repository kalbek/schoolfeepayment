import { useSelector, useDispatch } from "react-redux";
import { setPopup } from "../../../features/popups/popupSlice";
import "../../../Styles/smallCardStyle.css";
const SmallCard = ({ formData }) => {
  const { popup } = useSelector((state) => state.popups);
  const dispatch = useDispatch();
  const formDataLinks = [...formData.link];
  return (
    <div
      className={
        popup ? " inactive-bg realtime-school-card" : "realtime-school-card"
      }

      onClick={() => dispatch(setPopup(!popup))}
    >
      {/* card header */}
      <div className="schoolInfo-card__header">
        {/* card school name */}
        {formData.schoolName ? (
          <p className="cared-label__value"> {formData.schoolName}</p>
        ) : (
          <p className="card--label">School Name:&nbsp;</p>
        )}
        {/* card school email */}
        {formData.schoolEmail ? (
          <div className="card-label">
            <p className="card--label">Email:&nbsp;</p>{" "}
            <p className="cared-label__value"> {formData.schoolEmail}</p>{" "}
          </div>
        ) : (
          <p className="card-label card--label">Email </p>
        )}
      </div>
      {/* card body */}
      <div className="schoolInfo-card__body">
        {/* card school level */}
        {formData.schoolLevel ? (
          <div className="card-label">
            <p className="card--label">School Level:&nbsp;</p>{" "}
            <p className="cared-label__value"> {formData.schoolLevel}</p>{" "}
          </div>
        ) : (
          <p className="card-label card--label">School Level </p>
        )}
        {/* card school city */}
        {formData.schoolCity ? (
          <div className="card-label">
            <p className="card--label">City:&nbsp;</p>{" "}
            <p className="cared-label__value"> {formData.schoolCity}</p>{" "}
          </div>
        ) : (
          <p className="card-label card--label">City </p>
        )}
        {/* card school phone */}
        {formData.schoolPhone ? (
          <div className="card-label">
            <p className="card--label">Phone:&nbsp;</p>{" "}
            <p className="cared-label__value"> {formData.schoolPhone}</p>{" "}
          </div>
        ) : (
          <p className="card-label card--label">Phone </p>
        )}
        {/* card school label */}
        {formData.schoolSubcity ? (
          <div className="card-label">
            <p className="card--label">Subcity:&nbsp;</p>{" "}
            <p className="cared-label__value"> {formData.schoolSubcity}</p>{" "}
          </div>
        ) : (
          <p className="card-label card--label">Subcity </p>
        )}
        {/* card school subcity */}
        {formData.schoolKebele ? (
          <div className="card-label">
            <p className="card--label">Kebele:&nbsp;</p>{" "}
            <p className="cared-label__value"> {formData.schoolKebele}</p>{" "}
          </div>
        ) : (
          <p className="card-label card--label">Kebele </p>
        )}
        {/* card school kebele */}
        {formData.schoolWoreda ? (
          <div className="card-label">
            <p className="card--label">Woreda:&nbsp;</p>{" "}
            <p className="cared-label__value"> {formData.schoolWoreda}</p>{" "}
          </div>
        ) : (
          <p className="card-label card--label">Woreda </p>
        )}
        {/* card social link */}
        <section>
          {formDataLinks.map((value, index) => (
            <div key={index} className="inline-block">
              {Object.values(value).map((v, i) => (
                <p key={i}>{v}&nbsp;</p>
              ))}
            </div>
          ))}
        </section>
      </div>
    </div>
  );
};

export default SmallCard;
