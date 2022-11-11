import React from "react";

const InputControlers = ({
  index,
  visibility,
  shift,
  hasCourseUnit,
  crHr,
  removeMethod,
  divisionIndex,
  subDivisionIndex,
  periodIndex,
  shiftIndex,
  cousrseNameInputMethod,
  cousrseCrhrInputMethod,
  handleAddMoreMethod,
  hideShowMethod,
  handleChange,
  courseHideShow,
  subPeriodIndex,
  courseIndex,
}) => {
  return (
    <div>
      <div>
        {visibility ? (
          shift.courses.map((course, courseIndex) => (
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
                        id={"courseName" + index}
                        value={course.courseName}
                        onChange={(event) =>
                          cousrseNameInputMethod(
                            event,
                            index,
                            divisionIndex,
                            subDivisionIndex,
                            periodIndex,
                            shiftIndex,
                            courseIndex
                          )
                        }
                        name={"courseName"}
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
                            placeholder={crHr ? "CrHr" : "Contact Hr."}
                            name={crHr ? "CrHr" : "ContactHr"}
                            value={
                              crHr ? course.creditHours : course.contactHours
                            }
                            id={"creditHour" + index}
                            onChange={(event) =>
                              cousrseCrhrInputMethod(
                                event,
                                subDivisionIndex,
                                divisionIndex,
                                index,
                                periodIndex,
                                shiftIndex,
                                courseIndex
                              )
                            }
                            tabIndex={9}
                          />
                        </>
                      ) : (
                        <></>
                      )}
                      <></>

                      {shift.courses.length > 1 ? (
                        <RemoveLinksButton
                          courseIndex
                          index={index}
                          subIndex={divisionIndex}
                          subSubIndex={subDivisionIndex}
                          subSubSubIndex={periodIndex}
                          subSubSubSubIndex={shiftIndex}
                          subSubSubSubSubIndex={courseIndex}
                          remove={removeMethod}
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
                          subIndex={divisionIndex}
                          subSubIndex={subDivisionIndex}
                          subSubSubIndex={subPeriodIndex}
                          handleLinks={handleAddMoreMethod}
                        />
                        <>
                          <span className="-ml-1">
                            &nbsp;&nbsp; <p>Add Course</p>
                          </span>
                        </>
                      </label>
                    ) : (
                      <>
                        <label htmlFor="" className="mt-3 ml-1">
                          Hidden
                        </label>
                      </>
                    )}
                    <div
                      className="flex"
                      onClick={() =>
                        hideShowMethod(
                          index,
                          divisionIndex,
                          subDivisionIndex,
                          subPeriodIndex
                        )
                      }
                    >
                      <div className="space-for-remove"></div>
                      <div>
                        <HideOrshow toogleValue={subPeriod.visible} />
                      </div>
                      &nbsp;
                      <label
                        className={
                          true ? "input-group mt-p4 " : "input-group mt-3 "
                        }
                      >
                        &nbsp;
                        {subPeriod.visible ? "Hide Courses" : "Show Courses"}
                      </label>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))
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
  );
};

export default InputControlers;
