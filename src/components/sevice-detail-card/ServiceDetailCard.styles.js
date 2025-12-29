import palette from '~/styles/app-theme/app.palette'
import appTypography from '~/styles/app-theme/app.typography'

export const styles = {
  serviceDetailCardContainer: {
    backgroundColor: palette.backgroundColor,
    paddingBottom: '40px',
    marginTop: {
      xs: '50px',
      md: '90px',
    },
    position: 'relative',
    overflow: 'hidden',
    '&:last-of-type': {
      marginBottom: '30px',
    },
  },
  serviceDetailBackgroundImage: (image) => ({
    position: 'absolute',
    inset: 0,
    backgroundImage: `url(${image})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    opacity: 0.5,
  }),
  serviceDetailCardImage: {
    width: '60px',
    height: '50px',
    margin: '0px auto',
    display: 'block',
    opacity: 0.9,
  },
  serviceDetailCardHeader: {
    ...appTypography.h3,
    '@media (max-width:600px)': {
      lineHeight: '70px',
      fontSize: '25px',
    },
    textAlign: 'center',
    opacity: 0.9,
  },
  serviceDetailCardText: {
    ...appTypography.body3,
    '@media (max-width:600px)': {
      ...appTypography.body4,
    },
    opacity: 0.9,
  },
}
