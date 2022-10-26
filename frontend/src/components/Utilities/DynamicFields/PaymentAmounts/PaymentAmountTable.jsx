import { useSelector, useDispatch } from "react-redux";
import { forwardRef, useRef, useState, useEffect } from "react";
import Textbox from "./Utilities/Textbox";
import Textbox2 from "./Utilities/Textbox2";
import EmptyField from "./Utilities/EmptyField";
import ColumnHeader from "./Components/TableComponents/ColumnHeader";
import RowHeader from "./Components/TableComponents/RowHeader";
import Label from "./Utilities/Label";
import { updatePaymentDiscountUnit } from "../../../../features/paymentBase/paymentBaseSlice";
// import DiscountTableFunctions.updateDiscountUnits from
import TableCaption from "./Components/TableComponents/TableCaption";
const PaymentAmountTable = ({ updateDiscountBase, handleTextboxValue }) => {
  const paymentState = useSelector((state) => state.payments.paymentState);
  const educationalDivisionState = useSelector(
    (state) => state.educationalDivisions.educationalDivision
  );

  const division =
    educationalDivisionState[0].educationalSubDivision[0].subDivisionType;
  const updateDiscountUnits = (event, index) => {
    const { id } = event.target;
    paymentState.map((paymentState) => {
      if (paymentState.Id === index) {
        dispatch(
          updatePaymentDiscountUnit({
            paymentId: index,
            unitType: id,
          })
        );
      }
    });
  };

  const dispatch = useDispatch();
  const ref0 = useRef(null);
  const ref1 = useRef(null);
  const ref2 = useRef(null);
  const ref3 = useRef(null);
  const itemEls = useRef(new Array());
  const refEls = useRef(new Array());

  function clearRefs(index) {
    for (let a = 0; a < refEls.current.length; a++) {
      if (a === index) continue;
      else {
        refEls.current[a].className = "pr-7";
      }
    }
  }

  function handleClickRefs(index) {
    refEls.current.map((ref) => {
      clearRefs(index);
      if (ref.className === refEls.current[index].className) {
        ref.className += " focused-labels";
      } else {
        for (let a = 0; a < refEls.current.length; a++) {
          if (a === index) continue;
          else {
            refEls.current[a].className = " pr-7";
          }
        }
      }
    });
  }

  const onAClick = (e, index) => {
    handleClickRefs(index);
    if (ref0.current !== null) ref0.current.className = "focused-labels";
    if (ref1.current !== null) ref1.current.className = "";
    if (ref2.current !== null) ref2.current.className = "";
    if (ref3.current !== null) ref3.current.className = "";
  };

  const onBClick = (e, index) => {
    handleClickRefs(index);
    if (ref0.current !== null) ref0.current.className = "";
    if (ref1.current !== null) ref1.current.className = "focused-labels";
    if (ref2.current !== null) ref2.current.className = "";
    if (ref3.current !== null) ref3.current.className = "";
  };

  const onCClick = (e, index) => {
    handleClickRefs(index);
    if (ref0.current !== null) ref0.current.className = "";
    if (ref1.current !== null) ref1.current.className = "";
    if (ref2.current !== null) ref2.current.className = "focused-labels";
    if (ref3.current !== null) ref3.current.className = "";
  };

  const onDClick = (e, index) => {
    handleClickRefs(index);
    if (ref0.current !== null) ref0.current.className = "";
    if (ref1.current !== null) ref1.current.className = "";
    if (ref2.current !== null) ref2.current.className = "";
    if (ref3.current !== null) ref3.current.className = "focused-labels";
  };

  const [gender, setGender] = useState(false);
  const [specialneed, setSpecialneed] = useState(false);
  const [scholarship, setScholarship] = useState(false);
  const [custom, setCustom] = useState(false);

  // Check existance of each discount parameter to display their names as column header
  useEffect(() => {
    paymentState.map((payment) => {
      if (payment.discountParameters.genderBasedDiscount.value === true) {
        setGender(true);
      }
      if (payment.discountParameters.specialNeedsBasedDiscount.value === true) {
        setSpecialneed(true);
      }
      if (payment.discountParameters.scholarshipBasedDiscount.value === true) {
        setScholarship(true);
      }
      if (payment.discountParameters.customPaymentDiscount.value === true) {
        setCustom(true);
      }
    });
  }, [paymentState]);

  return (
    <div className="field-group-containeraa">
      <section>
        <table className="payment-tableaa">
          <TableCaption label={"Payment Amount Tabel"} />
          <thead>
            <tr className="bg--th ">
              <th>
                <span className="flex-start">
                  <div className="checkbox-inputs input__group">
                    <label className="checkbox-items">
                      <p className=" table-headers  pb-1 pt-1 ml-p5 ">
                        Payment Types
                      </p>
                    </label>
                  </div>
                </span>
              </th>
              {/* headers for discount parameters */}
              {gender && (
                <th className="">
                  <span className="flex-start">
                    <span ref={ref0}>
                      <ColumnHeader label={"Gender"} />
                    </span>
                  </span>
                  <br />
                </th>
              )}
              {specialneed && (
                <th>
                  <span className="flex-start ">
                    <span ref={ref1}>
                      <ColumnHeader label={"Special "} />
                    </span>
                  </span>
                  <br />
                </th>
              )}
              {scholarship && (
                <th>
                  <span className="flex-start ">
                    <span ref={ref2}>
                      <ColumnHeader label={"Scholarship"} />
                    </span>
                  </span>
                  <br />
                </th>
              )}
              {custom && (
                <th className="pr-6 ">
                  <span className="flex-start ">
                    <span ref={ref3}>
                      <ColumnHeader label={"Custom"} />
                    </span>
                  </span>
                  <br />
                </th>
              )}
            </tr>
          </thead>
          <tbody className="last-element">
            {/* PAYMENT TYPES  */}
            {paymentState.map((payments, index) => (
              <tr key={index}>
                <td className={payments.paymentType.paymentName}>
                  <div
                    onClick={() => clearRefs(index)}
                    ref={(element) => {
                      refEls.current[index] = element;
                    }}
                    // className="flex-c flex-start field-group-container pr-7"
                  >
                    <RowHeader label={payments.paymentType.paymentName} />
                    {/* <section className="flex-start flex-c">
                    </section> */}
                  </div>
                  {/* <br /> */}
                </td>
                {/* INPUT CONTROL FOR GENDER DISCOUNTS */}

                <td
                  ref={(element) => itemEls.current.push(element)}
                  onClick={(e) => onAClick(e, index)}
                  className={payments.paymentType.paymentName + " pr-2"}
                >
                  <Textbox2 placeholder={"Amount in ETB"} />
                </td>
                <td
                  ref={(element) => itemEls.current.push(element)}
                  onClick={(e) => onBClick(e, index)}
                  className={payments.paymentType.paymentName + " pr-2"}
                >
                  <Textbox2 placeholder={"Amount in ETB"} />
                </td>
                <td
                  ref={(element) => itemEls.current.push(element)}
                  onClick={(e) => onCClick(e, index)}
                  className={payments.paymentType.paymentName + " pr-2"}
                >
                  <Textbox2 placeholder={"Amount in ETB"} />
                </td>
                <td
                  ref={(element) => itemEls.current.push(element)}
                  onClick={(e) => onDClick(e, index)}
                  className={payments.paymentType.paymentName + " pr-2"}
                >
                  <Textbox2 placeholder={"Amount in ETB"} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    </div>
  );
};

export default PaymentAmountTable;
