import { useState } from 'react'
import { Icon } from '@iconify/react'
import ProfileGrid, { type Profile } from './ProfileGrid'

type AccordionProps = {
  year: string
  profiles: Profile[]
  expanded?: boolean
}

const Accordion = ({ year, profiles, expanded = false }: AccordionProps) => {
  const [open, setOpen] = useState(expanded)

  return (
    <div className='w-full overflow-hidden rounded-lg border-4 border-gray-800'>
      {/* Year & Icon Header */}
      <button
        onClick={() => setOpen(!open)}
        className='flex w-full items-center justify-between bg-gray-800 px-6 py-4 text-left transition hover:cursor-pointer'
      >
        <span className='text-2xl font-semibold'>{year}</span>

        <span className={`text-5xl transition-transform duration-300 ${open ? 'rotate-180' : ''}`}>
          <Icon icon='iconamoon:arrow-down-2' />
        </span>
      </button>

      {/* Expandable Content */}
      {open && (
        <div>
          <ProfileGrid profiles={profiles} />
        </div>
      )}
    </div>
  )
}

export default Accordion
