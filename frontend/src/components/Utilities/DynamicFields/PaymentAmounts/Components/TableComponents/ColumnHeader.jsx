const ColumnHeader = ({ label }) => {
  return (
    <div className="checkbox-inputs input__group flex flex-start">
      <label className="checkbox-items">
        <p className=" table-headers ">{label}</p>
      </label>
    </div>
  );
};

export default ColumnHeader;
