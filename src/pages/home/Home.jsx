import Box from '@mui/material/Box'
import { styles } from '~/pages/home/Home.styles.js'
import AboutCard from '~/components/about-card/AboutCard'
import ServicesOverview from '~/components/services-overview/ServicesOverview'

const Home = () => {
  return (
    <Box sx={styles.root}>
      <AboutCard />
      <ServicesOverview />
    </Box>
  )
}

export default Home
