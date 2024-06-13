import { createGlobalStyle } from 'styled-components'
import { DEVICE_BREAKPOINTS } from './deviceBreakpoints'

export default createGlobalStyle`
  *{
    margin:0;
    padding:0;
    box-sizing: border-box;
  }

  :root {
    font-size:16px;

    @media (max-width: ${DEVICE_BREAKPOINTS.SM}) {
      font-size: 12px;
    }

    @media (max-width: ${DEVICE_BREAKPOINTS.MD}) {
      font-size: 14px;
    }
  }

  body {
    background-color: ${({ theme }) => theme.COLORS.DARK_400};
    color: ${({ theme }) => theme.COLORS.LIGHT_300};

    -webkit-font-smoothing: antialiased;

    position:relative;
    min-height:100vh;
  }

  body, input, button, textarea {
    font-family: 'Poppins', sans-serif;
    font-size:1rem;
    outline:none;

  }

  p {
    font-family:'Roboto', sans-serif;
  }

  a {
    text-decoration: none;
    color: #fff;
  }

  button, a {
    cursor: pointer;
    transition: filter 0.2s;
  }

  button:hover, a:hover {
    filter: brightness(0.9);
  }
  
  ::-webkit-scrollbar {
    width: 0.5rem;
  }
  
  ::-webkit-scrollbar-track {
    background-color: #202024;
  }
  
  ::-webkit-scrollbar-thumb {
    background-color: #09090A;
  }
`