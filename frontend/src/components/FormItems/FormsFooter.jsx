import { useSelector } from 'react-redux';
import '../../Styles/formFooterStyle.css'
const FormsFooter = () => {
  const {popup} = useSelector(state=> state.popups)
  return (
    <>
      <div className={popup ? "inactive-bg top__footer" : " top__footer"}>
        <div className="top-footer--contents">
          TERMS AND CONDITIONS &nbsp; &nbsp; | &nbsp; &nbsp; CBE PRIVACY POLICY
          &nbsp; &nbsp; | &nbsp; &nbsp; CONTACT US
        </div>
      </div>
      <div className="bottom__footer">
        <div className="bottom-footer--contents">
          <p>&copy; 2022, Commercial Bank of Ethiopia. All rights reserved.</p>
        </div>
      </div>
    </>
  );
};

export default FormsFooter;
