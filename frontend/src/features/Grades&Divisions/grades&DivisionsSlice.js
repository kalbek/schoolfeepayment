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
          section: [
            {
              id: 0,
              gradeSectionName: "", // A, B, C or 1, 2, 3 ...
              hasMaximumNumberOfStudents: false,
              maximumNumberOfStudents: "",
              numberOfScholarships: "",
              numberOfSpecialCases: "",
            },
          ],
        },
      ],
    },
  ],
};

export const gradeSlice = createSlice({
  name: "educationalDivisions",
  initialState,
  reducers: {
    // manage major educational division types selections and subdivision types
    handleEducationalDivisions: (state, action) => {
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
              action.payload.educationSubDivisionName === "Custom Level"
            ) {
              subDivision.subDivisionType = "Custom Level";
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
    // CREATING SCHOOL EDUCATINAL DIVISONS, SUBDIVISIONS, AND SUBDIVISION SECTIONS UNDER SUBDIVISIONS
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
              subDivision.section.push(action.payload);
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

    updateSubDivisionSection: (state, action) => {
      state.educationalDivision.map((division) => {
        if (division.id === action.payload.educationalDivisionId) {
          division.educationalSubDivision.map((subDivision) => {
            if (subDivision.id === action.payload.educationalSubDivisionId) {
              subDivision.section.map((section) => {
                section.gradeSectionName = action.payload.gradeSectionName;
                section.hasMaximumNumberOfStudents =
                  action.payload.hasMaximumNumberOfStudents;
                section.maximumNumberOfStudents =
                  action.payload.maximumNumberOfStudents;
                section.numberOfScholarships =
                  action.payload.numberOfScholarships;
                section.numberOfSpecialCases =
                  action.payload.numberOfSpecialCases;
              });
            }
          });
        }
      });
    },

    // DELETING SCHOOL EDUCATINAL DIVISONS, SUBDIVISIONS, AND SUBDIVISION SECTIONS UNDER SUBDIVISIONS
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

    deleteSubDivisionSection: (state, action) => {
      state.educationalDivision.map((division) => {
        if (division.id === action.payload.educationalDivisionId) {
          division.educationalSubDivision.map((subDivision) => {
            if (subDivision.id === action.payload.educationalSubDivisionId) {
              subDivision.section = subDivision.section.filter(
                (section) => section.id !== action.payload.sectionId
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
                if (section.id > action.payload.sectionId) {
                  section.id -= 1;
                }
              });
            }
          });
        }
      });
    },
  },
});

export const {
  handleEducationalDivisions,
  createEducationalDivisions,
  createEducationalSubDivisions,
  createSubDivisionSections,
  updateEducationalDivisions,
  updateEducationalSubDivisions,
  updateSubDivisionSections,
  deleteEducationalDivisions,
  deleteEducationalSubDivision,
  deleteSubDivisionSections,
} = gradeSlice.actions;

export default gradeSlice.reducer;
