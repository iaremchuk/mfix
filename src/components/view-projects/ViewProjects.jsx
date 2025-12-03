import { Box } from '@mui/material'
import AppCarousel from '~/components/app-carousel/AppCarousel'
import ContentContainer from '~/containers/content-container/ContentContainer'
import ViewButton from '~/components/view-button/ViewButton'
import { styles } from '~/components/view-projects/ViewProjects.styles.js'

const images = import.meta.glob('~/assets/projects/**/*.jpg', { eager: true })

const projectImages = Object.entries(images).map(([path, mod], index) => ({
  src: mod.default,
  alt: `Project ${index + 1}`,
}))

const ViewProjects = () => {
  return (
    <ContentContainer>
      <ViewButton sx={{ marginTop: '50px' }} />
      <Box sx={styles.viewProjectsContainer} position="relative">
        <AppCarousel
          width="100%"
          height="100%"
          interval={2000}
          showButtons={false}
        >
          {projectImages.map((image, index) => (
            <Box
              key={index}
              component="img"
              src={image.src}
              alt={image.alt}
              loading="lazy"
              sx={styles.viewProjectsImage}
            />
          ))}
        </AppCarousel>
      </Box>
    </ContentContainer>
  )
}

export default ViewProjects
