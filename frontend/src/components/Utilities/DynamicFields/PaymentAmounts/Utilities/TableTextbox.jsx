const TableTextbox = (props) => {
  return (
    <>
      <div className="flex-cs">
        <label>
          <p>{props.label}</p>
          {/* <div className="mb-p46 input-xs-lower-border"> */}
          {/* <div className="mb-p45 input-xs-lower-border"> */}
          <div className="mb-p6 input-xs-lower-border">
            <input
              // type={"number"}
              name={props.name}
              // value={props.value}
              placeholder={props.placeholder}
              // id={props.Id}
              // tabIndex={1}
              label={props.label}
              onChange={props.onChange}
              // onFocus={props.onFocus}
            />
          </div>
        </label>
      </div>
    </>
  );
};

export default TableTextbox;
