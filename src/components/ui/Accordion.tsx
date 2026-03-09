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
    <div className='w-full overflow-hidden rounded-lg border border-gray-700'>
      {/* Year & Icon Header */}
      <button
        onClick={() => setOpen(!open)}
        className='flex w-full items-center justify-between bg-gray-900 px-6 py-4 text-left transition hover:cursor-pointer hover:bg-gray-800'
      >
        <span className='text-2xl font-semibold'>{year}</span>

        <span className={`text-5xl transition-transform duration-300 ${open ? 'rotate-180' : ''}`}>
          <Icon icon='iconamoon:arrow-down-2' />
        </span>
      </button>

      {/* Expandable Content */}
      {open && (
        <div className='border-t border-gray-700 p-6'>
          <ProfileGrid profiles={profiles} />
        </div>
      )}
    </div>
  )
}

export default Accordion
