import styled from "styled-components"
import { DEVICE_BREAKPOINTS } from '../../styles/deviceBreakpoints'

export const Container = styled.div`
  max-width:380px;
  margin: 0 auto;
  padding: 8rem 2.3rem;
  text-align:center;

  > form {
    display:flex;
    flex-direction:column;
    gap:1.5rem;

    margin-top:3rem;

  }

  > form h1 {
    display:none;
  }

  > form label {
    font-family:'Roboto', sans-serif;
    line-height:2rem;
    text-align:start;
  }

  > form button {
    margin-top:1rem;
    height: 3rem;
  }

  > form input {
    text-align:start;
  }

  @media (min-width: ${DEVICE_BREAKPOINTS.LG}) {
    display:flex;
    max-width:1000px;
    margin:auto;
    justify-content:space-around;

    >img {
      width:18rem;
    }

    > form {
      min-width:460px;
      padding: 4rem;

      border-radius:1rem;
      background-color: ${({ theme }) => theme.COLORS.DARK_700};
    }

    > form h1 {
    display:block;

    font-size: 1.5rem;
    font-weight:500;
  }
  }
`