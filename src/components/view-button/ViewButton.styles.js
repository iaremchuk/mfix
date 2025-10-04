import palette from '~/styles/app-theme/app.palette'

export const styles = {
  viewButton: {
    backgroundColor: 'basic.white',
    color: `${palette.primary[900]}`,
    borderRadius: 0,
    border: '1px solid black',
    padding: {
      md: '10px 20px',
      xs: '5px 5px'
    },
    width: {
      xs: '200px'
    },
    textTransform: 'none',
    '&:hover': {
      backgroundColor: palette.companyBlue[400],
    }
  }
}
