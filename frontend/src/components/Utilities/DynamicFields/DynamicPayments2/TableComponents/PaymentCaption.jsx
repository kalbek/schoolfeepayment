const PaymentCaption = ({ label }) => {
  return (
    <caption>
      <div className="flex-start input__group flex fit-content table-captions mb-1p5 mt-1 ">
        <label>
          <p>
            <u>{label}</u>
          </p>
        </label>
      </div>
    </caption>
  );
};

export default PaymentCaption;
