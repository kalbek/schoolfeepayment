import React from "react";

const DetailsTips = () => {
  return (
    <div className="form-transition flex">
      <div>
        <h1 className="form__titles-big">
          {" "}
          Great, now let's fill out your schools
          <span className="fw400"> Grade Info </span>
        </h1>
        <h3 className="form__sub-titles-main">Few things you need to know:</h3>
        <ul className="form__sub-titles-basic">
          <li>
            Start from lower grades and work your way up to higher grade levels
          </li>
          <li>Please try not to miss even a single grade in between</li>
          <li></li>
        </ul>
      </div>
      <div className="form-small-cards">
        <SmallCard formData={formData} />
      </div>
    </div>
  );
};

export default DetailsTips;
