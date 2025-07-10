import Box from '@mui/material/Box'
import NavBar from '~/containers/layout/navbar/NavBar'
import ContentContainer from '~/containers/content-container/ContentContainer'
import {styles}  from '~/containers/layout/app-header/AppHeader.styles.js'

const AppHeader = () => {
  return (
    <Box sx={styles.header}>
      <ContentContainer>
        <NavBar />
      </ContentContainer>
    </Box>
  )
}

export default AppHeader
