import Box from '@mui/material/Box'
import ProjectCard from '../../components/project-card/ProjectCard'
import ProjectsHeader from '~/components/projects-header/ProjectsHeader'
import ContentContainer from '~/containers/content-container/ContentContainer'
import { projects } from '~/constants/projects/projects.js'

const Projects = () => {
  return (
    <Box>
      <ProjectsHeader />
      <ContentContainer>
        <Box>
          {projects.map((project, index) => (
            <ProjectCard key={index} index={index} {...project} />
          ))}
        </Box>
      </ContentContainer>
    </Box>
  )
}

export default Projects
