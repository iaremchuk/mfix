import palette from '~/styles/app-theme/app.palette'

export const styles = {
    viewProjectsContainer: {
        height: {
            xs: '400px',
            md: '500px',
            lg: '600px'
        },
        border: `1px solid ${palette.primary[900]}`,
        marginTop: '50px'
    },
    viewProjectsImage: {
        width: '100%',
        height: '100%',
        objectFit: 'cover'
    }
}
