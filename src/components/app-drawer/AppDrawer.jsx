import Drawer from '@mui/material/Drawer'
import Box from '@mui/material/Box'
import IconButton from '@mui/material/IconButton'
import CloseIcon from '@mui/icons-material/Close'

import { styles } from '~/components/app-drawer/AppDrawer.styles.js'

const AppDrawer = ({
  open,
  onClose,
  children,
  width = 250,
  anchor = 'right',
}) => {
  return (
    <Drawer anchor={anchor} open={open} onClose={onClose}>
      <Box sx={styles.drawerContainer(width)}>
        <Box sx={styles.closeButtonContainer}>
          <IconButton onClick={onClose} aria-label="Close drawer">
            <CloseIcon />
          </IconButton>
        </Box>
        <Box sx={styles.contentWrapper}>{children}</Box>
      </Box>
    </Drawer>
  )
}

export default AppDrawer
