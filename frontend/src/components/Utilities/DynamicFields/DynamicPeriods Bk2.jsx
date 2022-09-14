import RemoveButton from "../Buttons/RemoveButton";
import RemoveLinksButton from "../Buttons/RemoveLinksButton";
import "../../../Styles/dynamicButtonsStyle.css";
import { useEffect, useState } from "react";
import AddMoreButton from "../Buttons/AddMoreButton";
const DynamicPeriods = ({
  formData,
  setFormData,
  handleSemesterSelect,
  removePeriods,
  handlePeriods,
}) => {
  const formDataPeriods = [...formData.annualPeriod];
  const formDataPeriod = [...formData.annualPeriod];
  const [selectedRadio, setSelectedRadio] = useState("");
  useEffect(() => {
    setSelectedRadio(selectedRadio);
  }, [selectedRadio]);
  const handleFormRadioSelection = (event) => {
    setSelectedRadio(event.target.value);
    formDataPeriod.length === 0 ? (
      setFormData({
        ...formData,
        annualPeriod: [
          ...formDataPeriod,
          {
            period: event.target.value,
            duration:
              event.target.value === "term"
                ? 4
                : event.target.value === "semester"
                ? 6
                : 2,
            time:
              event.target.value === "term"
                ? "Month"
                : event.target.value === "semester"
                ? "Month"
                : event.target.value === "others"
                ? "days"
                : "",
          },
        ],
      })
    ) : (
      // : setSelectedRadio(event.target.value);
      <></>
    );
  };
  const [termOrSemister, setTermorSemister] = useState("Semester");
  const [days, setDays] = useState("Months");

  function handlePeriodChoice(e, index) {
    setFormData({ ...formData, annualPeriod: e.target.value });
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

  const time = [
    { id: "1", label: "Months", value: "month" },
    { id: "1", label: "Days", value: "days" },
    { id: "1", label: "Years", value: "year" },
  ];

  return (
    <>
      <div className="">
        {/* social semesters dropdown */}
        {/* INITIAL PERIOD DETAILS */}
        <div className="form-radio-group flex-stretch">
          <input
            className="form-radio-button"
            type="radio"
            value="semester"
            checked={formDataPeriod.length > 0 && selectedRadio === "semester"}
            onChange={(event) => handleFormRadioSelection(event)}
            tabIndex={9}
          />
          <p className="form-radio-group form-radio-label">Semesters</p>
          <input
            type="radio"
            value="term"
            className="form-radio-button"
            checked={formDataPeriod.length > 0 && selectedRadio === "term"}
            onChange={(event) => handleFormRadioSelection(event)}
            tabIndex={9}
          />
          <p className="form-radio-group form-radio-label">Terms</p>
          <input
            type="radio"
            className="form-radio-button"
            value="other"
            checked={formDataPeriod.length > 0 && selectedRadio === "other"}
            onChange={(event) => handleFormRadioSelection(event)}
            tabIndex={9}
          />
          <p className="form-radio-group form-radio-label">Others</p>
        </div>
      </div>

      <div className="">
        {formDataPeriods.length > 0 ? (
          <RemoveLinksButton
            remove={removeAllPeriods}
            label={"Remove All Periods"}
          />
        ) : (
          <></>
        )}
      </div>

      {/* DYNAMIC INPUT GROUPS */}

      {formDataPeriods.map((singlePeriod, index) => (
        <div key={index}>
          <div className="input-group__container flex-start">
            {/* INITIAL PERIOD INPUT GROUPS */}
            <div className="input__group">
              <div className="flex-cr inputs input--above-small">
                <input
                  className={formData.schoolName ? " filled--input" : ""}
                  type="text"
                  // value={singlePeriod.period}
                  // ref={schoolNameRef}
                  placeholder={
                    "e.g. " +
                    selectedRadio.charAt(0).toUpperCase() +
                    selectedRadio.slice(1) +
                    " I"
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
                  <p>
                    {selectedRadio.charAt(0).toUpperCase() +
                      selectedRadio.slice(1)}
                  </p>
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
                  <p>Time</p>
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
