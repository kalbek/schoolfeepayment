import { forwardRef } from "react";
const RowHeader = forwardRef((props, parentref) => {
  return (
    <div ref={parentref} className=" checkbox-inputs input__group ">
      <label className="checkbox-items">
          <p className="table-headers flex-start pr-6 pt-1 ml-p5">
            {props.label}
          </p>
      </label>
    </div>
  );
});

export default RowHeader;
