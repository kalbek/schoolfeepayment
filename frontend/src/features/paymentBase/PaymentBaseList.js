import { useSelector } from "react-redux";
const PaymentBaseList = () => {
  const paymentBase = useSelector((state) => state.payments);
  const renderPaymentBases = paymentBase.map((base) => (
    <article key={base.id}>
      <h3>{base.id}</h3>
      <p>{base.content.substring(0, 100)}</p>
    </article>
  ));
  return (
    <section>
      <h2>PaymentBases</h2>
      <p>{renderPaymentBases}</p>
    </section>
  );
};

export default PaymentBaseList;
