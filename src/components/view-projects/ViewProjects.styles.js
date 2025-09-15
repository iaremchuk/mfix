import palette from '../../styles/app-theme/app.palette'

export const styles = {
    viewProjectsContainer: {
        height: {
            md: '500px',
            xs: '400px'
        },
        border: `1px solid ${palette.primary[900]}`,
        marginTop: '50px'
    },
    viewProjectsImage: {
        width: '100%',
        height: '100%',
        objectFit: 'cover'
    },
    viewMoreProjectsBtnContainer: {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        zIndex: 10,
    }
}
