import styled from 'styled-components'

export const DefaultLayoutContainer = styled.div`
  display: flex;
  flex-direction: column;

  width: 100%;
  max-width: 54rem;
  margin: 4rem auto;
  /* padding: 0 1.5rem; */ // TODO
`

export const BackgroundCover = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: -1;

  width: 100%;
  height: 18.5rem;

  background: ${(props) => props.theme['base-input']};
  /* background: ${(props) => props.theme['base-profile']}; */ // TODO
`

export const LogoContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 2.875rem;

  a:focus {
    box-shadow: none;
  }

  img {
    width: 100%;
  }
`
