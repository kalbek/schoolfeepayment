import AddMoreButton from "../../../../Utilities/AddMoreButton";
import HideOrshow from "../../../../../../Buttons/hideOrshow";
import RemoveLinksButton from "../../../../../../Buttons/RemoveLinksButton";
import { useSelector } from "react-redux";

const BasedOnAnnualPeriodNotByDivisions = ({
  index,
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
  return (
    <>
      {paymentState[index].paymentBase.advancedAnnualPeriodType.charAt(0) ===
      "p" ? (
        <>
          {paymentState[index].paymentBase.courseBasedPayment.periods.map(
            (topPeriod) =>
              topPeriod.map((period, periodIndex) => (
                <div key={periodIndex}>
                  <div className="field-subgroup-containers">
                    <div className="flex-ccc">
                      <div>
                        <div className="flex-ccc mt-1">
                          <div className={"flex-c -mt-1p5"}>
                            {/*Map with subdivisions (e.g. Years) */}
                            <div className="field-subgroup-containers">
                              <section className={"mt-1aa"}>
                                <div className="flex-ccc">
                                  {/* MAP FOR YEARS / GRADE LEVELS */}
                                  {/* checking conditions for top-level or sub-level annual period */}
                                  {/* if Annual period choice is top-level-period */}
                                  {/* Map with Top-level period */}
                                  <div className="">
                                    {/* Map by major division e.g. by Quarter */}
                                    <>
                                      {period.shifts.length > 0 ? (
                                        period.shifts.map(
                                          (shift, shiftIndex) => (
                                            <div
                                              key={shiftIndex}
                                              className="flex inputs field-subgroup-containers"
                                            >
                                              <section>
                                                <div className="flex-cs mt-1aa mb-1">
                                                  <div className="flex-c flex-start">
                                                    <label></label>
                                                    <label>
                                                      {/* Year */}
                                                      {period.periodName}
                                                    </label>
                                                  </div>
                                                  <div className="flex">
                                                    <div className="flex-c flex-start">
                                                      {/* Quarter  */}
                                                      {/* <label>{TLP.periodName}</label> */}
                                                      <label>
                                                        {/* Shift Name */}
                                                        {shift.shiftName
                                                          .charAt(0)
                                                          .toUpperCase() +
                                                          shift.shiftName.slice(
                                                            1
                                                          )}
                                                      </label>
                                                    </div>
                                                    <div className="space-for-remove-small"></div>
                                                  </div>
                                                </div>
                                                <div className="flex-c flex-end mb-1">
                                                  {/* Map with shifts */}
                                                  <div className="flex gapp5">
                                                    {shift.courses.map(
                                                      (course, courseIdx) => (
                                                        <div key={courseIdx}>
                                                          <div className="flex-c flex-start">
                                                            <div className="flex">
                                                              <div className="flex gapp5">
                                                                <div
                                                                  className={
                                                                    hasCourseUnit
                                                                      ? "flex-cs gapp5 input--medium"
                                                                      : "flex-cs input--above-medium"
                                                                  }
                                                                >
                                                                  <input
                                                                    type="text"
                                                                    id={
                                                                      "courseName" +
                                                                      index
                                                                    }
                                                                    name={
                                                                      "courseName"
                                                                    }
                                                                    placeholder="Course Name"
                                                                    tabIndex={9}
                                                                  />
                                                                </div>
                                                                <div className="flex-cs input--xsmall ">
                                                                  {hasCourseUnit ? (
                                                                    <>
                                                                      <input
                                                                        type="text"
                                                                        placeholder={
                                                                          crHr
                                                                            ? "Cr.Hr"
                                                                            : "Contact Hr."
                                                                        }
                                                                        id={
                                                                          "creditHour" +
                                                                          index
                                                                        }
                                                                        name={
                                                                          "courseCreditHour"
                                                                        }
                                                                        tabIndex={
                                                                          9
                                                                        }
                                                                      />
                                                                    </>
                                                                  ) : (
                                                                    <></>
                                                                  )}

                                                                  <RemoveLinksButton />
                                                                </div>
                                                              </div>
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
                                                                        &nbsp;&nbsp;{" "}
                                                                        <p>
                                                                          Add
                                                                          Course
                                                                        </p>
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
                                                                    className={
                                                                      true
                                                                        ? "input-group mt-p4 "
                                                                        : "input-group mt-3 "
                                                                    }
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
                                                      )
                                                    )}
                                                  </div>
                                                </div>
                                              </section>
                                            </div>
                                          )
                                        )
                                      ) : (
                                        <div className="warning flex-ccc pt-1 pb-p5">
                                          <label htmlFor="" className="flex">
                                            <p>WARNING: </p> &nbsp;
                                            {period.periodName} HAS NO SHIFTS!
                                          </label>
                                          <label htmlFor="">
                                            <p>
                                              You have deselected the default
                                              REGULAR shift.
                                            </p>
                                          </label>
                                          <label htmlFor="">
                                            You have to select at least one
                                            shift to add courses. Go to step 2.
                                          </label>
                                        </div>
                                      )}
                                    </>
                                  </div>
                                  &nbsp;
                                </div>
                              </section>
                            </div>
                          </div>
                        </div>
                      </div>
                      <label htmlFor="">&nbsp;</label>
                    </div>
                  </div>
                </div>
              ))
          )}
        </>
      ) : paymentState[index].paymentBase.advancedAnnualPeriodType.charAt(0) ===
        "s" ? (
        // Else map with subPeriod
        <>
          {paymentState[index].paymentBase.courseBasedPayment.periods.map(
            (topPeriod, periodIndex) => (
              <div key={periodIndex} className="field-subgroup-containers">
                {topPeriod.map((period, periodIndex) => (
                  <div key={periodIndex}>
                    <div className="flex-ccc">
                      <div>
                        {period.subPeriods.map((subPeriod) => (
                          <div className="flex-ccc mt-1">
                            <div className={"flex-c -mt-1p5"}>
                              {/*Map with subdivisions (e.g. Years) */}

                              <div className="field-subgroup-containers">
                                <section>
                                  <div className="flex-ccc">
                                    {/* MAP FOR YEARS / GRADE LEVELS */}
                                    {/* checking conditions for top-level or sub-level annual period */}
                                    {/* if Annual period choice is top-level-period */}
                                    {/* Map with Top-level period */}
                                    <div className="">
                                      <div>
                                        <div className="flex-ccc   mb-p5">
                                          <div className="flex-cs"></div>
                                        </div>
                                        {/* Map by major division e.g. by Quarter */}
                                        <>
                                          {period.shifts.length > 0 ? (
                                            subPeriod.shifts.map(
                                              (shift, shiftIndex) => (
                                                <div
                                                  key={shiftIndex}
                                                  className="flex inputs field-subgroup-containers"
                                                >
                                                  <section>
                                                    <div className="flex-cs mt-1aa mb-1">
                                                      <div className="flex-c flex-start">
                                                        <label>
                                                          {/* Department */}
                                                          {/* {division.divisionName} */}
                                                        </label>
                                                        <label>
                                                          {/* Year */}
                                                          {subPeriod.periodName}
                                                        </label>
                                                      </div>
                                                      <div className="flex">
                                                        <div className="flex-c flex-start">
                                                          {/* Quarter  */}
                                                          {/* <label>{TLP.periodName}</label> */}
                                                          <label>
                                                            {/* Shift Name */}
                                                            {shift.shiftName
                                                              .charAt(0)
                                                              .toUpperCase() +
                                                              shift.shiftName.slice(
                                                                1
                                                              )}
                                                          </label>
                                                        </div>
                                                        <div className="space-for-remove-small"></div>
                                                      </div>
                                                    </div>
                                                    <div className="flex-c flex-end mb-1">
                                                      {/* Map with shifts */}
                                                      <div className="flex gapp5">
                                                        {shift.courses.map(
                                                          (
                                                            course,
                                                            courseIndex
                                                          ) => (
                                                            <div
                                                              key={courseIndex}
                                                            >
                                                              <div className="flex-c flex-start">
                                                                <div className="flex">
                                                                  <div className="flex gapp5">
                                                                    <div
                                                                      className={
                                                                        hasCourseUnit
                                                                          ? "flex-cs gapp5 input--medium"
                                                                          : "flex-cs input--above-medium"
                                                                      }
                                                                    >
                                                                      <input
                                                                        type="text"
                                                                        id={
                                                                          "courseName" +
                                                                          index
                                                                        }
                                                                        name={
                                                                          "courseName"
                                                                        }
                                                                        placeholder="Course Name"
                                                                        tabIndex={
                                                                          9
                                                                        }
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
                                                                            tabIndex={
                                                                              9
                                                                            }
                                                                          />
                                                                        </>
                                                                      ) : (
                                                                        <></>
                                                                      )}
                                                                      <RemoveLinksButton />
                                                                    </div>
                                                                  </div>
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
                                                                            &nbsp;&nbsp;{" "}
                                                                            <p>
                                                                              Add
                                                                              Course
                                                                            </p>
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
                                                                        className={
                                                                          true
                                                                            ? "input-group mt-p4 "
                                                                            : "input-group mt-3 "
                                                                        }
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
                                                          )
                                                        )}
                                                      </div>
                                                    </div>
                                                  </section>
                                                </div>
                                              )
                                            )
                                          ) : (
                                            <div className="warning flex-ccc pt-1 pb-p5">
                                              <label
                                                htmlFor=""
                                                className="flex"
                                              >
                                                <p>WARNING: </p> &nbsp;
                                                {subPeriod.periodName} HAS NO
                                                SHIFTS!
                                              </label>
                                              <label htmlFor="">
                                                <p>
                                                  You have deselected the
                                                  default REGULAR shift.
                                                </p>
                                              </label>
                                              <label htmlFor="">
                                                You have to select at least one
                                                shift to add courses. Go to step
                                                2.
                                              </label>
                                            </div>
                                          )}
                                        </>
                                      </div>
                                    </div>
                                    &nbsp;
                                  </div>
                                </section>
                              </div>
                              <label htmlFor=""></label>
                              <label htmlFor=""></label>
                              <label htmlFor=""></label>
                              <label htmlFor=""></label>
                            </div>
                          </div>
                        ))}
                      </div>
                      <label htmlFor="">&nbsp;</label>
                    </div>
                  </div>
                ))}
              </div>
            )
          )}
        </>
      ) : (
        <></>
      )}
    </>
  );
};

export default BasedOnAnnualPeriodNotByDivisions;
