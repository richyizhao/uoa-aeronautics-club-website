import uacAgm2025 from '../assets/media/UAC-AGM-2025.png'

const AboutUs = () => {
  return (
    <section>
      <h1 className='text-center text-7xl font-semibold'>About Us</h1>
      <div className='group relative'>
        {/* Gray overlay */}
        <div className='absolute inset-0 rounded-2xl bg-gray-900/30 transition-opacity duration-300' />
        <img src={uacAgm2025} alt='UAC AGM' className='h-107.5 w-7xl rounded-2xl object-cover' />

        <p className='absolute inset-0 flex items-center justify-center'>
          <span className='max-w-3xl px-6 text-center text-5xl'>
            Learn about our club's past, present, and future.
          </span>
        </p>
      </div>
   <h2 className='self-start pt-16 text-5xl font-semibold'>Who Are We?</h2>

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
        </div>
      </div>

    <h2 className='self-start pt-16 text-5xl font-semibold'>History</h2>

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
        </div>
      </div>


      {/*Team*/}
      <h2 className='self-start pt-16 text-5xl font-semibold'>Current Executive Team.. ADD PICS?</h2>

      <div className='grid w-full grid-cols-1 gap-6 pt-8 md:grid-cols-2'>
        <div>
          <p>
            Andre Williams - Co-President
          </p>
          <p>
            William Li - Co-President
          </p>
          <p>
            Stanley Tian - Treasurer
          </p>
          <p>
            Dylan Parkin - Secretary
          </p>
          <p>
            John Villanueva - Events
          </p>
          <p>
            Johnson Du - Marketing
          </p>
          <p>
            Jack Hollewand - Outreach
          </p>
          <p>
            Finlay Hayes - HPA Restoration
          </p>
          <p>
            Roger Warren MRAeS - Advisor
          </p>
          <p>
            Sam Boyle - Advisor & Immediate Past President
          </p>
          <p>
            A/Prof Mike Kingan - Faculty Advisor
          </p>
        </div>
      </div>

      {/*Previous Executives*/}
      <h2 className='self-start pt-16 text-5xl font-semibold'>Previous Executive Teams... COLLAPSIBLE LISTS?</h2>

      <div className='grid w-full grid-cols-1 gap-6 pt-8 md:grid-cols-2'>
      <h3 className='self-start pt-16 text-5xl font-semibold'>2025</h3>
        <div>
          <p>
            Sam Boyle - President
          </p>
          <p>
            Andre Williams - Vice President
          </p>
          <p>
            Rayen Lee - Treasurer
          </p>
          <p>
            Niko Snell - Secretary
          </p>
          <p>
            Umi van Dalen - Outreach
          </p>
          <p>
            Finlay Hayes - HPA Restoration
          </p>
          <p>
            Hannah Tomlinson - Health & Safety
          </p>
          <p>
            Stanley Tian - Sponsorship
          </p>
          <p>
            Roger Warren MRAeS - Advisor
          </p>
          <p>
            Ryan Ruscoe - Advisor & Immediate Past President
          </p>
          <br>
          </br>
      </div>
      </div>


      <div className='grid w-full grid-cols-1 gap-6 pt-8 md:grid-cols-2'>
      <h3 className='self-start pt-16 text-5xl font-semibold'>2024</h3>
          <div>
          <p>
            Ryan Ruscoe - President & Co-founder
          </p>
          <p>
            Drishti Murara - Secretary & Co-founder
          </p>
          <p>
            Ben - Treasurer
          </p>
          <p>
            Stanley Tian - Events & Outreach
          </p>
          <p>
            Hannah Tomlinson - Health & Safety
          </p>
          <p>
            Roger Warren MRAeS - Advisor & Co-founder
          </p>
        </div>
      </div>

    </section>
  )
}

export default AboutUs
