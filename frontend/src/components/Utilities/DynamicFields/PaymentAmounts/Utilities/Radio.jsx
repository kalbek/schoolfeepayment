const Radio = ({ value, id, name, checked, onChange, label }) => {
  return (
    <>
      <div className="input__groupa -mt-1s">
        <label className="flex-cs" htmlFor={id}>
          <input
            type="radio"
            value={value}
            name={name}
            id={id}
            checked={checked}
            onChange={onChange}
          />
          <span>
            &nbsp; <p>{label}</p>
          </span>
        </label>
      </div>
    </>
  );
};

export default Radio;
