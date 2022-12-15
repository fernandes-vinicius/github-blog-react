import { Link, Outlet } from 'react-router-dom'

// import coverImg from '@/assets/cover.svg'
import logoImg from '@/assets/logo.svg'

import {
  BackgroundCover,
  DefaultLayoutContainer,
  LogoContainer,
} from './styles'

export function DefaultLayout() {
  return (
    <DefaultLayoutContainer>
      {/* TODO COVER */}
      <BackgroundCover />

      <LogoContainer>
        <Link to="/">
          <img src={logoImg} alt="" />
        </Link>
      </LogoContainer>

      <Outlet />
    </DefaultLayoutContainer>
  )
}
