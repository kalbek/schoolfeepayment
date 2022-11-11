import { useSelector } from "react-redux";
const RemoveLinksButton = ({
  remove,
  label,
  index,
  subIndex,
  subSubIndex,
  subSubSubIndex,
  subSubSubSubIndex,
  subSubSubSubSubIndex,
  subSubSubSubSubSubIndex
}) => {
  const { popup } = useSelector((state) => state.popups);
  return (
    <button className={popup ? " inactive-bg" : " btn-onemore"}>
      <div
        className="add__social-link"
        onClick={() =>
          remove(
            index,
            subIndex,
            subSubIndex,
            subSubSubIndex,
            subSubSubSubIndex,
            subSubSubSubSubIndex,
            subSubSubSubSubSubIndex
          )
        }
      >
        <h2 className="remove-social-link--label">{label}</h2>
      </div>
    </button>
  );
};

export default RemoveLinksButton;
