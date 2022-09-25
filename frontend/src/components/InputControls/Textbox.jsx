const Textbox = ({
  value,
  id,
  name,
  placeholder,
  tabIndex,
  onChange,
  label,
  className,
}) => {
  return (
    <>
      <div className="flex-cr">
        <input
          className={className}
          type="text"
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

export default Textbox;
