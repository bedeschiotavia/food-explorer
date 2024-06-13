import styled from "styled-components"

import { DEVICE_BREAKPOINTS } from "../../styles/deviceBreakpoints"

export const Container = styled.div`
  max-width: 280px;
  margin: auto;

  > h1 {
    font-weight:500;
    line-height:4rem;
  }

  > form {
    display:flex;
    flex-direction:column;
    gap:1rem;
  }

  > form label {
    font-family:'Roboto', sans-serif;
    line-height:2rem;
    text-align:start;

    position: relative;

    > svg {
      font-size: 1.2rem;

      position:absolute;
      z-index:999;
      bottom:20%;
      right:8%;
    }
  }

  > form select {

    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;

    width:100%;

    font-size: 1rem;
    font-family: 'Roboto', sans-serif;

    padding: 1.2rem 1.5rem;
    background-color: ${({ theme }) => theme.COLORS.DARK_900};
    color: ${({ theme }) => theme.COLORS.LIGHT_100};
  
    border-radius: 0.43rem;
    border: none;

    &:focus {
      border: 1px solid ${({ theme }) => theme.COLORS.LIGHT_400};
      border-radius: 0.43rem;
    }

  }

  @media (min-width: ${DEVICE_BREAKPOINTS.MD}) {
    max-width: 1122px;
    margin: 2rem auto;
    padding: 0 2rem;
  }

  @media (min-width: ${DEVICE_BREAKPOINTS.LG}) {
    > form .row {
    display:flex;
    flex-direction:row;
    gap:1rem;
    }

    > form label {
      flex: 1 1 auto;
    }
  }
`
export const WrapperFileInput = styled.div`
  display: flex;
  align-items: center;
  justify-content:start;
  padding: 0.75rem 1.5rem;

  text-align:left;
  font-family:'Poppins', sans-serif;
  font-size:1rem;

  background-color: ${({ theme }) => theme.COLORS.DARK_900};
  color: ${({ theme }) => theme.COLORS.LIGHT_100};
  
  border-radius: 0.43rem;

  > svg {
    font-size:2rem;
    margin-right:0.5rem;
  }

  > input {
    display:none;
  }
`

export const WrapperTag = styled.div`
  display:flex;
  flex-direction:column;
  gap:1rem;
  padding: 0.8rem 1.5rem;
  background-color: ${({ theme }) => theme.COLORS.DARK_900};
  color: ${({ theme }) => theme.COLORS.LIGHT_100};

  border-radius: 0.43rem;
  border: none;

  @media (min-width: ${DEVICE_BREAKPOINTS.LG}) {
    flex-direction:row;
  }
`
export const DishFooter = styled.div`
  margin-top: 2rem;

  display:flex;
  gap:1rem;
  justify-content:end;

  > .btn-dark {
    background-color: ${({ theme })=> theme.COLORS.DARK_900};
  }
`