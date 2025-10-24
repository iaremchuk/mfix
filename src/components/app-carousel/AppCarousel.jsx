import { useEffect, useState } from 'react'
import { Box, Button } from '@mui/material'
import ArrowLeftIcon from '@mui/icons-material/ArrowLeft'
import ArrowRightIcon from '@mui/icons-material/ArrowRight'
import { styles } from '~/components/app-carousel/AppCarousel.styles.js'

const AppCarousel = ({
  children,
  images,
  width,
  height,
  autoPlay = true,
  interval = 2500,
  showButtons = false,
}) => {
  const slides = images
    ? images.map((img, index) => (
        <Box
          component='img'
          key={img.src ?? index}
          src={img.src}
          alt={img.alt}
        />
      ))
    : Array.isArray(children)
      ? children
      : [children]

  const total = slides.length
  const [activeIndex, setActiveIndex] = useState(0)

  useEffect(() => {
    if (!autoPlay || total <= 1) return

    const timer = setInterval(
      () => setActiveIndex((prev) => (prev + 1) % total),
      Number(interval) || 2500
    )
    return () => clearInterval(timer)
  }, [autoPlay, interval, total])

  useEffect(() => {
    if (activeIndex >= total) setActiveIndex(0)
  }, [activeIndex, total])

  const nextSlide = () => setActiveIndex((prev) => (prev + 1) % total)
  const prevSlide = () => setActiveIndex((prev) => (prev - 1 + total) % total)

  return (
    <Box sx={{ ...styles.carouselContainer, width, height }}>
      {slides.map((child, index) => (
        <Box
          key={child?.key ?? index}
          sx={styles.carouselSlide(activeIndex === index)}
        >
          {child}
        </Box>
      ))}
      {showButtons && (
        <>
          <Button onClick={prevSlide} sx={styles.carouselButton('left')}>
            <ArrowLeftIcon sx={styles.carouselButtonIcon} />
          </Button>
          <Button onClick={nextSlide} sx={styles.carouselButton('right')}>
            <ArrowRightIcon sx={styles.carouselButtonIcon} />
          </Button>
        </>
      )}
      <Box sx={styles.slideNumber}>
        {activeIndex + 1} / {total}
      </Box>
    </Box>
  )
}

export default AppCarousel
