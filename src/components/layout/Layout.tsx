import React from 'react'
import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { Header } from './Header'
import { Footer } from './Footer'

interface LayoutProps {
  children: React.ReactNode
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' })
  }, [pathname])

  return (
    <div className='font-inter bg-brand-blue flex min-h-dvh flex-col font-light text-slate-800'>
      <Header />
      <main className='grow'>{children}</main>
      <Footer />
    </div>
  )
}
