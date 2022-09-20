import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  gradeDivisionState: [
    {
      id: 0,
      educationLevelTypeName: "Grade",
      educationLevelName: "",
      divisionName: "stagesEducationalDivision",
      hasStageDivision: false,
      hasDepartmentDivision: false,
      hasFacultyDivision: false,
      hasCustomDivision: false,
      customDivisionName: "",
      categoryToUpdate: "divisions",
      maxNumOfStudents: "",
    },
  ],
};

export const gradeSlice = createSlice({
  name: "grades",
  initialState,
  reducers: {
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
          if (action.payload.divisionName === "stagesEducationalDivision") {
            gradeState.hasStageDivision = action.payload.hasStageDivision;
          }
          if (action.payload.divisionName === "departmentEducationalDivision") {
            gradeState.hasDepartmentDivision =
              action.payload.hasDepartmentDivision;
          }
          if (action.payload.divisionName === "facultyEducationalDivision") {
            gradeState.hasFacultyDivision = action.payload.hasFacultyDivision;
          }
          if (action.payload.divisionName === "customEducationDivision") {
            gradeState.hasCustomDivision = action.payload.hasCustomDivision;
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

export const { createGrades, updateGrades, deleteGrades, resetGrades } =
  gradeSlice.actions;

export default gradeSlice.reducer;
