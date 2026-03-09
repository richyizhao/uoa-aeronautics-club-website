import { useState } from 'react'
import { Icon } from '@iconify/react'
import { carouselSlides } from '../../assets/data'

const Carousel = () => {
  const [current, setCurrent] = useState(0)

  const next = () => {
    setCurrent((prev) => (prev + 1) % carouselSlides.length)
  }

  const prev = () => {
    setCurrent((prev) => (prev - 1 + carouselSlides.length) % carouselSlides.length)
  }

  return (
    <div className='group relative h-107.5 w-full overflow-hidden rounded-xl'>
      {/* Slides */}
      {carouselSlides.map((carouselSlides, index) => (
        <img
          key={carouselSlides.id}
          src={carouselSlides.image}
          alt={carouselSlides.alt}
          className={`absolute top-0 left-0 h-full w-full object-cover transition-opacity duration-500 ${
            current === index ? 'opacity-100' : 'opacity-0'
          }`}
        />
      ))}

      {/* Prev */}
      <button
        onClick={prev}
        className='absolute top-1/2 left-0 -translate-y-1/2 cursor-pointer rounded-lg bg-black/10 px-3 py-50 text-white hover:bg-black/30'
      >
        <Icon icon='iconamoon:arrow-left-2' className='text-7xl' />
      </button>

      {/* Next */}
      <button
        onClick={next}
        className='absolute top-1/2 right-0 -translate-y-1/2 cursor-pointer rounded-lg bg-black/10 px-3 py-50 text-white hover:bg-black/30'
      >
        <Icon icon='iconamoon:arrow-right-2' className='text-7xl' />
      </button>

      {/* Indicators */}
      <div className='absolute bottom-4 left-1/2 flex -translate-x-1/2 gap-2'>
        {carouselSlides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`h-2 w-8 cursor-pointer rounded-sm transition hover:bg-white ${
              current === index ? 'bg-white' : 'bg-white/50'
            }`}
          />
        ))}
      </div>
    </div>
  )
}

export default Carousel
