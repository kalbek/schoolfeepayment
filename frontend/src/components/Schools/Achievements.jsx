import AddMoreButton from "../Utilities/Buttons/AddMoreButton";
import RemoveLinksButton from "../Utilities/Buttons/RemoveLinksButton";
import DynamicSchoolAchievements from "../Utilities/DynamicFields/DynamicSchoolAchievements";
import "../../Styles/utilities.css";
import "../../Styles/formStyles.css";
const Achievements = ({ formData, setFormData }) => {
  const formDataAchievements = [...formData.schoolAchievements];

  const handleAchivements = () => {
    formData.schoolAchievements.length < 4 &&
      setFormData({
        ...formData,
        schoolAchievements: [
          ...formDataAchievements,
          { schoolAchievements: " " },
        ],
      });
  };
  // handling achievements change for input boxes (social media)
  const handleAchievementsChange = (e, index) => {
    const { name, value } = e.target;
    const achievement = formDataAchievements;
    achievement[index][name] = value;
    setFormData({ ...formData, schoolAchievements: achievement });
  };
  // handling removals of achivements
  const removeAchivements = (index) => {
    const achievement = formDataAchievements;
    achievement.splice(index, 1);
    setFormData({ ...formData, schoolAchievements: achievement });
  };

  const removeAllAchievements = () => {
    const achievement = formDataAchievements;
    achievement.splice(0, achievement.length);
    setFormData({ ...formData, schoolAchievements: achievement });
  };

  return (
    <>
      <div className="form--container">
        <h1 className="form__titles-big pt20">
          {" "}
          Great, now let's fill out your
          <span className="form__titles-big">
            <span> </span>schools Achievements
          </span>
        </h1>
        <h3 className="form__sub-titles-main">Few things you need to know:</h3>
        <div className="form__sub-titles-basic">
          <ul className="disk-styled-list form-list">
            <li>
              Every thing you mention about your school's success in the past
              will highly benefit your schools image
            </li>
            <li>
              The more achievements you fill, the more customers you attract
            </li>
          </ul>
        </div>
      </div>
      <br />

      {formData.schoolAchievements.length > 1 ? (
        <RemoveLinksButton
          remove={removeAllAchievements}
          label={"Remove all achievements"}
        />
      ) : (
        <></>
      )}
      <DynamicSchoolAchievements
        formData={formData}
        handleAchievementsChange={handleAchievementsChange}
        removeAchivements={removeAchivements}
        handleAchivements={handleAchivements}
        dataDescription={"Achivements"}
      />
      {formDataAchievements.length === 0 ? (
        <AddMoreButton
          label="Add Achievements"
          handleLinks={handleAchivements}
        />
      ) : (
        ""
      )}
    </>
  );
};

export default Achievements;
