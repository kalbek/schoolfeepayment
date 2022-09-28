import { useSelector } from "react-redux";
const AddMoreButton = ({index, handleLinks, label, base }) => {
  const { popup } = useSelector((state) => state.popups);
  return (
    <button
      tabIndex={11}
      className={popup ? " inactive-bg btn-onemore" : "btn-onemore"}
      // className={popup ? " inactive-bg btn-onemore" : "add-more--button"}
      onClick={() => handleLinks(index, base)}
    >
      <div className="add__social-link">
        <h2 className="social-link--label"> {label} </h2>
      </div>
    </button>
  );
};

export default AddMoreButton;
