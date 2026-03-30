import React from 'react'
import { Button } from '../ui/Button'
import { ScrollToTopLink } from '../ui/ScrollToTopLink'
import { layoutData } from '../../data/data'

export const Footer: React.FC = () => {
  const { header, footer } = layoutData
  const { brand } = header

  return (
    <footer className='bg-brand-blue px-6 py-12 text-slate-100'>
      <div className='container mx-auto grid max-w-7xl grid-cols-1 gap-12 px-6 text-center md:grid-cols-[minmax(20rem,1.2fr)_minmax(0,0.8fr)_minmax(0,0.8fr)] md:text-left'>
        <div className='min-w-0 space-y-6'>
          <ScrollToTopLink
            to='/'
            className='mb-4 flex items-center justify-center gap-6 hover:opacity-80 max-xl:flex-col md:justify-start'
          >
            <div className='h-full w-30'>
              <img src={brand.logo} alt='UAC Logo' />
            </div>
            <span className='font-sora text-xl font-bold text-white'>{brand.label}</span>
          </ScrollToTopLink>
          <p className='mx-auto text-sm font-light opacity-80 max-xl:hidden md:mx-0'>
            {footer.description}
          </p>
          <div className='flex flex-col items-center gap-4 md:items-start'>
            <span className='font-sora text-brand-yellow font-semibold max-xl:mx-auto max-xl:text-center'>
              {footer.cta.eyebrow}
            </span>
            {footer.cta.href && (
              <Button
                as='a'
                href={footer.cta.href}
                target={footer.cta.external ? '_blank' : undefined}
                rel={footer.cta.external ? 'noopener noreferrer' : undefined}
                variant='primary'
                size='sm'
                className='max-xl:mx-auto'
              >
                {footer.cta.label}
              </Button>
            )}
          </div>
        </div>

        {footer.sections.map((section) => (
          <div key={section.title} className='min-w-0 md:justify-self-end md:text-left'>
            <h4 className='font-sora text-brand-yellow mb-4 font-semibold'>{section.title}</h4>
            <ul className='space-y-2 text-sm font-light opacity-80'>
              {section.links.map((link) => (
                <li key={link.label}>
                  {'external' in link && link.external ? (
                    <a
                      href={link.href}
                      target='_blank'
                      rel='noopener noreferrer'
                      className='transition-colors hover:text-yellow-500'
                    >
                      {link.label}
                    </a>
                  ) : (
                    <ScrollToTopLink
                      to={link.href}
                      className='transition-colors hover:text-yellow-500'
                    >
                      {link.label}
                    </ScrollToTopLink>
                  )}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className='mt-12 text-center text-xs font-light opacity-60'>
        <div className='max-w-8xl mx-auto mb-8 h-px w-full bg-linear-to-r from-transparent via-[#99a1af]/70 to-transparent' />
        &copy;{new Date().getFullYear()} {brand.label}. All rights reserved.
      </div>
    </footer>
  )
}
