import { useSelector } from "react-redux";
const AddMoreButtonIconOnly = ({ label }) => {
  const { popup } = useSelector((state) => state.popups);
  return (
    <button
      tabIndex={11}
      className={popup ? " inactive-bg btn-onemore" : "btn-onemore"}
      // className={popup ? " inactive-bg btn-onemore" : "add-more--button"}
    >
      <div className="add__social-link">
        <h2 className="social-link--label"> {label} </h2>
      </div>
    </button>
  );
};

export default AddMoreButtonIconOnly;
