import { Outlet } from 'react-router-dom'
import { ThemeProvider, CssBaseline } from '@mui/material'

import { theme } from './styles/app-theme/custom-mui.styles'

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div>
        <header>
          <h1>M-Fix</h1>
        </header>
        <main>
          <Outlet />
        </main>
      </div>
    </ThemeProvider>
  )
}

export default App
