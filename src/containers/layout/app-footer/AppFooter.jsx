import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import { styles } from '~/containers/layout/app-footer/AppFooter.styles.js'

const AppFooter = () => {
  return (
    <Box sx={styles.footer}>
      <Typography sx={styles.footerTitle}>To discuss a project or find out more email: </Typography>
      <Typography sx={styles.footerText}>mfixconstruction@gmail.com</Typography>
    </Box>
  )
}

export default AppFooter
