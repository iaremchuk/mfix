import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import { styles } from '~/components/projects-header/ProjectsHeader.styles.js'

const ProjectsHeader = () => {
  return (
    <Box sx={styles.projectsHeaderContainer}>
      <Typography sx={styles.projectsHeaderTitle}>Our Projects</Typography>
    </Box>
  )
}

export default ProjectsHeader
