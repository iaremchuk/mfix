import palette from '~/styles/app-theme/app.palette'
import appTypography from '~/styles/app-theme/app.typography'

export const styles = {
    servicesOverviewCardContainer: {
        width: {
            xs: '90%',
            sm: '70%',
            md: '32%'
        },
        height: {
            xs: '400px',
            sm: '500px'
        },
        backgroundColor: palette.basic.grey
    },
    servicesOverviewCardImage: {
        width: '100%',
        height: {
            xs: '150px',
            md: '200px'
        }
    },
    servicesOverviewCardInfoContainer: {
        padding: '0 20px'
    },
    servicesOverviewCardHeader: {
        ...appTypography.h5,
        lineHeight: {
            sm: '26px'
        },
        marginTop: {
            xs: '10px',
            sm: '15px',
            md: '30px'
        }
    },
    servicesOverviewCardText: {
        ...appTypography.body1,
        marginTop: {
            sm: '10px'
        }
    }
}
