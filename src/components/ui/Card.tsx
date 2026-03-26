import React from 'react'
import { cn } from '../../lib/cn'

type CardVariant = 'default' | 'outline' | 'ghost'

export type CardProps = React.HTMLAttributes<HTMLDivElement> & {
  children: React.ReactNode
  variant?: CardVariant
  interactive?: boolean
}

const baseStyles = 'rounded-2xl border bg-white p-6 backdrop-blur-sm transition-all duration-300'

const variantStyles: Record<CardVariant, string> = {
  default: 'border-slate-100 bg-white/80 shadow-xl shadow-sky-900/5',
  outline: 'border-slate-200 bg-white shadow-sm',
  ghost: 'border-transparent bg-transparent shadow-none',
}

const interactiveStyles =
  'cursor-pointer hover:-translate-y-1 hover:border-sky-100 hover:shadow-md focus-within:-translate-y-1 focus-within:border-sky-100 focus-within:shadow-md'

export const Card = React.forwardRef<HTMLDivElement, CardProps>(function Card(
  { children, variant = 'default', interactive = false, className, ...props },
  ref,
) {
  return (
    <div
      ref={ref}
      className={cn(
        baseStyles,
        variantStyles[variant],
        interactive && interactiveStyles,
        className,
      )}
      {...props}
    >
      {children}
    </div>
  )
})

Card.displayName = 'Card'
