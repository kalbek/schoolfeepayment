import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import payment_icon from "../../pages/LandingPage/images/payments.svg";
import payment_scale from "../../pages/LandingPage/images/payment-scale.svg";
import payment_status from "../../pages/LandingPage/images/payment-status.svg";
import arrow_green from "../../pages/LandingPage/images/arrow-green.svg";
import arrow_yellow from "../../pages/LandingPage/images/arrow-yellow.svg";
import arrow_purple from "../../pages/LandingPage/images/arrow-purple.svg";
import "./submenusStyles.css";

const PaymentsSubmenu = () => {
  const { user } = useSelector((state) => state.auth);
  const paySchoolFeePath = user && user.roles === 2001 ? "./paySchoolFee" : "/";
  const paymentScalePath = user && user.roles === 2001 ? "../paymentScale" : "/";
  const paymentStatusPath = user && user.roles === 2001 ? "../paymentStatus" : "/";
  return (
    <div className="submenu-container payments-submenu-container">
      <ul>
        <div>
          <li>
            <Link className="submenu-link" to={paySchoolFeePath}>
              <div className="sg payments-sg ">
                <img
                  id="img-payments"
                  className="sm-bullet-img"
                  src={payment_icon}
                  alt="Payment Card Icon"
                />
                <div className="stg payments-stg">
                  <h4>Pay School Fee</h4>
                  <p>Instantly Pay your school fee with CbePay</p>
                </div>
                <div className="arrow_img">
                  <img
                    id="yellow-arrow-img"
                    className="arrow-img"
                    src={arrow_yellow}
                    alt="Increasing Scale Icon"
                  />
                </div>
              </div>
            </Link>
          </li>
          <li>
            <Link className="submenu-link" to={paymentScalePath}>
              <div className="sg payments_scale-sg">
                <img
                  id="img-payment_scales"
                  className="sm-bullet-img"
                  src={payment_scale}
                  alt=""
                />
                <div className="stg payments_scale-stg">
                  <h4>Payment Scales</h4>
                  <p>For schools, check status and edit payment info ...</p>
                </div>
                <div className="arrow_img">
                  <img
                    id="green-arrow-img"
                    className="arrow-img"
                    src={arrow_green}
                    alt="a Checked Payment Card Icon"
                  />
                </div>
              </div>
            </Link>
          </li>
          <li>
            <Link className="submenu-link" to={paymentStatusPath}>
              <div className="sg payments_status-sg">
                <img
                  id="img-payment_status"
                  className="sm-bullet-img"
                  src={payment_status}
                  alt=""
                />
                <div className="stg check_payments-stg">
                  <h4>Payment Status</h4>
                  <p>Check your payment status and eligibility ...</p>
                </div>
                <div className="arrow_img">
                  <img
                    id="purpple-arrow-img"
                    className="arrow-img"
                    src={arrow_purple}
                    alt=""
                  />
                </div>
              </div>
            </Link>
          </li>
        </div>
      </ul>
    </div>
  );
};

export default PaymentsSubmenu;
