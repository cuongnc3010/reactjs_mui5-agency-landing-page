import { Button as MuiButton } from "@mui/material"

const styles = {
  btn: (theme) => ({
    background: theme.palette.slateBlue.main,
    borderRadius: "8px",
    fontWeight: 700,
    fontSize: "16px",
    lineHeight: "20px",
    textTransform: "capitalize",
    color: "#FFFFFF",
    padding: "22px 68px",
    "&:hover": {
      background: "#646ab0",
    },
  }),
}

export const Button = ({ children }) => {
  return <MuiButton sx={styles.btn}>{children}</MuiButton>
}
