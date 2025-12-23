import palette from '~/styles/app-theme/app.palette'

export const styles = {
  navList: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  navBarItem: (isActive) => ({
    color: isActive ? palette.companyBlue[400] : 'primary.900',
    textDecoration: 'none',
    textTransform: 'uppercase',
    '&:hover': {
      color: 'primary.400',
    },
    '&:focus': {
      color: palette.companyBlue[400],
    },
  }),
}
