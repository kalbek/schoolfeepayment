import { useSelector } from "react-redux";
const RemoveLinksButton = ({ remove, label }) => {
  const { popup } = useSelector((state) => state.popups);
  return (
    <button className={popup ? " inactive-bg" : " btn-onemore"}>
      <div className="add__social-link" onClick={remove}>
        <h2 className="remove-social-link--label">{label}</h2>
      </div>
    </button>
  );
};

export default RemoveLinksButton;
