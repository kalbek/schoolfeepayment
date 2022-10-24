const Checkbox = (name, id, value, checked, onChange, period) => {
  return (
    <>
      <label className="checkbox-items flex flex-cs" htmlFor={id}>
        <input
          type="checkbox"
          name={name}
          id={id}
          value={value}
          checked={checked}
          onChange={onChange}
        />
        <>
          <span>
            &nbsp; <p>Varies with {period}</p>
          </span>
        </>
      </label>
    </>
  );
};

export default Checkbox;
