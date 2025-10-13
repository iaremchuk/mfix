import { projectImages } from '~/constants/projects/projectImages'

export const projects = [
    {
        title: "New build apartments",
        description: "254 units",
        value: "£100 million",
        location: "Dylon Riverside, SE26 5FH",
        folder: 'dylon-riverside'
    },
    {
        title: "Residential and commercial buildings",
        description: "413 units",
        value: "£200 million",
        location: "Kidbrooke Station Square, SE3 9LU",
        folder: 'kidbrooke-station-square'
    },
    {
        title: "Residential and commercial buildings",
        description: "200 units",
        value: "£100 million",
        location: "34 Wembley Hill Road, HA9 8FJ",
        folder: 'wembley-hill-road'
    },
    {
        title: "New build apartments",
        description: "310 units",
        value: "£150 million",
        location: "Ashley Gardens 1, N17 9QY",
        folder: 'ashley-gardens'
    },
    {
        title: "New build apartments",
        description: "272 units",
        value: "£150 million",
        location: "Ashley Road Depot Site, N17 9DP",
        folder: 'ashley-road-depot'
    },
].map(project => ({
    ...project,
    imgSlides: projectImages[project.folder] || []
}))
