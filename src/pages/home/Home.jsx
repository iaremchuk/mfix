import Box from '@mui/material/Box'
import { styles } from '../home/Home.styles'
import AboutCard from '../../components/about-card/AboutCard'

const Home = () => {
  return (
    <Box sx={styles.root}>
      <AboutCard />
    </Box>
  )
}

export default Home
