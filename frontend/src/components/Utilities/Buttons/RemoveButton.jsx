import React from "react";

const RemoveButton = ({removables, index}) => {
  return (
    <div className="remove__terms-ctr" onClick={() => removables(index)}>
      <h2 className="school__accent-negative">Remove</h2>
    </div>
  );
};

export default RemoveButton;
