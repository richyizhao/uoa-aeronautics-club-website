import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Layout from './components/layout/Layout'

import HomePage from './pages/HomePage'
import AboutUs from './pages/AboutUs'
import NewsEvents from './pages/NewsEvents'
import OurProjects from './pages/OurProjects'
import OurSponsors from './pages/OurSponsors'
import ContactSignUp from './pages/ContactSignUp'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path='/' element={<HomePage />} />
          <Route path='/about-us' element={<AboutUs />} />
          <Route path='/news-events' element={<NewsEvents />} />
          <Route path='/our-projects' element={<OurProjects />} />
          <Route path='/our-sponsors' element={<OurSponsors />} />
          <Route path='/contact-sign-up' element={<ContactSignUp />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
