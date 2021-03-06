import { createGlobalStyle } from 'styled-components'
import { device } from './utils/device'

export const GlobalStyle = createGlobalStyle`
  html {
    box-sizing: border-box;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  }
  
  *, *::before, *::after {
    box-sizing: inherit;
  }
  
  ul, li, h1, h2, h3, p, button {
    margin: 0;
  }

  ul {
    list-style: none;
  }

  button {
    background: transparent;
    border: 0;
    outline: 0;
  }

  body {
    background: #fcfbfc;
    margin: 0 auto;
    overscroll-behavior: none;
    max-width: 90%;

    @media ${device.laptop} {
      max-width: 70%;
    }
  }

  #app {
    padding-top: 116px;
  }
`
