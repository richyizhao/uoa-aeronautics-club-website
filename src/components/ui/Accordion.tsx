import React from 'react'
import { cn } from '../../lib/cn'

export type AccordionProps = {
  title: React.ReactNode
  children: React.ReactNode
  open?: boolean
  defaultOpen?: boolean
  onOpenChange?: (open: boolean) => void
  className?: string
  headerClassName?: string
  contentClassName?: string
}

export const Accordion: React.FC<AccordionProps> = ({
  title,
  children,
  open,
  defaultOpen = false,
  onOpenChange,
  className,
  headerClassName,
  contentClassName,
}) => {
  const reactId = React.useId()
  const buttonId = `accordion-trigger-${reactId}`
  const panelId = `accordion-panel-${reactId}`
  const isControlled = open !== undefined
  const [internalOpen, setInternalOpen] = React.useState(defaultOpen)
  const isOpen = isControlled ? open : internalOpen
  const contentInnerRef = React.useRef<HTMLDivElement>(null)
  const [contentHeight, setContentHeight] = React.useState(0)

  const setOpen = React.useCallback(
    (nextOpen: boolean) => {
      if (!isControlled) {
        setInternalOpen(nextOpen)
      }
      onOpenChange?.(nextOpen)
    },
    [isControlled, onOpenChange],
  )

  React.useEffect(() => {
    const element = contentInnerRef.current
    if (!element) {
      return
    }

    const updateHeight = () => {
      setContentHeight(element.scrollHeight)
    }

    updateHeight()

    if (typeof ResizeObserver === 'undefined') {
      window.addEventListener('resize', updateHeight)
      return () => window.removeEventListener('resize', updateHeight)
    }

    const observer = new ResizeObserver(updateHeight)
    observer.observe(element)

    return () => observer.disconnect()
  }, [children, isOpen])

  return (
    <div
      className={cn(
        'rounded-2xl border border-slate-200 bg-white shadow-sm transition-shadow duration-200 hover:shadow-md',
        className,
      )}
    >
      <button
        id={buttonId}
        type='button'
        className={cn(
          'flex w-full cursor-pointer items-center justify-between gap-4 px-5 py-4 text-left focus-visible:ring-2 focus-visible:ring-sky-400 focus-visible:outline-none focus-visible:ring-inset',
          headerClassName,
        )}
        onClick={() => setOpen(!isOpen)}
        aria-expanded={isOpen}
        aria-controls={panelId}
      >
        <span className='font-sora text-lg font-semibold text-slate-900'>{title}</span>
        <span
          className={cn(
            'flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 text-slate-600 transition-transform duration-200',
            isOpen ? 'rotate-180' : 'rotate-0',
          )}
          aria-hidden='true'
        >
          <svg
            width='16'
            height='16'
            viewBox='0 0 24 24'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              d='M6 9L12 15L18 9'
              stroke='currentColor'
              strokeWidth='2'
              strokeLinecap='round'
              strokeLinejoin='round'
            />
          </svg>
        </span>
      </button>
      <div
        id={panelId}
        role='region'
        aria-labelledby={buttonId}
        className={cn(
          'overflow-hidden px-5 pt-0 text-slate-600 transition-[max-height,opacity] duration-300',
          isOpen ? 'opacity-100' : 'max-h-0 opacity-0',
          contentClassName,
        )}
        style={{ maxHeight: isOpen ? `${contentHeight}px` : '0px' }}
      >
        <div ref={contentInnerRef} className='pb-5'>
          {children}
        </div>
      </div>
    </div>
  )
}
