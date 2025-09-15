import { useState } from 'react'
import { Box } from '@mui/material'
import AppCarousel from '~/components/app-carousel/AppCarousel'
import ContentContainer from '~/containers/content-container/ContentContainer'
import ViewButton from '~/components/view-button/ViewButton'
import { styles } from '~/components/view-projects/ViewProjects.styles.js'

import img1 from '~/assets/1.jpg'
import img2 from '~/assets/2.jpg'
import img3 from '~/assets/3.jpg'
import img4 from '~/assets/4.jpg'
import img5 from '~/assets/5.jpg'
import img6 from '~/assets/6.jpg'
import img7 from '~/assets/7.jpg'
import img8 from '~/assets/8.jpg'
import img9 from '~/assets/9.jpg'
import img10 from '~/assets/10.jpg'
import img11 from '~/assets/11.jpg'
import img12 from '~/assets/12.jpg'
import img13 from '~/assets/13.jpg'
import img14 from '~/assets/14.jpg'
import img15 from '~/assets/15.jpg'
import img16 from '~/assets/16.jpg'
import img17 from '~/assets/17.jpg'
import img18 from '~/assets/18.jpg'

const projectImages = [
  { src: img1, alt: 'Project 1', title: 'Admin Dashboard' },
  { src: img2, alt: 'Project 2', title: 'Real Estate Website' },
  { src: img3, alt: 'Project 3', title: 'Portfolio App' },
  { src: img4, alt: 'Project 4', title: 'Portfolio App' },
  { src: img5, alt: 'Project 5', title: 'Portfolio App' },
  { src: img6, alt: 'Project 6', title: 'Portfolio App' },
  { src: img7, alt: 'Project 7', title: 'Portfolio App' },
  { src: img8, alt: 'Project 8', title: 'Portfolio App' },
  { src: img9, alt: 'Project 9', title: 'Portfolio App' },
  { src: img10, alt: 'Project 10', title: 'Portfolio App' },
  { src: img11, alt: 'Project 11', title: 'Portfolio App' },
  { src: img12, alt: 'Project 12', title: 'Portfolio App' },
  { src: img13, alt: 'Project 13', title: 'Portfolio App' },
  { src: img14, alt: 'Project 14', title: 'Portfolio App' },
  { src: img15, alt: 'Project 15', title: 'Portfolio App' },
  { src: img16, alt: 'Project 16', title: 'Portfolio App' },
  { src: img17, alt: 'Project 17', title: 'Portfolio App' },
  { src: img18, alt: 'Project 18', title: 'Portfolio App' },
]

const ViewProjects = () => {
  const [isHovered, setIsHovered] = useState(false)
  return (
    <ContentContainer>
      <Box
        sx={styles.viewProjectsContainer}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        position="relative"
      >
        <AppCarousel width="100%" height="100%" autoPlay interval={2500}>
          {projectImages.map((image, index) => (
            <Box
              key={index}
              component="img"
              src={image.src}
              alt={image.alt}
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
