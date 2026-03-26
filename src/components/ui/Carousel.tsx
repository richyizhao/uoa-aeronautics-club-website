import React from 'react'
import { Icon } from '@iconify/react'
import { cn } from '../../lib/cn'

export type CarouselSlide = {
  id: number | string
  image: string
  alt: string
}

export type CarouselProps = {
  slides: CarouselSlide[]
  className?: string
  label?: string
  initialSlide?: number
}

const clampIndex = (index: number, length: number) => {
  if (length === 0) {
    return 0
  }

  return ((index % length) + length) % length
}

export const Carousel = ({
  slides,
  className,
  label = 'Image carousel',
  initialSlide = 0,
}: CarouselProps) => {
  const [current, setCurrent] = React.useState(() => clampIndex(initialSlide, slides.length))

  const next = React.useCallback(() => {
    setCurrent((previous) => clampIndex(previous + 1, slides.length))
  }, [slides.length])

  const prev = React.useCallback(() => {
    setCurrent((previous) => clampIndex(previous - 1, slides.length))
  }, [slides.length])

  React.useEffect(() => {
    setCurrent(clampIndex(initialSlide, slides.length))
  }, [initialSlide, slides])

  if (slides.length === 0) {
    return null
  }

  const currentSlide = slides[current]

  return (
    <section
      className={cn('group relative w-full overflow-hidden rounded-xl', className)}
      aria-roledescription='carousel'
      aria-label={label}
    >
      <div className='relative h-120 w-full bg-slate-100 md:h-144'>
        {slides.map((slide, index) => (
          <img
            key={slide.id}
            src={slide.image}
            alt={slide.alt}
            aria-hidden={current !== index}
            className={cn(
              'absolute inset-0 h-full w-full object-cover transition-opacity duration-500',
              current === index ? 'opacity-100' : 'pointer-events-none opacity-0',
            )}
            loading={index === current ? 'eager' : 'lazy'}
          />
        ))}
      </div>

      {slides.length > 1 && (
        <>
          <div className='pointer-events-none absolute inset-y-0 right-0 left-0 flex items-center justify-between px-3'>
            <button
              type='button'
              onClick={prev}
              className='pointer-events-auto inline-flex h-12 w-12 cursor-pointer items-center justify-center rounded-full bg-black/20 text-white transition-colors hover:bg-black/35 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-black/20 focus-visible:outline-none'
              aria-label='Previous slide'
            >
              <Icon icon='iconamoon:arrow-left-2' className='text-3xl' />
            </button>

            <button
              type='button'
              onClick={next}
              className='pointer-events-auto inline-flex h-12 w-12 cursor-pointer items-center justify-center rounded-full bg-black/20 text-white transition-colors hover:bg-black/35 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-black/20 focus-visible:outline-none'
              aria-label='Next slide'
            >
              <Icon icon='iconamoon:arrow-right-2' className='text-3xl' />
            </button>
          </div>

          <div className='absolute right-4 bottom-4 left-4 flex items-center justify-center gap-4'>
            <p className='rounded-full bg-black/35 px-3 py-1 text-sm text-white'>
              {current + 1} / {slides.length}
            </p>
          </div>
        </>
      )}

      <p className='sr-only' aria-live='polite'>
        Slide {current + 1} of {slides.length}: {currentSlide.alt}
      </p>
    </section>
  )
}
