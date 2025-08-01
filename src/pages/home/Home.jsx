import Box from '@mui/material/Box'
import { styles } from '~/pages/home/Home.styles.js'
import AboutCard from '~/components/about-card/AboutCard'

const Home = () => {
  return (
    <Box sx={styles.root}>
      <AboutCard />
    </Box>
  )
}

export default Home
