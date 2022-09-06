import RemoveButton from "../Buttons/RemoveButton";
import "../../../Styles/dynamicButtonsStyle.css";
import { useSelector } from "react-redux";
import AddMoreButton from "../Buttons/AddMoreButton";
const DynamicSchoolAchievements = ({
  formData,
  handleAchievementsChange,
  removeAchivements,
  handleAchivements,
}) => {
  const { popup } = useSelector((state) => state.popups);
  const formDataAchievements = [...formData.schoolAchievements];
  return (
    <>
      {formDataAchievements.map((singleAchievement, index) => (
        <div key={index}>
          <div className="flex-w input-group__container">
            {/* <div className=" flex-cr inputs input--above-medium">
              <input
                className={popup ? " inactive-bg" : " "}
                tabIndex={10}
                name="achievement"
                type="text"
                id="achievement"
                value={singleAchievement.achievement}
                onChange={(e) => handleAchievementsChange(e, index)}
              />
              <label>
                {" "}
                <p>{dataDescription}</p>
              </label>
            </div> */}

            <div className="flex flex-start">
              <div className="flex-cr input__group inputs input--large">
                <input
                  className={popup ? " inactive-bg" : " "}
                  tabIndex={10}
                              name="achievement"
                              placeholder="e.g. Ranked 3rd for best school of 2016"
                  type="text"
                  id="achievement"
                  value={singleAchievement.achievement}
                  onChange={(e) => handleAchievementsChange(e, index)}
                />
                {/* <label>
                  {" "}
                  <p>{dataDescription}</p>
                </label> */}
                <label htmlFor="achievements">
                  {" "}
                  <p>Achievements (Optional but important!)</p>
                </label>
                <br />
              </div>
            </div>
            <RemoveButton removables={removeAchivements} index={index} />
          </div>
          {/* More achievemets adding button */}
          {formDataAchievements.length - 1 === index &&
          formDataAchievements.length < 4 ? (
            <AddMoreButton
              label="Add more achievement"
              handleLinks={handleAchivements}
            />
          ) : (
            ""
          )}
        </div>
      ))}
    </>
  );
};

export default DynamicSchoolAchievements;
