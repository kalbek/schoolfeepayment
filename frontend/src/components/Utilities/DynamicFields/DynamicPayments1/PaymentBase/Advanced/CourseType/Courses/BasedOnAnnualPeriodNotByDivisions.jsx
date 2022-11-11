import AddMoreButton from "../../../../Utilities/AddMoreButton";
import HideOrshow from "../../../../../../Buttons/hideOrshow";
import RemoveLinksButton from "../../../../../../Buttons/RemoveLinksButton";
import { useSelector } from "react-redux";

const BasedOnAnnualPeriodNotByDivisions = ({
  index,
  handleMajorAnnualPeriodNotDivisionCourse,
  removeMajorAnnualPeriodNotDivisionCourseAndCrhr,
  addMajorAnnualPeriodNotDivisionCourseAndCrhr,
  handleSubAnnualPeriodNotDivisionCourse,
  removeSubAnnualPeriodNotDivisionCourseAndCrhr,
  addSubAnnualPeriodNotDivisionCourseAndCrhr,
  handleShowHideCoursesForMajorAnnualPeriodAndNotDivisions,
  handleShowHideCoursesForSubAnnualPeriodAndNotDivisions,
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
            (period, periodIndex) => (
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
                                      period.shifts.map((shift, shiftIndex) => (
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
                                                    {period.visible &&
                                                      shift.shiftName
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
                                              <div className="flexaa gapp5">
                                                {period.visible ? (
                                                  shift.courses.map(
                                                    (course, courseIndex) => (
                                                      <div key={courseIndex}>
                                                        <div className="flex-c flex-start">
                                                          <div className="flex-c">
                                                            <div className="flex gapp5">
                                                              <div
                                                                className={
                                                                  hasCourseUnit
                                                                    ? "flex-cs gapp5 input--medium"
                                                                    : "flex-cs input--above-medium"
                                                                }
                                                              >
                                                                {/* Based on Major Annual Period not on Division  */}
                                                                <input
                                                                  type="text"
                                                                  value={
                                                                    course.courseName
                                                                  }
                                                                  name={
                                                                    "course"
                                                                  }
                                                                  onChange={(
                                                                    event
                                                                  ) =>
                                                                    handleMajorAnnualPeriodNotDivisionCourse(
                                                                      event,
                                                                      index,
                                                                      periodIndex,
                                                                      shiftIndex,
                                                                      courseIndex
                                                                    )
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
                                                                      value={
                                                                        crHr
                                                                          ? course.creditHours
                                                                          : course.contactHours
                                                                      }
                                                                      name={
                                                                        crHr
                                                                          ? "crhr"
                                                                          : "ctchr"
                                                                      }
                                                                      onChange={(
                                                                        event
                                                                      ) =>
                                                                        handleMajorAnnualPeriodNotDivisionCourse(
                                                                          event,
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
                                                                  </>
                                                                ) : (
                                                                  <></>
                                                                )}
                                                                {shift.courses
                                                                  .length >
                                                                1 ? (
                                                                  <RemoveLinksButton
                                                                    index={
                                                                      index
                                                                    }
                                                                    subIndex={
                                                                      periodIndex
                                                                    }
                                                                    subSubIndex={
                                                                      shiftIndex
                                                                    }
                                                                    subSubSubIndex={
                                                                      courseIndex
                                                                    }
                                                                    remove={
                                                                      removeMajorAnnualPeriodNotDivisionCourseAndCrhr
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
                                                    <div
                                                      className="flex-ccc"
                                                      onClick={() =>
                                                        handleShowHideCoursesForMajorAnnualPeriodAndNotDivisions(
                                                          index,
                                                          periodIndex
                                                        )
                                                      }
                                                    >
                                                      <div className="field-input-container">
                                                        <label
                                                          htmlFor=""
                                                          className=" "
                                                        >
                                                          Hidden
                                                        </label>
                                                      </div>
                                                    </div>
                                                  </>
                                                )}
                                                <div className="flex-start">
                                                  <div className="flex mt-1  -ml-p5  gap3">
                                                    {period.visible && (
                                                      <label className="flex flex-end">
                                                        <AddMoreButton
                                                          index={index}
                                                          subIndex={periodIndex}
                                                          subSubIndex={
                                                            shiftIndex
                                                          }
                                                          handleLinks={
                                                            addMajorAnnualPeriodNotDivisionCourseAndCrhr
                                                          }
                                                        />
                                                        <>
                                                          <span className="-ml-1">
                                                            &nbsp;&nbsp;{" "}
                                                            <p>Add Course</p>
                                                          </span>
                                                        </>
                                                      </label>
                                                    )}
                                                    <div
                                                      className="flex"
                                                      onClick={() =>
                                                        handleShowHideCoursesForMajorAnnualPeriodAndNotDivisions(
                                                          index,
                                                          periodIndex
                                                        )
                                                      }
                                                    >
                                                      <div className="space-for-remove"></div>
                                                      <div
                                                        className={
                                                          period.visible
                                                            ? "flex-cs gapfull"
                                                            : "flex-cs gapfull ml-4 mt-1 "
                                                        }
                                                      >
                                                        <label htmlFor="">
                                                          &nbsp;
                                                        </label>
                                                        <HideOrshow
                                                          toogleValue={
                                                            period.visible
                                                          }
                                                        />
                                                      </div>
                                                      &nbsp;
                                                      <label
                                                        className={
                                                          !period.visible
                                                            ? "mt-1p2"
                                                            : "mt-p4"
                                                        }
                                                      >
                                                        &nbsp;
                                                        {period.visible
                                                          ? "Hide Courses"
                                                          : "Show Courses"}
                                                      </label>
                                                    </div>
                                                  </div>
                                                </div>
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
                                          You have to select at least one shift
                                          to add courses. Go to step 2.
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
            )
          )}
        </>
      ) : paymentState[index].paymentBase.advancedAnnualPeriodType.charAt(0) ===
        "s" ? (
        // Else map with subPeriod
        <>
          {paymentState[index].paymentBase.courseBasedPayment.periods.map(
            (period, periodIndex) => (
              <div key={periodIndex} className="field-subgroup-containers">
                <div key={periodIndex}>
                  <div className="flex-ccc">
                    <div>
                      {period.subPeriods.map((subPeriod, subPeriodIndex) => (
                        <div key={subPeriodIndex} className="flex-ccc mt-1">
                          <div className={"flex-c -mt-1p5"}>
                            {/*Map with subdivisions (e.g. Years) */}

                            <div className="field-subgroup-containers">
                              <section>
                                <div className="flex-ccc">
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
                                                          {subPeriod.visible &&
                                                            shift.shiftName
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
                                                  <div className="flex-c  mb-1">
                                                    {/* Map with shifts */}
                                                    <div className="flex-c gapp5">
                                                      {subPeriod.visible ? (
                                                        shift.courses.map(
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
                                                                        name={
                                                                          "course"
                                                                        }
                                                                        onChange={(
                                                                          event
                                                                        ) =>
                                                                          handleSubAnnualPeriodNotDivisionCourse(
                                                                            event,
                                                                            index,
                                                                            periodIndex,
                                                                            subPeriodIndex,
                                                                            shiftIndex,
                                                                            courseIndex
                                                                          )
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
                                                                              crHr
                                                                                ? "crhr"
                                                                                : "ctchr"
                                                                            }
                                                                            value={
                                                                              crHr
                                                                                ? course.creditHours
                                                                                : course.contactHours
                                                                            }
                                                                            onChange={(
                                                                              event
                                                                            ) =>
                                                                              handleSubAnnualPeriodNotDivisionCourse(
                                                                                event,
                                                                                index,
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
                                                                      {shift
                                                                        .courses
                                                                        .length >
                                                                      1 ? (
                                                                        <RemoveLinksButton
                                                                          index={
                                                                            index
                                                                          }
                                                                          subIndex={
                                                                            periodIndex
                                                                          }
                                                                          subSubIndex={
                                                                            subPeriodIndex
                                                                          }
                                                                          subSubSubIndex={
                                                                            shiftIndex
                                                                          }
                                                                          subSubSubSubIndex={
                                                                            courseIndex
                                                                          }
                                                                          remove={
                                                                            removeSubAnnualPeriodNotDivisionCourseAndCrhr
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
                                                          <div
                                                            className="flex-ccc flex-start  "
                                                            onClick={() =>
                                                              handleShowHideCoursesForSubAnnualPeriodAndNotDivisions(
                                                                index,
                                                                periodIndex,
                                                                subPeriodIndex
                                                              )
                                                            }
                                                          >
                                                            <div className="flex-ccc mt-1">
                                                              <label
                                                                htmlFor=""       
                                                              >
                                                                Hidden
                                                              </label>
                                                            </div>
                                                          </div>
                                                        </>
                                                      )}
                                                    </div>
                                                  </div>
                                                  <div className="flex-start">
                                                    <div className="flex mt-1 gapfull  -ml-p5  gap3">
                                                      {subPeriod.visible ? (
                                                        <label className="flex flex-end">
                                                          <AddMoreButton
                                                            index={index}
                                                            subIndex={
                                                              periodIndex
                                                            }
                                                            subSubIndex={
                                                              subPeriodIndex
                                                            }
                                                            subSubSubIndex={
                                                              shiftIndex
                                                            }
                                                            handleLinks={
                                                              addSubAnnualPeriodNotDivisionCourseAndCrhr
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
                                                          <label
                                                            htmlFor=""
                                                            className="mt-3 ml-1"
                                                          >
                                                            &nbsp;
                                                          </label>
                                                        </>
                                                      )}
                                                      <div
                                                        className="flex ml-6 -mt-2"
                                                        onClick={() =>
                                                          handleShowHideCoursesForSubAnnualPeriodAndNotDivisions(
                                                            index,
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
                                                            subPeriod.visible
                                                              ? "mt-p4 "
                                                              : "mt-p4"
                                                          }
                                                        >
                                                          &nbsp;
                                                          {subPeriod.visible
                                                            ? "Hide Courses"
                                                            : "Show Courses"}
                                                        </label>
                                                      </div>
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
                                              {subPeriod.periodName} HAS NO
                                              SHIFTS!
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
