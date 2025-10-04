import Box from '@mui/material/Box'
import logo from '~/assets/logo.JPG'
import { styles } from '~/containers/logo/Logo.styles.js'

const Logo = () => (
  <Box alt='logo' component={'img'} src={logo} sx={styles.logo} />
)

export default Logo
