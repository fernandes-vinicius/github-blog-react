import styled from 'styled-components'

export const BlogContainer = styled.main`
  display: flex;
  flex-direction: column;
`

export const PostsInfoContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  margin: 4.5rem 0 0.75rem;

  h4 {
    font-weight: 700;
    font-size: 1.125rem;

    color: ${(props) => props.theme['base-subtitle']};
  }

  span {
    font-size: 0.875rem;
    text-align: right;

    color: ${(props) => props.theme['base-span']};
  }
`

export const PostSearchInput = styled.input`
  width: 100%;
  padding: 0.75rem 1rem;

  background: ${(props) => props.theme['base-input']};

  border: 1px solid ${(props) => props.theme['base-border']};
  border-radius: 6px;

  color: ${(props) => props.theme['base-text']};

  &::placeholder {
    color: ${(props) => props.theme['base-label']};
  }
`

export const PostsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;

  margin-top: 3rem;
`

export const PostItem = styled.div`
  padding: 2rem;
  background: ${(props) => props.theme['base-post']};
  border-radius: 10px;

  overflow: hidden;

  header {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
  }
`

export const PostItemTitle = styled.h2`
  font-weight: 700;
  font-size: 1.25rem;

  margin-right: 1rem;
  cursor: pointer;

  color: ${(props) => props.theme['base-title']};
`

export const PostItemTime = styled.span`
  white-space: nowrap;

  font-size: 0.875rem;
  color: ${(props) => props.theme['base-span']};
`

export const PostItemBody = styled.p`
  margin-top: 1.25rem;

  /* IE-11 Support */
  display: block;
  max-height: 6.5rem;
  line-height: 1.8rem;

  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 4; /* number of lines to show */
  line-clamp: 4;
  -webkit-box-orient: vertical;
`
