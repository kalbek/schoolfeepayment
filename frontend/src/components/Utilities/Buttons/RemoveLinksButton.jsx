import { useSelector } from "react-redux";
const RemoveLinksButton = ({ remove, label, index, subIndex, subSubIndex }) => {
  const { popup } = useSelector((state) => state.popups);
  return (
    <button className={popup ? " inactive-bg" : " btn-onemore"}>
      <div
        className="add__social-link"
        onClick={() => remove(index, subIndex, subSubIndex)}
      >
        <h2 className="remove-social-link--label">{label}</h2>
      </div>
    </button>
  );
};

export default RemoveLinksButton;
