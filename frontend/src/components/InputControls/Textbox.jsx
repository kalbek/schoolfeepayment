const Textbox = ({
  value,
  id,
  name,
  placeholder,
  tabIndex,
  onChange,
  label,
  className,
  divClassName,
}) => {
  return (
    <>
      <div className="field-group-container">
        <section className="flex-cr input__group">
          <label htmlFor={id}>
            <p>{label}</p>
            <div className="mb-1 inputs input--small">
              <input
                type="text"
                name={name}
                placeholder={placeholder}
                id={id}
                tabIndex={1}
                label={label}
                onChange={onChange}
              />
            </div>
          </label>
        </section>
      </div>
    </>
  );
};

export default Textbox;
