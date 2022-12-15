import styled from 'styled-components'

export const PostContainer = styled.div`
  display: flex;
  flex-direction: column;
`

export const PostHeader = styled.header`
  display: flex;
  flex-direction: column;

  padding: 2rem;

  background: ${(props) => props.theme['base-profile']};
  box-shadow: 0px 2px 28px rgba(0, 0, 0, 0.2);
  border-radius: 10px;
`

export const PostLinks = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const PostTitle = styled.h1`
  flex: 1;
  margin: 1.25rem 0 0.5rem;

  font-weight: 700;
  font-size: 1.5rem;
  line-height: 1.3;

  color: ${(props) => props.theme['base-title']};
`

export const PostContent = styled.div`
  display: flex;
  flex-direction: column;
  padding: 2.5rem 2rem;
  gap: 1.5rem;

  overflow: hidden;
`
