import styled from 'styled-components'

export const ProfileContainer = styled.section`
  display: flex;
  align-items: center;
  gap: 2rem;

  width: 100%;
  padding: 2rem;

  background: ${(props) => props.theme['base-profile']};
  box-shadow: 0px 2px 28px rgba(0, 0, 0, 0.2);
  border-radius: 10px;
`

export const UserAvatar = styled.img`
  width: 9.25rem;
  height: 9.25rem;

  border-radius: 8px;
`

export const ProfileContent = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;

  header {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
  }
`

export const UserName = styled.h2`
  font-weight: 700;
  font-size: 1.5rem;
  line-height: 1.3;

  color: ${(props) => props.theme['base-title']};
`

export const Biography = styled.p`
  margin-top: 0.5rem;
  color: ${(props) => props.theme['base-text']};
`

export const ProfileInfoContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1.5rem;

  margin-top: 1.5rem;
`

export const ProfileInfoItem = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;

  svg {
    color: ${(props) => props.theme['base-label']};
  }

  span {
    color: ${(props) => props.theme['base-subtitle']};
  }
`
