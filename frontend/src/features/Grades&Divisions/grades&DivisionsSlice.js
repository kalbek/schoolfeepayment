import { createSlice, current } from "@reduxjs/toolkit";
const initialState = {
  educationalDivision: [
    {
      id: 0,
      divisionType: "Stage",
      divisoinLevel: "",
      divisionName: "",
      educationalSubDivision: [
        {
          id: 0,
          subDivisionType: "Grade",
          subDivisionName: "", // e.g. KG, Primary, Secondary, etc...
          hasSection: false,
          hasMaximumNumberOfStudents: false,
          maximumNumberOfStudents: "",
          numberOfScholarships: "",
          numberOfSpecialCases: "",
          section: [],
        },
      ],
    },
  ],
};

export const educationalDivisionSlice = createSlice({
  name: "divisions",
  initialState,
  reducers: {
    // CREATING EDUCATINAL DIVISONS, SUBDIVISIONS, AND SUBDIVISION SECTIONS UNDER SUBDIVISIONS
    createEducationalDivisions: (state, action) => {
      state.educationalDivision.push(action.payload);
    },

    createEducationalSubDivisions: (state, action) => {
      state.educationalDivision.map((division) => {
        if (division.id === action.payload.educationalDivisionId)
          division.educationalSubDivision.push(action.payload);
      });
    },

    createSubDivisionSections: (state, action) => {
      state.educationalDivision.map((division) => {
        if (division.id === action.payload.educationalDivisionId) {
          division.educationalSubDivision.map((subDivision) => {
            if (subDivision.id === action.payload.educationalSubDivisionID) {
              subDivision.section.push(action.payload.section);
              console.log(current(subDivision));
            }
          });
        }
      });
    },

    // UPDATING SCHOOL EDUCATINAL DIVISONS, SUBDIVISIONS, AND SUBDIVISION SECTIONS UNDER SUBDIVISIONS
    updateEducationalDivisions: (state, action) => {
      state.educationalDivision.map((division) => {
        if (division.id === action.payload.educationalDivisionId) {
          division.divisionName = action.payload.divisionName;
        }
      });
    },

    updateEducationalSubDivisions: (state, action) => {
      console.log(
        "action.payload.educationalDivisionId:" +
          action.payload.educationalDivisionId
      );
      console.log(
        "action.payload.educatonalSubDivisionId:" +
          action.payload.educationalSubDivisionId
      );
      state.educationalDivision.map((division) => {
        if (division.id === action.payload.educationalDivisionId) {
          division.educationalSubDivision.map((subDivision) => {
            if (subDivision.id === action.payload.educationalSubDivisionId) {
              subDivision.subDivisionName = action.payload.subDivisionName;
            }
          });
        }
      });
    },

    deleteEducationalSubDivision: (state, action) => {
      state.educationalDivision.map((division) => {
        if (division.id === action.payload.educationalDivisionId) {
          division.educationalSubDivision =
            division.educationalSubDivision.filter(
              (subDivision) =>
                subDivision.id !== action.payload.educationalSubDivisionId
            );
        }
      });

      state.educationalDivision.map((division) => {
        if (division.id === action.payload.educationalDivisionId) {
          division.educationalSubDivision.map((subDivision) => {
            if (subDivision.id > action.payload.educationalSubDivisionId) {
              subDivision.id -= 1;
            }
          });
        }
      });
    },

    updateSubDivisionSections: (state, action) => {
      state.educationalDivision.map((division) => {
        if (division.id === action.payload.educationalDivisionId) {
          division.educationalSubDivision.map((subDivision) => {
            if (subDivision.id === action.payload.educationalSubDivisionId) {
              subDivision.section.map((subDivisionSection) => {
                if (
                  subDivisionSection.id === action.payload.subDivisionSectionId
                ) {
                  subDivisionSection.sectionName = action.payload.sectionName;
                  subDivisionSection.hasMaximumNumberOfStudents =
                    action.payload.hasMaximumNumberOfStudents;
                  subDivisionSection.maximumNumberOfStudents =
                    action.payload.maximumNumberOfStudents;
                  subDivisionSection.numberOfScholarships =
                    action.payload.numberOfScholarships;
                  subDivisionSection.numberOfSpecialCases =
                    action.payload.numberOfSpecialCases;
                }
              });
            }
          });
        }
      });
    },

    // DELETING SCHOOL EDUCATINAL DIVISONS, SUBDIVISIONS, AND SECTIONS UNDER SUBDIVISIONS
    deleteEducationalDivisions: (state, action) => {
      state.educationalDivision = state.educationalDivision.filter(
        (division) => division.id != action.payload.educationalDivisionId
      );

      state.educationalDivision.map((division) => {
        if (division.id > action.payload.educationalDivisionId) {
          division.id -= 1;
        }
      });
    },

    deleteSubDivisionSections: (state, action) => {
      state.educationalDivision.map((division) => {
        if (division.id === action.payload.educationalDivisionId) {
          division.educationalSubDivision.map((subDivision) => {
            if (subDivision.id === action.payload.educationalSubDivisionId) {
              console.log(current(subDivision.section));
              subDivision.section = subDivision.section.filter(
                (section) => section.id != action.payload.subDivisionSectionId
              );
            }
          });
        }
      });
      state.educationalDivision.map((division) => {
        if (division.id === action.payload.educationalDivisionId) {
          division.educationalSubDivision.map((subDivision) => {
            if (subDivision.id === action.payload.educationalSubDivisionId) {
              subDivision.section.map((section) => {
                if (section.id > action.payload.subDivisionSectionId) {
                  section.id -= 1;
                }
              });
            }
          });
        }
      });
    },

    // PREVIOUS METHOD
    createGrades: (state, action) => {
      state.gradeDivisionState.push(action.payload);
    },
    updateDivisionsAndSubDivisions: (state, action) => {
      state.educationalDivision.map((division) => {
        division.categoryToUpdate = action.payload.categoryToUpdate;
        if (action.payload.categoryToUpdate === "educaitonLevels") {
          division.educationalSubDivision.map((subDivision) => {
            if (action.payload.educationSubDivisionName === "Grade") {
              subDivision.subDivisionType = "Grade";
            } else if (action.payload.educationSubDivisionName === "Year") {
              subDivision.subDivisionType = "Year";
            } else if (action.payload.educationSubDivisionName === "Level") {
              subDivision.subDivisionType = "Level";
            } else if (
              action.payload.educationSubDivisionName === "Custom Subdivision"
            ) {
              subDivision.subDivisionType = "Custom Subdivision";
            }
          });
        } else if (action.payload.categoryToUpdate === "educaitonDivisions") {
          if (action.payload.divisionType === "Stage") {
            division.divisionType = "Stage";
          }
          if (action.payload.divisionType === "Department") {
            division.divisionType = "Department";
          }
          if (action.payload.divisionType === "Faculty") {
            division.divisionType = "Faculty";
          }
          if (action.payload.divisionType === "Custom Division") {
            console.log("yaa");
            division.divisionType = "Custom Division";
            console.log("yaadivision.divisionTyp: " + division.divisionType);
          }
        } else if (
          action.payload.categoryToUpdate === "gradeDetails" &&
          action.payload.id === division.id
        ) {
          if (action.payload.gradeDetailsType === "gradeDescription") {
            division.educationLevelName = action.payload.educationLevelName;
          } else if (action.payload.gradeDetailsType === "maxNumOfStudents") {
            division.maxNumOfStudents = action.payload.maxNumOfStudents;
          }
        }
      });
    },

    deleteGrades: (state, action) => {
      state.gradeDivisionState = state.gradeDivisionState.filter(
        (period) => period.id !== action.payload.id
      );
      state.gradeDivisionState.map((period) => {
        if (period.id > action.payload.id) {
          period.id -= 1;
        }
      });
    },
  },
});

export const {
  createEducationalDivisions,
  createEducationalSubDivisions,
  createSubDivisionSections,
  updateEducationalDivisions,
  updateEducationalSubDivisions,
  updateSubDivisionSections,
  deleteEducationalDivisions,
  deleteEducationalSubDivision,
  deleteSubDivisionSections,
  updateDivisionsAndSubDivisions,
} = educationalDivisionSlice.actions;

export default educationalDivisionSlice.reducer;
