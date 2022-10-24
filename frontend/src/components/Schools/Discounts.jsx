import "../../Styles/utilities.css";
import "../../Styles/formStyles.css";
import DiscountTable from "../Utilities/DynamicFields/Discounts/DiscountTable";
function Discounts() {
  return (
    <div className="flex">
      <div className="school-info">
        <div>
          <div>
            <h1 className="form__titles--mid">
              Okay, let't talk about Discounts
            </h1>
            <h3 className="form__subtitle">
              <p>
                Look how the Discount Tabel already adapts with your discount
                rules.
              </p>
            </h3>
          </div>
          <br />
          <br />
          <DiscountTable />
        </div>
      </div>
    </div>
  );
}
export default Discounts;
