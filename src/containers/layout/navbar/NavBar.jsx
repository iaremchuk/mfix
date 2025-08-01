import { useState } from 'react'
import { useTheme } from '@mui/material/styles'
import useMediaQuery from '@mui/material/useMediaQuery'

import Box from '@mui/material/Box'
import IconButton from '@mui/material/IconButton'
import MenuIcon from '@mui/icons-material/Menu'

import { navLinks } from '~/router/constants/navLinks.js'
import Logo from '~/containers/logo/Logo'

import { styles } from '~/containers/layout/navbar/NavBar.styles.js'
import AppDrawer from '~/components/app-drawer/AppDrawer'
import NavLink from '~/components/naw-link/NavLink'

const Navbar = () => {
  const [drawerOpen, setDrawerOpen] = useState(false)
  const theme = useTheme()
  const isMdUp = useMediaQuery(theme.breakpoints.up('md'))
  const renderNavLinks = (isDrawer = false) =>
    navLinks.map((item) => (
      <NavLink
        key={item.route}
        item={item}
        isDrawer={isDrawer}
        onClick={isDrawer ? () => setDrawerOpen(false) : undefined}
        sx={styles.navBarItem}
      />
    ))

  return (
    <Box sx={styles.navList} component="nav">
      <Logo />
      {isMdUp ? (
        renderNavLinks()
      ) : (
        <>
          <IconButton
            onClick={() => setDrawerOpen(true)}
            aria-label="Open navigation menu"
          >
            <MenuIcon />
          </IconButton>
          <AppDrawer open={drawerOpen} onClose={() => setDrawerOpen(false)}>
            {renderNavLinks(true)}
          </AppDrawer>
        </>
      )}
    </Box>
  )
}

export default Navbar
