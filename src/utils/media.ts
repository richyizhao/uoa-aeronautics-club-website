type ImageModules = Record<string, string>

export type SlugMediaItem = {
  src: string
  path: string
  fileName: string
  order: number | null
}

type GalleryImage = {
  src: string
  alt: string
  width: number
  height: number
}

const getBaseName = (fileName: string) => fileName.replace(/\.[^.]+$/, '')

const getNumericOrder = (fileName: string) => {
  const parsedNumber = Number.parseInt(getBaseName(fileName), 10)

  return Number.isNaN(parsedNumber) ? null : parsedNumber
}

const compareMediaItems = (left: SlugMediaItem, right: SlugMediaItem) => {
  if (left.order !== null && right.order !== null) {
    return left.order - right.order
  }

  if (left.order !== null) {
    return -1
  }

  if (right.order !== null) {
    return 1
  }

  return left.fileName.localeCompare(right.fileName)
}

export const getMediaBySlug = (
  imageModules: ImageModules,
  baseSegment: string,
): Record<string, SlugMediaItem[]> =>
  Object.entries(imageModules).reduce<Record<string, SlugMediaItem[]>>((accumulator, [path, image]) => {
    const match = path.match(new RegExp(`${baseSegment}/([^/]+)/([^/]+)$`, 'i'))

    if (!match) {
      return accumulator
    }

    const [, slug, fileName] = match

    if (!accumulator[slug]) {
      accumulator[slug] = []
    }

    accumulator[slug].push({
      src: image,
      path,
      fileName,
      order: getNumericOrder(fileName),
    })
    accumulator[slug].sort(compareMediaItems)

    return accumulator
  }, {})

export const getPreviewImageForSlug = (
  mediaBySlug: Record<string, SlugMediaItem[]>,
  slug: string,
  fallbackImage: string,
) => mediaBySlug[slug]?.[0]?.src ?? fallbackImage

export const getGalleryImagesForSlug = (
  mediaBySlug: Record<string, SlugMediaItem[]>,
  slug: string,
  title: string,
): GalleryImage[] =>
  (mediaBySlug[slug] ?? []).map(({ src }, index) => ({
    src,
    alt: `${title} gallery image ${index + 1}`,
    width: 1200,
    height: 800,
  }))
