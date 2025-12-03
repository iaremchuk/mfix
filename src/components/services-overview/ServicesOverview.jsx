import { Typography } from '@mui/material'
import { Box } from '@mui/material'
import ContentContainer from '~/containers/content-container/ContentContainer'
import ServicesOverviewCard from '~/components/services-overview-card/ServicesOverviewCrad'
import { styles } from '~/components/services-overview/ServicesOverview.styles.js'
import img1 from '~/assets/services/1.avif'
import img2 from '~/assets/services/2.avif'
import img3 from '~/assets/services/3.avif'

const ServicesOverview = () => {
  const cards = [
    {
      title: 'Partitioning Services',
      description:
        'Suspended Ceilings, Plasterboard Ceilings, Joinery, Plastering, Insulation Services, Tape & Jointing and Interior Refurbishment',
      img: {
        src: img1,
        alt: 'Plastering',
      },
    },
    {
      title: 'Standard Partitions',
      description:
        'Shaft Wall & Firefighting Shaft Wall, Metal Furring Linings, Wall Liner Linings, Independent I Stud Wall Linings, Direct to Timber Ceilings',
      img: {
        src: img2,
        alt: 'Lining',
      },
    },
    {
      title: 'MF Ceiling System',
      description:
        'Suspended Ceilings, Drywall Framed Encasements, Direct Bonding, Tape and Jointing',
      img: {
        src: img3,
        alt: 'Jointing',
      },
    },
  ]

  return (
    <Box sx={styles.servicesOverviewContainer}>
      <Typography sx={styles.servicesOverviewHeader}>Services</Typography>
      <ContentContainer>
        <Box sx={styles.servicesOverviewCardsContainer}>
          {cards.map((card, index) => (
            <ServicesOverviewCard
              key={index}
              title={card.title}
              description={card.description}
              img={card.img}
            />
          ))}
        </Box>
      </ContentContainer>
    </Box>
  )
}

export default ServicesOverview
