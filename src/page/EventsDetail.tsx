import React from 'react'
import { Link, useParams } from 'react-router-dom'
import { Button } from '../components/ui/Button'
import { Card } from '../components/ui/Card'
import { Gallery } from '../components/ui/Gallery'
import { pageData } from '../data/data'
import { getGalleryImagesForSlug, getMediaBySlug } from '../utils/media'
import placeholderImage from '../assets/media/placeholder.png'

const eventImageModules = import.meta.glob('../assets/events/*/*.{png,jpg,jpeg}', {
  eager: true,
  import: 'default',
}) as Record<string, string>

const eventImagesBySlug = getMediaBySlug(eventImageModules, 'events')

const getEventGalleryImages = (slug: string, title: string) =>
  getGalleryImagesForSlug(eventImagesBySlug, slug, title)

export const EventsDetail: React.FC = () => {
  const { id } = useParams()
  const [, , pastSection] = pageData.eventsPage
  const pastEventDetails = pastSection?.pastEventDetails ?? []
  const event = pastEventDetails.find((item) => item.id === id)
  const galleryImages = event?.slug ? getEventGalleryImages(event.slug, event.title) : []
  const imagesToDisplay =
    galleryImages.length > 0
      ? galleryImages
      : [
          {
            src: placeholderImage,
            alt: `${event?.title ?? 'Event'} gallery placeholder`,
            width: 1200,
            height: 800,
          },
        ]

  if (!event) {
    return (
      <div className='animate-fade-in'>
        <section className='bg-white px-6 py-20'>
          <div className='container mx-auto max-w-5xl'>
            <Card>
              <h1 className='font-sora mb-3 text-center text-2xl font-semibold text-slate-900'>
                Event not found
              </h1>
              <p className='mb-3 text-center text-sm font-light text-slate-600'>
                We couldn't find that event. Please return to the events page.
              </p>
              <div className='flex justify-center'>
                <Button as={Link} to='/events' variant='primary' size='md'>
                  Back to Events
                </Button>
              </div>
            </Card>
          </div>
        </section>
      </div>
    )
  }

  return (
    <div className='animate-fade-in'>
      <section className='bg-white px-6 py-20'>
        <div className='container mx-auto max-w-5xl'>
          <Link
            to='/events'
            className='mb-6 inline-flex items-center gap-2 text-sm font-semibold text-sky-600'
          >
            <span aria-hidden='true'>&lt;-</span>
            Back to Events
          </Link>

          <div className='mb-10'>
            <h1 className='font-sora mb-4 text-center text-4xl font-bold text-slate-900 md:text-5xl'>
              {event.title}
            </h1>
            <p className='text-center text-lg font-light text-slate-600'>{event.description}</p>
          </div>

          <div className='mb-12'>
            <h2 className='font-sora mb-4 text-2xl font-semibold text-slate-900'>Event Gallery</h2>
            <Gallery images={imagesToDisplay} layout='grid' />
          </div>
        </div>
      </section>
    </div>
  )
}
