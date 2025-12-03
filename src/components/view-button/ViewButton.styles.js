import palette from '~/styles/app-theme/app.palette'
import appTypography from '~/styles/app-theme/app.typography'

export const styles = {
  viewButton: {
    fontSize: {
      xs: '16px',
      md: appTypography.body3.fontSize
    },
    backgroundColor: palette.companyBlue[400],
    color: `${palette.primary[900]}`,
    borderRadius: 0,
    border: '1px solid black',
    padding: {
      md: '10px 20px',
      xs: '5px 5px'
    },
    width: {
      xs: '200px',
      md: '300px'
    },
    textTransform: 'none',
    '&:hover': {
      backgroundColor: 'basic.white'
    }
  }
}
