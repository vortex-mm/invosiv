import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  aside: {
    active: false,
  },
  theme: {
    systemDarkMode: false,
    current: "light",
  },
  toast: {
    duration: 3000,
    iconKind: "success",
    message: "Successfully Updated!",
    active: false,
  },
};

const dashboardSlice = createSlice({
  name: "dashboard",
  initialState,
  reducers: {
    toggleAside(state) {
      state.aside.active = !state.aside.active;
    },
    setTheme(state, action) {
      state.theme.current = action.payload;
    },
    toggleTheme(state) {
      const nextTheme = state.theme.current === "light" ? "dark" : "light";
      state.theme.current = nextTheme;
    },
    toggleToast(state) {
      state.toast = {
        duration: 3000,
        iconKind: "success",
        message: "Successfully Updated!",
        active: !state.toast.active,
      };
    },
    updateToast(state, action) {
      state.toast = action.payload;
    },
    updateDarkMode(state, action) {
      state.theme.systemDarkMode = action.payload;
    },
  },
});

export const {
  toggleAside,
  toggleTheme,
  setTheme,
  updateDarkMode,
  toggleToast,
  updateToast,
} = dashboardSlice.actions;

export default dashboardSlice.reducer;
