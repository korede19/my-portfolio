import { createSlice } from "@reduxjs/toolkit";
const themeSlice = createSlice({
  name: "theme",
  initialState: "dark",
  reducers: {
    setTheme: (state, { payload }) => {
      return payload;
    },
    clearTheme: () => {
      return "";
    },
  },
});

const { reducer, actions } = themeSlice;
export const { setTheme, clearTheme } = actions;
export default reducer;
