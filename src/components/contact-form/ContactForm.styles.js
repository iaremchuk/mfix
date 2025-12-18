import palette from '~/styles/app-theme/app.palette'
import appTypography from '~/styles/app-theme/app.typography'
const textFieldBorderStyle = {
    '& .MuiOutlinedInput-root': {
        '&:hover fieldset': {
            borderColor: palette.companyBlue[400],
        },
        '&.Mui-focused fieldset': {
            borderColor: palette.companyBlue[400],
        }
    }
}

export const styles = {
    contactFormBlock: {
        backgroundColor: palette.backgroundColor,
        marginTop: '20px',
        padding: {
            xs: '20px',
            md: '30px',
            lg: '60px'
        }
    },
    contactFormContainer: {
        display: 'flex',
        flexDirection: 'column',
        gap: 2,
        margin: '0 auto',
        width: {
            xs: '300px',
            md: '500px',
            lg: '700px'
        }
    },
    contactFormTitle: {
        ...appTypography.h3,
        color: palette.companyBlue[400]
    },
    contactFormInitialsContainer: {
        display: 'flex',
        justifyContent: 'space-between'
    },
    contactFormInitials: {
        width: '49%',
        ...textFieldBorderStyle
    },
    contactFormTextField: {
        ...textFieldBorderStyle
    },
    contactFormButton: {
        backgroundColor: palette.companyBlue[400],
    }
}
