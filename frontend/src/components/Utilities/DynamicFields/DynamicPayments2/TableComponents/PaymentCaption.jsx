const PaymentCaption = ({ label }) => {
  return (
    <caption>
      <div className="flex-start input__group flex fit-content">
        <label><h1>{label}</h1></label>
      </div>
    </caption>
  );
};

export default PaymentCaption;
