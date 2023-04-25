import { createGlobalStyle } from 'styled-components'
import { reset } from 'styled-reset'

const GlobalStyle = createGlobalStyle`
  ${reset};
  *,
  *::before,
  *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  body {
    font-family: 'Noto Sans KR', sans-serif;
    line-height: 1;
    background-color: #000;
    margin-bottom: 100px;
  }
  a {
    color: inherit;
    text-decoration: none;
  }
  ol,
  ul {
    list-style: none;
  }
  button {
    background: transparent;
    border: none;
    cursor: pointer;
  }
`

export default GlobalStyle
