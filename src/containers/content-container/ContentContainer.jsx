import Box from '@mui/material/Box'

import { styles } from '~/containers/content-container/ContentContainer.styles.js'

const ContentContainer = ({ children }) => {
  return <Box sx={styles.contentContainer}>{children}</Box>
}

export default ContentContainer
