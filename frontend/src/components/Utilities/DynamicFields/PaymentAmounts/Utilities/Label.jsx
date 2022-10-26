const Label = (props) => {
  return (
    <>
      <span className="flex-cr input__group inputs">
        <div className="flex-cs">
          <label>
            <p className="focused-label">{props.label}</p>
          </label>
        </div>
      </span>
    </>
  );
};

export default Label;
