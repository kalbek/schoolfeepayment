import RemoveButton from "../Buttons/RemoveButton";
import "../../../Styles/dynamicButtonsStyle.css";
import { useSelector } from "react-redux";
import AddMoreButton from "../Buttons/AddMoreButton";
const DynamicSocialLinks = ({
  formData,
  handleSocialLinksSelect,
  socialMedia,
  handleUrlsChange,
  removeLinks,
  handleLinks,
  fieldDescription,
  dataDescription,
}) => {
  const { popup } = useSelector((state) => state.popups);
  const formDataLinks = [...formData.link];

  return (
    <>
      {formDataLinks.map((singleTerm, index) => (
        <div key={index}>
          <div className="flex-w input-group__container">
            {/* social links dropdown */}
            <div className="input__group flex-cr inputs input--above-small">
              <select
                className={popup ? "inactive-bg" : "select-box"}
                name="link"
                id="link"
                onChange={(e) => handleSocialLinksSelect(e, index)}
                tabIndex={9}
                value={singleTerm.link}
              >
                {/* {mediaitems} */}
                {socialMedia.map((media) => (
                  <option key={media.value}>{media.label}</option>
                ))}
              </select>
              <label htmlFor="link">
                {" "}
                <p>{fieldDescription}</p>
              </label>
            </div>
            {/* the input for dropdown (social url input)*/}
            <div className=" flex-cr inputs input--above-medium">
              <input
                className={popup ? " inactive-bg" : " "}
                tabIndex={10}
                name="url"
                type="text"
                id="url"
                value={singleTerm.url}
                onChange={(e) => handleUrlsChange(e, index)}
              />
              <label htmlFor="socialLinks-phone">
                {" "}
                <p>{dataDescription}</p>
              </label>
            </div>
            <RemoveButton removables={removeLinks} index={index} />
          </div>
          {/* More social links adding button */}
          {formDataLinks.length - 1 === index && formDataLinks.length < 4 ? (
            <AddMoreButton label="Add one more Social link" handleLinks={handleLinks} />
          ) : (
            ""
          )}
        </div>
      ))}
    </>
  );
};

export default DynamicSocialLinks;
