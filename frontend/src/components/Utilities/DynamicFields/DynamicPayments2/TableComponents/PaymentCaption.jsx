const PaymentCaption = ({ label }) => {
  return (
    <caption>
      <div className="flex-start input__group flex fit-content">
        <label>{label}</label>
      </div>
    </caption>
  );
};

export default PaymentCaption;
