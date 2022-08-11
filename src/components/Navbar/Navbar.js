import { Box, Button as MuiButton } from "@mui/material"
import arrow from "../../assets/img/chevron-down.svg"
const pages = [
  { title: "Demos", arrow: true },
  { title: "Services", arrow: true },
  { title: "Pages", arrow: true },
  { title: "Portfolio", arrow: true },
  { title: "Blog", arrow: true },
  { title: "Contact", arrow: false },
]

const styles = {
  btnLink: {
    fontSize: "18px",
    fontWeight: 500,
    lineHeight: "22px",
    textTransform: "capitalize",
    color: "#000000",
    mr: "44px",
    px: 0,
    display: "flex",
  },
}
export const Navbar = () => {
  return (
    <Box
      sx={{ display: { lg: "flex" }, flexGrow: 1, justifyContent: "flex-end" }}
    >
      {pages.map((page) => (
        <MuiButton key={page} sx={styles.btnLink}>
          {page.title}
          {page.arrow && (
            <img src={arrow} alt="drop down" style={{ marginLeft: "4px" }} />
          )}
        </MuiButton>
      ))}
    </Box>
  )
}
