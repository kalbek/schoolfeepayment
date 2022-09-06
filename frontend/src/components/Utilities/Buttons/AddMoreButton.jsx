import { useSelector } from "react-redux";
const AddMoreButton = ({ handleLinks, label }) => {
  const { popup } = useSelector((state) => state.popups);
  return (
    <button
      tabIndex={11}
      className={popup ? " inactive-bg btn-onemore" : "btn-onemore"}
      onClick={handleLinks}
    >
      <div className="add__social-link">
        <h2 className="social-link--label"> {label} </h2>
      </div>
    </button>
  );
};

export default AddMoreButton;
