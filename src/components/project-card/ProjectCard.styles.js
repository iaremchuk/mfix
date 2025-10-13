import palette from '~/styles/app-theme/app.palette'
import appTypography from '~/styles/app-theme/app.typography'

export const styles = {
    projectCardContainer: {
        display: 'flex',
        flexDirection: {
            xs: 'column',
            sm: 'row'
        },
        justifyContent: 'space-between',
        border: '2px solid red',
        marginTop: '30px',
        '&:last-of-type': {
            marginBottom: '30px'
        },
        height: {
            xs: 'auto',   // small screens
            sm: '400px',  // larger screens
          },
    },
    projectCardContentContainer: {
        width: {
            xs: '100%',
            sm: '35%'
        },
        border: '1px solid green'
    },
    projectCardSlidesContainer: {
        width: {
            xs: '100%',
            sm: '65%'
        },
        height: {
            xs: '250px',  // small screen height
            sm: '100%',   // fill parent
          },
    },
    projectCardImage: {
        width: '100%',
        height: '100%',
        objectFit: 'cover'
    },
    projectCardHeader: {
        ...appTypography.h4,
        '@media (max-width:1200px)': {
            lineHeight: '35px'
        },
        '@media (max-width:600px)': {
            ...appTypography.h5,
            lineHeight: '25px'
        }
    },
    projectCardDescription: {
        ...appTypography.body3,
        '@media (max-width:600px)': {
            ...appTypography.body1,
        },
        '&:nth-of-type(2)': {
            marginTop: {
                xs: '10px',
                sm: '30px'
            }
        },
    },
    servicesOverviewContainer: {
        backgroundColor: palette.backgroundColor,
        marginTop: '50px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: '30px 0 40px'
    },
    servicesOverviewHeader: {
        ...appTypography.h3,
        textTransform: 'uppercase'
    },
    servicesOverviewCardsContainer: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: 2,
        flexDirection: {
            xs: 'column',
            sm: 'row'
        }
    }
}
