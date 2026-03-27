import React from 'react'
import { Card } from '../components/ui/Card'
import { Accordion } from '../components/ui/Accordion'
import { pageData } from '../data/data'

export const About: React.FC = () => {
  const [aboutSection, teamSection] = pageData.aboutPage
  const aboutCards = aboutSection?.aboutCards ?? []
  const teamAccordion = teamSection?.teamAccordion ?? []
  const latestYear = teamAccordion.length > 0 ? Math.max(...teamAccordion.map((t) => t.year)) : null
  const teamSections = [...teamAccordion].reverse()

  return (
    <div className='animate-fade-in'>
      <section className='bg-white px-6 py-20'>
        <div className='container mx-auto max-w-5xl'>
          <div className='mb-12 text-center'>
            <span className='text-subheader mb-4 block text-sm font-semibold tracking-wider uppercase md:text-base'>
              About the club
            </span>
            <h1 className='font-sora mb-6 text-4xl font-bold text-slate-900 md:text-5xl'>
              University of Auckland Aeronautics Club
            </h1>
            <p className='mx-auto max-w-3xl text-lg font-light text-slate-600'>
              We are a student-led community of pilots, makers, and engineers exploring everything
              that flies &ndash; from RC aircraft to human powered aircraft.
            </p>
          </div>

          <div className='mb-16 grid grid-cols-1 gap-8 md:grid-cols-3'>
            {aboutCards.map((card) => (
              <Card key={card.title} className='h-full'>
                <h2 className='font-sora mb-3 text-xl font-semibold text-slate-800'>
                  {card.title}
                </h2>
                <p className='font-light text-slate-600'>{card.description}</p>
              </Card>
            ))}
          </div>

          <div className='mt-16'>
            <div className='mb-6 flex flex-col justify-between gap-4 md:flex-row md:items-end'>
              <div>
                <span className='text-subheader mb-3 block text-sm font-semibold tracking-wider uppercase'>
                  Greetings
                </span>
                <h2 className='font-sora text-2xl font-semibold text-slate-900'>Meet The Team!</h2>
              </div>
              <p className='text-sm text-slate-500'>
                Learn more about the members of our team and their contributions.
              </p>
            </div>

            <div className='space-y-4'>
              {teamSections.map((team) => (
                <Accordion
                  key={team.id}
                  title={team.year}
                  defaultOpen={latestYear !== null && team.year === latestYear}
                >
                  <div className='grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
                    {team.profiles.map((profile) => (
                      <div
                        key={`${team.year}-${profile.name}`}
                        className='rounded-xl border border-slate-200 bg-slate-50/60 p-4 text-center'
                      >
                        <div className='mx-auto mb-3 h-30 w-30 overflow-hidden rounded-full bg-slate-200'>
                          <img
                            src={profile.image}
                            alt={profile.name}
                            className='h-full w-full object-cover'
                          />
                        </div>
                        <h3 className='font-sora text-lg font-semibold text-slate-900'>
                          {profile.name}
                        </h3>
                        <p className='text-sm text-slate-600'>{profile.position}</p>
                      </div>
                    ))}
                  </div>
                </Accordion>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
