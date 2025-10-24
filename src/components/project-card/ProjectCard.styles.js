import appTypography from '~/styles/app-theme/app.typography'

export const styles = {
    projectCardContainer: {
        display: 'flex',
        flexDirection: {
            xs: 'column',
            sm: 'row'
        },
        justifyContent: 'space-between',
        marginTop: '30px',
        '&:last-of-type': {
            marginBottom: '30px'
        },
        height: {
            xs: 'auto',
            sm: '450px'
        }
    },
    projectCardContentContainer: {
        width: {
            xs: '100%',
            sm: '30%'
        }
    },
    projectCardSlidesContainer: {
        width: {
            xs: '100%',
            sm: '65%'
        },
        height: {
            xs: '250px',
            sm: '100%'
        }
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
            ...appTypography.body1
        },
        '&:nth-of-type(2)': {
            marginTop: {
                xs: '10px',
                sm: '30px'
            }
        }
    }
}
