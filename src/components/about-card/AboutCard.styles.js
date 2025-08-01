import palette from '../../styles/app-theme/app.palette'
import appTypography from '../../styles/app-theme/app.typography'
import { alpha } from '@mui/material/styles'

export const styles = {
    aboutContainer: {
        height: {
            md: '400px',
            xs: '300px'
        },
        padding: {
            md: '100px 10px',
            sm: '80px 10px',
            xs: '20px 10px'
        },
        backgroundColor: alpha(palette.backgroundColor, 0.6),
        border: `1px solid ${palette.primary[400]}`
    },
    aboutTitle: {
        ...appTypography.h4,
    },
    aboutText: {
        ...appTypography.body3
    }
}
