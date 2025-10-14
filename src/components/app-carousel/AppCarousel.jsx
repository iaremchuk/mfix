import { useEffect, useState } from 'react'
import { Box, Button } from '@mui/material'
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos'
import { styles } from '~/components/app-carousel/AppCarousel.styles.js'

const AppCarousel = ({
  children,
  images, // optional: array of { src, alt }
  width,
  height,
  autoPlay = true,
  interval = 2500,
  showButtons = false, // optional Prev/Next buttons
}) => {
  // Determine slides
  const slides = images
    ? images.map((img, index) => (
        <Box
          component="img"
          key={img.src ?? index}
          src={img.src}
          alt={img.alt}
          sx={{ width: '100%', height: '100%', objectFit: 'cover' }}
        />
      ))
    : Array.isArray(children)
    ? children
    : [children]

  const total = slides.length
  const [activeIndex, setActiveIndex] = useState(0)
  const [isHovered, setIsHovered] = useState(false)

  // Auto-play effect
  useEffect(() => {
    if (!autoPlay || isHovered || total <= 1) return

    const timer = setInterval(
      () => setActiveIndex((prev) => (prev + 1) % total),
      Number(interval) || 2500
    )
    return () => clearInterval(timer)
  }, [autoPlay, isHovered, interval, total])

  // Reset index if out of bounds
  useEffect(() => {
    if (activeIndex >= total) setActiveIndex(0)
  }, [activeIndex, total])

  // Prev/Next handlers
  const nextSlide = () => setActiveIndex((prev) => (prev + 1) % total)
  const prevSlide = () => setActiveIndex((prev) => (prev - 1 + total) % total)

  return (
    <Box
      sx={{ ...styles.carouselContainer, width, height, position: 'relative' }}
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

      {/* Optional Prev/Next buttons */}
      {showButtons && (
        <>
          <Button
            onClick={prevSlide}
            sx={{
              position: 'absolute',
              top: '50%',
              left: 10,
              transform: 'translateY(-50%)',
              zIndex: 2,
              minWidth: 0,
              padding: '6px',
              borderRadius: '50%',
              bgcolor: 'rgba(0,0,0,0.4)',
              '&:hover': { bgcolor: 'rgba(0,0,0,0.6)' },
            }}
          >
            <ArrowBackIosIcon sx={{ color: 'white' }} />
          </Button>
          <Button
            onClick={nextSlide}
            sx={{
              position: 'absolute',
              top: '50%',
              right: 10,
              transform: 'translateY(-50%)',
              zIndex: 2,
              minWidth: 0,
              padding: '6px',
              borderRadius: '50%',
              bgcolor: 'rgba(0,0,0,0.4)',
              '&:hover': { bgcolor: 'rgba(0,0,0,0.6)' },
            }}
          >
            <ArrowForwardIosIcon sx={{ color: 'white' }} />
          </Button>
        </>
      )}

      {/* Slide number display */}
      <Box
        sx={{
          position: 'absolute',
          bottom: 10,
          right: 10,
          bgcolor: 'rgba(0,0,0,0.5)',
          color: 'white',
          px: 2,
          py: 0.5,
          borderRadius: 2,
          fontSize: 14,
          zIndex: 2,
        }}
      >
        {activeIndex + 1} / {total}
      </Box>
    </Box>
  )
}

export default AppCarousel
