import React from 'react'
import { cn } from '../../lib/cn'

type ButtonVariant = 'primary' | 'secondary' | 'plain' | 'outline'
type ButtonSize = 'sm' | 'md' | 'lg'

type ButtonOwnProps = {
  variant?: ButtonVariant
  size?: ButtonSize
  loading?: boolean
  className?: string
}

type PolymorphicRef<C extends React.ElementType> = React.ComponentPropsWithRef<C>['ref']

type ButtonProps<C extends React.ElementType> = ButtonOwnProps & {
  as?: C
} & Omit<React.ComponentPropsWithoutRef<C>, keyof ButtonOwnProps | 'as'>

type ButtonComponent = <C extends React.ElementType = 'button'>(
  props: ButtonProps<C> & { ref?: PolymorphicRef<C> },
) => React.ReactElement | null

const baseStyles =
  'inline-flex cursor-pointer items-center justify-center rounded-full font-inter font-medium transition-all duration-300 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-60'

const variantStyles: Record<ButtonVariant, string> = {
  primary: 'bg-brand-yellow text-black shadow-md hover:bg-brand-yellow/80',
  secondary: 'bg-sky-500 text-white hover:bg-sky-600 hover:shadow-lg hover:shadow-sky-500/30',
  plain: 'bg-white text-brand-blue shadow-md hover:bg-sky-100',
  outline: 'border-2 border-sky-200 text-sky-700 hover:border-sky-400 hover:bg-sky-50',
}

const sizeStyles: Record<ButtonSize, string> = {
  sm: 'min-h-10 px-4 py-2 text-sm',
  md: 'min-h-11 px-6 py-3 text-base',
  lg: 'min-h-12 px-8 py-4 text-lg',
}

const ButtonImpl = <C extends React.ElementType = 'button'>(
  {
    as,
    children,
    variant = 'primary',
    size = 'md',
    loading = false,
    className,
    ...props
  }: ButtonProps<C>,
  ref: PolymorphicRef<C>,
) => {
  const Component = as ?? 'button'
  const isButtonElement = Component === 'button'
  const componentProps = {
    ...(isButtonElement ? { type: 'button' as const } : {}),
    ...props,
    ...(loading && isButtonElement ? { disabled: true } : {}),
  }

  return (
    <Component
      ref={ref}
      className={cn(baseStyles, variantStyles[variant], sizeStyles[size], className)}
      aria-busy={loading || undefined}
      {...componentProps}
    >
      {children}
    </Component>
  )
}

export const Button = React.forwardRef(ButtonImpl as never) as unknown as ButtonComponent
;(Button as React.ForwardRefExoticComponent<ButtonProps<'button'>>).displayName = 'Button'
