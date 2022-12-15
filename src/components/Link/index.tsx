import { AnchorHTMLAttributes } from 'react'

import { LinkContainer } from './styles'

interface LinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {}

export default function Link(props: LinkProps) {
  return <LinkContainer {...props} />
}
