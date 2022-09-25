const RemoveButton = ({ removables, index, subIndex }) => {
  return (
    <div
      className="remove__terms-ctr"
      onClick={() => removables(index, subIndex)}
    >
      <h2 className="school__accent-negative">Remove</h2>
    </div>
  );
};

export default RemoveButton;
