import { createTheme } from "@mui/material"
import { createBreakpoints } from "@mui/system"

const breakpoints = createBreakpoints({})
const theme = createTheme({
  palette: {
    primary: {
      main: "#686868",
    },
    slateBlue: {
      main: "#777FEB",
    },
  },
  typography: {
    fontFamily: "'Montserrat', sans-serif",
    // mobile first
    h2: {
      fontFamily: "Montserrat",
      fontWeightL: 700,
      fontSize: "32px",
      lineHeight: "39px",
      color: "#000000",
      [breakpoints.up("md")]: {
        fontSize: "64px",
        lineHeight: "78px",
      },
    },
    body1: {
      fontFamily: "'Montserrat', sans-serif",
      fontSize: "14px",
      fontWeight: 400,
      lineHeight: "17px",
      color: "#686868",
      [breakpoints.up("md")]: {
        fontSize: "24px",
        lineHeight: "29px",
        fontWeight: 500,
      },
    },
  },
})
export default theme
