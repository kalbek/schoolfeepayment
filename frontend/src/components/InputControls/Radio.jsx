const Radio = ({
  className,
  name,
  id,
  tabIndex,
  value,
  checked,
  onChange,
  label,
  htmlFor,
}) => {
  return (
    <>
      <label className={className} htmlFor={htmlFor}>
        <input
          type="radio"
          name={name}
          id={id}
          tabIndex={tabIndex}
          value={value}
          checked={checked}
          onChange={onChange}
        />
        <span>
          &nbsp; <p>{label}</p>
        </span>
      </label>
    </>
  );
};

export default Radio;
