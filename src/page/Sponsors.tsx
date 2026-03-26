import React from 'react'
import { Link } from 'react-router-dom'
import { Card } from '../components/ui/Card'
import { pageData } from '../data/data'

export const Sponsors: React.FC = () => {
  const [sponsorSection] = pageData.sponsorsPage
  const sponsors = sponsorSection?.sponsors ?? []

  return (
    <div className='animate-fade-in'>
      <section className='bg-white px-6 py-20'>
        <div className='container mx-auto max-w-5xl'>
          <div className='mb-12 text-center'>
            <span className='mb-4 block text-sm font-semibold tracking-wider text-sky-500 uppercase md:text-base'>
              Sponsors
            </span>
            <h1 className='font-sora mb-6 text-4xl font-bold text-slate-900 md:text-5xl'>
              Partners Helping Us Fly Higher
            </h1>
            <p className='mx-auto max-w-3xl text-lg font-light text-slate-600'>
              We work with industry and community partners who are passionate about supporting the
              next generation of aeronautical engineers and aviation professionals.
            </p>
          </div>

          <div className='mb-16 grid grid-cols-2 gap-6 md:gap-8'>
            {sponsors.map((sponsor, index) => {
              const isLast = index === sponsors.length - 1
              const isOddCount = sponsors.length % 2 !== 0
              const spanClass = isLast && isOddCount ? 'col-span-2 w-full' : ''

              return (
                <a
                  key={sponsor.name}
                  href={sponsor.link}
                  target='_blank'
                  rel='noopener noreferrer'
                  className={`flex items-center justify-center rounded-2xl border border-slate-100 bg-white/80 px-5 py-6 shadow-xl shadow-sky-900/5 backdrop-blur-sm transition-transform duration-300 hover:-translate-y-1 hover:border-sky-100 ${spanClass}`}
                  aria-label={`${sponsor.name} website`}
                >
                  <img
                    src={sponsor.logo}
                    alt={`${sponsor.name} logo`}
                    className='h-12 w-auto object-contain sm:h-28'
                    loading='lazy'
                  />
                </a>
              )
            })}
          </div>

          <div>
            <div className='mb-6 flex flex-col justify-between gap-4 md:flex-row md:items-end'>
              <div>
                <span className='mb-3 block text-sm font-semibold tracking-wider text-sky-500 uppercase'>
                  Partnerships
                </span>
                <h2 className='font-sora text-2xl font-semibold text-slate-900'>
                  Sponsor Our Club!
                </h2>
              </div>
              <p className='text-sm text-slate-500'>
                Collaborate with us to support student aviation projects
              </p>
            </div>

            <Card>
              <p className='mb-3 font-light text-slate-600'>
                We offer tailored sponsorship packages including event visibility, student
                engagement opportunities, and direct access to a pipeline of motivated engineering
                students.
              </p>
              <p className='font-light text-slate-600'>
                <Link to='/contacts' className='text-sky-600 underline underline-offset-4'>
                  Contact us
                </Link>{' '}
                to discuss how we can align your organisation&apos;s goals with our projects and
                events.
              </p>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}
