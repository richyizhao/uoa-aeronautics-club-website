import { frequentlyModifiedData, imageOverlayTextData } from '../assets/data'

import Carousel from '../components/ui/Carousel'
import ImageOverlayText from '../components/ui/ImageOverlayText'

const HomePage = () => {
  const applicationLink = frequentlyModifiedData.applicationLink
  const applicationIsOpen = !!applicationLink

  return (
    <section>
      {/* Carousel */}
      <h1 className='my-8 text-center text-7xl font-semibold'>Welcome to UAC</h1>

      <Carousel />

      {/* Club Application Info */}
      <h2 className='mt-12 mb-6 text-5xl font-semibold'>Kia ora!</h2>

      <div className='grid w-full grid-cols-1 gap-6 md:grid-cols-2'>
        <div className='flex flex-col gap-4'>
          <p>
            The University of Auckland Aeronautics Club (UAC) is dedicated to inspiring and
            educating students in all aspects of aviation and aeronautical engineering, while
            fostering a collaborative environment for hands-on projects and competitions.
          </p>
          <p>
            Throughout the year, students from any discipline engineering or otherwise and with any
            level of experience are welcomed to participate and make meaningful contributions to the
            club’s projects and initiatives.
          </p>
          <p>
            Aircraft and aeronautics projects are inherently multi-disciplinary, and involvement in
            the club offers invaluable learning experiences for both first-year students and senior
            students alike. Membership is open to all enrolled University of Auckland students, with
            limited opportunities for non-UoA participants.
          </p>
          <div className='flex gap-8'>
            <p>Read our club handbook here.</p>
            <a
              href='/uac-handbook.pdf'
              download
              className='rounded-4xl bg-white px-4 font-semibold text-blue-600 no-underline duration-300 hover:bg-gray-300'
            >
              Download
            </a>
          </div>
        </div>

        {/* Signup Navigation */}
        <div className='flex flex-col items-center justify-center gap-6 rounded-2xl bg-[#113254] p-8'>
          {/* toggle on availability of link */}
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

      {/* Further Page Navigation */}
      <h2 className='mt-12 mb-6 text-5xl font-semibold'>Learn More</h2>

      <div className='grid w-full grid-cols-2 gap-6'>
        {imageOverlayTextData.slice(0, 4).map((card) => (
          <ImageOverlayText key={card.id} {...card} />
        ))}
      </div>
    </section>
  )
}

export default HomePage
