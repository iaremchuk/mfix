import { createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom'

import App from '../App'
import Home from '../pages/home/Home'
import Services from '../pages/services/Services'
import Projects from '../pages/projects/Projects'
import Contacts from '../pages/contacts/Contacts'

const routerConfig = (
    <Route path='/' element={<App />}>
        <Route index element={<Home />} />
        <Route path='services' element={<Services />} />
        <Route path='projects' element={<Projects />} />
        <Route path='contacts' element={<Contacts />} />
    </Route>
)

export const router = createBrowserRouter(createRoutesFromElements(routerConfig))
