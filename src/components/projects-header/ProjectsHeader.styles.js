import palette from '~/styles/app-theme/app.palette'
import appTypography from '~/styles/app-theme/app.typography'

export const styles = {
  projectsHeaderContainer: {
    height: {
      xs: '100px',
      sm: '250px',
    },
    backgroundColor: palette.basic.grey,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  projectsHeaderTitle: {
    ...appTypography.h2,
    textTransform: 'uppercase',
    '@media (max-width:600px)': {
      fontSize: '20px',
    },
  },
}
