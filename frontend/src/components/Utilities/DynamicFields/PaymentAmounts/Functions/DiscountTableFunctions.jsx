import { useSelector, useDispatch } from "react-redux";
import { updatePaymentDiscountUnit } from "../../../../../features/paymentBase/paymentBaseSlice";
import DiscountTable from "../DiscountTable";

const DiscountTableFunctions = () => {
  const dispatch = useDispatch();
  const paymentState = useSelector((state) => state.payments.paymentState);


  return (
    <>
    </>
  );
};

export default DiscountTableFunctions;
