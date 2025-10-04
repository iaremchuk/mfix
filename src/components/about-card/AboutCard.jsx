import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import { styles } from '~/components/about-card/AboutCard.styles'
import ContentContainer from '~/containers/content-container/ContentContainer'

const AboutCard = () => {
  return (
    <ContentContainer>
      <Box sx={styles.aboutContainer}>
        <Typography sx={styles.aboutTitle}>About M-FIX Consruction</Typography>
        <Typography sx={styles.aboutText}>Delivering drylining services</Typography>
        <Typography sx={styles.aboutText}>for comercial clients since 2019</Typography>
      </Box>
    </ContentContainer>
  )
}

export default AboutCard
