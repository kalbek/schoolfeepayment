const EmptyField = () => {
  return (
    <div className="input__groupa small-empty">
      <label>
        <div className=" mb-1 inputsa "></div>
      </label>
      <div className="mb-1a inputs input--small">
        <input type="text" tabIndex={1} readOnly />
      </div>
    </div>
  );
};

export default EmptyField;
