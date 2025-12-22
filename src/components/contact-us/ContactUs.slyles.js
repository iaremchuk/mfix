import palette from '~/styles/app-theme/app.palette'
import appTypography from '~/styles/app-theme/app.typography'

export const styles = {
    contactUsContainer: {
        backgroundColor: palette.backgroundColor,
        padding: {
            xs: '10px 0 20px',
            md: '30px 0 45px'
        }
    },
    contactUsTitle: {
        ...appTypography.h3
    },
    contactUsContent: {
        display: 'flex',
        flexDirection: {
            xs: 'column',
            md: 'row'
        },
        gap: {
            xs: 0,
            md: 20,
            lg: 30
        },
        marginTop: '10px'
    },
    contactUsText: {
        ...appTypography.body4,
        width: {
            xs: '100%',
            md: '40%'
        }
    },
    contactUsEmail: {
        ...appTypography.body3,
        width: {
            xs: '100%',
            md: '40%'
        },
        fontSize: {
            xs: '20px',
            lg: '30px'

        },
        textDecoration: 'none',
        color: 'inherit'
    }
}
