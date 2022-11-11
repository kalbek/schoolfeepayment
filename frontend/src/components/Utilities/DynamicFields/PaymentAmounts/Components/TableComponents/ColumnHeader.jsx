const ColumnHeader = ({ label, shiftName }) => {
  return (
    <div className="checkbox-inputs input__group flex flex-start">
      <label className="checkbox-items flex-c flex-start">
        <p className="text-white table-headers ">{label}</p>
        <p className="text-slate-400   text-sm">{shiftName}</p>
      </label>
    </div>
  );
};

export default ColumnHeader;
