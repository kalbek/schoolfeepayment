import React from "react";

const AchievementsTips = () => {
  return (
    <>
      <div className="form-transition">
        <div>
          <h1 className="form__titles-big">
            {" "}
            Wonderful, now let's talk about your schools
            <span className="fw400"> Achievements </span>
          </h1>
          <h3 className="form__sub-titles-main">
            Few things you need to know:
          </h3>
          <ul className="form__sub-titles-basic tips-page--list">
            <li>Achievements will help us to advertize your school</li>
            <li>
              Think of the most prestegious award your school has got so far
            </li>
            <li>
              The more achievements you mentioned the more ellegant your page
              looks
            </li>
          </ul>
        </div>
        {/* <div className="form-small-cards">
        <SmallCard formData={formData} />
      </div> */}
      </div>
    </>
  );
};

export default AchievementsTips;
