import styled from 'styled-components'

export const LinkContainer = styled.a`
  display: flex;
  align-items: center;
  gap: 0.5rem;

  font-weight: 700;
  font-size: 0.75rem;
  text-transform: uppercase;
  line-height: 0;

  color: ${(props) => props.theme.blue};

  cursor: pointer;
`
