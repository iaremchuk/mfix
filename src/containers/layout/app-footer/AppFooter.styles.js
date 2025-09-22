import palette from '~/styles/app-theme/app.palette'
import appTypography from '~/styles/app-theme/app.typography'

export const styles = {
    footer: {
        height: {
            md: '200px',
            xs: '150px'
        },
        color: 'basic.white',
        backgroundColor: palette.basic.black,
        display: 'flex',
        flexFlow: 'column nowrap',
        justifyContent: 'center',
        alignItems: 'center'
    },
    footerTitle: {
        ...appTypography.body3
    },
    footerText: {
        ...appTypography.h4
    }
}
