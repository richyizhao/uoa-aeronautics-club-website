import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'

import { hamburgerMenuData } from '../../assets/data'

const HamburgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false)
  const toggleMenu = () => {
    if (!isOpen) {
      // Instantly scroll to top before opening
      window.scrollTo(0, 0)
      setIsOpen(true)
    } else {
      setIsOpen(false)
    }
  }

  useEffect(() => {
    // Hide scrollbar when menu is open
    document.body.style.overflow = isOpen ? 'hidden' : 'auto'

    return () => {
      document.body.style.overflow = 'auto'
    }
  }, [isOpen])

  return (
    <nav className='relative flex h-7.5 items-center'>
      {/* Hamburger Button */}
      <div
        className='group z-50 flex h-6.75 w-8.75 cursor-pointer flex-col justify-between'
        onClick={toggleMenu}
      >
        <span
          className={`block h-1.25 w-full bg-white transition-all duration-300 group-hover:bg-[#F1C232] ${
            isOpen ? 'translate-y-2.75 rotate-45 bg-white' : ''
          }`}
        />
        <span
          className={`block h-1.25 w-full bg-white transition-all duration-300 group-hover:bg-[#F1C232] ${
            isOpen ? 'bg-white opacity-0' : ''
          }`}
        />
        <span
          className={`block h-1.25 w-full bg-white transition-all duration-300 group-hover:bg-[#F1C232] ${
            isOpen ? '-translate-y-2.75 -rotate-45 bg-white' : ''
          }`}
        />
      </div>

      {/* Navigation Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className='fixed top-0 left-0 z-40 flex h-full w-full items-center justify-center bg-[#113254]'
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: '100%' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.35 }}
          >
            <nav className='text-5xl'>
              <ul className='m-0 inline-block list-none p-0'>
                {hamburgerMenuData.map((item, i) => (
                  <motion.li
                    key={item.label}
                    className='relative h-[20%] min-h-12.5'
                    initial={{ opacity: 0, x: '20%' }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.35 + i * 0.05, duration: 0.5 }}
                  >
                    <Link
                      to={item.path}
                      onClick={() => setIsOpen(false)}
                      className='relative block overflow-hidden py-6 font-bold no-underline transition-colors duration-300 after:absolute after:bottom-0 after:left-1/2 after:h-0.75 after:w-0 after:-translate-x-1/2 after:bg-[#F1C232] after:transition-all after:duration-300 hover:text-[#F1C232] hover:after:w-full'
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
    </nav>
  )
}

export default HamburgerMenu
