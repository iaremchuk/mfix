import Box from '@mui/material/Box'
import AboutCard from '~/components/about-card/AboutCard'
import ViewButton from '~/components/view-button/ViewButton'
import ServiceDetailCard from '~/components/sevice-detail-card/ServiceDetailCard'
import { styles } from '~/pages/services/Services.styles.js'
import { services } from '~/constants/services/services.js'

const Services = () => {
  return (
    <Box sx={styles.root}>
      <AboutCard>
        <ViewButton />
      </AboutCard>
      <Box>
        {services.map((service, index) => (
          <ServiceDetailCard key={index} {...service} />
        ))}
      </Box>
    </Box>
  )
}

export default Services
