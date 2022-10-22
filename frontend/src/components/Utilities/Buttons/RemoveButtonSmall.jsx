const RemoveButtonSmall = ({ removables, index, subIndex }) => {
  return (
    <div
      className="remove__terms-ctr2 "
      onClick={() => removables(index, subIndex)}
    >
      <h2 className="school__accent-negative">Remove</h2>
    </div>
  );
};

export default RemoveButtonSmall;
