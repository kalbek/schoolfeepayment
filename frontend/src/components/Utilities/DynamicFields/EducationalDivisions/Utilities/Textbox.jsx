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
      <section className="flex-cr">
        <label htmlFor="">
        <p>
            {label}
          </p>
          <div className="mb-1 flex-cr inputs input--medium">
            <input
              type="text"
              name={name}
              placeholder={placeholder}
              id={id}
              tabIndex={1}
              onChange={onChange}
              label={label}
            />
          </div>
       
        </label>
      </section>
    </>
  );
};

export default Textbox;
