import RemoveButton from "../Buttons/RemoveButton";
import RemoveLinksButton from "../Buttons/RemoveLinksButton";
import "../../../Styles/dynamicButtonsStyle.css";
import { useState } from "react";
import AddMoreButton from "../Buttons/AddMoreButton";
const DynamicPeriods = ({
  formData,
  setFormData,
  handleSemesterSelect,
  handlePeriodDetails,
  removePeriods,
  handlePeriods,
}) => {
  const formDataPeriods = [...formData.annualPeriod];
  const formDataPeriod = [...formData.annualPeriod];
  const setPeriodDetails = (event) => {
    setFormData({
      ...formData,
      annualPeriod: [...formDataPeriod, { period: "Semester", duration: "" }],
    });
  };
  const [termOrSemister, setTermorSemister] = useState("Semester");
  const [days, setDays] = useState("Months");
  function handleSemesterSelect(e, index) {
    // const { name, value } = e.target;
    // const socialLinks = formDataSemester;
    // socialLinks[index][name] = value;
    // setFormData({ ...formData, link: socialLinks });

    setTermorSemister(e.target.value);
  }
  function handleTimeSelect(e, index) {
    // const { name, value } = e.target;
    // const socialLinks = formDataSemester;
    // socialLinks[index][name] = value;
    // setFormData({ ...formData, link: socialLinks });
    setDays(e.target.value);
  }

  const removeAllPeriods = () => {
    const list = formDataPeriods;
    list.splice(0, list.length);
    setFormData({ ...formData, annualPeriod: list });
  };

  const periods = [
    { id: "1", label: "Semesters", value: "semister" },
    { id: "2", label: "Terms", value: "term" },
  ];

  const time = [
    { id: "1", label: "Months", value: "month" },
    { id: "1", label: "Days", value: "days" },
    { id: "1", label: "Years", value: "year" },
  ];
  const vals = [
    {

    }
  ]
  (formData);
  return (
    <>
      <div className="">
        {/* social semesters dropdown */}
        {/* INITIAL PERIOD DROPDOWN */}
        
        <div className="input__group flex-cr inputs input--small">
          <select
            name="semester"
            id="semester"
            onChange={(event) =>
              setFormData({ ...formData, annualPeriod: event.target.value })
            }
            tabIndex={9}
            value={termOrSemister}
          >
            {periods.map((media) => (
              <option key={media.value}>{media.label}</option>
            ))}
          </select>
          <label htmlFor="semester">
            {" "}
            <p>Semisters or Terms</p>
          </label>
        </div>
      </div>
      <div className="input-group__container flex-start">
        {/* INITIAL PERIOD INPUT GROUPS */}
        <div className="input__group ">
          <div className="flex-cr inputs input--above-small">
            <input
              className={formData.schoolName ? " filled--input" : ""}
              type="text"
              // value={singlePeriod.period}
              // ref={schoolNameRef}
              placeholder={
                termOrSemister === "Semester" ? "Semester I" : "Term I"
              }
              tabIndex={1}
              // onChange={(e, index) => handlePeriods(e, index)}
              // onChange={(event) => setFormData({ ...formData, annualPeriod: event.target.value })}
              onChange={(e) => handlePeriodDetails(e)}
            />
            <label htmlFor="school-name">
              <p>{termOrSemister}</p>
            </label>
            <br />
          </div>
        </div>
        <div className="input__group flex-c">
          <div className="flex-cr inputs input--xsmall ">
            <input
              type="text"
              className={formData.schoolEmail ? " filled--input" : ""}
              tabIndex={2}
              placeholder={termOrSemister === "Semester" ? "4" : "6"}
              // value={singlePeriod.duration}

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
        <div className="input__group flex-c">
          <div className="input__group flex-cr inputs input--small">
            <select
              name="semester"
              id="semester"
              onChange={(e) => handleTimeSelect(e)}
              tabIndex={9}
              value={days}
            >
              {/* {mediaitems} */}
              {time.map((time) => (
                <option key={time.value}>{time.label}</option>
              ))}
            </select>
            <label htmlFor="semester">
              {" "}
              <p>Period</p>
            </label>
          </div>
        </div>
      </div>
      <div className="">
        {/* {formDataPeriods.length === 0 ? ( */}
        {formDataPeriods.length === 0 ? (
          <AddMoreButton
            label="Add Periods"
            handleLinks={(e, index) => handlePeriods(e, index)}
          />
        ) : (
          // ""
          <RemoveLinksButton
            remove={removeAllPeriods}
            label={"Remove All Periods"}
          />
        )}
      </div>

      {/* DYNAMIC INPUT GROUPS */}

      {formDataPeriods.map((singlePeriod, index) => (
        <div key={index}>
          <div className="input-group__container flex-start">
            {/* INITIAL PERIOD INPUT GROUPS */}
            <div className="input__group ">
              <div className="flex-cr inputs input--above-small">
                <input
                  className={formData.schoolName ? " filled--input" : ""}
                  type="text"
                  value={singlePeriod.period}
                  // ref={schoolNameRef}
                  placeholder={
                    termOrSemister === "Semester" ? "Semester I" : "Term I"
                  }
                  tabIndex={1}
                  onChange={(event) =>
                    setFormData({
                      ...formData.annualPeriod,
                      annualPeriod: event.target.value,
                    })
                  }
                />
                <label htmlFor="school-name">
                  <p>{termOrSemister}</p>
                </label>
                <br />
              </div>
            </div>
            <div className="input__group flex-c">
              <div className="flex-cr inputs input--xsmall ">
                <input
                  type="text"
                  className={formData.schoolEmail ? " filled--input" : ""}
                  tabIndex={2}
                  placeholder={termOrSemister === "Semester" ? "4" : "6"}
                  value={singlePeriod.duration}
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
            <div className="input__group flex-c">
              <div className="input__group flex-cr inputs input--small">
                <select
                  name="semester"
                  id="semester"
                  onChange={(e) => handleSemesterSelect(e)}
                  tabIndex={9}
                  value={termOrSemister}
                >
                  {/* {mediaitems} */}
                  {time.map((time) => (
                    <option key={time.value}>{time.label}</option>
                  ))}
                </select>
                <label htmlFor="semester">
                  {" "}
                  <p>Semisters / Terms</p>
                </label>
              </div>
            </div>
            <RemoveButton removables={removePeriods} index={index} />
          </div>
        </div>
      ))}
      <div className="">
        {/* {formDataPeriods.length === 0 ? ( */}
        {formDataPeriods.length > 0 && formDataPeriods.length < 20 ? (
          <AddMoreButton
            label="Add One More"
            handleLinks={(e, index) => handlePeriods(e, index)}
          />
        ) : (
          ""
        )}
      </div>
    </>
  );
};

export default DynamicPeriods;

{
}
