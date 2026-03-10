import { imageOverlayTextData } from '../assets/data'
import ImageOverlayText from '../components/ui/ImageOverlayText'

const OurSponsors = () => {
  return (
    <section>
      <h1 className='my-8 text-center text-7xl font-semibold'>Our Sponsors</h1>

      {/* Sponsor Message */}
      <h2 className='mt-12 mb-6 text-5xl font-semibold'>With Gratitude to Our Sponsors</h2>

      <p className='mb-6'>
        This initiative is made possible through the support of our esteemed sponsors.
      </p>

      <div className='grid w-full grid-cols-2 gap-6'>
        {imageOverlayTextData.slice(4, 9).map((card, index, arr) => {
          // Check if last item & total is odd
          const isLastAndOdd = arr.length % 2 === 1 && index === arr.length - 1
          return (
            <div key={card.id} className={isLastAndOdd ? 'col-span-2 flex justify-center' : ''}>
              <ImageOverlayText {...card} />
            </div>
          )
        })}
      </div>

      {/* Donation & Merchandise Info */}
      <div className='mt-12 flex flex-col gap-12 md:flex-row'>
        {/* Sponsorship */}
        <div className='flex-1'>
          <h2 className='mb-6 text-5xl font-semibold'>Sponsor UAC</h2>
          <div className='space-y-3'>
            <p>
              If you or your organization would like to support the University of Auckland
              Aeronautics Club, please contact us via email.
            </p>
            <p>
              You can also view our 2025 Sponsorship Prospectus{' '}
              <a href='#' className='text-blue-600 underline'>
                here
              </a>
              .
            </p>
          </div>
        </div>

        {/* Merchandise */}
        <div className='flex-1'>
          <h2 className='mb-6 text-5xl font-semibold'>Merchandise</h2>
          <div className='space-y-3'>
            <p>
              Support the club by purchasing official merchandise. For inquiries or orders, please
              contact us via email.
            </p>
            <p>
              Our club official email address:{' '}
              <a href='mailto:aeroclubuoa@gmail.com' className='text-blue-600 underline'>
                aeroclubuoa@gmail.com
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default OurSponsors
