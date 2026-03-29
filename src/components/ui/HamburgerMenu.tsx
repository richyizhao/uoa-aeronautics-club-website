import { useEffect, useId, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import { cn } from '../../lib/cn'

export type HamburgerMenuItem = {
  label: string
  path: string
}

export type HamburgerMenuProps = {
  items: HamburgerMenuItem[]
  className?: string
}

const FOCUSABLE_SELECTORS =
  'a[href], button:not([disabled]), textarea, input, select, [tabindex]:not([tabindex="-1"])'

export const HamburgerMenu = ({ items, className }: HamburgerMenuProps) => {
  const [isOpen, setIsOpen] = useState(false)
  const menuId = useId()
  const toggleButtonRef = useRef<HTMLButtonElement | null>(null)
  const overlayRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    if (!isOpen) {
      return
    }

    window.scrollTo({ top: 0, behavior: 'auto' })

    const previousBodyOverflow = document.body.style.overflow
    const previousHtmlOverflow = document.documentElement.style.overflow
    const toggleButton = toggleButtonRef.current
    document.body.style.overflow = 'hidden'
    document.documentElement.style.overflow = 'hidden'

    const focusableElements = overlayRef.current?.querySelectorAll<HTMLElement>(FOCUSABLE_SELECTORS)
    focusableElements?.[0]?.focus()

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsOpen(false)
        return
      }

      if (event.key !== 'Tab') {
        return
      }

      const focusable = overlayRef.current?.querySelectorAll<HTMLElement>(FOCUSABLE_SELECTORS)
      if (!focusable || focusable.length === 0) {
        return
      }

      const firstElement = focusable[0]
      const lastElement = focusable[focusable.length - 1]
      const activeElement = document.activeElement

      if (event.shiftKey && activeElement === firstElement) {
        event.preventDefault()
        lastElement.focus()
      } else if (!event.shiftKey && activeElement === lastElement) {
        event.preventDefault()
        firstElement.focus()
      }
    }

    window.addEventListener('keydown', handleKeyDown)

    return () => {
      window.removeEventListener('keydown', handleKeyDown)
      document.body.style.overflow = previousBodyOverflow
      document.documentElement.style.overflow = previousHtmlOverflow
      toggleButton?.focus()
    }
  }, [isOpen])

  useEffect(() => {
    if (typeof window === 'undefined') {
      return
    }

    const desktopMediaQuery = window.matchMedia('(min-width: 1024px)')
    const handleDesktopChange = (event: MediaQueryListEvent | MediaQueryList) => {
      if (event.matches) {
        setIsOpen(false)
      }
    }

    handleDesktopChange(desktopMediaQuery)
    desktopMediaQuery.addEventListener('change', handleDesktopChange)
    return () => desktopMediaQuery.removeEventListener('change', handleDesktopChange)
  }, [])

  if (items.length === 0) {
    return null
  }

  return (
    <div className={cn('relative flex items-center', className)}>
      <button
        ref={toggleButtonRef}
        type='button'
        className='group hover:text-brand-yellow z-50 flex h-10 w-10 cursor-pointer items-center justify-center rounded-xl text-white transition-colors'
        onClick={() => setIsOpen((previous) => !previous)}
        aria-expanded={isOpen}
        aria-controls={menuId}
        aria-label={isOpen ? 'Close navigation menu' : 'Open navigation menu'}
      >
        <span className='sr-only'>{isOpen ? 'Close navigation menu' : 'Open navigation menu'}</span>
        <span className='relative h-6 w-8'>
          <span
            className={cn(
              'absolute top-0 left-0 block h-1 w-full rounded-full bg-current transition-all duration-300',
              isOpen && 'translate-y-2.5 rotate-45',
            )}
          />
          <span
            className={cn(
              'absolute top-2.5 left-0 block h-1 w-full rounded-full bg-current transition-all duration-300',
              isOpen && 'opacity-0',
            )}
          />
          <span
            className={cn(
              'absolute top-5 left-0 block h-1 w-full rounded-full bg-current transition-all duration-300',
              isOpen && '-translate-y-2.5 -rotate-45',
            )}
          />
        </span>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            id={menuId}
            ref={overlayRef}
            className='bg-brand-blue fixed inset-0 z-40 flex min-h-dvh w-full items-center justify-center px-6 backdrop-blur-md'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            role='dialog'
            aria-modal='true'
            aria-label='Mobile navigation'
          >
            <nav className='text-4xl sm:text-5xl'>
              <ul className='m-0 inline-block list-none p-0'>
                {items.map((item, index) => (
                  <motion.li
                    key={item.path}
                    className='relative min-h-12'
                    initial={{ opacity: 0, x: '20%' }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.15 + index * 0.05, duration: 0.35 }}
                  >
                    <Link
                      to={item.path}
                      onClick={() => setIsOpen(false)}
                      className='font-sora relative block overflow-hidden py-6 font-bold text-white no-underline transition-colors duration-300 hover:text-yellow-500'
                    >
                      {item.label}
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
