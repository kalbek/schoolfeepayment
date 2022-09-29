const Add = ({ index, subIndex, action }) => {
  return (
    <div
      className="add-btn-container flex pointer"
      onClick={() => action(index, subIndex)}
    >
      <div className="add-btn-x1"></div>
      <div className="add-btn-y"></div>
      <div className="add-btn-x2"></div>
    </div>
  );
};

export default Add;
