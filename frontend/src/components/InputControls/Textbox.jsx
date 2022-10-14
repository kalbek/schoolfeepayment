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
      <div className="flex-cr inputs input--small">
        <input
          type="text"
          name={name}
          id={id}
          tabIndex={1}
          onChange={onChange}
        />
      </div>
    </>
  );
};

export default Textbox;
