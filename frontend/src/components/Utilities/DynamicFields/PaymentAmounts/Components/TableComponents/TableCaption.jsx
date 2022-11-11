const TableCaption = ({ label }) => {
  return (
    <caption className="">
      <div className="flex-ccc input__group flex fit-content table-captions mb-1p5 mt-1 ">
        <label className="-mt-1">
          <p>{label}</p>
        </label>
      </div>
    </caption>
  );
};

export default TableCaption;
