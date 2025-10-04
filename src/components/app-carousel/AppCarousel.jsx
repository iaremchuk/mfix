import { useEffect, useState } from 'react'
import { Box } from '@mui/material'
import { styles } from '~/components/app-carousel/AppCarousel.styles.js'

const AppCarousel = ({
  children,
  width,
  height,
  autoPlay = true,
  interval,
}) => {
  const [activeIndex, setActiveIndex] = useState(0)
  const [isHovered, setIsHovered] = useState(false)
  const total = children.length

  const handleNext = () => setActiveIndex((prev) => (prev + 1) % total)

  useEffect(() => {
    if (!autoPlay || isHovered) return
    const timer = setInterval(handleNext, interval)
    return () => clearInterval(timer)
  }, [autoPlay, interval, isHovered])

  return (
    <Box
      sx={{ ...styles.carouselContainer, width, height }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {children.map((child, index) => (
        <Box key={index} sx={styles.carouselSlide(activeIndex === index)}>
          {child}
        </Box>
      ))}
    </Box>
  )
}

export default AppCarousel
