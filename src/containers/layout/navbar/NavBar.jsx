import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import IconButton from '@mui/material/IconButton'
import MenuIcon from '@mui/icons-material/Menu'

import { navLinks } from '~/router/constants/navLinks.js'
import Logo from '~/containers/logo/Logo'

import { styles } from '~/containers/layout/navbar/NavBar.styles.js'
import AppDrawer from '~/components/app-drawer/AppDrawer'

const Navbar = () => {
  const { pathname } = useLocation()
  const [drawerOpen, setDrawerOpen] = useState(false)

  return (
    <Box sx={styles.navList} component="nav">
      <Logo />
      {navLinks.map((item) => {
        const isActive = pathname === item.path
        return (
          <Typography
            key={item.route}
            component={Link}
            to={item.path}
            sx={styles.navBarItem}
          >
            {item.label}
          </Typography>
        )
      })}
      <IconButton
        onClick={() => setDrawerOpen(true)}
        sx={{ display: { xs: 'block', md: 'none' } }}
      >
        <MenuIcon />
      </IconButton>
      <AppDrawer open={drawerOpen} onClose={() => setDrawerOpen(false)}>
        {navLinks.map((item) => {
          const isActive = pathname === item.path
          return (
            <Typography
              key={item.route}
              component={Link}
              to={item.path}
              onClick={() => setDrawerOpen(false)}
              sx={styles.navBarItem(isActive, true)}
            >
              {item.label}
            </Typography>
          )
        })}
      </AppDrawer>
    </Box>
  )
}

export default Navbar
