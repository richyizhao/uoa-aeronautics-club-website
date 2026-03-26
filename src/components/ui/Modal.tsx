import React from 'react'
import { createPortal } from 'react-dom'
import { cn } from '../../lib/cn'

export type ModalProps = {
  isOpen: boolean
  onClose: () => void
  title?: React.ReactNode
  children: React.ReactNode
  className?: string
  showCloseButton?: boolean
  closeOnOverlayClick?: boolean
  closeOnEscape?: boolean
}

const FOCUSABLE_SELECTORS =
  'a[href], button:not([disabled]), textarea, input, select, [tabindex]:not([tabindex="-1"])'

export const Modal: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  title,
  children,
  className,
  showCloseButton = true,
  closeOnOverlayClick = true,
  closeOnEscape = true,
}) => {
  const titleId = React.useId()
  const panelRef = React.useRef<HTMLDivElement | null>(null)
  const previouslyFocusedElRef = React.useRef<HTMLElement | null>(null)

  React.useEffect(() => {
    if (!isOpen) {
      return
    }

    previouslyFocusedElRef.current = document.activeElement as HTMLElement | null

    const previousBodyOverflow = document.body.style.overflow
    const previousHtmlOverflow = document.documentElement.style.overflow
    document.body.style.overflow = 'hidden'
    document.documentElement.style.overflow = 'hidden'

    const focusFirstElement = window.setTimeout(() => {
      const focusableElements = panelRef.current?.querySelectorAll<HTMLElement>(FOCUSABLE_SELECTORS)
      focusableElements?.[0]?.focus()
      if (!focusableElements || focusableElements.length === 0) {
        panelRef.current?.focus()
      }
    }, 0)

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && closeOnEscape) {
        onClose()
        return
      }

      if (event.key !== 'Tab') {
        return
      }

      const focusableElements = panelRef.current?.querySelectorAll<HTMLElement>(FOCUSABLE_SELECTORS)
      if (!focusableElements || focusableElements.length === 0) {
        event.preventDefault()
        panelRef.current?.focus()
        return
      }

      const firstElement = focusableElements[0]
      const lastElement = focusableElements[focusableElements.length - 1]
      const activeElement = document.activeElement

      if (event.shiftKey && activeElement === firstElement) {
        event.preventDefault()
        lastElement.focus()
      } else if (!event.shiftKey && activeElement === lastElement) {
        event.preventDefault()
        firstElement.focus()
      }
    }

    window.addEventListener('keydown', handleKeyDown)

    return () => {
      window.clearTimeout(focusFirstElement)
      window.removeEventListener('keydown', handleKeyDown)
      document.body.style.overflow = previousBodyOverflow
      document.documentElement.style.overflow = previousHtmlOverflow
      previouslyFocusedElRef.current?.focus?.()
    }
  }, [closeOnEscape, isOpen, onClose])

  if (!isOpen) {
    return null
  }

  if (typeof document === 'undefined') {
    return null
  }

  return createPortal(
    <div
      className='fixed inset-0 z-100 flex items-center justify-center px-6 py-10'
      role='dialog'
      aria-modal='true'
      aria-labelledby={title ? titleId : undefined}
    >
      <div
        className='absolute inset-0 bg-slate-900/50 backdrop-blur-sm'
        onClick={closeOnOverlayClick ? onClose : undefined}
        aria-hidden='true'
      />

      <div
        ref={panelRef}
        tabIndex={-1}
        className={cn(
          'relative z-101 w-full max-w-2xl rounded-2xl border border-slate-100 bg-white shadow-xl',
          'focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 focus-visible:ring-offset-2',
          className,
        )}
        onClick={(event) => event.stopPropagation()}
      >
        {(title || showCloseButton) && (
          <div className='flex items-center justify-between gap-6 px-6 pt-6'>
            {title ? (
              <h2 id={titleId} className='font-sora text-xl font-semibold text-slate-900'>
                {title}
              </h2>
            ) : (
              <div />
            )}

            {showCloseButton && (
              <button
                type='button'
                onClick={onClose}
                className='cursor-pointer rounded-xl p-2 text-black transition-colors hover:bg-slate-100 hover:text-slate-900 focus-visible:ring-2 focus-visible:ring-sky-500 focus-visible:ring-offset-2 focus-visible:outline-none'
                aria-label='Close modal'
              >
                <svg
                  viewBox='0 0 24 24'
                  width='20'
                  height='20'
                  fill='none'
                  stroke='currentColor'
                  strokeWidth='2'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                >
                  <path d='M18 6L6 18' />
                  <path d='M6 6l12 12' />
                </svg>
              </button>
            )}
          </div>
        )}

        <div className='px-6 pt-4 pb-6'>{children}</div>
      </div>
    </div>,
    document.body,
  )
}
