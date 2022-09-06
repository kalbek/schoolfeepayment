import AddMoreButton from "../Utilities/Buttons/AddMoreButton";
import RemoveLinksButton from "../Utilities/Buttons/RemoveLinksButton";
import DynamicSocialLinks from "../Utilities/DynamicFields/DynamicSocialLinks";
import SchoolDetails from "./SchoolDetails";
import "../../Styles/utilities.css";
import "../../Styles/formStyles.css";
import { useRef, useEffect } from "react";

const TermsAndSemisters = ({ formData, setFormData }) => {
    const formDataLinks = [...formData.link];
  const handleLinks = () => {
    formData.link.length < 4 &&
      setFormData({
        ...formData,
        link: [...formDataLinks, { link: "Website", url: "" }],
      });
  };

  // handling dropdowns select events for social medias section
  function handleSocialLinksSelect(e, index) {
    const { name, value } = e.target;
    const socialLinks = formDataLinks;
    socialLinks[index][name] = value;
    setFormData({ ...formData, link: socialLinks });
  }

  // handling url's change for input boxes (social media)
  const handleUrlsChange = (e, index) => {
    const { name, value } = e.target;
    const urls = formDataLinks;
    urls[index][name] = value;
    setFormData({ ...formData, link: urls });
  };

  // handling removals of social media options
  const removeLinks = (index) => {
    const list = formDataLinks;
    list.splice(index, 1);
    setFormData({ ...formData, link: list });
  };

  const removeAllLinks = () => {
    const list = formDataLinks;
    list.splice(0, list.length);
    setFormData({ ...formData, link: list });
  };

  // An array of social medias
  const socialMedia = [
    { id: "1", label: "Website", value: "website" },
    { id: "2", label: "Facebook", value: "facebook" },
    { id: "3", label: "Twitter", value: "twitter" },
    { id: "4", label: "Telegram", value: "telegram" },
  ];

  const schoolNameRef = useRef();
  useEffect(() => {
    if (schoolNameRef.current) schoolNameRef.current.focus();
  }, [schoolNameRef]);
  return (
    <div className="form__pages">
      {/* Main titles section */}
      <div>
        <h1 className="form__titles">
          Now let's talk about semisters and terms?
        </h1>
        <h3 className="form__subtitle">Provide semister details as exactly being designed in your school!</h3>
      </div>
      {/* School Info forms section */}
      <SchoolDetails
        formData={formData}
        schoolNameRef={schoolNameRef}
        setFormData={setFormData}
      />
      {/* social links selection section */}
      {formData.link.length >= 1 ? (
        <RemoveLinksButton remove={removeAllLinks} />
      ) : (
        <></>
      )}
      <DynamicSocialLinks
        formData={formData}
        handleSocialLinksSelect={handleSocialLinksSelect}
        socialMedia={socialMedia}
        handleUrlsChange={handleUrlsChange}
        removeLinks={removeLinks}
        handleLinks={handleLinks}
      />

      {/* Initial Social link adding button */}
      {formDataLinks.length === 0 ? (
        <AddMoreButton label="Add Social Links" handleLinks={handleLinks} />
      ) : (
        ""
      )}
      
    </div>
  )
}

export default TermsAndSemisters