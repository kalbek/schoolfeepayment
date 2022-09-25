import cancel from "../../../Assets/Images/cancel.svg";
const DeleteButton = ({ deleteAction, index }) => {
  return (
    <div
      onClick={() => deleteAction(index)}>
      <img src={cancel} alt="" />
    </div>
  );
};

export default DeleteButton;
