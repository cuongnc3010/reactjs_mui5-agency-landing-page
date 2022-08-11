import { Box, Drawer as MuiDrawer, IconButton } from "@mui/material"

import close from "../../assets/img/close.svg"
import { Navbar } from "../Navbar/Navbar"

export const Drawer = ({ open, onClose }) => {
  return (
    <MuiDrawer
      PaperProps={{ sx: { width: "100%" } }}
      anchor={"left"}
      open={open}
      onClose={onClose}
    >
      <Box sx={{ p: 5 }}>
        <IconButton onClick={onClose} sx={{ p: 0, ml: 5 }}>
          <img src={close} alt='close button' />
        </IconButton>
      </Box>

      <Box sx={{ p: 44 }}>
        <Navbar />
      </Box>
    </MuiDrawer>
  )
}
