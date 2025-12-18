import backgroundImageContacts from '~/assets/projects/ashley-road-depot/1.jpg'

export const styles = {
    root: {
        backgroundImage: `url(${backgroundImageContacts})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
        minHeight: '100vh',
        width: '100%',
        paddingTop: '50px'
    },
    contactsContainer: {
        position: 'relative',
        minHeight: '70vh'
    },
    contactUsContainer: {
        position: 'absolute',
        bottom: '10px',
        width: '100%'
    }
}
