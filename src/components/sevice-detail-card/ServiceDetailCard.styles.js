import palette from '~/styles/app-theme/app.palette'
import appTypography from '~/styles/app-theme/app.typography'

export const styles = {
    serviceDetailCardContainer: {
        backgroundColor: palette.backgroundColor,
        paddingBottom: '40px',
        marginTop: {
            xs: '50px',
            md: '90px'
        }
    },
    serviceDetailCardImage: {
        width: '60px',
        height: '50px',
        margin: '0px auto',
        display: 'block'
    },
    serviceDetailCardHeader: {
        ...appTypography.h3,
        '@media (max-width:600px)': {
            lineHeight: '70px',
            fontSize: '25px'
        },
        textAlign: 'center'
    },
    serviceDetailCardText: {
        ...appTypography.body3,
        '@media (max-width:600px)': {
            ...appTypography.body4
        }
    }
}
