import { frequentlyModifiedData } from '../assets/data'

import { imageOverlayCardData } from '../assets/data'
import ImageOverlayCard from '../components/ui/ImageOverlayCard'

import uacAgm2025 from '../assets/media/UAC-AGM-2025.png'

const HomePage = () => {
  const applicationLink = frequentlyModifiedData.applicationLink
  const applicationIsOpen = !!applicationLink

  return (
    <section className='flex flex-col items-center justify-center'>
      {/* Team photo & motto quote */}
      <h1 className='pb-8 text-center text-7xl font-semibold'>Welcome to UAC</h1>

      <div className='group relative'>
        {/* Gray overlay */}
        <div className='absolute inset-0 rounded-2xl bg-gray-900/30 transition-opacity duration-300' />
        <img src={uacAgm2025} alt='UAC AGM' className='h-107.5 w-7xl rounded-2xl object-cover' />

        <p className='absolute inset-0 flex items-center justify-center'>
          <span className='max-w-3xl px-6 text-center text-5xl'>
            ROTATING IMAGES EVERY 5 ish SECONDS?. ALSO UNDER THIS IMAGE HAVE A BANNER FROM LEFT TO RIGHT THAT SAYS: DESIGN. BUILD. FLY.
          </span>
        </p>
      </div>

      {/* Brief club & application info */}
      <h2 className='self-start pt-16 text-5xl font-semibold'>Kia ora!</h2>

      <div className='grid w-full grid-cols-1 gap-6 pt-8 md:grid-cols-2'>
        <div>
          <p>
            The University of Auckland Aeronautics Club (UAC) is dedicated to inspiring and
            educating students in all aspects of aviation and aeronautical engineering, while
            fostering a collaborative environment for hands-on projects and competitions.
          </p>
          <br />
          <p>
            Throughout the year, students from any discipline engineering or otherwise and with any
            level of experience are welcomed to participate and make meaningful contributions to the
            club’s projects and initiatives.
          </p>
          <br />
          <p>
            Aircraft and aeronautics projects are inherently multi-disciplinary, and involvement in
            the club offers invaluable learning experiences for both first-year students and senior
            students alike. Membership is open to all enrolled University of Auckland students, with
            limited opportunities for non-UoA participants.
          </p>
          <br />
          <p>
            Read our club handbook here. (ADD LINK)
          </p>
        </div>

        {/* Toggle activate/deactivate apply button depending on availability */}
        <div className='flex flex-col items-center justify-center gap-6 rounded-2xl bg-[oklch(0.3121_0.0722_251.82)] p-8'>
          {applicationIsOpen ? (
            <>
              <p className='max-w-xs text-center text-2xl'>
                Applications are currently open for {new Date().getFullYear()}.
              </p>
              <a
                href={applicationLink}
                target='_blank'
                rel='noopener noreferrer'
                className='rounded-4xl bg-white px-8 py-4 font-semibold text-blue-600 no-underline duration-300 hover:bg-gray-300'
              >
                Start Your Aeronautics Journey
              </a>
            </>
          ) : (
            <>
              <p className='max-w-xs text-center text-2xl'>
                Applications are currently closed for {new Date().getFullYear()}.
              </p>
              <button
                disabled
                className='cursor-not-allowed rounded-4xl bg-gray-300 px-8 py-4 font-semibold text-gray-600'
              >
                Check Later for Openings
              </button>
            </>
          )}
        </div>
      </div>

      {/* Image overlay cards for further page navigation */}
      <h2 className='self-start pt-16 text-5xl font-semibold'>Learn More. ALSO ADD FOOTER W/ EMAIL and LINKTREE and SOCIALS </h2>

      <div className='grid w-full grid-cols-2 gap-6 pt-8'>
        {imageOverlayCardData.map((card) => (
          <ImageOverlayCard key={card.id} {...card} />
        ))}
      </div>
    </section>
  )
}

export default HomePage
