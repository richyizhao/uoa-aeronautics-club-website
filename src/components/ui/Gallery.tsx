import React from 'react'
import { cn } from '../../lib/cn'

export type GalleryImage = {
  src: string
  alt?: string
  width: number
  height: number
}

export type GalleryProps = {
  images: GalleryImage[]
  className?: string
  layout?: 'masonry' | 'grid'
}

const GRID_ROW_HEIGHT = 8
const GRID_GAP = 16

const getGridColumnCount = (width: number) => {
  if (width >= 1024) return 3
  if (width >= 640) return 2
  return 1
}

export const Gallery: React.FC<GalleryProps> = ({ images, className = '', layout = 'masonry' }) => {
  if (images.length === 0) {
    return null
  }

  const containerRef = React.useRef<HTMLDivElement | null>(null)
  const [gridColumnCount, setGridColumnCount] = React.useState(() =>
    typeof window === 'undefined' ? 1 : getGridColumnCount(window.innerWidth),
  )
  const [imageAspectRatios, setImageAspectRatios] = React.useState<Record<string, number>>({})
  const [imageRowSpans, setImageRowSpans] = React.useState<Record<string, number>>({})

  React.useEffect(() => {
    if (layout !== 'grid' || typeof ResizeObserver === 'undefined') {
      return
    }

    const containerElement = containerRef.current
    if (!containerElement) {
      return
    }

    const updateGridColumnCount = () => {
      setGridColumnCount(getGridColumnCount(window.innerWidth))
    }

    updateGridColumnCount()

    const observer = new ResizeObserver(updateGridColumnCount)
    observer.observe(containerElement)

    return () => observer.disconnect()
  }, [layout])

  React.useEffect(() => {
    if (layout !== 'grid' || !containerRef.current) {
      return
    }

    const containerWidth = containerRef.current.clientWidth
    const columnWidth = (containerWidth - GRID_GAP * (gridColumnCount - 1)) / gridColumnCount

    if (columnWidth <= 0) {
      return
    }

    setImageRowSpans((currentRowSpans) => {
      const nextRowSpans = { ...currentRowSpans }
      let hasChanged = false

      for (const image of images) {
        const aspectRatio = imageAspectRatios[image.src] ?? image.width / image.height
        const imageHeight = columnWidth / aspectRatio
        const nextSpan = Math.max(
          1,
          Math.ceil((imageHeight + GRID_GAP) / (GRID_ROW_HEIGHT + GRID_GAP)),
        )

        if (nextRowSpans[image.src] !== nextSpan) {
          nextRowSpans[image.src] = nextSpan
          hasChanged = true
        }
      }

      return hasChanged ? nextRowSpans : currentRowSpans
    })
  }, [gridColumnCount, imageAspectRatios, images, layout])

  const containerClassName =
    layout === 'grid'
      ? `grid grid-cols-1 auto-rows-[8px] gap-4 sm:grid-cols-2 lg:grid-cols-3 ${className}`
      : `columns-1 gap-x-4 sm:columns-2 lg:columns-3 ${className}`

  const itemClassName =
    layout === 'grid'
      ? 'overflow-hidden rounded-xl bg-slate-100'
      : 'mb-4 break-inside-avoid overflow-hidden rounded-xl bg-slate-100'

  const imageClassName =
    layout === 'grid' ? 'block h-full w-full object-cover' : 'h-full w-full object-cover'

  return (
    <div ref={containerRef} className={cn(containerClassName)}>
      {images.map((image, index) => (
        <div
          key={`${image.src}-${index}`}
          className={itemClassName}
          style={
            layout === 'grid'
              ? { gridRowEnd: `span ${imageRowSpans[image.src] ?? 1}` }
              : { aspectRatio: `${image.width} / ${image.height}` }
          }
        >
          <img
            src={image.src}
            alt={image.alt ?? 'Gallery image'}
            className={imageClassName}
            loading='lazy'
            onLoad={(event) => {
              const { naturalWidth, naturalHeight } = event.currentTarget

              if (naturalWidth <= 0 || naturalHeight <= 0) {
                return
              }

              const nextAspectRatio = naturalWidth / naturalHeight

              setImageAspectRatios((currentAspectRatios) =>
                currentAspectRatios[image.src] === nextAspectRatio
                  ? currentAspectRatios
                  : { ...currentAspectRatios, [image.src]: nextAspectRatio },
              )
            }}
          />
        </div>
      ))}
    </div>
  )
}
