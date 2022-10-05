import AddMoreButton from "../Utilities/Buttons/AddMoreButton";
import RemoveLinksButton from "../Utilities/Buttons/RemoveLinksButton";
import DynamicPayments from "../Utilities/DynamicFields/DynamicPayments";
import SmallCard from "../Utilities/Cards/SmallCard";
import Preview from "../Utilities/Buttons/Preview";

import "../../Styles/utilities.css";
import {} from "../../features/paymentBase/paymentBaseSlice";
import "../../Styles/formStyles.css";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";

function PaymentInfo({ formData, setFormData }) {
  const dispatch = useDispatch();
  const paymentState = useSelector((state) => state.payments.paymentState);

  return (
    <div className="flex">
      <div className="school-info">
        {/* Main titles section */}
        <div>
          <div>
            <h1 className="form__titles--mid">
              Now let us fill your school payment info
            </h1>
            <h3 className="form__subtitle">
              Please be precise while filling payment details.
            </h3>
          </div>

          <DynamicPayments />
        </div>
      </div>
    </div>
  );
}
export default PaymentInfo;
