import uacAgm2025 from '../assets/media/UAC-AGM-2025.png'
import placeholderImg from '../assets/media/placeholder.jpg'
import { accordionData } from '../assets/data'
import Accordion from '../components/ui/Accordion'

const AboutUs = () => {
  return (
    <section>
      {/* Club Cohort Picture */}
      <h1 className='my-8 text-center text-7xl font-semibold'>About Us</h1>

      <div className='group relative'>
        {/* light black overlay */}
        <div className='absolute inset-0 rounded-2xl bg-black/10 transition-opacity duration-300' />
        <img src={uacAgm2025} alt='UAC AGM' className='h-107.5 w-7xl rounded-2xl object-cover' />

        <p className='absolute inset-0 flex items-center justify-center'>
          <span className='max-w-3xl px-6 text-center text-5xl drop-shadow-lg'>
            Learn about our club's past, present, and future.
          </span>
        </p>
      </div>

      {/* Who Are We */}
      <h2 className='mt-12 mb-6 text-center text-5xl font-semibold'>Who Are We?</h2>

      <div className='grid w-full grid-cols-1 gap-6 md:grid-cols-2'>
        {/* PLACEHOLDERS */}
        <div
          className='rounded-2xl bg-cover bg-center pb-[25%] max-md:pb-[50%] md:order-2'
          style={{ backgroundImage: `url(${placeholderImg})` }}
        />
        {/* PLACEHOLDERS */}
        <div className='flex flex-col gap-4 md:order-1'>
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
        </div>
      </div>

      {/* History */}
      <h2 className='mt-12 mb-6 text-center text-5xl font-semibold'>Our History</h2>

      <div className='grid w-full grid-cols-1 gap-6 md:grid-cols-2'>
        {/* PLACEHOLDERS */}
        <div
          className='rounded-2xl bg-cover bg-center pb-[25%] max-md:pb-[50%]'
          style={{ backgroundImage: `url(${placeholderImg})` }}
        />
        {/* PLACEHOLDERS */}
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
        </div>
      </div>

      {/*Current Team*/}
      <h2 className='mt-12 mb-6 self-start text-center text-5xl font-semibold'>
        Current Executive Team
      </h2>

      {/* PLACEHOLDERS */}
      <div>
        <Accordion
          key={accordionData[accordionData.length - 1].id}
          year={accordionData[accordionData.length - 1].year}
          profiles={accordionData[accordionData.length - 1].profiles}
          expanded={true}
        />
      </div>

      {/*Previous Executives*/}
      <h2 className='mt-12 mb-6 text-center text-5xl font-semibold'>Previous Executive Teams</h2>

      {/* PLACEHOLDERS */}
      <div className='space-y-6'>
        {accordionData
          .slice(0, accordionData.length - 1) // exclude the last year
          .reverse()
          .map((item) => (
            <Accordion key={item.id} year={item.year} profiles={item.profiles} />
          ))}
      </div>
    </section>
  )
}

export default AboutUs
