import { Typography } from '@mui/material'
import { Box } from '@mui/material'
import { styles } from '~/components/services-overview-card/ServicesOverviewCard.styles.js'

const ServicesOverviewCard = ({ title, description, img }) => {
  return (
    <Box sx={styles.servicesOverviewCardContainer}>
      <Box
        component="img"
        src={img.src}
        alt={img.alt}
        sx={styles.servicesOverviewCardImage}
      ></Box>
      <Box sx={styles.servicesOverviewCardInfoContainer}>
        <Typography sx={styles.servicesOverviewCardHeader}>{title}</Typography>
        <Typography sx={styles.servicesOverviewCardText}>
          {description}
        </Typography>
      </Box>
    </Box>
  )
}

export default ServicesOverviewCard
