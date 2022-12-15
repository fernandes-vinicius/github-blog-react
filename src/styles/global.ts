import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :focus {
    outline: 0;
    box-shadow: 0 0 0 2px ${(props) => props.theme.blue};
  }

  body {
    overflow-x: hidden;
    background-color: ${(props) => props.theme['base-background']};
    color: ${(props) => props.theme['base-text']};
    -webkit-font-smoothing: antialiased;
  }

  body, input, textarea, button {
    font: 400 1rem Nunito, sans serif;
    line-height: 1.6;
  }

  button {
    border: 0;
    background: transparent;
    cursor: pointer;
  }

  a {
    text-decoration: none;
    color: ${(props) => props.theme.blue};

    :focus {
      box-shadow: none;
    }
  }
`
