const NewsEvents = () => {
  return (
    <section>
      <h1 className='text-center text-7xl font-semibold'>News & Events</h1>
      
      <h2 className='self-start pt-16 text-5xl font-semibold'>News</h2>

      <div className='grid w-full grid-cols-1 gap-6 pt-8 md:grid-cols-2'>
        <div>
          <p>
            BLOG SOMEHOW?
          </p>
        
          
        </div>
      </div>
      
      <h2 className='self-start pt-16 text-5xl font-semibold'>Upcoming Events</h2>

      <div className='grid w-full grid-cols-1 gap-6 pt-8 md:grid-cols-2'>
        <div>

          <p>
            We run various events like... 
          </p>

          <p>
            We collaborate with RAeS...
          </p>

          <p>
            INSERT EMBEDDED GOOGLE CALENDAR 
          </p>
         
        </div>
      </div>
    </section>
  )
}

export default NewsEvents
