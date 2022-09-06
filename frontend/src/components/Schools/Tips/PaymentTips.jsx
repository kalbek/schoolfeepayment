import "../../../Styles/tipsStyle.css";
const PaymentTips = ({ formData, setFormData }) => {
  return (
    <div className="form-transition">
      <div>
        <h1 className="form__titles-big">
          {" "}
          Excellent, now is the time to deal with
          <span className="fw400"> School Payments </span>
        </h1>
        <h3 className="form__sub-titles-main">Few things you need to know:</h3>
        <ul className="form__sub-titles-basic tips-page--list">
          <li>First and important step is to remember payment bases</li>
          <li>
            Are payments in your school based on Semesters, Quarters, Grade
            levels or other means?{" "}
          </li>
          <li>All amounts are in Ethiopian Birr</li>
          <li>
            Due dates are important to remind your customers to pay ontime and
            to track your payment status
          </li>
        </ul>
      </div>
      {/* <div className="form-small-cards">
        <SmallCard formData={formData} />
      </div> */}
    </div>
  );
};

export default PaymentTips;
