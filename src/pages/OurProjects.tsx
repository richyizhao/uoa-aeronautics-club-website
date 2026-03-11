import placeholderImg from '../assets/media/placeholder.jpg'

const OurProjects = () => {
  return (
    <section>
      <h1 className='my-8 text-center text-7xl font-semibold'>Our Projects</h1>

      {/* Human-Powered Aircraft */}
      <h2 className='mb-6 text-5xl font-semibold'>Human-Powered Aircraft</h2>

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

      {/* Remote-Control Aircraft */}
      <h2 className='mt-12 mb-6 text-5xl font-semibold'>Remote-Control Aircraft</h2>

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

      {/* Community Outreach */}
      <h2 className='mt-12 mb-6 text-5xl font-semibold'>Community Outreach</h2>

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

      {/* AIAA Design Build Fly Competition */}
      <h2 className='mt-12 mb-6 text-5xl font-semibold'>AIAA Design Build Fly Competition</h2>

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
    </section>
  )
}

export default OurProjects
