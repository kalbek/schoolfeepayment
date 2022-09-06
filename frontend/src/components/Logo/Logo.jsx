import dot from "./LogoAssets/dot.svg";
import './logoStyles.css'

const Logo = () => {
  return (
    <div className="logo flex">
      <p>CbePay</p> <img className="dot" src={dot} alt="" />
    </div>
  );
};

export default Logo;
