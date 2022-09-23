import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  educationalDivision: [
    {
      id: 0,
      divisionType: "Stage",
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

  gradeDivisionState: [
    {
      id: 0,
      educationLevelTypeName: "Grade",
      educationLevelName: "",
      divisionName: "Stage",
      customDivisionName: "",
      // schoolStages: [{ stageName: "" }],
      stageName: "",
      categoryToUpdate: "divisions",
      maxNumOfStudents: "",
    },
  ],
};

export const gradeSlice = createSlice({
  name: "grades",
  initialState,
  reducers: {
    // CREATING SCHOOL EDUCATINAL DIVISONS, SUBDIVISIONS, AND SUBDIVISION SECTIONS UNDER SUBDIVISIONS
    createEducationalDivisions: (state, action) => {
      console.log("hey there");
      console.log(action.payload);
      state.educationalDivision.push(action.payload);
    },

    createEducationalSubDivisions: (state, action) => {
      // division.id => Id of the current educational division e.g. Stage id, or Department id
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
      state.educationalDivision.map((division, index) => {
        console.log("division.id: " + division.id);
        console.log(
          "action.payload.educationalDivisionId: " +
            action.payload.educationalDivisionId
        );
        console.log(division.id);
        if (division.id === action.payload.educationalDivisionId) {
          division.educationalSubDivision.map((subDivision) => {
            console.log("now then");
            console.log("index: " + index);
            console.log(action.payload.subDivisionType);
          });
          // console.log("halooo")
          // console.log(state.educationalDivision[index].educationalSubDivision[division.id].subDivisionType)
          state.educationalDivision[index].educationalSubDivision[
            division.id
          ].subDivisionType = action.payload.subDivisionType;
          state.educationalDivision[index].educationalSubDivision[
            division.id
          ].subDivisionName = action.payload.subDivisionName;
        }
      });
    },

    updateSubDivisionSections: (state, action) => {
      state.educationalDivision.map((division) => {
        if (division.id === action.payload.educationalDivisionId) {
          division.educationalSubDivision.map((subDivision) => {
            if (subDivision.id === action.payload.educationalSubDivisionId) {
              subDivision.map((subDivisionSection) => {
                if (
                  subDivisionSection.id === action.payload.subDivisionSectionId
                ) {
                  subDivisionSection.gradeSectionName =
                    action.payload.gradeSectionName;
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
      state.educationalDivision.filter(
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
        division.map((subDivision) => {
          if (division.id === action.payload.educationalDivisionId) {
            subDivision.filter(
              (subDivision) =>
                subDivision.id != action.payload.educationalSubDivisionId
            );
          }
        });
      });
      state.educationalDivision.map((division) => {
        division.map((subDivision) => {
          if (division.id === action.payload.educationalDivisionId) {
            subDivision.filter(
              (subDivision) =>
                subDivision.id != action.payload.educationalSubDivisionId
            );
          }
        });
      });
    },

    deleteSubDivisionSections: (state, action) => {
      state.educationalDivision.map((division) => {
        division.map((subDivision) => {
          subDivision.map((section) => {
            if (division.id === action.payload.educationalDivisionId) {
              if (subDivision.id === action.payload.educationalSubDivisionId) {
                section.filter(
                  (section) => section.id != action.payload.subDivisionSectionId
                );
              }
            }
          });
        });
      });
      state.educationalDivision.map((division) => {
        division.map((subDivision) => {
          subDivision.map((section) => {
            if (division.id === action.payload.educationalDivisionId) {
              if (subDivision.id === action.payload.educationalSubDivisionId) {
                section.id -= action.payload.subDivisionSectionId;
              }
            }
          });
        });
      });
    },

    // PREVIOUS METHOD
    createGrades: (state, action) => {
      state.gradeDivisionState.push(action.payload);
    },
    updateGrades: (state, action) => {
      state.gradeDivisionState.map((gradeState) => {
        gradeState.categoryToUpdate = action.payload.categoryToUpdate;
        console.log("category to update: " + action.payload.categoryToUpdate);
        console.log("divisionName : " + action.payload.divisionName);
        if (action.payload.categoryToUpdate === "educaitonLevels") {
          if (action.payload.educationLevelTypeName === "Grade") {
            gradeState.educationLevelTypeName = "Grade";
          } else if (action.payload.educationLevelTypeName === "Year") {
            gradeState.educationLevelTypeName = "Year";
          } else if (action.payload.educationLevelTypeName === "Level") {
            gradeState.educationLevelTypeName = "Level";
          } else if (action.payload.educationLevelTypeName === "Custom_Level") {
            gradeState.educationLevelTypeName = "Custom_Level";
          }
        } else if (action.payload.categoryToUpdate === "educaitonDivisions") {
          if (action.payload.divisionName === "Stage") {
            gradeState.divisionName = "Stage";
          }
          if (action.payload.divisionName === "Department") {
            gradeState.divisionName = "Department";
          }
          if (action.payload.divisionName === "Faculty") {
            gradeState.divisionName = "Faculty";
          }
          if (action.payload.divisionName === "Custom Division") {
            gradeState.divisionName = "Custom Division";
          }
        } else if (
          action.payload.categoryToUpdate === "gradeDetails" &&
          action.payload.id === gradeState.id
        ) {
          if (action.payload.gradeDetailsType === "gradeDescription") {
            gradeState.educationLevelName = action.payload.educationLevelName;
          } else if (action.payload.gradeDetailsType === "maxNumOfStudents") {
            gradeState.maxNumOfStudents = action.payload.maxNumOfStudents;
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

    resetGrades: (state, action) => {
      state.gradeDivisionState = state.gradeDivisionState.filter(
        (period) => period.id === action.payload.id
      );
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
  createGrades,
  updateGrades,
  deleteGrades,
  resetGrades,
} = gradeSlice.actions;

export default gradeSlice.reducer;
