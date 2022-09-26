const Input = ({
  value,
  id,
  name,
  placeholder,
  tabIndex,
  onChange,
  label,
  className,
  type,
}) => {
  return (
    <>
      <div className="flex-cr">
        <input
          className={className}
          type={type}
          value={value}
          id={id}
          name={name}
          placeholder={placeholder}
          tabIndex={tabIndex}
          onChange={onChange}
        />
        <label>{label}</label>
      </div>
    </>
  );
};

export default Input;
