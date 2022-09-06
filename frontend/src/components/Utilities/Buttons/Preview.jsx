import { useSelector, useDispatch } from "react-redux";
import { setPopup, setPopupType } from "../../../features/popups/popupSlice";
import '../../../Styles/previewButtonStyle.css'

const Preview = () => {
  const dispatch = useDispatch();
  const { popup } = useSelector((state) => state.popups);

  function handlePopups() {
    dispatch(setPopup(!popup))
    dispatch(setPopupType("BigCardPopup"))
  }
  return (
    <div
      className={popup ? "inactive-bg previw-btn-container flex-cs" : "previw-btn-container flex-cs"}
      onClick={() => handlePopups()}
      // onClick={() => setPopup((!popup) => popup)}
    >
      PREVIEW
    </div>
  );
};

export default Preview;
