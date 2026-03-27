import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from '../ui/Button'
import { HamburgerMenu } from '../ui/HamburgerMenu'
import { layoutData } from '../../data/data'
import uacLogo from '../../assets/media/uac-logo.png'

export const Header: React.FC = () => {
  const { header } = layoutData
  const { brand } = header

  return (
    <header className='bg-brand-blue sticky top-0 z-50 py-4 shadow-sm backdrop-blur-md transition-all duration-300'>
      <div className='container mx-auto flex h-8 max-w-7xl items-center justify-between px-6'>
        <Link
          to={brand.path}
          className='flex items-center gap-6 transition-opacity hover:opacity-80'
        >
          <div className='h-full w-30 max-sm:hidden'>
            <img src={uacLogo} alt='UAC Logo' />
          </div>
          <span className='font-sora text-xl font-bold tracking-tight text-white'>
            {brand.label}
          </span>
        </Link>

        <nav className='hidden items-center gap-8 text-sm font-medium text-slate-100 lg:flex'>
          {header.navLinks.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className='transition-colors hover:text-yellow-500'
            >
              {item.label}
            </Link>
          ))}
          {header.cta.href && (
            <Button
              as='a'
              href={header.cta.href}
              target={header.cta.external ? '_blank' : undefined}
              rel={header.cta.external ? 'noopener noreferrer' : undefined}
              variant='primary'
              size='sm'
            >
              {header.cta.label}
            </Button>
          )}
        </nav>

        <div className='lg:hidden'>
          <HamburgerMenu items={header.mobileNavLinks} />
        </div>
      </div>
    </header>
  )
}
