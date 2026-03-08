import { Link } from 'react-router-dom'

import HamburgerMenu from '../ui/HamburgerMenu'
import uacLogo from '../../assets/media/uac-logo.png'

const Header = () => {
  return (
    <header>
      <div className='mx-auto flex items-center justify-between pt-4 pb-16'>
        <div className='flex items-center gap-8'>
          <img src={uacLogo} alt='UoA Aeronautics Club Logo' className='h-7.5 w-auto' />
          <Link
            to='/'
            className='cursor-pointer text-3xl leading-none font-bold transition-colors duration-300 hover:text-[#F1C232] max-lg:hidden'
          >
            UoA Aeronautics Club
          </Link>
        </div>
        <HamburgerMenu />
      </div>
    </header>
  )
}

export default Header
