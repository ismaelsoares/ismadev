import { createSlice } from "@reduxjs/toolkit";

interface ITheme {
  isDark: boolean;
}

const INITIAL_STATE: ITheme = {
  isDark: false,
};

const sliceTheme = createSlice({
  name: "theme",
  initialState: { isDark: false },
  reducers: {
    darkMode: (state) => {
      state.isDark = true;
    },
    lightMode: (state) => {
      state.isDark = false;
    },
  },
});
export default sliceTheme.reducer;
export const { lightMode, darkMode } = sliceTheme.actions;

export const userThemes = (state: any) => {
  return state.theme as boolean;
};
// export const themeAction = themeSlice.actions;
// export const themeSliceReducer = themeSlice.reducer;
