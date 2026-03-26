import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from '../components/ui/Button'
import { Collage } from '../components/ui/Collage'
import { Card } from '../components/ui/Card'
import { EventList } from '../components/ui/EventList'
import { Modal } from '../components/ui/Modal'
import { pageData } from '../data/data'
import { getMediaBySlug } from '../utils/media'

const homeImageModules = import.meta.glob('../assets/media/home/*/*.{png,jpg,jpeg,JPG,webp}', {
  eager: true,
  import: 'default',
}) as Record<string, string>

const homeImagesBySlug = Object.fromEntries(
  Object.entries(getMediaBySlug(homeImageModules, 'home')).map(([slug, images]) => [
    slug,
    images.map(({ src, fileName }) => ({
      src,
      alt: `${slug.replace(/-/g, ' ')} ${fileName}`,
    })),
  ]),
)

export const Home: React.FC = () => {
  const { activityCards, merchCards, projectCollageSlug } = pageData.homePage
  const [, upcomingSection] = pageData.eventsPage
  const upcomingEvents = upcomingSection?.eventDates ?? pageData.homePage.eventDates
  const orderedEvents = [...upcomingEvents].sort(
    (left, right) => Number(left.id) - Number(right.id),
  )
  const projectCollageImages = homeImagesBySlug[projectCollageSlug] ?? []

  const [selectedMerchReference, setSelectedMerchReference] = React.useState<string | null>(null)

  const selectedMerch =
    selectedMerchReference === null
      ? null
      : (merchCards.find((item) => item.referenceSuffix === selectedMerchReference) ?? null)

  return (
    <div className='animate-fade-in'>
      <div className='relative flex flex-col items-center justify-center overflow-hidden px-6 py-24 text-center md:py-32 lg:py-40'>
        <div className='pointer-events-none absolute inset-0 z-0 mask-[linear-gradient(to_bottom,white,transparent)] opacity-10'>
          <svg width='100%' height='100%' xmlns='http://www.w3.org/2000/svg'>
            <defs>
              <pattern id='grid' width='40' height='40' patternUnits='userSpaceOnUse'>
                <path d='M 40 0 L 0 0 0 40' fill='none' stroke='#99a1af' strokeWidth='2' />
              </pattern>
            </defs>
            <rect width='100%' height='100%' fill='url(#grid)' />
          </svg>
        </div>

        <div className='relative z-10 mx-auto flex max-w-4xl flex-col items-center'>
          <span className='text-brand-yellow mb-4 block text-sm font-semibold tracking-wider uppercase md:text-base'>
            Welcome to the skies
          </span>
          <h1 className='font-sora mb-6 text-5xl font-extrabold tracking-tight text-white drop-shadow-sm md:text-7xl'>
            Reach New{' '}
            <span className='bg-linear-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent'>
              Heights
            </span>
          </h1>
          <p className='mb-10 max-w-2xl text-lg leading-relaxed font-light text-white md:text-xl'>
            Join a community of aviation enthusiasts, drone builders, and future aerospace
            engineers. Let's explore the science of flight together.
          </p>
          <div className='flex flex-col gap-4 sm:flex-row'>
            <Button as={Link} to='/contacts' variant='primary' size='lg'>
              Become a Member
            </Button>
            <Button as={Link} to='/projects' variant='plain' size='lg'>
              Explore Activities
            </Button>
          </div>
        </div>
      </div>

      <div className='bg-white px-6 py-20'>
        <div className='container mx-auto max-w-7xl'>
          <div className='mb-12 text-center'>
            <span className='mb-4 block text-sm font-semibold tracking-wider text-sky-500 uppercase md:text-base'>
              About Us
            </span>
            <h2 className='font-sora mb-6 text-4xl font-bold text-slate-900 md:text-5xl'>
              What We Do
            </h2>
            <p className='mx-auto text-lg font-light text-slate-600'>
              Explore our hands-on projects and theoretical explorations in aeronautics.
            </p>
          </div>

          <div className='grid grid-cols-1 gap-8 md:grid-cols-3'>
            {activityCards.map((activity) => (
              <Link key={activity.title} to='/about'>
                <Card interactive className='flex flex-col items-center text-center'>
                  <div className='mb-6 h-60 w-full overflow-hidden rounded-xl bg-slate-100'>
                    <img
                      src={activity.src}
                      alt={activity.alt}
                      className='h-full w-full object-cover'
                    />
                  </div>
                  <h3 className='font-sora mb-3 text-xl font-semibold text-slate-800'>
                    {activity.title}
                  </h3>
                  <p className='font-light text-slate-500'>{activity.description}</p>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </div>

      <div className='bg-slate-50 px-6 py-20'>
        <div className='container mx-auto max-w-7xl'>
          <div className='mx-auto mb-12 flex max-w-5xl flex-col justify-between gap-4 md:flex-row md:items-end'>
            <div>
              <h2 className='font-sora mb-4 text-3xl font-bold text-slate-900 md:text-4xl'>
                From concept to flight testing.
              </h2>
              <p className='font-light text-slate-600'>
                Design, build, and test real systems through hands-on projects and outreach.
              </p>
            </div>
            <Link to='/projects'>
              <Button variant='secondary' size='md'>
                View Our Projects
              </Button>
            </Link>
          </div>

          <Link to='/projects'>
            <Card interactive className='mx-auto max-w-5xl'>
              <Collage images={projectCollageImages} />
            </Card>
          </Link>
        </div>
      </div>

      <div className='bg-white px-6 py-20'>
        <div className='container mx-auto max-w-7xl'>
          <div className='mb-12 text-center'>
            <span className='mb-4 block text-sm font-semibold tracking-wider text-sky-500 uppercase md:text-base'>
              Club Merch
            </span>
            <h2 className='font-sora mb-6 text-4xl font-bold text-slate-900 md:text-5xl'>
              Wear the club beyond the workshop.
            </h2>
            <p className='mx-auto text-lg font-light text-slate-600'>
              A small run of essentials for members and supporters.
            </p>
          </div>

          <div className='grid grid-cols-1 gap-8 md:grid-cols-3'>
            {merchCards.map((item) => (
              <Card
                key={item.name}
                className='overflow-hidden border-sky-100/70 bg-slate-50 p-0 text-slate-900 shadow-2xl shadow-black/20'
              >
                <div className='aspect-square overflow-hidden rounded-2xl bg-slate-200'>
                  <img src={item.image} alt={item.name} className='h-full w-full object-cover' />
                </div>
                <div className='space-y-3 p-6'>
                  <div className='flex items-start justify-between gap-4'>
                    <h3 className='font-sora text-2xl font-semibold'>{item.name}</h3>
                    <span className='rounded-full bg-sky-500 px-3 py-1 text-sm text-white'>
                      {item.price}
                    </span>
                  </div>
                  <p className='font-light text-slate-600'>{item.description}</p>
                  <Button
                    variant='outline'
                    size='sm'
                    className='w-full border-sky-500 text-sky-700 hover:bg-sky-50'
                    onClick={() => setSelectedMerchReference(item.referenceSuffix)}
                  >
                    Buy Now
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>

      <div className='bg-slate-50 px-6 py-20'>
        <div className='container mx-auto max-w-5xl'>
          <div className='mb-12 flex flex-col justify-between gap-4 md:flex-row md:items-end'>
            <div>
              <h2 className='font-sora mb-4 text-3xl font-bold text-slate-900 md:text-4xl'>
                Upcoming Events
              </h2>
              <p className='font-light text-slate-600'>
                Join us for workshops, seminars, and flight sessions.
              </p>
            </div>
            <Link to='/events'>
              <Button variant='secondary' size='md'>
                View Full Calendar
              </Button>
            </Link>
          </div>

          <EventList
            events={orderedEvents}
            getDetails={(event) => ('time' in event ? event.time : event.description)}
          />
        </div>
      </div>

      <Modal
        isOpen={selectedMerch !== null}
        onClose={() => setSelectedMerchReference(null)}
        title={selectedMerch ? `${selectedMerch.name} Purchase Details` : 'Purchase Details'}
        className='max-w-xl'
      >
        {selectedMerch && (
          <div className='space-y-4 text-slate-700'>
            <p className='leading-7 text-slate-600'>
              Please use the following payment details to bank transfer and complete your purchase
              for this merch item.
            </p>
            <p className='leading-7'>
              <span className='font-semibold text-slate-900'>Account name:</span> UOA AERONAUTIC
              CLUB
              <br />
              <span className='font-semibold text-slate-900'>Account number:</span>{' '}
              06-0323-0872874-00
              <br />
              <span className='font-semibold text-slate-900'>Reference:</span> [Your UPI]_
              {selectedMerch.referenceSuffix}
            </p>
          </div>
        )}
      </Modal>
    </div>
  )
}
