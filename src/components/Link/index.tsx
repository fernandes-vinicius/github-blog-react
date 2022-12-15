import { AnchorHTMLAttributes } from 'react'

import { LinkContainer } from './styles'

interface LinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {}

export function Link(props: LinkProps) {
  return <LinkContainer {...props} />
}
