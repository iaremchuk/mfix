import { useState } from 'react'
import { Box } from '@mui/material'
import AppCarousel from '~/components/app-carousel/AppCarousel'
import ContentContainer from '~/containers/content-container/ContentContainer'
import ViewButton from '~/components/view-button/ViewButton'
import { styles } from '~/components/view-projects/ViewProjects.styles.js'

const images = import.meta.glob('~/assets/projects/*.jpg', { eager: true })

const projectImages = Object.entries(images).map(([path, mod], index) => ({
  src: mod.default,
  alt: `Project ${index + 1}`,
}))

const ViewProjects = () => {
  const [isHovered, setIsHovered] = useState(false)
  return (
    <ContentContainer>
      <Box
        sx={styles.viewProjectsContainer}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        position='relative'
      >
        <AppCarousel width='100%' height='100%' autoPlay interval={2500}>
          {projectImages.map((image, index) => (
            <Box
              key={index}
              component='img'
              src={image.src}
              alt={image.alt}
              loading='lazy'
              sx={styles.viewProjectsImage}
            />
          ))}
        </AppCarousel>
        {isHovered && (
          <Box sx={styles.viewMoreProjectsBtnContainer}>
            <ViewButton />
          </Box>
        )}
      </Box>
    </ContentContainer>
  )
}

export default ViewProjects
