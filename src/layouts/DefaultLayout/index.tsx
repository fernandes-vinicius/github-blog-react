import { Link, Outlet } from 'react-router-dom'

import logoImg from '@/assets/logo.svg'

import {
  BackgroundCover,
  DefaultLayoutContainer,
  DefaultLayoutContent,
} from './styles'

export function DefaultLayout() {
  return (
    <DefaultLayoutContainer>
      <BackgroundCover>
        <Link to="/">
          <img src={logoImg} alt="" />
        </Link>
      </BackgroundCover>

      <DefaultLayoutContent>
        <Outlet />
      </DefaultLayoutContent>
    </DefaultLayoutContainer>
  )
}
