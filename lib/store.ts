import { configureStore } from "@reduxjs/toolkit";
import sliceTheme from "./reducer";
const store = configureStore({
  reducer: {
    theme: sliceTheme,
  },
});

export default store;
