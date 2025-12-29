import { Outlet } from 'react-router-dom'
import { ThemeProvider, CssBaseline } from '@mui/material'

import AppHeader from '~/containers/layout/app-header/AppHeader'
import AppFooter from '~/containers/layout/app-footer/AppFooter'
import { theme } from './styles/app-theme/custom-mui.styles'

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppHeader />
      <main>
        <Outlet />
      </main>
      <AppFooter />
    </ThemeProvider>
  )
}

export default App
