import { projectImages } from '~/constants/projects/projectImages'

export const projects = [
    {
        title: "New build apartments",
        description: "272 new homes",
        location: "Ashley Road Depot Site, N17 9DP",
        folder: 'ashley-road-depot'
    },
    {
        title: "New build apartments",
        description: "254 units (2 & 3 bedroom apartments)",
        location: "Dylon Riverside, SE26 5FH",
        folder: 'dylon-riverside'
    },
    {
        title: "Residential and commercial buildings",
        description: "413 units sit within six blocks",
        location: "Kidbrooke Station Square, SE3 9LU",
        folder: 'kidbrooke-station-square'
    },
    {
        title: "Residential and commercial buildings",
        description: "200 units (198 apartments and 2 commercial units)",
        location: "34 Wembley Hill Road, HA9 8FJ",
        folder: 'wembley-hill-road'
    },
    {
        title: "New build apartments",
        description: "310 units (2 & 3 bedroom apartments)",
        location: "Ashley Gardens 1, N17 9QY",
        folder: 'ashley-gardens'
    }
].map(project => ({
    ...project,
    imgSlides: projectImages[project.folder] || []
}))
