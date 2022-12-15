import styled from 'styled-components'

import coverImg from '@/assets/cover.svg'

export const DefaultLayoutContainer = styled.div`
  display: flex;
  flex-direction: column;

  width: 100%;
`

export const BackgroundCover = styled.div`
  display: flex;
  justify-content: center;

  width: 100%;
  min-height: 18.5rem;
  padding-top: 4rem;

  background: ${(props) => props.theme['base-profile']};
  background-image: url(${coverImg});
  background-size: cover;
  background-position: center;
`

export const DefaultLayoutContent = styled.div`
  display: flex;
  flex-direction: column;

  width: 100%;
  max-width: 56rem;
  margin: -5rem auto 0;
  padding: 0 1rem 4rem;
`
