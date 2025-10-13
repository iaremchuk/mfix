import { useEffect, useState } from 'react'
import { Box } from '@mui/material'
import { styles } from '~/components/app-carousel/AppCarousel.styles.js'

const AppCarousel = ({
  children,
  width,
  height,
  autoPlay = true,
  interval = 3000,
}) => {
  // Normalize children to an array (works whether a single child or many)
  const slides = Array.isArray(children) ? children : [children]
  const total = slides.length

  const [activeIndex, setActiveIndex] = useState(0)
  const [isHovered, setIsHovered] = useState(false)

  // Advance slide safely (uses functional update to avoid stale closures)
  useEffect(() => {
    if (!autoPlay || isHovered || total <= 1) return

    const timer = setInterval(
      () => {
        setActiveIndex((prev) => (prev + 1) % total)
      },
      Number(interval) || 3000
    )

    return () => clearInterval(timer)
  }, [autoPlay, isHovered, interval, total])

  // If number of slides changes, ensure activeIndex is within bounds
  useEffect(() => {
    if (activeIndex >= total) {
      setActiveIndex(0)
    }
  }, [total, activeIndex])

  return (
    <Box
      sx={{ ...styles.carouselContainer, width, height }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {slides.map((child, index) => (
        <Box
          key={child?.key ?? index}
          sx={styles.carouselSlide(activeIndex === index)}
        >
          {child}
        </Box>
      ))}
    </Box>
  )
}

export default AppCarousel
