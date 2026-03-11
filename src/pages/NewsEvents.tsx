const NewsEvents = () => {
  return (
    <section>
      <h1 className='my-8 text-center text-7xl font-semibold'>News & Events</h1>

      {/* News */}
      <h2 className='mb-6 text-5xl font-semibold'>News</h2>

      <div className='grid w-full grid-cols-1 gap-6 md:grid-cols-2'>
        <p>BLOG SOMEHOW?</p>
      </div>

      {/* Events */}
      <h2 className='mt-12 mb-6 text-5xl font-semibold'>Upcoming Events</h2>

      <div className='grid w-full grid-cols-1 gap-6 md:grid-cols-2'>
        <div>
          <p>We run various events like...</p>

          <p>We collaborate with RAeS...</p>

          <p>INSERT EMBEDDED GOOGLE CALENDAR</p>
        </div>
      </div>
    </section>
  )
}

export default NewsEvents
