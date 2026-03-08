import { Outlet } from 'react-router-dom'

import Footer from './Footer'
import Header from './Header'

const Layout = () => {
  return (
    <div className='mx-auto flex min-h-screen max-w-7xl flex-col justify-center overflow-x-hidden px-4'>
      <Header />

      <main className='flex-1'>
        <Outlet />
      </main>

      <Footer />
    </div>
  )
}

export default Layout
