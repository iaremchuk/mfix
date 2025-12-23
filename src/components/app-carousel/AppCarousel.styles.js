import palette from '~/styles/app-theme/app.palette'
import { alpha } from '@mui/material/styles'

export const styles = {
  carouselContainer: {
    position: 'relative',
    overflow: 'hidden',
  },
  carouselSlide: (isActive) => ({
    position: 'absolute',
    width: '100%',
    height: '100%',
    top: 0,
    left: 0,
    opacity: isActive ? 1 : 0,
    transition: 'opacity 0.6s ease-in-out',
    zIndex: isActive ? 1 : 0,
  }),
  carouselButton: (position) => ({
    position: 'absolute',
    top: '50%',
    [position]: 10,
    transform: 'translateY(-50%)',
    zIndex: 2,
    width: '36px',
    height: '36px',
    minWidth: 0,
    borderRadius: '50%',
    backgroundColor: alpha(palette.primary[800], 0.8),
    '&:hover': { backgroundColor: palette.companyBlue[400] },
  }),
  carouselButtonIcon: {
    color: 'basic.white',
    fontSize: '40px',
  },
  slideNumber: {
    position: 'absolute',
    bottom: 10,
    right: 10,
    backgroundColor: alpha(palette.primary[800], 0.8),
    color: 'basic.white',
    px: 2,
    py: 0.5,
    borderRadius: 2,
    fontSize: 14,
    zIndex: 2,
  },
}
