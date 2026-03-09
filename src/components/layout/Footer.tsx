import { Icon } from '@iconify/react'
import { footerData } from '../../assets/data'

const Footer = () => {
  return (
    <footer className='mt-12 mb-4 text-center'>
      {/* Separator */}
      <div className='mb-4 h-px w-full bg-gray-700'></div>

      <div className='flex items-center justify-around max-lg:flex-col max-lg:gap-4'>
        {/* Club Name */}
        <div>
          <img src={footerData.uacLogo} alt='UAC Logo' className='mb-4 h-16 w-auto' />
          <h3>Official University of Auckland Aeronautics Club</h3>
        </div>

        {/* Socials */}
        <div>
          <div className='mb-4 flex justify-center space-x-20 max-lg:space-x-8'>
            <a href={footerData.socialLinks[0].url} target='_blank' rel='noopener noreferrer'>
              <Icon
                icon={footerData.socialLinks[0].icon}
                className='h-16 text-7xl hover:text-[#F1C232]'
              />
            </a>
            <a href={footerData.socialLinks[1].url} target='_blank' rel='noopener noreferrer'>
              <Icon
                icon={footerData.socialLinks[1].icon}
                className='h-16 text-7xl hover:text-[#F1C232]'
              />
            </a>
            <a href={footerData.socialLinks[2].url} target='_blank' rel='noopener noreferrer'>
              <Icon
                icon={footerData.socialLinks[2].icon}
                className='h-16 text-7xl hover:text-[#F1C232]'
              />
            </a>
            <a href={footerData.socialLinks[3].url} target='_blank' rel='noopener noreferrer'>
              <Icon
                icon={footerData.socialLinks[3].icon}
                className='h-16 text-7xl hover:text-[#F1C232]'
              />
            </a>
          </div>

          {/* Copyright Text */}
          <p>
            &copy;{new Date().getFullYear()} by Aeronautics Club, University of Auckland.
            <span className='max-lg:hidden'> All rights reserved.</span>
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
