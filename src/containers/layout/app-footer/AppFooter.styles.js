import palette from '~/styles/app-theme/app.palette'
import appTypography from '~/styles/app-theme/app.typography'

export const styles = {
    footer: {
        height: {
            xs: '150px',
            md: '200px'
        },
        color: 'basic.white',
        backgroundColor: palette.basic.black,
        display: 'flex',
        flexFlow: 'column nowrap',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center'
    },
    footerTitle: {
        ...appTypography.body3
    },
    footerText: {
        ...appTypography.h4,
        fontSize: {
            xs: '20px'
        }
    }
}
