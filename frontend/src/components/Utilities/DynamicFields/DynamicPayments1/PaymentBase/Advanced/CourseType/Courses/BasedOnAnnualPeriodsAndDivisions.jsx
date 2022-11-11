import AddMoreButton from "../../../../Utilities/AddMoreButton";
import HideOrshow from "../../../../../../Buttons/hideOrshow";
import RemoveLinksButton from "../../../../../../Buttons/RemoveLinksButton";
import { useSelector } from "react-redux";

const BasedOnAnnualPeriodsAndDivisions = ({
  index,
  handleValueForMajorAnnualPeriodAndMajorDivisonPaymentBase,
  addCoursesForMajorAnnualPeriodAndMajorAndSubDivisionPayments,
  hideShowCoursesForMajorAnnualPeriodAndMajorDivisionPayments,
  handleValueForSubAnnualPeriodAndMajorDivisonPaymentBase,
  removeCoursesForMajorAnnualPeriodAndMajorAndSubDivisionPayments,
  removeCoursesForSubAnnualPeriodAndMajorAndSubDivisionPayments,
  addCoursesForSubAnnualPeriodAndMajorAndSubDivisionPayments,
  hideShowCoursesForSubAnnualPeriodAndMajorDivisionPayments,

  // for major annual-divisions and not sub-divisions
  handleValueForMajorPeriodMajorDivisionNotSubDivisionCourses,
  removeCoursesForMajorPeriodMajorDivisionNotSubdivisions,
  addCoursesForMajorPeriodMajorDivisionNotSubdivisions,
  hideOrShowCoursesForMajorPeriodMajorDivisionNotSubdivisions,
  handleValueForSubPeriodMajorDivisionNotSubDivisionCourses,
  removeSubPeriodMajorDivisionNotSubDivisionCourses,
  addSubPeriodMajorDivisionNotSubDivisionCourses,
  showHideSubPeriodMajorDivisionNotSubDivisionCourses,

  // handleNothing,
}) => {
  const paymentState = useSelector((state) => state.payments.paymentState);
  const topLevelPeriod = useSelector((state) => state.periods.topLevelPeriod);
  const crHr =
    paymentState[index].paymentBase.advancedCourseUnitType.charAt(1) === "r";
  const hasCourseUnit =
    paymentState[index].paymentBase.advancedCourseUnitsCheckbox;
  const majorDivisonSelected =
    paymentState[index].paymentBase.advancedMajorEducationalDivisionCheckbox;
  const subDivisionSelected =
    paymentState[index].paymentBase.advancedEducationalSubDivisionCheckbox;
  return (
    <>
      {/* Mapping with divisions (e.g. Departments) */}
      {paymentState[index].paymentBase.courseBasedPayment.divisions.map(
        (division, divisionIndex) => (
          <div key={divisionIndex}>
            <div className="flex-ccc">
              <div>
                {/* Removables 1 */}
                <div className="flex-ccc mt-1">
                  <div className={"flex-c -mt-1p5"}>
                    {/*Map with subdivisions (e.g. Years) */}
                    {majorDivisonSelected && subDivisionSelected ? (
                      division.educationalSubDivision.map(
                        (subDivision, subDivisionIndex) => (
                          <>
                            <div
                              key={subDivisionIndex}
                              className="field-subgroup-containers"
                            >
                              <label htmlFor="">&nbsp;</label>
                              <section>
                                <div className="flex-ccc">
                                  {/* checking conditions for top-level or sub-level annual period */}
                                  {/* if Annual period choice is top-level-period */}
                                  {/* Map with Top-level period */}
                                  {paymentState[
                                    index
                                  ].paymentBase.advancedAnnualPeriodType.charAt(
                                    0
                                  ) === "p" ? (
                                    <div className="flex-c">
                                      <div>
                                        {paymentState[
                                          index
                                        ].paymentBase.courseBasedPayment.periods.map(
                                          (period, periodIndex) => (
                                            <div key={periodIndex}>
                                              {period.shifts.length > 0 ? (
                                                period.shifts.map(
                                                  (shift, shiftIndex) => (
                                                    <div
                                                      key={shiftIndex}
                                                      className="flex-c field-subgroup-containers"
                                                    >
                                                      <section>
                                                        <div className="flex-cs mt-1 mb-1">
                                                          <div className="flex-c flex-start">
                                                            <label>
                                                              {/* Department */}

                                                              {
                                                                division.divisionName
                                                              }
                                                            </label>
                                                            <label>
                                                              {/* Year */}
                                                              {
                                                                subDivision.subDivisionName
                                                              }
                                                            </label>
                                                          </div>
                                                          <div className="flex">
                                                            <div className="flex-c flex-start">
                                                              {/* Quarter  */}
                                                              <label>
                                                                {
                                                                  period.periodName
                                                                }
                                                              </label>
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
                                                          <div>
                                                            {period.visible ? (
                                                              shift.courses.map(
                                                                (
                                                                  course,
                                                                  courseIndex
                                                                ) => (
                                                                  <div
                                                                    key={
                                                                      courseIndex
                                                                    }
                                                                  >
                                                                    <div className="flex-c flex-start">
                                                                      <div className="flex">
                                                                        <div className="flex gapp5">
                                                                          <div
                                                                            className={
                                                                              hasCourseUnit
                                                                                ? "flex-cs inputs gapp5 input--medium"
                                                                                : "flex-cs inputs input--above-medium"
                                                                            }
                                                                          >
                                                                            <input
                                                                              type="text"
                                                                              id={
                                                                                "courseName" +
                                                                                index
                                                                              }
                                                                              value={
                                                                                course.courseName
                                                                              }
                                                                              onChange={(
                                                                                event
                                                                              ) =>
                                                                                handleValueForMajorAnnualPeriodAndMajorDivisonPaymentBase(
                                                                                  event,
                                                                                  index,
                                                                                  divisionIndex,
                                                                                  subDivisionIndex,
                                                                                  periodIndex,
                                                                                  shiftIndex,
                                                                                  courseIndex
                                                                                )
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
                                                                                <div className="inputs">
                                                                                  {" "}
                                                                                  <input
                                                                                    type="text"
                                                                                    placeholder={
                                                                                      crHr
                                                                                        ? "CrHr"
                                                                                        : "Contact Hr."
                                                                                    }
                                                                                    name={
                                                                                      crHr
                                                                                        ? "CrHr"
                                                                                        : "ContactHr"
                                                                                    }
                                                                                    value={
                                                                                      crHr
                                                                                        ? course.creditHours
                                                                                        : course.contactHours
                                                                                    }
                                                                                    id={
                                                                                      "creditHour" +
                                                                                      index
                                                                                    }
                                                                                    onChange={(
                                                                                      event
                                                                                    ) =>
                                                                                      handleValueForMajorAnnualPeriodAndMajorDivisonPaymentBase(
                                                                                        event,
                                                                                        subDivisionIndex,
                                                                                        divisionIndex,
                                                                                        index,
                                                                                        periodIndex,
                                                                                        shiftIndex,
                                                                                        courseIndex
                                                                                      )
                                                                                    }
                                                                                    tabIndex={
                                                                                      9
                                                                                    }
                                                                                  />
                                                                                </div>
                                                                              </>
                                                                            ) : (
                                                                              <>

                                                                              </>
                                                                            )}
                                                                            <>

                                                                            </>
                                                                            {shift
                                                                              .courses
                                                                              .length >
                                                                            1 ? (
                                                                              <RemoveLinksButton
                                                                                courseIndex
                                                                                index={
                                                                                  index
                                                                                }
                                                                                subIndex={
                                                                                  divisionIndex
                                                                                }
                                                                                subSubIndex={
                                                                                  subDivisionIndex
                                                                                }
                                                                                subSubSubIndex={
                                                                                  periodIndex
                                                                                }
                                                                                subSubSubSubIndex={
                                                                                  shiftIndex
                                                                                }
                                                                                subSubSubSubSubIndex={
                                                                                  courseIndex
                                                                                }
                                                                                remove={
                                                                                  removeCoursesForMajorAnnualPeriodAndMajorAndSubDivisionPayments
                                                                                }
                                                                              />
                                                                            ) : (
                                                                              <>
                                                                                <div className="space-for-remove-small"></div>
                                                                              </>
                                                                            )}
                                                                          </div>
                                                                        </div>
                                                                      </div>
                                                                    </div>
                                                                  </div>
                                                                )
                                                              )
                                                            ) : (
                                                              <>
                                                                <div className="">
                                                                  <div className="flex-c mb-1 -ml-3">
                                                                    <label>
                                                                      Hidden
                                                                    </label>
                                                                  </div>
                                                                </div>
                                                              </>
                                                            )}
                                                            <div className="flex-start">
                                                              <div className="flex  -ml-p5 gapfull">
                                                                <label className="flex">
                                                                  {period.visible ? (
                                                                    <>
                                                                      <AddMoreButton
                                                                        index={
                                                                          index
                                                                        }
                                                                        subIndex={
                                                                          divisionIndex
                                                                        }
                                                                        subSubIndex={
                                                                          subDivisionIndex
                                                                        }
                                                                        subSubSubIndex={
                                                                          periodIndex
                                                                        }
                                                                        subSubSubSubIndex={
                                                                          shiftIndex
                                                                        }
                                                                        handleLinks={
                                                                          addCoursesForMajorAnnualPeriodAndMajorAndSubDivisionPayments
                                                                        }
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
                                                                    </>
                                                                  ) : (
                                                                    <></>
                                                                  )}
                                                                </label>

                                                                <div
                                                                  className="flex"
                                                                  onClick={() =>
                                                                    hideShowCoursesForMajorAnnualPeriodAndMajorDivisionPayments(
                                                                      index,
                                                                      divisionIndex,
                                                                      subDivisionIndex,
                                                                      periodIndex
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
                                                                        period.visible
                                                                      }
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
                                                                    {period.visible
                                                                      ? "Hide Courses"
                                                                      : "Show Courses"}
                                                                  </label>
                                                                </div>
                                                              </div>
                                                              <div></div>
                                                            </div>
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
                                                    {period.periodName} HAS NO
                                                    SHIFTS!
                                                  </label>
                                                  <label htmlFor="">
                                                    You have to select at least
                                                    one shift to add courses. Go
                                                    to step 2.
                                                  </label>
                                                </div>
                                              )}
                                            </div>
                                          )
                                        )}
                                      </div>
                                      {/* If Annual period's choice is subperiod */}
                                    </div>
                                  ) : (
                                    <>
                                      <div>
                                        <div>
                                          {/* Map by major division e.g. by Quarter */}
                                          {paymentState[
                                            index
                                          ].paymentBase.courseBasedPayment.periods.map(
                                            (period, periodIndex) => (
                                              <div key={periodIndex}>
                                                {period.shifts.length > 0 ? (
                                                  period.subPeriods.map(
                                                    (
                                                      subPeriod,
                                                      subPeriodIndex
                                                    ) => (
                                                      <div key={subPeriodIndex}>
                                                        {/* {subPeriod.shifts.map( makes the shift to work */}
                                                        {/* subDivision.shifts.map( makes the shift not to work */}
                                                        {subPeriod.shifts.map(
                                                          (
                                                            shift,
                                                            shiftIndex
                                                          ) => (
                                                            <div
                                                              key={shiftIndex}
                                                              className="flex  field-subgroup-containers"
                                                            >
                                                              <section>
                                                                <div className="flex-cs mt-1 mb-1">
                                                                  <div className="flex-c flex-start">
                                                                    <label>
                                                                      {
                                                                        division.divisionName
                                                                      }
                                                                    </label>
                                                                    <label>
                                                                      {/* Year */}
                                                                      {
                                                                        subDivision.subDivisionName
                                                                      }
                                                                    </label>
                                                                  </div>
                                                                  <div className="flex">
                                                                    <div className="flex-c flex-start">
                                                                      <label>
                                                                        {/* Quarter/ Semester */}
                                                                        {
                                                                          subPeriod.periodName
                                                                        }
                                                                      </label>
                                                                      <label>
                                                                        {/* Shift Name */}
                                                                        {shift.shiftName
                                                                          .charAt(
                                                                            0
                                                                          )
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
                                                                  <div>
                                                                    {subPeriod.visible ? (
                                                                      shift.courses.map(
                                                                        (
                                                                          course,
                                                                          courseIndex
                                                                        ) => (
                                                                          <div
                                                                            key={
                                                                              courseIndex
                                                                            }
                                                                          >
                                                                            <div className="flex-c flex-start">
                                                                              <div className="flex">
                                                                                <div className="flex gapp5">
                                                                                  <div
                                                                                    className={
                                                                                      hasCourseUnit
                                                                                        ? "flex-cs inputs gapp5 input--medium"
                                                                                        : "flex-cs inputs input--above-medium"
                                                                                    }
                                                                                  >
                                                                                    <input
                                                                                      type="text"
                                                                                      id={
                                                                                        "courseName" +
                                                                                        index
                                                                                      }
                                                                                      value={
                                                                                        course.courseName
                                                                                      }
                                                                                      onChange={(
                                                                                        event
                                                                                      ) =>
                                                                                        handleValueForSubAnnualPeriodAndMajorDivisonPaymentBase(
                                                                                          event,
                                                                                          index,
                                                                                          divisionIndex,
                                                                                          subDivisionIndex,
                                                                                          periodIndex,
                                                                                          subPeriodIndex,
                                                                                          shiftIndex,
                                                                                          courseIndex
                                                                                        )
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
                                                                                  <div className="flex-cs inputs input--xsmall ">
                                                                                    {hasCourseUnit ? (
                                                                                      <>
                                                                                        <input
                                                                                          type="text"
                                                                                          placeholder={
                                                                                            crHr
                                                                                              ? "CrHr"
                                                                                              : "Contact Hr."
                                                                                          }
                                                                                          name={
                                                                                            crHr
                                                                                              ? "CrHr"
                                                                                              : "ContactHr"
                                                                                          }
                                                                                          value={
                                                                                            crHr
                                                                                              ? course.creditHours
                                                                                              : course.contactHours
                                                                                          }
                                                                                          id={
                                                                                            "creditHour" +
                                                                                            index
                                                                                          }
                                                                                          onChange={(
                                                                                            event
                                                                                          ) =>
                                                                                            handleValueForSubAnnualPeriodAndMajorDivisonPaymentBase(
                                                                                              event,
                                                                                              index,
                                                                                              divisionIndex,
                                                                                              subDivisionIndex,
                                                                                              periodIndex,
                                                                                              subPeriodIndex,
                                                                                              shiftIndex,
                                                                                              courseIndex
                                                                                            )
                                                                                          }
                                                                                          tabIndex={
                                                                                            9
                                                                                          }
                                                                                        />
                                                                                      </>
                                                                                    ) : (
                                                                                      <>

                                                                                      </>
                                                                                    )}

                                                                                    {shift
                                                                                      .courses
                                                                                      .length >
                                                                                    1 ? (
                                                                                      <RemoveLinksButton
                                                                                        courseIndex
                                                                                        index={
                                                                                          index
                                                                                        }
                                                                                        subIndex={
                                                                                          divisionIndex
                                                                                        }
                                                                                        subSubIndex={
                                                                                          subDivisionIndex
                                                                                        }
                                                                                        subSubSubIndex={
                                                                                          periodIndex
                                                                                        }
                                                                                        subSubSubSubIndex={
                                                                                          subPeriodIndex
                                                                                        }
                                                                                        subSubSubSubSubIndex={
                                                                                          shiftIndex
                                                                                        }
                                                                                        subSubSubSubSubSubIndex={
                                                                                          courseIndex
                                                                                        }
                                                                                        remove={
                                                                                          removeCoursesForSubAnnualPeriodAndMajorAndSubDivisionPayments
                                                                                        }
                                                                                      />
                                                                                    ) : (
                                                                                      <>
                                                                                        <div className="space-for-remove-small"></div>
                                                                                      </>
                                                                                    )}
                                                                                  </div>
                                                                                </div>
                                                                              </div>
                                                                            </div>
                                                                          </div>
                                                                        )
                                                                      )
                                                                    ) : (
                                                                      <>
                                                                        <div className="">
                                                                          <div className="flex-c mb-1 -ml-3">
                                                                            <label>
                                                                              Hidden
                                                                            </label>
                                                                          </div>
                                                                        </div>
                                                                      </>
                                                                    )}
                                                                    <div className="flex-start">
                                                                      <div className="flex  -ml-p5 gapfull">
                                                                        <label className="flex">
                                                                          {period.visible ? (
                                                                            <>
                                                                              <AddMoreButton
                                                                                index={
                                                                                  index
                                                                                }
                                                                                subIndex={
                                                                                  divisionIndex
                                                                                }
                                                                                subSubIndex={
                                                                                  subDivisionIndex
                                                                                }
                                                                                subSubSubIndex={
                                                                                  periodIndex
                                                                                }
                                                                                subSubSubSubIndex={
                                                                                  subPeriodIndex
                                                                                }
                                                                                subSubSubSubSubIndex={
                                                                                  shiftIndex
                                                                                }
                                                                                handleLinks={
                                                                                  addCoursesForSubAnnualPeriodAndMajorAndSubDivisionPayments
                                                                                }
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
                                                                            </>
                                                                          ) : (
                                                                            <>

                                                                            </>
                                                                          )}
                                                                        </label>

                                                                        <div
                                                                          className="flex"
                                                                          onClick={() =>
                                                                            hideShowCoursesForSubAnnualPeriodAndMajorDivisionPayments(
                                                                              index,
                                                                              divisionIndex,
                                                                              subDivisionIndex,
                                                                              periodIndex,
                                                                              subPeriodIndex
                                                                            )
                                                                          }
                                                                        >
                                                                          <div className="space-for-remove"></div>
                                                                          <div>
                                                                            <HideOrshow
                                                                              toogleValue={
                                                                                subPeriod.visible
                                                                              }
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
                                                                            {subPeriod.visible
                                                                              ? "Hide Courses"
                                                                              : "Show Courses"}
                                                                          </label>
                                                                        </div>
                                                                      </div>
                                                                      <div></div>
                                                                    </div>
                                                                  </div>
                                                                </div>
                                                              </section>
                                                            </div>
                                                          )
                                                        )}
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
                                                      {
                                                        period.subPeriods[0]
                                                          .periodName
                                                      }{" "}
                                                      HAS NO SHIFTS!
                                                    </label>

                                                    <label htmlFor="">
                                                      You have to select at
                                                      least one shift to add
                                                      courses. Go to step 2.
                                                    </label>
                                                  </div>
                                                )}
                                              </div>
                                            )
                                          )}
                                        </div>
                                      </div>
                                    </>
                                  )}
                                  &nbsp;
                                </div>
                              </section>
                            </div>
                          </>
                          //  stoped here please.
                        )
                      )
                    ) : //  not major division but is subdivision based major period and not subperiod
                    majorDivisonSelected && !subDivisionSelected ? (
                      paymentState[
                        index
                      ].paymentBase.advancedAnnualPeriodType.charAt(0) ===
                      "p" ? (
                        <>
                          <div>
                            {paymentState[
                              index
                            ].paymentBase.courseBasedPayment.periods.map(
                              (period, periodIndex) => (
                                <div key={periodIndex}>
                                  {period.shifts.length > 0 ? (
                                    period.shifts.map((shift, shiftIndex) => (
                                      <div
                                        key={shiftIndex}
                                        className="flex field-subgroup-containers"
                                      >
                                        <section>
                                          <div className="flex-cs mt-1 mb-1">
                                            <div className="flex-c flex-start">
                                              <label>
                                                {/* Department */}
                                                {division.divisionName}
                                              </label>
                                            </div>
                                            <div className="flex">
                                              <div className="flex-c flex-start">
                                                {/* Quarter  */}
                                                <label>
                                                  {period.periodName}
                                                </label>
                                                <label>
                                                  {/* Shift Name */}
                                                  {shift.shiftName
                                                    .charAt(0)
                                                    .toUpperCase() +
                                                    shift.shiftName.slice(1)}
                                                </label>
                                              </div>
                                              <div className="space-for-remove-small"></div>
                                            </div>
                                          </div>
                                          <div className="flex-c flex-end mb-1">
                                            {/* Map with shifts */}
                                            <div>
                                              {period.visible ? (
                                                shift.courses.map(
                                                  (course, courseIndex) => (
                                                    <div key={courseIndex}>
                                                      <div className="flex-c flex-start">
                                                        <div className="flex">
                                                          <div className="flex gapp5">
                                                            <div
                                                              className={
                                                                hasCourseUnit
                                                                  ? "flex-cs inputs gapp5 input--medium"
                                                                  : "flex-cs inputs input--above-medium"
                                                              }
                                                            >
                                                              <input
                                                                type="text"
                                                                id={
                                                                  "courseName" +
                                                                  index
                                                                }
                                                                value={
                                                                  course.courseName
                                                                }
                                                                onChange={(
                                                                  event
                                                                ) =>
                                                                  handleValueForMajorPeriodMajorDivisionNotSubDivisionCourses(
                                                                    event,
                                                                    index,
                                                                    divisionIndex,
                                                                    periodIndex,
                                                                    shiftIndex,
                                                                    courseIndex
                                                                  )
                                                                }
                                                                name={
                                                                  "courseName"
                                                                }
                                                                placeholder="Course Name"
                                                                tabIndex={9}
                                                              />
                                                            </div>
                                                            <div className="flex-cs inputs input--xsmall ">
                                                              {hasCourseUnit ? (
                                                                <>
                                                                  {" "}
                                                                  <input
                                                                    type="text"
                                                                    placeholder={
                                                                      crHr
                                                                        ? "CrHr"
                                                                        : "ContactHr."
                                                                    }
                                                                    name={
                                                                      crHr
                                                                        ? "CrHr"
                                                                        : "ContactHr"
                                                                    }
                                                                    value={
                                                                      crHr
                                                                        ? course.creditHours
                                                                        : course.contactHours
                                                                    }
                                                                    id={
                                                                      "creditHour" +
                                                                      index
                                                                    }
                                                                    onChange={(
                                                                      event
                                                                    ) =>
                                                                      handleValueForMajorPeriodMajorDivisionNotSubDivisionCourses(
                                                                        event,
                                                                        index,
                                                                        divisionIndex,
                                                                        periodIndex,
                                                                        shiftIndex,
                                                                        courseIndex
                                                                      )
                                                                    }
                                                                    //  not major division but is subdivision based major period and not subperiod
                                                                    tabIndex={9}
                                                                  />
                                                                </>
                                                              ) : (
                                                                <></>
                                                              )}
                                                              <></>

                                                              {shift.courses
                                                                .length > 1 ? (
                                                                <RemoveLinksButton
                                                                  index={index}
                                                                  subIndex={
                                                                    divisionIndex
                                                                  }
                                                                  subSubIndex={
                                                                    periodIndex
                                                                  }
                                                                  subSubSubIndex={
                                                                    shiftIndex
                                                                  }
                                                                  subSubSubSubIndex={
                                                                    courseIndex
                                                                  }
                                                                  remove={
                                                                    removeCoursesForMajorPeriodMajorDivisionNotSubdivisions
                                                                  }
                                                                />
                                                              ) : (
                                                                <>
                                                                  <div className="space-for-remove-small"></div>
                                                                </>
                                                              )}
                                                            </div>
                                                          </div>
                                                        </div>
                                                        <div className="flex-start">
                                                          <div className="flex  -ml-p5 gapfull">
                                                            {true ? (
                                                              <label className="flex">
                                                                <AddMoreButton
                                                                  index={index}
                                                                  subIndex={
                                                                    divisionIndex
                                                                  }
                                                                  subSubIndex={
                                                                    periodIndex
                                                                  }
                                                                  subSubSubIndex={
                                                                    shiftIndex
                                                                  }
                                                                  handleLinks={
                                                                    addCoursesForMajorPeriodMajorDivisionNotSubdivisions
                                                                  }
                                                                />
                                                                <>
                                                                  <span className="-ml-1">
                                                                    &nbsp;&nbsp;{" "}
                                                                    <p>
                                                                      Add Course
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
                                                              onClick={() =>
                                                                hideOrShowCoursesForMajorPeriodMajorDivisionNotSubdivisions(
                                                                  index,
                                                                  divisionIndex,
                                                                  periodIndex,
                                                                  shiftIndex
                                                                )
                                                              }
                                                            >
                                                              <div className="space-for-remove"></div>
                                                              <div>
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
                                                )
                                              ) : (
                                                <>
                                                  {" "}
                                                  <div className="">
                                                    <div className="flex-c mb-1 -ml-3">
                                                      <label>Hidden</label>
                                                    </div>
                                                  </div>
                                                </>
                                              )}
                                            </div>
                                          </div>
                                        </section>
                                      </div>
                                    ))
                                  ) : (
                                    <div className="warning flex-ccc pt-1 pb-p5">
                                      <label htmlFor="" className="flex">
                                        <p>WARNING: </p> &nbsp;
                                        {period.periodName} HAS NO SHIFTS!
                                      </label>
                                      <label htmlFor="">
                                        You have to select at least one shift to
                                        add courses. Go to step 2.
                                      </label>
                                    </div>
                                  )}
                                </div>
                              )
                            )}
                          </div>
                          {/* If Annual period's choice is subperiod */}
                        </>
                      ) : (
                        <>
                          <div>
                            <div>
                              {/* Map by major division e.g. by Quarter */}
                              {paymentState[
                                index
                              ].paymentBase.courseBasedPayment.periods.map(
                                (period, periodIndex) => (
                                  <div key={periodIndex}>
                                    {period.shifts.length > 0 ? (
                                      period.subPeriods.map(
                                        (subPeriod, subPeriodIndex) => (
                                          <div key={subPeriodIndex}>
                                            {subPeriod.shifts.map(
                                              (shift, shiftIndex) => (
                                                <div
                                                  key={shiftIndex}
                                                  className="flex field-subgroup-containers"
                                                >
                                                  <section>
                                                    <div className="flex-cs mt-1 mb-1">
                                                      <div className="flex-c flex-start">
                                                        <label>
                                                          {
                                                            division.divisionName
                                                          }
                                                        </label>
                                                      </div>
                                                      <div className="flex">
                                                        <div className="flex-c flex-start">
                                                          <label>
                                                            {/* Quarter/ Semester */}
                                                            {
                                                              subPeriod.periodName
                                                            }
                                                          </label>
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
                                                      <div>
                                                        {subPeriod.visible ? (
                                                          shift.courses.map(
                                                            (
                                                              course,
                                                              courseIndex
                                                            ) => (
                                                              <div
                                                                key={
                                                                  courseIndex
                                                                }
                                                              >
                                                                {console.log(
                                                                  "okay: " +
                                                                  course.courseName
                                                                )}
                                                                <div className="flex-c flex-start">
                                                                  <div className="flex">
                                                                    <div className="flex gapp5">
                                                                      <div
                                                                        className={
                                                                          hasCourseUnit
                                                                            ? "flex-cs inputs gapp5 input--medium"
                                                                            : "flex-cs inputs input--above-medium"
                                                                        }
                                                                      >
                                                                        <input
                                                                          type="text"
                                                                          id={
                                                                            "courseName" +
                                                                            index
                                                                          }
                                                                          value={
                                                                            course.courseName
                                                                          }
                                                                          onChange={(
                                                                            event
                                                                          ) =>
                                                                            handleValueForSubPeriodMajorDivisionNotSubDivisionCourses(
                                                                              event,
                                                                              index,
                                                                              divisionIndex,
                                                                              periodIndex,
                                                                              subPeriodIndex,
                                                                              shiftIndex,
                                                                              courseIndex
                                                                            )
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
                                                                      <div className="flex-cs inputs input--xsmall ">
                                                                        {hasCourseUnit ? (
                                                                          <>
                                                                            {" "}
                                                                            <input
                                                                              type="text"
                                                                              placeholder={
                                                                                crHr
                                                                                  ? "CrHr"
                                                                                  : "Contact Hr."
                                                                              }
                                                                              name={
                                                                                crHr
                                                                                  ? "CrHr"
                                                                                  : "ContactHr"
                                                                              }
                                                                              value={
                                                                                crHr
                                                                                  ? course.creditHours
                                                                                  : course.contactHours
                                                                              }
                                                                              id={
                                                                                "creditHour" +
                                                                                index
                                                                              }
                                                                              onChange={(
                                                                                event
                                                                              ) =>
                                                                                handleValueForSubPeriodMajorDivisionNotSubDivisionCourses(
                                                                                  event,
                                                                                  index,
                                                                                  divisionIndex,
                                                                                  periodIndex,
                                                                                  subPeriodIndex,
                                                                                  shiftIndex,
                                                                                  courseIndex
                                                                                )
                                                                              }
                                                                              tabIndex={
                                                                                9
                                                                              }
                                                                            />
                                                                          </>
                                                                        ) : (
                                                                          <></>
                                                                        )}
                                                                        <></>

                                                                        {shift
                                                                          .courses
                                                                          .length >
                                                                        1 ? (
                                                                          <RemoveLinksButton
                                                                            index={
                                                                              index
                                                                            }
                                                                            subIndex={
                                                                              divisionIndex
                                                                            }
                                                                            subSubIndex={
                                                                              periodIndex
                                                                            }
                                                                            subSubSubIndex={
                                                                              subPeriodIndex
                                                                            }
                                                                            subSubSubSubIndex={
                                                                              shiftIndex
                                                                            }
                                                                            subSubSubSubSubIndex={
                                                                              courseIndex
                                                                            }
                                                                            remove={
                                                                              removeSubPeriodMajorDivisionNotSubDivisionCourses
                                                                            }
                                                                          />
                                                                        ) : (
                                                                          <>
                                                                            <div className="space-for-remove-small"></div>
                                                                          </>
                                                                        )}
                                                                      </div>
                                                                    </div>
                                                                  </div>
                                                                  <div className="flex-start">
                                                                    <div className="flex  -ml-p5 gapfull">
                                                                      {subPeriod.visible ? (
                                                                        <label className="flex">
                                                                          <AddMoreButton
                                                                            index={
                                                                              index
                                                                            }
                                                                            subIndex={
                                                                              divisionIndex
                                                                            }
                                                                            subSubIndex={
                                                                              periodIndex
                                                                            }
                                                                            subSubSubIndex={
                                                                              subPeriodIndex
                                                                            }
                                                                            subSubSubSubIndex={
                                                                              shiftIndex
                                                                            }
                                                                            handleLinks={
                                                                              addSubPeriodMajorDivisionNotSubDivisionCourses
                                                                            }
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
                                                                        onClick={() =>
                                                                          showHideSubPeriodMajorDivisionNotSubDivisionCourses(
                                                                            index,
                                                                            divisionIndex,
                                                                            periodIndex,
                                                                            subPeriodIndex,
                                                                            shiftIndex
                                                                          )
                                                                        }
                                                                      >
                                                                        <div className="space-for-remove"></div>
                                                                        <div>
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
                                                          )
                                                        ) : (
                                                          <>
                                                            {" "}
                                                            <div className="">
                                                              <div className="flex-c mb-1 -ml-3">
                                                                <label>
                                                                  Hidden
                                                                </label>
                                                              </div>
                                                            </div>
                                                          </>
                                                        )}
                                                      </div>
                                                    </div>
                                                  </section>
                                                </div>
                                              )
                                            )}
                                          </div>
                                        )
                                      )
                                    ) : (
                                      <div className="warning flex-ccc pt-1 pb-p5">
                                        <label htmlFor="" className="flex">
                                          <p>WARNING: </p> &nbsp;
                                          {period.subPeriods[0].periodName} HAS
                                          NO SHIFTS!
                                        </label>

                                        <label htmlFor="">
                                          You have to select at least one shift
                                          to add courses. Go to step 2.
                                        </label>
                                      </div>
                                    )}
                                  </div>
                                )
                              )}
                            </div>
                          </div>
                        </>
                      )
                    ) : !majorDivisonSelected && subDivisionSelected ? (
                      division.educationalSubDivision.map(
                        (subDivision, subDivisionIndex) => (
                          <>
                            <div
                              key={subDivisionIndex}
                              className="field-subgroup-containers"
                            >
                              <label htmlFor="">&nbsp;</label>
                              <section>
                                <div className="flex-ccc">
                                  {/* checking conditions for top-level or sub-level annual period */}
                                  {/* if Annual period choice is top-level-period */}
                                  {/* Map with Top-level period */}
                                  {paymentState[
                                    index
                                  ].paymentBase.advancedAnnualPeriodType.charAt(
                                    0
                                  ) === "p" ? (
                                    <div className="">
                                      <div>
                                        {/* Map by major division e.g. by Quarter */}

                                        {paymentState[
                                          index
                                        ].paymentBase.courseBasedPayment.periods.map(
                                          (period, periodIndex) => (
                                            <div key={periodIndex}>
                                              {/* <label>{TLP.periodTypeName}</label> */}
                                              {period.shifts.length > 0 ? (
                                                period.shifts.map(
                                                  (shift, shiftIndex) => (
                                                    <div
                                                      key={shiftIndex}
                                                      className="flex field-subgroup-containers"
                                                    >
                                                      <section>
                                                        <div className="flex-cs mt-1 mb-1">
                                                          <div className="flex-c flex-start">
                                                            <label>
                                                              {/* Year */}
                                                              {
                                                                subDivision.subDivisionName
                                                              }
                                                            </label>
                                                          </div>
                                                          <div className="flex">
                                                            <div className="flex-c flex-start">
                                                              {/* Quarter  */}
                                                              <label>
                                                                {
                                                                  period.periodName
                                                                }
                                                              </label>
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
                                                          <div>
                                                            {period.visible ? (
                                                              shift.courses.map(
                                                                (
                                                                  course,
                                                                  courseIndex
                                                                ) => (
                                                                  <div
                                                                    key={
                                                                      courseIndex
                                                                    }
                                                                  >
                                                                    <div className="flex-c flex-start">
                                                                      <div className="flex">
                                                                        <div className="flex gapp5">
                                                                          <div
                                                                            className={
                                                                              hasCourseUnit
                                                                                ? "flex-cs inputs gapp5 input--medium"
                                                                                : "flex-cs inputs input--above-medium"
                                                                            }
                                                                          >
                                                                            <input
                                                                              type="text"
                                                                              id={
                                                                                "courseName" +
                                                                                index
                                                                              }
                                                                              value={
                                                                                course.courseName
                                                                              }
                                                                              // onChange={(
                                                                              //   event
                                                                              // ) =>
                                                                              //   handleValueForMajorAnnualPeriodAndNotMajorDivisonPaymentBase(
                                                                              //     event,
                                                                              //     index,
                                                                              //     divisionIndex,
                                                                              //     subDivisionIndex,
                                                                              //     periodIndex,
                                                                              //     shiftIndex,
                                                                              //     courseIndex
                                                                              //   )
                                                                              // }
                                                                              name={
                                                                                "courseName"
                                                                              }
                                                                              placeholder="Course Name"
                                                                              tabIndex={
                                                                                9
                                                                              }
                                                                            />
                                                                          </div>
                                                                          <div className="flex-cs inputs input--xsmall ">
                                                                            {hasCourseUnit ? (
                                                                              <>
                                                                                {" "}
                                                                                <input
                                                                                  type="text"
                                                                                  placeholder={
                                                                                    crHr
                                                                                      ? "CrHr"
                                                                                      : "Contact Hr."
                                                                                  }
                                                                                  name={
                                                                                    crHr
                                                                                      ? "CrHr"
                                                                                      : "ContactHr"
                                                                                  }
                                                                                  value={
                                                                                    crHr
                                                                                      ? course.creditHours
                                                                                      : course.contactHours
                                                                                  }
                                                                                  id={
                                                                                    "creditHour" +
                                                                                    index
                                                                                  }
                                                                                  // onChange={(
                                                                                  //   event
                                                                                  // ) =>
                                                                                  //   handleValueForMajorAnnualPeriodAndNotMajorDivisonPaymentBase(
                                                                                  //     event,
                                                                                  //     subDivisionIndex,
                                                                                  //     divisionIndex,
                                                                                  //     index,
                                                                                  //     periodIndex,
                                                                                  //     shiftIndex,
                                                                                  //     courseIndex
                                                                                  //   )
                                                                                  // }
                                                                                  tabIndex={
                                                                                    9
                                                                                  }
                                                                                />
                                                                              </>
                                                                            ) : (
                                                                              <>

                                                                              </>
                                                                            )}
                                                                            <>

                                                                            </>

                                                                            {shift
                                                                              .courses
                                                                              .length >
                                                                            1 ? (
                                                                              <RemoveLinksButton
                                                                              // courseIndex
                                                                              // index={
                                                                              //   index
                                                                              // }
                                                                              // subIndex={
                                                                              //   divisionIndex
                                                                              // }
                                                                              // subSubIndex={
                                                                              //   subDivisionIndex
                                                                              // }
                                                                              // subSubSubIndex={
                                                                              //   periodIndex
                                                                              // }
                                                                              // subSubSubSubIndex={
                                                                              //   shiftIndex
                                                                              // }
                                                                              // subSubSubSubSubIndex={
                                                                              //   courseIndex
                                                                              // }
                                                                              // remove={
                                                                              //   removeCoursesForMajorAnnualPeriodAndMajorAndSubDivisionPayments
                                                                              // }
                                                                              />
                                                                            ) : (
                                                                              <>
                                                                                <div className="space-for-remove-small"></div>
                                                                              </>
                                                                            )}
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
                                                              )
                                                            ) : (
                                                              <>
                                                                {" "}
                                                                <div className="">
                                                                  <div className="flex-c mb-1 -ml-3">
                                                                    <label>
                                                                      Hidden
                                                                    </label>
                                                                  </div>
                                                                </div>
                                                              </>
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
                                                    {period.periodName} HAS NO
                                                    SHIFTS!
                                                  </label>

                                                  <label htmlFor="">
                                                    You have to select at least
                                                    one shift to add courses. Go
                                                    to step 2.
                                                  </label>
                                                </div>
                                              )}
                                            </div>
                                          )
                                        )}
                                      </div>
                                      {/* If Annual period's choice is subperiod */}
                                    </div>
                                  ) : (
                                    <>
                                      <div>
                                        <div>
                                          {/* Map by major division e.g. by Quarter */}
                                          {paymentState[
                                            index
                                          ].paymentBase.courseBasedPayment.periods.map(
                                            (period, periodIndex) => (
                                              <div key={periodIndex}>
                                                {period.shifts.length > 0 ? (
                                                  period.subPeriods.map(
                                                    (
                                                      subPeriod,
                                                      subPeriodIndex
                                                    ) => (
                                                      <div key={subPeriodIndex}>
                                                        {/* {subPeriod.shifts.map( makes the shift to work */}
                                                        {/* subDivision.shifts.map( makes the shift not to work */}
                                                        {subPeriod.shifts.map(
                                                          (
                                                            shift,
                                                            shiftIndex
                                                          ) => (
                                                            <div
                                                              key={shiftIndex}
                                                              className="flex field-subgroup-containers"
                                                            >
                                                              <section>
                                                                <div className="flex-cs mt-1 mb-1">
                                                                  <div className="flex-c flex-start">
                                                                    <label>
                                                                      {/* Year */}
                                                                      {
                                                                        subDivision.subDivisionName
                                                                      }
                                                                    </label>
                                                                  </div>
                                                                  <div className="flex">
                                                                    <div className="flex-c flex-start">
                                                                      <label>
                                                                        {/* Quarter/ Semester */}
                                                                        {
                                                                          subPeriod.periodName
                                                                        }
                                                                      </label>
                                                                      <label>
                                                                        {/* Shift Name */}
                                                                        {shift.shiftName
                                                                          .charAt(
                                                                            0
                                                                          )
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
                                                                  <div>
                                                                    {period.visible ? (
                                                                      shift.courses.map(
                                                                        (
                                                                          course,
                                                                          courseIndex
                                                                        ) => (
                                                                          <div
                                                                            key={
                                                                              courseIndex
                                                                            }
                                                                          >
                                                                            <div className="flex-c flex-start">
                                                                              <div className="flex">
                                                                                <div className="flex gapp5">
                                                                                  <div
                                                                                    className={
                                                                                      hasCourseUnit
                                                                                        ? "flex-cs inputs gapp5 input--medium"
                                                                                        : "flex-cs inputs input--above-medium"
                                                                                    }
                                                                                  >
                                                                                    <input
                                                                                      type="text"
                                                                                      id={
                                                                                        "courseName" +
                                                                                        index
                                                                                      }
                                                                                      value={
                                                                                        course.courseName
                                                                                      }
                                                                                      // onChange={(
                                                                                      //   event
                                                                                      // ) =>
                                                                                      //   handleValueForMajorAnnualPeriodAndNotMajorDivisonPaymentBase(
                                                                                      //     event,
                                                                                      //     index,
                                                                                      //     divisionIndex,
                                                                                      //     subDivisionIndex,
                                                                                      //     periodIndex,
                                                                                      //     shiftIndex,
                                                                                      //     courseIndex
                                                                                      //   )
                                                                                      // }
                                                                                      name={
                                                                                        "courseName"
                                                                                      }
                                                                                      placeholder="Course Name"
                                                                                      tabIndex={
                                                                                        9
                                                                                      }
                                                                                    />
                                                                                  </div>
                                                                                  <div className="flex-cs inputs input--xsmall ">
                                                                                    {hasCourseUnit ? (
                                                                                      <>
                                                                                        {" "}
                                                                                        <input
                                                                                          type="text"
                                                                                          placeholder={
                                                                                            crHr
                                                                                              ? "CrHr"
                                                                                              : "Contact Hr."
                                                                                          }
                                                                                          name={
                                                                                            crHr
                                                                                              ? "CrHr"
                                                                                              : "ContactHr"
                                                                                          }
                                                                                          value={
                                                                                            crHr
                                                                                              ? course.creditHours
                                                                                              : course.contactHours
                                                                                          }
                                                                                          id={
                                                                                            "creditHour" +
                                                                                            index
                                                                                          }
                                                                                          // onChange={(
                                                                                          //   event
                                                                                          // ) =>
                                                                                          //   handleValueForMajorAnnualPeriodAndNotMajorDivisonPaymentBase(
                                                                                          //     event,
                                                                                          //     subDivisionIndex,
                                                                                          //     divisionIndex,
                                                                                          //     index,
                                                                                          //     periodIndex,
                                                                                          //     shiftIndex,
                                                                                          //     courseIndex
                                                                                          //   )
                                                                                          // }
                                                                                          tabIndex={
                                                                                            9
                                                                                          }
                                                                                        />
                                                                                      </>
                                                                                    ) : (
                                                                                      <>

                                                                                      </>
                                                                                    )}
                                                                                    <>

                                                                                    </>

                                                                                    {shift
                                                                                      .courses
                                                                                      .length >
                                                                                    1 ? (
                                                                                      <RemoveLinksButton
                                                                                      // courseIndex
                                                                                      // index={
                                                                                      //   index
                                                                                      // }
                                                                                      // subIndex={
                                                                                      //   divisionIndex
                                                                                      // }
                                                                                      // subSubIndex={
                                                                                      //   subDivisionIndex
                                                                                      // }
                                                                                      // subSubSubIndex={
                                                                                      //   periodIndex
                                                                                      // }
                                                                                      // subSubSubSubIndex={
                                                                                      //   shiftIndex
                                                                                      // }
                                                                                      // subSubSubSubSubIndex={
                                                                                      //   courseIndex
                                                                                      // }
                                                                                      // remove={
                                                                                      //   removeCoursesForMajorAnnualPeriodAndMajorAndSubDivisionPayments
                                                                                      // }
                                                                                      />
                                                                                    ) : (
                                                                                      <>
                                                                                        <div className="space-for-remove-small"></div>
                                                                                      </>
                                                                                    )}
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
                                                                      )
                                                                    ) : (
                                                                      <>
                                                                        {" "}
                                                                        <div className="">
                                                                          <div className="flex-c mb-1 -ml-3">
                                                                            <label>
                                                                              Hidden
                                                                            </label>
                                                                          </div>
                                                                        </div>
                                                                      </>
                                                                    )}
                                                                  </div>
                                                                </div>
                                                              </section>
                                                            </div>
                                                          )
                                                        )}
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
                                                      {
                                                        period.subPeriods[0]
                                                          .periodName
                                                      }
                                                      HAS NO SHIFTS!
                                                    </label>
                                                    <label>
                                                      You have to select at
                                                      least one shift to add
                                                      courses. Go to step 2.
                                                    </label>
                                                  </div>
                                                )}
                                              </div>
                                            )
                                          )}
                                        </div>
                                      </div>
                                    </>
                                  )}
                                  &nbsp;
                                </div>
                              </section>
                            </div>
                          </>
                        )
                        // if major division selected and subdivision not selected or both are selected
                      )
                    ) : (
                      <></>
                    )}
                  </div>
                </div>
              </div>
              <label htmlFor="">&nbsp;</label>
            </div>
          </div>
        )
      )}
    </>
  );
};

export default BasedOnAnnualPeriodsAndDivisions;
