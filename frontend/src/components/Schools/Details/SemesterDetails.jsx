import SmallCard from "../../Utilities/Cards/SmallCard";
import { useState } from "react";
// An array of social medias
const semesters = [
  { id: "1", label: "Semesters", value: "semister" },
  { id: "2", label: "Term", value: "term" },
];

const SemesterDetails = ({ formData, setFormData }) => {
  const formDataSemester = [...formData.link];

  function handleSemesterSelect(e, index) {
    // const { name, value } = e.target;
    // const socialLinks = formDataSemester;
    // socialLinks[index][name] = value;
    // setFormData({ ...formData, link: socialLinks });

    setTermorSemister(e.target.value);
  }

  const handleDurationChange = (e, index) => {
    const { name, value } = e.target;
    const urls = formDataSemester;
    urls[index][name] = value;
    setFormData({ ...formData, link: urls });
  };

  const [termOrSemister, setTermorSemister] = useState("Semister");

  return (
    <section>
      {/* INITIAL SEMESTER AND DURATION FIELD */}
      <div className="flex input-group__container">
        <div className="input__group flex-c">
          <div className="flex-cr inputs input--medium">
            <input
              className={formData.schoolName ? " filled--input" : ""}
              type="text"
              value={formData.schoolName}
              // ref={schoolNameRef}
              placeholder={termOrSemister === "Term" ? "Term I" : "Semister I"}
              tabIndex={1}
              onChange={(event) =>
                setFormData({ ...formData, schoolName: event.target.value })
              }
            />
            <label htmlFor="school-name">
              <p>{termOrSemister}</p>
            </label>
            <br />
          </div>
        </div>
        <div className="input__group flex-c">
          <div className="flex-cr inputs input--medium ">
            <input
              type="text"
              className={formData.schoolEmail ? " filled--input" : ""}
              tabIndex={2}
              placeholder={termOrSemister === "Term" ? "6 Months" : "4 Months"}
              value={formData.schoolEmail}
              onChange={(event) => {
                setFormData({
                  ...formData,
                  schoolEmail: event.target.value,
                });
              }}
            />{" "}
            <label htmlFor="school-email">
              {" "}
              <p>Duration</p>
            </label>
            <br />
          </div>
        </div>
      </div>
      {/* REALTIME SCHOOL CARDS SECTION */}
      {/* <SmallCard formData={formData} /> */}
    </section>
  );
};

export default SemesterDetails;
