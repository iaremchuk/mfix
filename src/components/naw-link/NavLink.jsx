import { Typography } from '@mui/material'
import { Link, useLocation } from 'react-router-dom'

const NavLink = ({ item, onClick, sx }) => {
  const { pathname } = useLocation()
  const isActive = pathname === item.path

  const linkStyle = typeof sx === 'function' ? sx(isActive) : sx

  return (
    <Typography
      key={item.route}
      component={Link}
      to={item.path}
      onClick={onClick}
      sx={linkStyle}
      role="navigation"
    >
      {item.label}
    </Typography>
  )
}

export default NavLink
