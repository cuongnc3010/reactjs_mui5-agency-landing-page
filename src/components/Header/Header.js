import { useState } from 'react'
import {
  Typography,
  IconButton,
  AppBar,
  Container,
  Box,
  Toolbar,
} from '@mui/material'
import styles from './styles'
import { Navbar } from '../Navbar'
import { Drawer } from '../Drawer'

//IMPORTING SVG'S
import logo_desk from '../../assets/img/logo_desc.svg'
import logo_mob from '../../assets/img/logo_mob.svg'
import burger_menu from '../../assets/img/burger_menu.svg'

export const Header = () => {
  const [openDrawer, setOpenDrawer] = useState(false)
  return (
    <AppBar position='static' sx={styles.appBar}>
      <Container maxWidth='xl' sx={styles.container}>
        <Drawer open={openDrawer} onClose={() => setOpenDrawer(false)} />
        <Toolbar disableGutters>
          <Box component='a' href='/' sx={styles.logoDesk}>
            <img src={logo_desk} alt='logo' />
          </Box>
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', lg: 'none' } }}>
            <IconButton
              size='large'
              color='inherit'
              aria-label='menu'
              onClick={() => setOpenDrawer(true)}
            >
              <img src={burger_menu} at='' />
            </IconButton>
          </Box>
          <Box component='a' href='/' sx={styles.logoMob}>
            <img src={logo_mob} alt='logo' />
          </Box>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', lg: 'flex' } }}>
            <Navbar />
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  )
}
