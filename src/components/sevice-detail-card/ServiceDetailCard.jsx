import { Typography } from '@mui/material'
import { Box } from '@mui/material'
import ContentContainer from '~/containers/content-container/ContentContainer'
import { styles } from '~/components/sevice-detail-card/ServiceDetailCard.styles.js'
import logoImage from '~/assets/logo.JPG'

const ServiceDetailCard = ({ title, description }) => {
  return (
    <Box sx={styles.serviceDetailCardContainer}>
      <Box
        component="img"
        src={logoImage}
        alt="logo"
        sx={styles.serviceDetailCardImage}
      ></Box>
      <ContentContainer>
        <Typography sx={styles.serviceDetailCardHeader}>{title}</Typography>
        <Typography sx={styles.serviceDetailCardText}>{description}</Typography>
      </ContentContainer>
    </Box>
  )
}

export default ServiceDetailCard
