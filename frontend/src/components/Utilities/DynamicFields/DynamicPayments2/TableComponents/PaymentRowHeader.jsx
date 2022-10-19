const PaymentRowHeader = ({ label }) => {
  return (
    <div className="checkbox-inputs input__group ">
      <label className="checkbox-items">
        <p className="table-headers flex-start pr-6 pt-1 ml-p5">{label}</p>
      </label>
    </div>
  );
};

export default PaymentRowHeader;
