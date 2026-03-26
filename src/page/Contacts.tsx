import React from 'react'
import { Card } from '../components/ui/Card'
import { Button } from '../components/ui/Button'
import { pageData } from '../data/data'

export const Contacts: React.FC = () => {
  const [contactSection, membershipSection] = pageData.contactsPage
  const contacts = contactSection?.contacts ?? []
  const membershipForm = membershipSection?.membershipForm ?? ''
  const discordContact = contacts.find((contact) => contact.label === 'Discord')
  const emailContact = contacts.find((contact) => contact.label === 'Email')

  return (
    <div className='animate-fade-in'>
      <section className='bg-white px-6 py-20'>
        <div className='container mx-auto max-w-5xl'>
          <div className='mb-12 text-center'>
            <span className='mb-4 block text-sm font-semibold tracking-wider text-sky-500 uppercase md:text-base'>
              Contact
            </span>
            <h1 className='font-sora mb-6 text-4xl font-bold text-slate-900 md:text-5xl'>
              Get in Touch
            </h1>
            <p className='mx-auto max-w-3xl text-lg font-light text-slate-600'>
              Whether you want to join, collaborate, or sponsor, we&apos;d love to hear from you.
            </p>
          </div>

          <div className='grid grid-cols-1 gap-8 md:grid-cols-2'>
            <Card>
              <h2 className='font-sora mb-3 text-xl font-semibold text-slate-900'>
                General Enquiries
              </h2>
              <p className='mb-3 font-light text-slate-600'>
                For membership questions, event information, or anything else related to the club.
              </p>
              <p className='font-light text-slate-900'>
                Discord:{' '}
                {discordContact ? (
                  <a
                    href={discordContact.path}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='text-sky-600 underline underline-offset-4'
                  >
                    {discordContact.path.replace(/^https?:\/\//, '')}
                  </a>
                ) : null}
              </p>
            </Card>

            <Card>
              <h2 className='font-sora mb-3 text-xl font-semibold text-slate-900'>
                Partnership Enquiries
              </h2>
              <p className='mb-3 font-light text-slate-600'>
                Reach out to discuss sponsorship opportunities or collaborations with the club.
              </p>
              <p className='font-light text-slate-900'>
                Email:{' '}
                {emailContact ? (
                  <a href={emailContact.path} className='text-sky-600 underline underline-offset-4'>
                    {emailContact.path.replace('mailto:', '')}
                  </a>
                ) : null}
              </p>
            </Card>
          </div>

          <div className='mt-16'>
            <div className='mb-6 flex flex-col justify-between gap-4 md:flex-row md:items-end'>
              <div>
                <span className='mb-3 block text-sm font-semibold tracking-wider text-sky-500 uppercase'>
                  Membership
                </span>
                <h2 className='font-sora text-2xl font-semibold text-slate-900'>Join Our Club!</h2>
              </div>
              <p className='text-sm text-slate-500'>
                Collaborate with us to create innovative projects
              </p>
            </div>

            <Card>
              <p className='mb-3 text-center font-light text-slate-600'>
                Fill out the membership form and we&apos;ll get back to you with details on joining
                upcoming activities and projects.
              </p>
              {membershipForm && (
                <div className='flex justify-center'>
                  <Button
                    as='a'
                    href={membershipForm}
                    target='_blank'
                    rel='noopener noreferrer'
                    variant='secondary'
                    size='md'
                  >
                    Open membership form
                  </Button>
                </div>
              )}
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}
