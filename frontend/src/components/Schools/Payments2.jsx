import RemoveButton from "../Utilities/Buttons/RemoveButton";
import RemoveLinksButton from "../Utilities/Buttons/RemoveLinksButton";
import "../../Styles/dynamicButtonsStyle.css";
import AddMoreButton from "../Utilities/Buttons/AddMoreButton";
import { useSelector } from "react-redux";
import PaymentTable from "../Utilities/DynamicFields/PaymentTable";
import Radio from "../InputControls/Radio";
import Textbox from "../InputControls/Textbox";
import SmallCard from "../Utilities/Cards/SmallCard";
import DeleteButton from "../Utilities/Buttons/DeleteButton";

const Payments2 = ({
  formData,
  setFormData,
  removeEducationalSubdivisions,
  removeSubDivisonSections,
  createNewEducationalDivisions,
  handleUpdateEducationalSubDivisions,
  createNewEducationalSubDivisions,
  createNewSubDivisonSections,
  removeEducationalDivisions,
  handleEducationalDivisionAndSubDivisionTypes,
  handleUpdateEducationalDivisions,
  handleUpdateSubDivisionSection,
}) => {
  const educationalDivisionState = useSelector(
    (state) => state.educationalDivisions.educationalDivision
  );
  const periodState = useSelector((state) => state.periods.annualPeriodState);
  const paymentState = useSelector((state) => state.payments.paymentState);
  const lastDivisionState =
    educationalDivisionState[educationalDivisionState.length - 1];
  const lastSubDivisionState =
    lastDivisionState.educationalSubDivision[
      lastDivisionState.educationalSubDivision.length - 1
    ];
  return (
    <div className="flex-c">
      <div>
        <h1 className="form__titles--mid">
          Now is the time for Numbers! --
          <strong> Payment Amounts --</strong>
        </h1>
        <h3  className="form__subtitle">
          Based on the data you provided earlier your school's payment detail is
          mapped to look like this
        </h3>
      </div>

      {/*CONTAINER FOR DIVISIONS AND SUBDIVISION TYPES RADIO CONTROLS */}

      {/* EDUCATIONAL DIVISIONS AND SUBDIVISION DETAIL CARDS */}
      <table className="payment-table">
        <th>
          <td>Payment Types</td>
          {paymentState.map(
            (payments) =>
              payments.periodChecked && (
                <>
                  {periodState.map((period) => (
                    <>
                      <td>
                        Amount for <br /> {period.periodName}
                      </td>
                    </>
                  ))}{" "}
                </>
              )
          )}
          <td></td>
        </th>
        <tbody>
          {/* {paymentState.map((payments) => (
            <tr>
              <td>{payments.paymentTypeToUpdate} </td>
            </tr>
          ))} */}
        </tbody>
      </table>
      <div className="f-start wrap mlp5">
        {/* &nbsp;&nbsp;&nbsp; */}
        {educationalDivisionState.map((division, divisionIndex) => (
          <div
            key={divisionIndex}
            className="input__group dynamic-periods-container "
          >
            {/*EDUCATIONAL STAGES INPUT CONTROLS */}
            <div className="flex-cs">
              <div className="input__group flex-cs m20">
                <div className="inputs input--small">
                  <div className="flex-cs">
                    <label htmlFor=""><u> Payment Types</u> </label>
                    <label htmlFor=""><u>  Amount (ETB)</u></label>
                    <label htmlFor=""><u>  Discounts (%)</u></label>
                    <label htmlFor=""><u>  Duedates (%)</u></label>
                  </div>
                  <br />
                  <label htmlFor="">
                    <ul>
                      <div className="flex-cs">
                        <div>
                          {paymentState.map((singlePayment) => (
                            <li>
                              <div className="flex-cs">
                                {/* <p>Tuition Fee</p> */}
                                <p>{singlePayment.paymentType.paymentName}</p>
                                {singlePayment.paymentTypeToUpdate} &nbsp;
                                <Textbox
                                  // value={division.divisionName}
                                  id="Stage"
                                  name="educationalDivision"
                                  placeholder={""}
                                  tabIndex={1}
                                  onChange={(event) =>
                                    handleUpdateEducationalDivisions(
                                      event,
                                      divisionIndex
                                    )
                                  }
                                  label={""}
                                />
                              </div>
                            </li>
                          ))}
                        </div>
                        <div>
                          {paymentState.map((singlePayment) => (
                            <li>
                              <div className="flex-cs">
                                <Textbox
                                  value={division.divisionName}
                                  id="Stage"
                                  name="educationalDivision"
                                  placeholder={""}
                                  tabIndex={1}
                                  // onChange={(event) =>
                                  //   handleUpdateEducationalDivisions(
                                  //     event,
                                  //     divisionIndex
                                  //   )
                                  // }
                                />
                              </div>
                            </li>
                          ))}
                        </div>
                        <div>
                          {paymentState.map((singlePayment) => (
                            <li>
                              <div className="flex-cs">
                                <Textbox
                                  value={division.divisionName}
                                  id="Stage"
                                  name="educationalDivision"
                                  placeholder={""}
                                  tabIndex={1}
                                  // onChange={(event) =>
                                  //   handleUpdateEducationalDivisions(
                                  //     event,
                                  //     divisionIndex
                                  //   )
                                  // }
                                  label={""}
                                />
                              </div>
                            </li>
                          ))}
                        </div>
                      </div>
                      
                    </ul>
                  </label>
                  <br />
                  <div className="flex-cs ml5r">
                        <></>
                        <div className="flex-end">
                          <Textbox
                            value={division.divisionName}
                            id="Stage"
                            name="educationalDivision"
                            placeholder={""}
                            tabIndex={1}
                            // onChange={(event) =>
                            //   handleUpdateEducationalDivisions(
                            //     event,
                            //     divisionIndex
                            //   )
                            // }
                            label={(<u>Total</u>) }
                          />
                        </div>
                      </div>
                </div>
                
              </div>
              
            </div>
          </div>
        ))}
      </div>

      {/* BUTTON TO ADD A NEW EDUCATIONAL DIVISION CONTROL */}
    </div>
  );
};

export default Payments2;
