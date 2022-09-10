import { useSelector } from "react-redux";
import BiggerCard from "../../Utilities/Cards/BiggerCard";
import { useState } from "react";
import SmallCard from "../../Utilities/Cards/SmallCard";
import Preview from "../../Utilities/Buttons/Preview";
import "../../../Styles/biggerCardStyle.css";
const SchoolDetails = ({
  emptyFields,
  formData,
  schoolNameRef,
  setFormData,
}) => {
  const { popup } = useSelector((state) => state.popups);
  const { popupType } = useSelector((state) => state.popups);
  const NAME_REGEX = /[0-9a-zA-Z]{4,50}/;
  const EMAIL_REGEX =
    /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  const ACCOUNT_REGEX = /^$|^\d{13}$/;
  const MERCHANT_CODE_REGEX = /^[0-9]{6,30}$/;
  const [validName, setValidName] = useState(false);
  const [validAccount, setValidAccount] = useState(false);
  const [validEmail, setValidEmail] = useState(false);
  const [validCBEBirrMerchantCode, setValidCBEBirrMerchantCode] =
    useState(false);
  const handleSchoolNameChange = (event) => {
    setValidName(NAME_REGEX.test(event.target.value));
    setFormData({
      ...formData,
      schoolName: event.target.value,
    });
  };
  const handleSchoolLevelChange = (event) => {
    setFormData({
      ...formData,
      schoolLevel: event.target.value,
    });
  };

  const handleEmailChange = (event) => {
    setValidEmail(EMAIL_REGEX.test(event.target.value));
    setFormData({
      ...formData,
      schoolEmail: event.target.value,
    });
  };

  const handleAccountChange = (event) => {
    const accountNumber = event.target.valueAsNumber;
    setValidAccount(ACCOUNT_REGEX.test(event.target.value));
    setFormData({
      ...formData,
      schoolCbeAccountNumber: accountNumber,
    });
  };

  const handleCBEBirrMerchantCodeChange = (event) => {
    setValidCBEBirrMerchantCode(MERCHANT_CODE_REGEX.test(event.target.value));
    setFormData({
      ...formData,
      schoolCbeMerchantCode: event.target.value,
    });
  };

  const addisSubcityList = [
    { label: "e.g. Nifas Silk-Lafto ", value: "", disabled: true },
    { label: "Addis Ketema", value: "Addis Ketema" },
    { label: "Akaky Kality", value: "Akaky Kality" },
    { label: "Arada", value: "Arada" },
    { label: "Bole", value: "Bole" },
    { label: "Gullele", value: "Gullele" },
    { label: "Kirkos", value: "Kirkos" },
    { label: "Kolfe Keranio", value: "Kolfe Keranio" },
    { label: "Lideta", value: "Lideta" },
    { label: "Nifas Silk-Lafto", value: "Nifas Silk-Lafto" },
    { label: "Yeka", value: "Yeka" },
  ];

  const EthiopianCities = [
    {
      id: "1",
      label: "Addis Ababa",
      value: "Addis Ababa",
      region: "",
      zone: "",
      woreda: "",
    },
    {
      id: "2",
      label: "Gondar",
      value: "Gondar",
      region: "",
      zone: "",
      woreda: "",
    },
    {
      id: "3",
      label: "Mekelle",
      value: "Mekelle",
      region: "",
      zone: "",
      woreda: "",
    },
    {
      id: "4",
      label: "Adama",
      value: "Adama",
      region: "",
      zone: "",
      woreda: "",
    },
    {
      id: "5",
      label: "Awassa",
      value: "Awassa",
      region: "",
      zone: "",
      woreda: "",
    },
    {
      id: "6",
      label: "Bahir Dar",
      value: "Bahir Dar",
      region: "",
      zone: "",
      woreda: "",
    },
    {
      id: "7",
      label: "Dire Dawa",
      value: "Dire Dawa",
      region: "",
      zone: "",
      woreda: "",
    },
    {
      id: "8",
      label: "Dessie",
      value: "Dessie",
      region: "",
      zone: "",
      woreda: "",
    },
    {
      id: "9",
      label: "Jimma",
      value: "Jimma",
      region: "",
      zone: "",
      woreda: "",
    },
    {
      id: "10",
      label: "	Jijiga",
      value: "Jijiga",
      region: "",
      zone: "",
      woreda: "",
    },
    {
      id: "11",
      label: "	Shashamane",
      value: "Shashamane",
      region: "",
      zone: "",
      woreda: "",
    },
    {
      id: "12",
      label: "	Bishoftu",
      value: "Bishoftu",
      region: "",
      zone: "",
      woreda: "",
    },
    {
      id: "13",
      label: "	Sodo",
      value: "Sodo",
      region: "",
      zone: "",
      woreda: "",
    },
    {
      id: "14",
      label: "	Arba Minch",
      value: "Arba Minch",
      region: "",
      zone: "",
      woreda: "",
    },
    {
      id: "15",
      label: "	Hosaena",
      value: "Hosaena",
      region: "",
      zone: "",
      woreda: "",
    },
    {
      id: "16",
      label: "	Harar",
      value: "Harar",
      region: "",
      zone: "",
      woreda: "",
    },
    {
      id: "17",
      label: "	Dilla",
      value: "Dilla",
      region: "",
      zone: "",
      woreda: "",
    },
    {
      id: "18",
      label: "	Nekemte",
      value: "Nekemte",
      region: "",
      zone: "",
      woreda: "",
    },
    {
      id: "19",
      label: "	Debre Birhan",
      value: "Debre Birhan",
      region: "",
      zone: "",
      woreda: "",
    },
    {
      id: "20",
      label: "	Asella",
      value: "Asella",
      region: "",
      zone: "",
      woreda: "",
    },
    {
      id: "21",
      label: "	Debre Mark'os",
      value: "Bebre Mork'os",
      region: "",
      zone: "",
      woreda: "",
    },
    {
      id: "22",
      label: "	Kombolcha",
      value: "Kombolcha",
      region: "",
      zone: "",
      woreda: "",
    },
    {
      id: "23",
      label: "	Debre Tabor",
      value: "Debre Tabor",
      region: "",
      zone: "",
      woreda: "",
    },
    {
      id: "24",
      label: "	Adigrat",
      value: "Adigrat",
      region: "",
      zone: "",
      woreda: "",
    },
    {
      id: "25",
      label: "	Areka",
      value: "Areka",
      region: "",
      zone: "",
      woreda: "",
    },
    {
      id: "26",
      label: "	Weldiya",
      value: "Weldiya",
      region: "",
      zone: "",
      woreda: "",
    },
    {
      id: "27",
      label: "	Sebeta",
      value: "Sebeta",
      region: "",
      zone: "",
      woreda: "",
    },
    {
      id: "28",
      label: "	Burayu",
      value: "Burayu",
      region: "",
      zone: "",
      woreda: "",
    },
    {
      id: "29",
      label: "	Shire",
      value: "Shire",
      region: "",
      zone: "",
      woreda: "",
    },
    {
      id: "30",
      label: "	Ambo",
      value: "Ambo",
      region: "",
      zone: "",
      woreda: "",
    },
    {
      id: "31",
      label: "	Arsi Negele",
      value: "Arsi Negele",
      region: "",
      zone: "",
      woreda: "",
    },
    {
      id: "32",
      label: "	Aksum",
      value: "Aksum",
      region: "",
      zone: "",
      woreda: "",
    },
    {
      id: "33",
      label: "	Gambela",
      value: "Gambela",
      region: "",
      zone: "",
      woreda: "",
    },
    {
      id: "34",
      label: "	Bale Robe",
      value: "Bale Robe",
      region: "",
      zone: "",
      woreda: "",
    },
    {
      id: "35",
      label: "	Butajira",
      value: "Butajira",
      region: "",
      zone: "",
      woreda: "",
    },
    {
      id: "36",
      label: "	Batu",
      value: "Batu",
      region: "",
      zone: "",
      woreda: "",
    },
    {
      id: "37",
      label: "	Boditi",
      value: "Boditi",
      region: "",
      zone: "",
      woreda: "",
    },
    {
      id: "38",
      label: "	Adwa",
      value: "Adwa",
      region: "",
      zone: "",
      woreda: "",
    },
    {
      id: "39",
      label: "	Yirgalem",
      value: "Yirgalem",
      region: "",
      zone: "",
      woreda: "",
    },
    {
      id: "40",
      label: "	Waliso",
      value: "Waliso",
      region: "",
      zone: "",
      woreda: "",
    },
    {
      id: "41",
      label: "	Welkite",
      value: "Welkite",
      region: "",
      zone: "",
      woreda: "",
    },
    {
      id: "42",
      label: "	Gode",
      value: "Gode",
      region: "",
      zone: "",
      woreda: "",
    },
    {
      id: "43",
      label: "	Meki",
      value: "Meki",
      region: "",
      zone: "",
      woreda: "",
    },
    {
      id: "44",
      label: "	Negele Borana",
      value: "Negele Borana",
      region: "",
      zone: "",
      woreda: "",
    },
    {
      id: "45",
      label: "	Alaba Kulito",
      value: "Alaba Kulito",
      region: "",
      zone: "",
      woreda: "",
    },
    {
      id: "46",
      label: "	Alamata",
      value: "Alamata",
      region: "",
      zone: "",
      woreda: "",
    },
    {
      id: "47",
      label: "	Chiro",
      value: "Chiro",
      region: "",
      zone: "",
      woreda: "",
    },
    {
      id: "48",
      label: "	Tepi",
      value: "Tepi",
      region: "",
      zone: "",
      woreda: "",
    },
    {
      id: "49",
      label: "	Durame",
      value: "Durame",
      region: "",
      zone: "",
      woreda: "",
    },
    {
      id: "50",
      label: "	Goba",
      value: "Goba",
      region: "",
      zone: "",
      woreda: "",
    },
    {
      id: "51",
      label: "	Assosa",
      value: "Assosa",
      region: "",
      zone: "",
      woreda: "",
    },
    {
      id: "52",
      label: "	Gimbi",
      value: "Gimbi",
      region: "",
      zone: "",
      woreda: "",
    },
    {
      id: "53",
      label: "	Wukro",
      value: "Wukro",
      region: "",
      zone: "",
      woreda: "",
    },
    {
      id: "54",
      label: "	Haramaya",
      value: "Haramaya",
      region: "",
      zone: "",
      woreda: "",
    },
    {
      id: "55",
      label: "	Mizan Teferi",
      value: "Mizan Teferi",
      region: "",
      zone: "",
      woreda: "",
    },
    {
      id: "56",
      label: "	Sawla",
      value: "Sawla",
      region: "",
      zone: "",
      woreda: "",
    },
    {
      id: "57",
      label: "	Mojo",
      value: "Mojo",
      region: "",
      zone: "",
      woreda: "",
    },
    {
      id: "58",
      label: "	Dembi Dolo",
      value: "Dembi Dolo",
      region: "",
      zone: "",
      woreda: "",
    },
    {
      id: "59",
      label: "	Aleta Wendo",
      value: "Aleta Wendo",
      region: "",
      zone: "",
      woreda: "",
    },
    {
      id: "60",
      label: "	Metu",
      value: "Metu",
      region: "",
      zone: "",
      woreda: "",
    },
    {
      id: "61",
      label: "	Mota",
      value: "Mota",
      region: "",
      zone: "",
      woreda: "",
    },
    {
      id: "62",
      label: "	Fiche",
      value: "Fiche",
      region: "",
      zone: "",
      woreda: "",
    },
    {
      id: "63",
      label: "	Finote Selam",
      value: "Finote Selam",
      region: "",
      zone: "",
      woreda: "",
    },
    {
      id: "64",
      label: "	Bule Hora Town",
      value: "Bule Hora Town",
      region: "",
      zone: "",
      woreda: "",
    },
    {
      id: "65",
      label: "	Bonga",
      value: "Bonga",
      region: "",
      zone: "",
      woreda: "",
    },
    {
      id: "66",
      label: "	Kobo",
      value: "Kobo",
      region: "",
      zone: "",
      woreda: "",
    },
    {
      id: "67",
      label: "	Jinka",
      value: "Jinka",
      region: "",
      zone: "",
      woreda: "",
    },
    {
      id: "68",
      label: "	Dangila",
      value: "Dangila",
      region: "",
      zone: "",
      woreda: "",
    },
    {
      id: "69",
      label: "	Degehabur",
      value: "Degehabur",
      region: "",
      zone: "",
      woreda: "",
    },
    {
      id: "70",
      label: "	Dimtu",
      value: "Dimtu",
      region: "",
      zone: "",
      woreda: "",
    },
    {
      id: "71",
      label: "	Agaro",
      value: "Agaro",
      region: "",
      zone: "",
      woreda: "",
    },
  ];

  const handleChange = (event) => {};

  return (
    <section>
      <div className="flex input-group__container">
        {/* go here */}
        <div className="flex-c">
          <div className="average-form-inputs flex">
            {/* FIRST ROW */}
            <div className="input__group">
              {/* School name */}
              {/* <div className="flex-cr inputs input--medium"> */}
              <div
                className={
                  !validName && emptyFields.includes("schoolName")
                    ? "flex-cr input--medium incomplete--inputs"
                    : "flex-cr inputs input--medium"
                }
              >
                <input
                  className={popup ? " inactive-bg" : ""}
                  type="text"
                  value={formData.schoolName}
                  ref={schoolNameRef}
                  placeholder="e.g. Nazreth School"
                  tabIndex={1}
                  onChange={(event) => handleSchoolNameChange(event)}
                />
                <label htmlFor="school-name">
                  <div className="flex-cs">
                    <p>School Name</p>
                    <p className="form--error-tip">
                      {!validName &&
                        emptyFields.includes("schoolName") &&
                        "Minimum 4 letters"}
                    </p>
                  </div>
                </label>
                <br />
              </div>
              {/* School level */}
              <div className="flex-cr inputs input--medium">
                <input
                  type="text"
                  tabIndex={3}
                  className={popup ? " inactive-bg" : ""}
                  placeholder="e.g. Primary, Secondary"
                  value={formData.schoolLevel}
                  onChange={(event) => handleSchoolLevelChange(event)}
                />
                <label htmlFor="school-level">
                  <p>School Level</p>
                </label>
                <br />
              </div>
              <div className="flex-cs inputs form-duals">
                {/* City */}
                <div className="flex-cr inputs  input--small">
                  <select
                    className={popup ? "inactive-bg" : "select-box"}
                    name="city"
                    id="city"
                    placeholder="e.g. Addis Ababa"
                    tabIndex={5}
                    value={formData.schoolCity}
                    onChange={(event) => {
                      handleChange(event);
                    }}
                  >
                    {EthiopianCities.map((city) => (
                      <option
                        // disabled={city.disabled}
                        disabled={true}
                        // value={city.value}
                        key={city.value}
                        className="option-label"
                      >
                        {city.label}
                      </option>
                    ))}
                  </select>
                  <label>
                    {" "}
                    <p>City</p>
                  </label>
                </div>
                {/* Sub city */}
                <div className="flex-cr inputs input--small">
                  <select
                    className={
                      popup && formData.schoolSubcity
                        ? " select-box"
                        : popup
                        ? " inactive-bg"
                        : " select-box option-label"
                    }
                    // className="option-label"
                    name="subcity"
                    id="subcity"
                    placeholder="e.g. Arada Subcity"
                    tabIndex={6}
                    value={formData.schoolSubcity}
                    onChange={(event) =>
                      setFormData({
                        ...formData,
                        schoolSubcity: event.target.value,
                      })
                    }
                  >
                    {addisSubcityList.map((subcity) => (
                      <option
                        disabled={subcity.disabled}
                        value={subcity.value}
                        key={subcity.value}
                        className="option-label"
                      >
                        {subcity.label}
                      </option>
                    ))}
                  </select>
                  <label htmlFor="school-subcity">
                    {" "}
                    <p>Sub City</p>
                  </label>
                </div>
              </div>
              {/* CBE Birr Merchant short code */}
              <div
                className={
                  !validCBEBirrMerchantCode &&
                  emptyFields.includes("schoolCbeMerchantCode")
                    ? "flex-cr input--medium incomplete--inputs"
                    : "flex-cr inputs input--medium"
                }
              >
                <label htmlFor="schoolAccount">
                  {" "}
                  <div className="form--error-tip  dflex-cs">
                    <p>
                      {!validCBEBirrMerchantCode &&
                        emptyFields.includes("schoolCbeMerchantCode") &&
                        "At least 6 digit number"}
                    </p>
                  </div>
                </label>
                <input
                  type="number"
                  tabIndex={10}
                  className={popup ? " inactive-bg" : ""}
                  placeholder="e.g. 251997"
                  value={formData.schoolCbeMerchantCode}
                  onChange={(event) => handleCBEBirrMerchantCodeChange(event)}
                />{" "}
                <label htmlFor="">
                  {" "}
                  <div className=" flex-cs">
                    <p>CBE Birr merchant short code</p>
                  </div>
                </label>
                <br />
              </div>
            </div>
            {/* SECOND ROW */}
            &nbsp;
            <div className="input__group form-input--second-row">
              {/* Email */}
              <div
                className={
                  !validEmail && emptyFields.includes("schoolEmail")
                    ? "flex-cr input--medium incomplete--inputs"
                    : "flex-cr inputs input--medium"
                }
              >
                <input
                  type="text"
                  tabIndex={2}
                  className={popup ? " inactive-bg" : ""}
                  placeholder="e.g. nazrethschools@gmail.com"
                  value={formData.schoolEmail}
                  onChange={(event) => handleEmailChange(event)}
                />{" "}
                <label htmlFor="school-city">
                  {" "}
                  <div className="flex-cs">
                    <p>Email</p>
                    <p className="form--error-tip">
                      {!validEmail &&
                        emptyFields.includes("schoolEmail") &&
                        "Invalid Email Address"}
                    </p>
                  </div>
                </label>
                <br />
              </div>

              {/* Phone */}
              <div className="flex-cr inputs input--medium">
                <input
                  type="text"
                  tabIndex={4}
                  className={popup ? " inactive-bg" : ""}
                  placeholder="e.g. (+251) 011 554 4785 "
                  value={formData.schoolPhone}
                  onChange={(event) => {
                    setFormData({
                      ...formData,
                      schoolPhone: event.target.value,
                    });
                  }}
                />{" "}
                <label htmlFor="school-city">
                  {" "}
                  <p>Phone</p>
                </label>
                <br />
              </div>
              {/* <div className="flex-cr inputs input--medium"></div> */}
              <div className="flex-cs  form-duals">
                {/* Woreda */}
                <div className="flex-cr inputs input--small ">
                  <input
                    type="number"
                    placeholder="e.g. 02"
                    className={popup ? " inactive-bg" : ""}
                    tabIndex={7}
                    value={formData.schoolWoreda}
                    onChange={(event) => {
                      setFormData({
                        ...formData,
                        schoolWoreda: event.target.value,
                      });
                    }}
                  />
                  <label htmlFor="school-woreda">
                    <p>Woreda</p>
                  </label>
                </div>
                {/* Kebele */}
                <div className="flex-cr inputs input--small ">
                  <input
                    type="number"
                    placeholder="e.g. 14"
                    className={popup ? " inactive-bg" : ""}
                    tabIndex={8}
                    value={formData.schoolKebele}
                    onChange={(event) => {
                      setFormData({
                        ...formData,
                        schoolKebele: event.target.value,
                      });
                    }}
                  />
                  <label htmlFor="school-kebele">
                    <p>kebele</p>
                  </label>
                </div>
              </div>
              {/* CBE Account Number */}
              <div
                className={
                  !validAccount &&
                  emptyFields.includes("schoolCbeAccountNumber")
                    ? "flex-cr input--medium incomplete--inputs"
                    : "flex-cr inputs input--medium"
                }
              >
                <label htmlFor="schoolAccount">
                  {" "}
                  <div className="form--error-tip  dflex-cs">
                    <p>
                      {!validAccount &&
                        emptyFields.includes("schoolCbeAccountNumber") &&
                        "Must be a 13 digit number"}
                    </p>
                  </div>
                </label>
                <input
                  type="number"
                  name="cBeAccountNumber"
                  tabIndex={10}
                  className={popup ? " inactive-bg" : ""}
                  placeholder="e.g. 1000........233"
                  value={formData.schoolCbeAccountNumber}
                  onChange={(event) => handleAccountChange(event)}
                />{" "}
                <label htmlFor="">
                  {" "}
                  <div className=" flex-cs">
                    <p>CBE Account Number</p>
                  </div>
                </label>
                <br />
              </div>
            </div>
          </div>
          {/* bigger input contining row */}
          {/* School Achievemetns */}
        </div>
        {/* go to here */}
        {/* REALTIME SCHOOL CARDS SECTION */}
        <div className="flex-c">
          <SmallCard formData={formData} />
          <Preview />
        </div>
        {popup && popupType === "BigCardPopup" && (
          <BiggerCard formData={formData} />
        )}
      </div>
    </section>
  );
};

export default SchoolDetails;
