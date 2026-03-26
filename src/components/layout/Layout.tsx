import React from 'react'
import { Header } from './Header'
import { Footer } from './Footer'

interface LayoutProps {
  children: React.ReactNode
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className='font-inter flex min-h-dvh flex-col bg-gray-900 font-light text-slate-800'>
      <Header />
      <main className='grow'>{children}</main>
      <Footer />
    </div>
  )
}
