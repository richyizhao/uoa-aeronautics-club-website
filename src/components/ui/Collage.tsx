import React from 'react'
import { cn } from '../../lib/cn'

export type CollageImage = {
  src: string
  alt?: string
}

type CollageProps = {
  images: CollageImage[]
  className?: string
  label?: string
  maxTiles?: number
}

const defaultDesktopTileLayout = [
  'lg:col-span-2 lg:row-span-2',
  'lg:col-span-2 lg:row-span-1',
  'lg:col-span-2 lg:row-span-1',
  'lg:col-span-1 lg:row-span-1',
  'lg:col-span-2 lg:row-span-2',
  'lg:col-span-1 lg:row-span-2',
  'lg:col-span-1 lg:row-span-1',
  'lg:col-span-2 lg:row-span-1',
] as const

export const Collage: React.FC<CollageProps> = ({
  images,
  className,
  label = 'Image collage',
  maxTiles = 8,
}) => {
  if (images.length === 0) {
    return null
  }

  const visibleImages = React.useMemo(
    () =>
      Array.from({ length: maxTiles }, (_, index) => {
        const sourceImage = images[index % images.length]

        return {
          src: sourceImage?.src ?? '',
          alt: sourceImage?.alt ?? 'Collage image',
        }
      }),
    [images, maxTiles],
  )

  return (
    <section className={cn('w-full', className)} aria-label={label}>
      <div className='grid grid-cols-2 gap-4 sm:grid-cols-3 lg:hidden'>
        {visibleImages.map((image, index) => (
          <figure
            key={`${image.src}-${index}`}
            className='overflow-hidden rounded-xl bg-slate-100 shadow-lg shadow-sky-900/5'
          >
            <div className='aspect-16/10'>
              <img
                src={image.src}
                alt={image.alt}
                className='h-full w-full object-cover'
                loading='lazy'
              />
            </div>
          </figure>
        ))}
      </div>

      <div className='hidden lg:block'>
        <div className='aspect-16/6 overflow-hidden rounded-xl'>
          <div className='grid h-full grid-cols-6 grid-rows-3 gap-4'>
            {visibleImages.map((image, index) => (
              <figure
                key={`${image.src}-${index}`}
                className={cn(
                  'overflow-hidden rounded-2xl bg-slate-100',
                  defaultDesktopTileLayout[index] ?? 'lg:col-span-1 lg:row-span-1',
                )}
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className='h-full w-full object-cover'
                  loading='lazy'
                />
              </figure>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
