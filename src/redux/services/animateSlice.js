import { createSlice } from "@reduxjs/toolkit";
import Cookies from "js-cookie";

const initialState = {
  blur: false,
  page: false,
  exportSet: false,
  addCat: false,
  addCatForm: false,
  width: null,
  height: null,
  menuItemArrow: false,
  pageNum: 7,
  global: false,
  reRender: 0,
  bgColor: "#28243d",
  textColorDim: "#e6e6eb",
  textColor: "#d4d4d4",
  buttonColor: "#312d4b",
  borderColor: "#d4d4d4",
  shadowColor: "#212121",
  upTrendColor: "#186f65",
  downTrendColor: "#e2434b",
  cardBgColor: "#312d4b",
  iconBgColor: "#9055fd25",
  iconColor: "#9055fd",
  themeEditor: false,
  saveTheme:false
};

const STORAGE_KEY = "AnimateSlice";

//____________________________________________________storedItems_____________________Null_____//
const storedItems = Cookies.get(STORAGE_KEY)
  ? JSON.parse(Cookies.get(STORAGE_KEY))
  : null;

if (storedItems) {
  initialState.bgColor = storedItems.bgColor;
  initialState.borderColor = storedItems.borderColor;
  initialState.cardBgColor = storedItems.cardBgColor;
  initialState.downTrendColor = storedItems.downTrendColor;
  initialState.iconBgColor = storedItems.iconBgColor;
  initialState.iconColor = storedItems.iconColor;
  initialState.shadowColor = storedItems.shadowColor;
  initialState.textColor = storedItems.textColor;
  initialState.textColorDim = storedItems.textColorDim;
  initialState.upTrendColor = storedItems.upTrendColor;
}

export const animateSlice = createSlice({
  name: "animateSlice",
  initialState,
  reducers: {
    blurOn: (state, { payload }) => {
      state.blur = payload.blur;
    },
    saveTheme: (state, { payload }) => {
      state.saveTheme = payload;
      Cookies.set(STORAGE_KEY, JSON.stringify(state));

    },
    setPageNum: (state, { payload }) => {
      state.pageNum = payload.pageNum;
    },
    setBgColor: (state, { payload }) => {
      state.bgColor = payload;
    },
    setTextColor: (state, { payload }) => {
      state.textColor = payload;
    },
    setTextColorDim: (state, { payload }) => {
      state.textColorDim = payload;
    },
    setbuttonColor: (state, { payload }) => {
      state.buttonColor = payload;
    },
    setCardBgColor: (state, { payload }) => {
      state.cardBgColor = payload;
    },
    menuItemArrowOn: (state, { payload }) => {
      state.menuItemArrow = payload.menuItemArrow;
    },
    exportSettingOn: (state, { payload }) => {
      state.exportSet = payload.exportSet;
      state.page = false;
      state.addCat = false;
      state.addCatForm = false;
    },
    GlobalOn: (state, { payload }) => {
      state.global = payload.global;
      state.exportSet = false;
      state.page = false;
      state.addCat = false;
      state.addCatForm = false;
    },
    pageOn: (state, { payload }) => {
      state.exportSet = false;
      state.page = payload.page;
      state.addCat = false;
      state.addCatForm = false;
    },
    addCatOn: (state, { payload }) => {
      state.addCat = payload.addCatForm;

      state.exportSet = false;
      state.page = false;
      state.addCatForm = false;
    },
    addCatFormOn: (state, { payload }) => {
      state.addCatForm = payload.addCatForm;

      state.exportSet = false;
      state.page = false;
      state.addCat = false;
    },
    setArea: (state, { payload }) => {
      state.width = payload.width;
      state.height = payload.height;
    },
    setRender: (state, { payload }) => {
      state.reRender = payload;
    },
    setThemeEditor: (state, { payload }) => {
      state.themeEditor = payload;
    },
  },
});

export const {
  saveTheme,
  setThemeEditor,
  themeEditor,
  setCardBgColor,
  setbuttonColor,
  setTextColorDim,
  blurOn,
  exportSettingOn,
  pageOn,
  addCatOn,
  addCatFormOn,
  setArea,
  menuItemArrowOn,
  setPageNum,
  GlobalOn,
  setRender,
  setBgColor,
  bgColor,
  textColor,
  textColorDim,
  buttonColor,
  borderColor,
  shadowColor,
  upTrendColor,
  downTrendColor,
  cardBgColor,
  iconBgColor,
  iconColor,
  setTextColor,
} = animateSlice.actions;
export default animateSlice.reducer;
