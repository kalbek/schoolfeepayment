import React from "react";

const HideOrshow = ({ toogleValue }) => {
  return (
    <>
      <div
        className={toogleValue ? "show-icon " : "hide-icon"}
        // onClick={() => handleDisplay(index, subIndex, subSubIndex)}
      >
        <h2 className="social-link--label">
          {" "}
          {/* {toogleValue ? "show" : "hide"}{" "} */}
        </h2>
      </div>
    </>
  );
};

export default HideOrshow;
