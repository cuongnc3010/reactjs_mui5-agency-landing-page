import { Box, Typography } from '@mui/material'
import photo_banner from '../../assets/img/photo_banner.png'
import { Button } from '../Button'
import styles from './styles'
export const Hero = () => {
  return (
    <Box sx={styles.hero}>
      <Box sx={styles.wrapper}>
        <Box sx={{ textAlign: 'left' }}>
          <Typography variant='h2' fontWeight='bold'>
            The most <br /> Advanced Education
          </Typography>

          <Typography variant='body1' sx={styles.text}>
            Choose out of 2500+ mentors. Trusted by 250k users. <br /> Industry
            experts and top university professors Runs in a browser. Can be
            downloaded on desktop, tablet and mobiles. Extremely fast loading at
            200ms. Updates work directory from the website.
          </Typography>
          <Button>join us</Button>
        </Box>
        <Box component='img' src={photo_banner} sx={styles.photo}></Box>
      </Box>
    </Box>
  )
}
