import { Button } from './Button'
import { Card } from './Card'
import { cn } from '../../lib/cn'

type EventListItemBase = {
  id: string
  title: string
  date: string
  link: string
}

export type EventListItem = EventListItemBase

export type EventListProps<T extends EventListItemBase> = {
  events: T[]
  getDetails: (event: T) => string
  ctaLabel?: string
  emptyMessage?: string
  className?: string
}

const monthFormatter = new Intl.DateTimeFormat('default', { month: 'short' })

const formatEventDate = (value: string) => {
  const date = new Date(value)

  return {
    day: date.getDate(),
    month: monthFormatter.format(date),
  }
}

export const EventList = <T extends EventListItemBase>({
  events,
  getDetails,
  ctaLabel = 'Register interest',
  emptyMessage = 'No upcoming events right now.',
  className,
}: EventListProps<T>) => {
  if (events.length === 0) {
    return (
      <Card variant='outline' className={cn('text-center', className)}>
        <p className='font-light text-slate-600'>{emptyMessage}</p>
      </Card>
    )
  }

  return (
    <div className={cn('space-y-6', className)}>
      {events.map((event) => {
        const { day, month } = formatEventDate(event.date)

        return (
          <Card key={event.id} className='flex flex-col gap-6 md:flex-row md:items-center'>
            <div className='w-full border-r-0 border-slate-100 pr-0 text-center md:w-32 md:border-r md:pr-6'>
              <p className='text-2xl font-bold text-sky-500'>{day}</p>
              <p className='text-sm tracking-widest text-slate-500 uppercase'>{month}</p>
            </div>
            <div className='grow'>
              <h2 className='font-sora mb-1 text-xl font-semibold text-slate-900 max-md:text-center'>
                {event.title}
              </h2>
              <p className='text-sm font-light text-slate-600 max-md:text-center'>
                {getDetails(event)}
              </p>
            </div>
            <div>
              <Button
                as='a'
                href={event.link}
                target='_blank'
                rel='noopener noreferrer'
                variant='outline'
                size='sm'
                className='w-full md:w-auto'
              >
                {ctaLabel}
              </Button>
            </div>
          </Card>
        )
      })}
    </div>
  )
}
