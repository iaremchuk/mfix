export const styles = {
    carouselContainer: {
        position: 'relative',
        overflow: 'hidden'
    },
    carouselSlide: (isActive) => ({
        position: 'absolute',
        width: '100%',
        height: '100%',
        top: 0,
        left: 0,
        opacity: isActive ? 1 : 0,
        transition: 'opacity 0.6s ease-in-out',
        zIndex: isActive ? 1 : 0
    })
}
