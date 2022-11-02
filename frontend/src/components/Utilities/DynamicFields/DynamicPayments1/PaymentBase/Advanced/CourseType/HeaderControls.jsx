import HideOrshow from "../../../../../Buttons/hideOrshow";
import { useSelector } from "react-redux";

const HeaderControls = ({
  handleAdvancedPaymentBaseCourseTypeCheckboxSelection,
  handleAdvancedCoursesBasedPaymentVisibility,
  handleAdvancedPaymentBaseCourseByDivisionCheckboxSelection,
  handleAdvancedPaymentBaseCourseBySubDivisionCheckboxSelection,
  index,
}) => {
  const paymentState = useSelector((state) => state.payments.paymentState);
  const educationalDivisionState = useSelector(
    (state) => state.educationalDivisions.educationalDivision
  );
  return (
    <>
      <div className="flex-cs ml-p2 ">
        <div className="flex-c ">
          <label
            className="checkbox-items flex flex-cs "
            // htmlFor={"scholarshipBasedPaymentDiscount" + index}
          >
            <input
              type="checkbox"
              name="scholarshipBasedDiscount"
              //   id={"scholarshipBasedPaymentDiscount" + index}
              value={paymentState[index].paymentBase.courseBasedPayment.value}
              checked={paymentState[index].paymentBase.courseBasedPayment.value}
              onChange={() =>
                handleAdvancedPaymentBaseCourseTypeCheckboxSelection(index)
              }
              tabIndex={9}
            />
            <>
              <span>
                &nbsp; <p>Course Type</p>
              </span>
            </>
          </label>
        </div>

        {paymentState[index].paymentBase.courseBasedPayment.value ? (
          <>
            <div
              className="flex ml-6 flex-end -mt-p5"
              onClick={() => handleAdvancedCoursesBasedPaymentVisibility(index)}
            >
              <HideOrshow
                toogleValue={
                  paymentState[index].paymentBase.courseBasedPayment.visible
                }
              />
              &nbsp;
              <label className="mt-p4">
                {paymentState[index].paymentBase.courseBasedPayment.visible
                  ? "Hide"
                  : "Show"}
              </label>
            </div>
          </>
        ) : (
          <></>
        )}

        {/* CHECKBOX FOR CORSED BASED ON BASED ON DIVISION */}
        <div className="flex gap1 ml-6">
          {paymentState[index].paymentBase.courseBasedPayment.value &&
            paymentState[index].paymentBase.courseBasedPayment.visible && (
              <>
                <label
                  className=" flex"
                  // htmlFor={"scholarshipBasedPaymentDiscount" + index}
                >
                  <input
                    type="checkbox"
                    name="scholarshipBasedDiscount"
                    //   id={"scholarshipBasedPaymentDiscount" + index}
                    value={
                      paymentState[index].paymentBase.courseBasedPayment
                        .basedOnDivision
                    }
                    checked={
                      paymentState[index].paymentBase.courseBasedPayment
                        .basedOnDivision
                    }
                    onChange={(e) =>
                      handleAdvancedPaymentBaseCourseByDivisionCheckboxSelection(
                        e,
                        index
                      )
                    }
                    tabIndex={9}
                  />
                  <>
                    <span>
                      &nbsp;{" "}
                      <p>By {educationalDivisionState[0].divisionType}</p>
                    </span>
                  </>
                </label>
                {/* CHECKBOX FOR CORSED BASED ON BASED ON SUBDIVISION */}

                <label
                  className=" flex -ml-p4"
                  // htmlFor={"scholarshipBasedPaymentDiscount" + index}
                >
                  <input
                    type="checkbox"
                    name="scholarshipBasedDiscount"
                    //   id={"scholarshipBasedPaymentDiscount" + index}
                    value={
                      paymentState[index].paymentBase.courseBasedPayment
                        .basedOnSubDivision
                    }
                    checked={
                      paymentState[index].paymentBase.courseBasedPayment
                        .basedOnSubDivision
                    }
                    onChange={(e) =>
                      handleAdvancedPaymentBaseCourseBySubDivisionCheckboxSelection(
                        e,
                        index
                      )
                    }
                    tabIndex={9}
                  />
                  <>
                    <span>
                      &nbsp;{" "}
                      <p>By {educationalDivisionState[0].subDivisionType}</p>
                    </span>
                  </>
                </label>
              </>
            )}
        </div>
      </div>
    </>
  );
};

export default HeaderControls;
