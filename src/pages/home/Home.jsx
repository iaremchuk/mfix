import Box from '@mui/material/Box'
import { styles } from '~/pages/home/Home.styles.js'
import AboutCard from '~/components/about-card/AboutCard'
import ViewProjects from '~/components/view-projects/ViewProjects'

const Home = () => {
  return (
    <Box sx={styles.root}>
      <AboutCard />
      <ViewProjects />
    </Box>
  )
}

export default Home
