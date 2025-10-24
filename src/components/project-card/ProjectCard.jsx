import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import { styles } from '~/components/project-card/ProjectCard.styles.js'
import AppCarousel from '~/components/app-carousel/AppCarousel'

const ProjectCard = ({ title, description, location, imgSlides }) => {
  return (
    <Box sx={styles.projectCardContainer}>
      <Box sx={styles.projectCardContentContainer}>
        <Typography sx={styles.projectCardHeader}>{title}</Typography>
        <Typography sx={styles.projectCardDescription}>
          {description}
        </Typography>
        <Typography sx={styles.projectCardDescription}>{location}</Typography>
      </Box>
      <Box sx={styles.projectCardSlidesContainer}>
        <AppCarousel width='100%' height='100%' showButtons={true}>
          {imgSlides?.length ? (
            imgSlides.map((image, index) => (
              <Box
                key={index}
                component='img'
                src={image.src}
                alt={image.alt}
                sx={styles.projectCardImage}
              />
            ))
          ) : (
            <Typography sx={styles.noImageText}>Images to be coming</Typography>
          )}
        </AppCarousel>
      </Box>
    </Box>
  )
}

export default ProjectCard
