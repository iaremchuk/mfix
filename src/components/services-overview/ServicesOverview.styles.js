import palette from '~/styles/app-theme/app.palette'
import appTypography from '~/styles/app-theme/app.typography'

export const styles = {
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
