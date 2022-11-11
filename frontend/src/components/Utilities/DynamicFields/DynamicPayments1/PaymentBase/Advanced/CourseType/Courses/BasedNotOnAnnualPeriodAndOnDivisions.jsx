import AddMoreButton from "../../../../Utilities/AddMoreButton";
import HideOrshow from "../../../../../../Buttons/hideOrshow";
import RemoveLinksButton from "../../../../../../Buttons/RemoveLinksButton";
import { useSelector } from "react-redux";

const BasedNotOnAnnualPeriodAndOnDivisions = ({
  index,
  handleNewCoursesForDivisonButNotAnnualPeriodBasedPayments,
  handleRemoveCoursesForDivisonButNotAnnualPeriodBasedPayments,
  handleSubDivsionBasedNnotPeriodBasedValues,
  handleShowHideCoursesForSubDivisionNotAnnualPeriod,
  // handleAdvancePaymentBaseCourseNameValues,
  // handleShowHideCourses,
  // handleRemoveCourses,
  // handleNewCoursesForAdvancedPaymentBase,
  // handleNothing,
}) => {
  const paymentState = useSelector((state) => state.payments.paymentState);
  const hasCourseUnit =
    paymentState[index].paymentBase.advancedCourseUnitsCheckbox;
  const crHr =
    paymentState[index].paymentBase.advancedCourseUnitType.charAt(1) === "r";
  const majorDivisonSelected =
    paymentState[index].paymentBase.advancedMajorEducationalDivisionCheckbox;
  const subDivisionSelected =
    paymentState[index].paymentBase.advancedEducationalSubDivisionCheckbox;

  return (
    <>
      <div className=" ">
        <div className="flex-ccc">
          <div>
            {majorDivisonSelected && subDivisionSelected ? (
              paymentState[index].paymentBase.courseBasedPayment.divisions.map(
                (division, divisionIndex) => (
                  <div key={divisionIndex}>
                    <div>
                      {/*Map with subdivisions (e.g. Years) */}

                      <div className="  field-subgroup-containers">
                        <div>
                          {/* checking conditions for top-level or sub-level annual period */}
                          {/* if Annual period choice is top-level-period */}
                          {/* Map with Top-level period */}
                          <div>
                            {division.educationalSubDivision.map(
                              (subDivision, subDivisionIndex) => (
                                <div className="flex field-subgroup-containers">
                                  <section>
                                    <div className="flex-c">
                                      <div className="flex  gap5 mt-1 mb-1 ">
                                        <label>{division.divisionName}</label>
                                        <div className="space-for-remove"></div>
                                        {/* <div className="space-for-remove-small"></div> */}
                                        <label className=" ">
                                          {subDivision.subDivisionName}
                                          <div className="space-for-remove-small"></div>
                                        </label>
                                      </div>
                                      <div className="flex-c flex-start">
                                        {/* <label>{subPeriod.periodName}</label> */}
                                        {/* Map with shifts */}
                                        <div className="flex-c">
                                          {/* <div className="flex-cs gapp5 input--above-small2 "> */}
                                          {/* Map with shifts courses */}
                                          {subDivision.visible ? (
                                            subDivision.courses.map(
                                              (course, courseIndex) => (
                                                <>
                                                  <div
                                                    key={courseIndex}
                                                    className="flex gapp5"
                                                  >
                                                    <div
                                                      className={
                                                        hasCourseUnit
                                                          ? "flex input--medium inputs"
                                                          : "flex input--above-medium inputs"
                                                      }
                                                    >
                                                      <input
                                                        type="text"
                                                        id={
                                                          "courseName" + index
                                                        }
                                                        name={"courseName"}
                                                        placeholder="Course Name"
                                                        value={
                                                          course.courseName
                                                        }
                                                        onChange={(event) =>
                                                          handleSubDivsionBasedNnotPeriodBasedValues(
                                                            event,
                                                            index,
                                                            divisionIndex,
                                                            subDivisionIndex,
                                                            courseIndex
                                                          )
                                                        }
                                                        tabIndex={9}
                                                      />
                                                    </div>
                                                    <div className="flex-cs input--xsmall ">
                                                      {hasCourseUnit ? (
                                                        <>
                                                          <div className="inputs">
                                                            <input
                                                              type="text"
                                                              id={
                                                                "creditHour" +
                                                                index
                                                              }
                                                              placeholder={
                                                                crHr
                                                                  ? "Cr.Hr"
                                                                  : "Contact Hr."
                                                              }
                                                              value={
                                                                crHr
                                                                  ? course.creditHours
                                                                  : course.contactHours
                                                              }
                                                              onChange={(
                                                                event
                                                              ) =>
                                                                handleSubDivsionBasedNnotPeriodBasedValues(
                                                                  event,
                                                                  index,
                                                                  divisionIndex,
                                                                  subDivisionIndex,
                                                                  courseIndex
                                                                )
                                                              }
                                                              name={
                                                                crHr
                                                                  ? "CrHr"
                                                                  : "ContactHr"
                                                              }
                                                              tabIndex={9}
                                                            />
                                                          </div>
                                                        </>
                                                      ) : (
                                                        <></>
                                                      )}
                                                      {subDivision.courses
                                                        .length > 1 ? (
                                                        <RemoveLinksButton
                                                          index={index}
                                                          subIndex={
                                                            divisionIndex
                                                          }
                                                          subSubIndex={
                                                            subDivisionIndex
                                                          }
                                                          subSubSubIndex={
                                                            courseIndex
                                                          }
                                                          remove={
                                                            handleRemoveCoursesForDivisonButNotAnnualPeriodBasedPayments
                                                          }
                                                        />
                                                      ) : (
                                                        <>
                                                          <div className="space-for-remove-small"></div>
                                                        </>
                                                      )}
                                                    </div>
                                                  </div>
                                                </>
                                              )
                                            )
                                          ) : (
                                            <>
                                              <label
                                                htmlFor=""
                                                className=" mb-1p5 ml-1"
                                                onClick={() =>
                                                  handleShowHideCoursesForSubDivisionNotAnnualPeriod(
                                                    index,
                                                    divisionIndex,
                                                    subDivisionIndex
                                                  )
                                                }
                                              >
                                                Hidden
                                              </label>
                                            </>
                                          )}
                                          <div className="flex-cs gap4">
                                            {subDivision.visible ? (
                                              <label className="flex">
                                                <AddMoreButton
                                                  index={index}
                                                  subIndex={divisionIndex}
                                                  subSubIndex={subDivisionIndex}
                                                  handleLinks={
                                                    handleNewCoursesForDivisonButNotAnnualPeriodBasedPayments
                                                  }
                                                />
                                                <>
                                                  <span className="-ml-1">
                                                    &nbsp;&nbsp;{" "}
                                                    <p>Add Course</p>
                                                  </span>
                                                </>
                                              </label>
                                            ) : (
                                              <>
                                                <div className="space for-remove"></div>
                                              </>
                                            )}
                                            <div
                                              className="flex"
                                              onClick={() =>
                                                handleShowHideCoursesForSubDivisionNotAnnualPeriod(
                                                  index,
                                                  divisionIndex,
                                                  subDivisionIndex
                                                )
                                              }
                                            >
                                              <div className="space-for-remove"></div>
                                              <div
                                              // className={
                                              //   !subPeriod.visible
                                              //     ? " mt-2p5"
                                              //     : ""
                                              // }
                                              >
                                                <HideOrshow
                                                  toogleValue={
                                                    subDivision.visible
                                                  }
                                                />
                                              </div>
                                              &nbsp;
                                              <label
                                                className={
                                                  subDivision.visible
                                                    ? "mt-p4 "
                                                    : "  mt-p1"
                                                }
                                              >
                                                &nbsp;
                                                {subDivision.visible
                                                  ? "Hide Courses"
                                                  : "Show Courses"}
                                              </label>
                                            </div>
                                            <div className="flex-start">
                                              <div className="flex  -ml-p5 gapfull"></div>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                    &nbsp;
                                  </section>
                                </div>
                              )
                            )}
                          </div>
                          &nbsp;
                        </div>
                      </div>
                    </div>
                  </div>
                )
              )
            ) : // If based on division and not on subdivision
            majorDivisonSelected && !subDivisionSelected ? (
              <>
                {paymentState[
                  index
                ].paymentBase.courseBasedPayment.divisions.map(
                  (division, divisionIndex) => (
                    <div key={divisionIndex} className="flex-ccc mt-1">
                      <div className={"flex-c -mt-1p5"}>
                        <div className="inputs field-subgroup-containers">
                          <section
                            // key={subDivisionIndex}
                            className={"mt-1"}
                          >
                            {/*  Year 1 */}
                            <div className="flex-cs gapfull mt-1 -mb-1 ">
                              <label className="mt-p5">
                                {division.divisionName}
                              </label>
                              <div className="flex">
                                <label className="mt-p5">
                                  {/* {subDivision.subDivisionName} */}
                                </label>
                                <div className="space-for-remove-small"></div>
                              </div>
                            </div>
                            <div className="flex-ccc">
                              {/* MAP FOR YEARS / GRADE LEVELS */}
                              {/* checking conditions for top-level or sub-level annual period */}
                              {/* if Annual period choice is top-level-period */}
                              {/* Map with Top-level period */}
                              <div className="">
                                {/* <label htmlFor="">{TLP.periodName}</label> */}
                                <div>
                                  <div className="flex gapfull mt-p5 mb-p5">
                                    <div className="flex-cs">
                                      <label>
                                        {/* {subDivision.subDivisionName} */}
                                      </label>
                                      &nbsp; &nbsp; &nbsp;
                                      <label
                                        // htmlFor={"courseName" + index}
                                        className="pl-1"
                                      >
                                        {/* {subPeriod.periodName} */}
                                      </label>
                                    </div>
                                  </div>
                                  <div className="flex inputs field-subgroup-containers">
                                    <>
                                      <div className="flex-c flex-start">
                                        {/* <label>{subPeriod.periodName}</label> */}
                                        {/* Map with shifts */}

                                        <div className="flex gapp5">
                                          {/* <div className="flex-cs gapp5 input--above-small2 "> */}
                                          {/* Map with shifts courses */}
                                          {division.courses.map(
                                            (course, courseIndex) => (
                                              <div
                                                key={courseIndex}
                                                className="flex gapp5"
                                              >
                                                <div
                                                  className={
                                                    hasCourseUnit
                                                      ? "flex-cs gapp5 input--medium"
                                                      : "flex-cs input--above-medium"
                                                  }
                                                >
                                                  <input
                                                    type="text"
                                                    id={"courseName" + index}
                                                    name={"courseName"}
                                                    placeholder="Course Name"
                                                    tabIndex={9}
                                                  />
                                                </div>
                                                <div className="flex-cs input--xsmall ">
                                                  {hasCourseUnit ? (
                                                    <>
                                                      <input
                                                        type="text"
                                                        id={
                                                          "creditHour" + index
                                                        }
                                                        placeholder={
                                                          crHr
                                                            ? "Cr.Hr"
                                                            : "Contact Hr."
                                                        }
                                                        name={
                                                          "courseCreditHour"
                                                        }
                                                        tabIndex={9}
                                                      />
                                                    </>
                                                  ) : (
                                                    <></>
                                                  )}
                                                  <RemoveLinksButton />
                                                </div>
                                              </div>
                                            )
                                          )}
                                        </div>
                                      </div>
                                      &nbsp;
                                    </>
                                  </div>
                                  <div className="flex-start">
                                    <div className="flex  -ml-p5 gapfull">
                                      {true ? (
                                        <label className="flex">
                                          <AddMoreButton
                                          // index={index}
                                          // subIndex={divisionIndex}
                                          // subSubIndex={subDivisionIndex}
                                          // subSubSubIndex={subPeriodIndex}
                                          // handleLinks={
                                          //   paymentState[index].paymentBase
                                          //     .courseBasedPayment.display
                                          //     ? handleNewCoursesForAdvancedPaymentBase
                                          //     : handleNothing
                                          // }
                                          />
                                          <>
                                            <span className="-ml-1">
                                              &nbsp;&nbsp; <p>Add Course</p>
                                            </span>
                                          </>
                                        </label>
                                      ) : (
                                        <>
                                          <label
                                            htmlFor=""
                                            className="mt-3 ml-1"
                                          >
                                            Hidden
                                          </label>
                                        </>
                                      )}
                                      <div
                                        className="flex"
                                        // onClick={() =>
                                        //   handleShowHideCourses(
                                        //     index,
                                        //     divisionIndex,
                                        //     subDivisionIndex,
                                        //     subPeriodIndex
                                        //   )
                                        // }
                                      >
                                        <div className="space-for-remove"></div>
                                        <div
                                        // className={
                                        //   !subPeriod.visible
                                        //     ? " mt-2p5"
                                        //     : ""
                                        // }
                                        >
                                          <HideOrshow
                                          // toogleValue={subPeriod.visible}
                                          />
                                        </div>
                                        &nbsp;
                                        <label
                                        // className={
                                        //   false
                                        //     ? "input-group mt-p4 "
                                        //     : "input-group mt-3 "
                                        // }
                                        >
                                          &nbsp;
                                          {true
                                            ? "Hide Courses"
                                            : "Show Courses"}
                                        </label>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </section>
                          &nbsp;
                        </div>
                      </div>
                    </div>
                  )
                )}
              </>
            ) : // If not based on division and is based on subdivision
            !majorDivisonSelected && subDivisionSelected ? (
              <>
                {paymentState[
                  index
                ].paymentBase.courseBasedPayment.divisions.map(
                  (division, divisionIndex) =>
                    division.educationalSubDivision.map(
                      (subDivision, subDivisionIndex) => (
                        <div key={divisionIndex} className="flex-ccc mt-1">
                          <div className={"flex-c -mt-1p5"}>
                            <div className="inputs field-subgroup-containers">
                              <section
                                key={subDivisionIndex}
                                className={"mt-1"}
                              >
                                {/*  Year 1 */}
                                <div className="flex-cs gapfull mt-1 -mb-1 ">
                                  <div className="flex">
                                    <label className="mt-p5">
                                      {subDivision.subDivisionName}
                                    </label>
                                    <div className="space-for-remove-small"></div>
                                  </div>
                                </div>
                                <div className="flex-ccc">
                                  {/* MAP FOR YEARS / GRADE LEVELS */}
                                  {/* checking conditions for top-level or sub-level annual period */}
                                  {/* if Annual period choice is top-level-period */}
                                  {/* Map with Top-level period */}
                                  <div className="">
                                    {/* <label htmlFor="">{TLP.periodName}</label> */}
                                    <div>
                                      <div className="flex gapfull mt-p5 mb-p5">
                                        <div className="flex-cs">
                                          <label>
                                            {/* {subDivision.subDivisionName} */}
                                          </label>
                                          &nbsp; &nbsp; &nbsp;
                                          <label
                                            // htmlFor={"courseName" + index}
                                            className="pl-1"
                                          >
                                            {/* {subPeriod.periodName} */}
                                          </label>
                                        </div>
                                      </div>

                                      <div className="flex inputs field-subgroup-containers">
                                        <>
                                          <div className="flex-c flex-start">
                                            {/* <label>{subPeriod.periodName}</label> */}
                                            {/* Map with shifts */}

                                            <div className="flex gapp5">
                                              {/* <div className="flex-cs gapp5 input--above-small2 "> */}
                                              {/* Map with shifts courses */}
                                              {subDivision.courses.map(
                                                (course, courseIndex) => (
                                                  <div
                                                    key={courseIndex}
                                                    className="flex gapp5"
                                                  >
                                                    <div
                                                      className={
                                                        hasCourseUnit
                                                          ? "gapp5 input--medium"
                                                          : "input--above-medium"
                                                      }
                                                    >
                                                      <input
                                                        type="text"
                                                        id={
                                                          "courseName" + index
                                                        }
                                                        name={"courseName"}
                                                        placeholder="Course Name"
                                                        tabIndex={9}
                                                      />
                                                    </div>
                                                    <div className="flex-cs input--xsmall ">
                                                      {hasCourseUnit ? (
                                                        <>
                                                          <input
                                                            type="text"
                                                            id={
                                                              "creditHour" +
                                                              index
                                                            }
                                                            placeholder={
                                                              crHr
                                                                ? "Cr.Hr"
                                                                : "Contact Hr."
                                                            }
                                                            name={
                                                              "courseCreditHour"
                                                            }
                                                            tabIndex={9}
                                                          />
                                                        </>
                                                      ) : (
                                                        <></>
                                                      )}
                                                      <RemoveLinksButton />
                                                    </div>
                                                  </div>
                                                )
                                              )}
                                            </div>
                                          </div>
                                          &nbsp;
                                        </>
                                      </div>

                                      <div className="flex-start">
                                        <div className="flex  -ml-p5 gapfull">
                                          {true ? (
                                            <label className="flex">
                                              <AddMoreButton
                                              // index={index}
                                              // subIndex={divisionIndex}
                                              // subSubIndex={subDivisionIndex}
                                              // subSubSubIndex={subPeriodIndex}
                                              // handleLinks={
                                              //   paymentState[index].paymentBase
                                              //     .courseBasedPayment.display
                                              //     ? handleNewCoursesForAdvancedPaymentBase
                                              //     : handleNothing
                                              // }
                                              />
                                              <>
                                                <span className="-ml-1">
                                                  &nbsp;&nbsp; <p>Add Course</p>
                                                </span>
                                              </>
                                            </label>
                                          ) : (
                                            <>
                                              <label
                                                htmlFor=""
                                                className="mt-3 ml-1"
                                              >
                                                Hidden
                                              </label>
                                            </>
                                          )}
                                          <div
                                            className="flex"
                                            // onClick={() =>
                                            //   handleShowHideCourses(
                                            //     index,
                                            //     divisionIndex,
                                            //     subDivisionIndex,
                                            //     subPeriodIndex
                                            //   )
                                            // }
                                          >
                                            <div className="space-for-remove"></div>
                                            <div
                                            // className={
                                            //   !subPeriod.visible
                                            //     ? " mt-2p5"
                                            //     : ""
                                            // }
                                            >
                                              <HideOrshow
                                              // toogleValue={subPeriod.visible}
                                              />
                                            </div>
                                            &nbsp;
                                            <label
                                            // className={
                                            //   false
                                            //     ? "input-group mt-p4 "
                                            //     : "input-group mt-3 "
                                            // }
                                            >
                                              &nbsp;
                                              {true
                                                ? "Hide Courses"
                                                : "Show Courses"}
                                            </label>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </section>
                              &nbsp;
                            </div>
                          </div>
                        </div>
                      )
                    )
                )}
              </>
            ) : (
              <>
                {" "}
                <label htmlFor="" className="pt-1 pb-1">
                  Wrong Annual Period & Division settings. Choose Major or Sub
                  Divisions.
                </label>
              </>
            )}
          </div>
          <label htmlFor="">&nbsp;</label>
        </div>
      </div>
    </>
  );
};

export default BasedNotOnAnnualPeriodAndOnDivisions;
