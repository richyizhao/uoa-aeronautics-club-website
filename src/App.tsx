import { Routes, Route } from 'react-router-dom'
import { Layout } from './components/layout/Layout'
import { Home } from './page/Home'
import { About } from './page/About'
import { Projects } from './page/Projects'
import { Sponsors } from './page/Sponsors'
import { Events } from './page/Events'
import { EventsDetail } from './page/EventsDetail'
import { Contacts } from './page/Contacts'

function App() {
  return (
    <Layout>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/projects' element={<Projects />} />
        <Route path='/sponsors' element={<Sponsors />} />
        <Route path='/events' element={<Events />} />
        <Route path='/events/:id' element={<EventsDetail />} />
        <Route path='/contacts' element={<Contacts />} />
      </Routes>
    </Layout>
  )
}

export default App
