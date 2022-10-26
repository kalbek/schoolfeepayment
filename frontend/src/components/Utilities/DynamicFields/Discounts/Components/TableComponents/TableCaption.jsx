const TableCaption = ({ label }) => {
  return (
    <caption>
      <div className=" flex-start input__group flex fit-content table-captions   mt-1 ">
        <label className=" mb-1 -mt-1">
          <p>{label}</p>
        </label>
      </div>
    </caption>
  );
};

export default TableCaption;
