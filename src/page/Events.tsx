import React from 'react'
import { Link } from 'react-router-dom'
import { Card } from '../components/ui/Card'
import { EventList } from '../components/ui/EventList'
import { pageData } from '../data/data'
import { getMediaBySlug, getPreviewImageForSlug } from '../utils/media'
import placeholderImage from '../assets/media/placeholder.png'

const eventImageModules = import.meta.glob('../assets/events/*/*.{png,jpg,jpeg}', {
  eager: true,
  import: 'default',
}) as Record<string, string>

const eventImagesBySlug = getMediaBySlug(eventImageModules, 'events')

const getEventPreviewImage = (slug: string) =>
  getPreviewImageForSlug(eventImagesBySlug, slug, placeholderImage)

export const Events: React.FC = () => {
  const [calendarSection, upcomingSection, pastSection] = pageData.eventsPage
  const calendarSrc = calendarSection?.calendarSrc ?? ''
  const eventDates = upcomingSection?.eventDates ?? []
  const pastEventDetails = pastSection?.pastEventDetails ?? []
  const orderedEvents = [...eventDates].sort((left, right) => Number(left.id) - Number(right.id))
  const mostRecentPastEvents = [...pastEventDetails].reverse()

  return (
    <div className='animate-fade-in'>
      <section className='bg-white px-6 py-20'>
        <div className='container mx-auto max-w-5xl'>
          <div className='mb-12 text-center'>
            <span className='mb-4 block text-sm font-semibold tracking-wider text-sky-500 uppercase md:text-base'>
              Events
            </span>
            <h1 className='font-sora mb-6 text-4xl font-bold text-slate-900 md:text-5xl'>
              Workshops, Talks & Flight Days
            </h1>
            <p className='mx-auto max-w-3xl text-lg font-light text-slate-600'>
              From introductory sessions to advanced build workshops, our events calendar is where
              learning and flying come together.
            </p>
          </div>

          <Card>
            <div className='relative w-full pt-[70%] md:pt-[50%]'>
              <iframe
                title='UoA Aeronautics Club Calendar'
                src={calendarSrc}
                className='absolute inset-0 h-full w-full rounded-lg border-0'
                loading='lazy'
                referrerPolicy='no-referrer-when-downgrade'
              />
            </div>
          </Card>

          <div className='mt-16'>
            <div className='mb-6 flex flex-col justify-between gap-4 md:flex-row md:items-end'>
              <div>
                <span className='mb-3 block text-sm font-semibold tracking-wider text-sky-500 uppercase'>
                  Calendar
                </span>
                <h2 className='font-sora text-2xl font-semibold text-slate-900'>Upcoming Events</h2>
              </div>
              <p className='text-sm text-slate-500'>
                View the latest club schedule and upcoming events below.
              </p>
            </div>

            <EventList events={orderedEvents} getDetails={(event) => event.time} />
          </div>

          <div className='mt-16'>
            <div className='mb-6 flex flex-col justify-between gap-4 md:flex-row md:items-end'>
              <div>
                <span className='mb-3 block text-sm font-semibold tracking-wider text-sky-500 uppercase'>
                  Gallery
                </span>
                <h2 className='font-sora text-2xl font-semibold text-slate-900'>
                  Event Highlights
                </h2>
              </div>
              <p className='text-sm text-slate-500'>
                A snapshot of our workshops, builds, and flight days.
              </p>
            </div>

            <div className='grid grid-cols-1 gap-6 sm:grid-cols-2'>
              {mostRecentPastEvents.map((event) => (
                <Card key={event.id} interactive className='p-3'>
                  <Link to={`/events/${event.id}`} className='group block'>
                    <div className='aspect-4/3 overflow-hidden rounded-xl bg-slate-100'>
                      <img
                        src={getEventPreviewImage(event.slug)}
                        alt={`${event.title} gallery preview`}
                        className='h-full w-full object-cover transition-transform duration-300 group-hover:scale-105'
                        loading='lazy'
                      />
                    </div>
                    <h3 className='font-sora mt-3 font-semibold text-slate-900'>{event.title}</h3>
                    <p className='text-sm font-light text-slate-600'>View event details</p>
                  </Link>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
