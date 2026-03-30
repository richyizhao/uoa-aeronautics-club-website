import type { MouseEventHandler, ReactNode } from 'react'
import { Link, type LinkProps, useLocation, useResolvedPath } from 'react-router-dom'

type ScrollToTopLinkProps = Omit<LinkProps, 'onClick'> & {
  children: ReactNode
  onClick?: MouseEventHandler<HTMLAnchorElement>
}

export const ScrollToTopLink = ({
  to,
  onClick,
  children,
  ...props
}: ScrollToTopLinkProps) => {
  const location = useLocation()
  const resolvedPath = useResolvedPath(to)

  const handleClick: MouseEventHandler<HTMLAnchorElement> = (event) => {
    onClick?.(event)

    if (event.defaultPrevented) {
      return
    }

    if (location.pathname === resolvedPath.pathname) {
      event.preventDefault()
      window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })
    }
  }

  return (
    <Link to={to} onClick={handleClick} {...props}>
      {children}
    </Link>
  )
}
