import { Icon } from '@iconify/react'

const ContactSignUp = () => {
  return (
    <section>
      <h1 className='mt-8 mb-4 text-center text-7xl font-semibold'>Contact & Sign Up</h1>
      <p className='text-center'>We welcome sponsorship requests via the email below.</p>

      {/* Contact Information */}
      <h2 className='mt-8 mb-6 text-5xl font-semibold'>Contact Us</h2>

      <div className='grid w-full grid-cols-1 gap-6 lg:grid-cols-2'>
        <div className='ml-6 flex'>
          <a href='mailto:aeroclubuoa@gmail.com' target='_blank' rel='noopener noreferrer'>
            <Icon icon='simple-icons:gmail' className='text-8xl hover:text-[#F1C232]' />
          </a>
          <div className='ml-6'>
            <p>We use Email for official contact & inquiries.</p>
            <p>Email: aeroclubuoa@gmail.com</p>
            <a
              href='mailto:aeroclubuoa@gmail.com'
              className='mt-3 inline-block rounded-4xl bg-white px-4 font-semibold text-blue-600 no-underline duration-300 hover:bg-gray-300'
            >
              Email Link
            </a>
          </div>
        </div>
        <div className='ml-6 flex'>
          <a href='https://discord.com/invite/9hj3xk8ZXj' target='_blank' rel='noopener noreferrer'>
            <Icon icon='bi:discord' className='text-8xl hover:text-[#F1C232]' />
          </a>
          <div className='ml-6'>
            <p>We use Discord for our primary platform.</p>
            <p>Discord: http://discord.gg/9hj3xk8ZXj</p>
            <a
              href='https://discord.com/invite/9hj3xk8ZXj'
              className='mt-3 inline-block rounded-4xl bg-white px-4 font-semibold text-blue-600 no-underline duration-300 hover:bg-gray-300'
            >
              Discord Link
            </a>
          </div>
        </div>
      </div>

      {/* Sign Up Information */}
      <h2 className='mt-12 mb-3 text-5xl font-semibold'>
        Sign Ups ( {new Date().getFullYear() + 1} )
      </h2>
      <p className='mb-6'>
        Costs $5 a year, see emails for insturctions on payment. You may need safety induction...
      </p>

      <div className='grid w-full grid-cols-1 gap-6 lg:grid-cols-2'>
        <div className='ml-6 flex'>
          <a href='mailto:aeroclubuoa@gmail.com' target='_blank' rel='noopener noreferrer'>
            <Icon icon='simple-icons:gmail' className='text-8xl hover:text-[#F1C232]' />
          </a>
          <div className='ml-6'>
            <p>Human Powered Aircraft ( HPA )</p>
            <p>Email: aeroclubuoa@gmail.com</p>
            <a
              href='mailto:aeroclubuoa@gmail.com'
              className='mt-3 inline-block rounded-4xl bg-white px-4 font-semibold text-blue-600 no-underline duration-300 hover:bg-gray-300'
            >
              Email Link
            </a>
          </div>
        </div>
        <div className='ml-6 flex'>
          <a href='https://discord.com/invite/9hj3xk8ZXj' target='_blank' rel='noopener noreferrer'>
            <Icon icon='bi:discord' className='text-8xl hover:text-[#F1C232]' />
          </a>
          <div className='ml-6'>
            <p>Human Powered Aircraft Restoration</p>
            <p>Discord: http://discord.gg/9hj3xk8ZXj</p>
            <a
              href='https://discord.com/invite/9hj3xk8ZXj'
              className='mt-3 inline-block rounded-4xl bg-white px-4 font-semibold text-blue-600 no-underline duration-300 hover:bg-gray-300'
            >
              Discord Link
            </a>
          </div>
        </div>
        <div className='ml-6 flex'>
          <a href='https://discord.com/invite/9hj3xk8ZXj' target='_blank' rel='noopener noreferrer'>
            <Icon icon='bi:discord' className='text-8xl hover:text-[#F1C232]' />
          </a>
          <div className='ml-6'>
            <p>Radio Control ( RC )</p>
            <p>Discord: http://discord.gg/9hj3xk8ZXj</p>
            <a
              href='https://discord.com/invite/9hj3xk8ZXj'
              className='mt-3 inline-block rounded-4xl bg-white px-4 font-semibold text-blue-600 no-underline duration-300 hover:bg-gray-300'
            >
              Discord Link
            </a>
          </div>
        </div>
        <div className='ml-6 flex'>
          <a href='https://discord.com/invite/9hj3xk8ZXj' target='_blank' rel='noopener noreferrer'>
            <Icon icon='bi:discord' className='text-8xl hover:text-[#F1C232]' />
          </a>
          <div className='ml-6'>
            <p>AIAA Design Build Fly ( AIAA DBF )</p>
            <p>Discord: http://discord.gg/9hj3xk8ZXj</p>
            <a
              href='https://discord.com/invite/9hj3xk8ZXj'
              className='mt-3 inline-block rounded-4xl bg-white px-4 font-semibold text-blue-600 no-underline duration-300 hover:bg-gray-300'
            >
              Discord Link
            </a>
          </div>
        </div>
      </div>

      {/* Media */}
      <h2 className='mt-12 mb-6 text-5xl font-semibold'>Media</h2>
      <p>Newsletter, pics from outreach and other events, CANZ articles, socials.</p>
    </section>
  )
}

export default ContactSignUp
