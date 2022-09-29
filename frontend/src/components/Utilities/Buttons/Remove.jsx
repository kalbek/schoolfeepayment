const Remove = ({ index, subIndex, action }) => {
  return (
    <div
      className="remove-btn-container pointer"
      onClick={() => action(index, subIndex)}
    >
      <div className="remove-btn"></div>
    </div>
  );
};

export default Remove;
