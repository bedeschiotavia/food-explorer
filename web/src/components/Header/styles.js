import styled from "styled-components"
import { DEVICE_BREAKPOINTS } from "../../styles/deviceBreakpoints"

export const Container = styled.header `
  width:100%;
  padding: 1.5rem 1rem 0 1rem;

  background-color: ${({ theme }) => theme.COLORS.DARK_900};

  @media (min-width: ${DEVICE_BREAKPOINTS.MD}) {
    padding: 0 1rem;
  }
`

export const NavContainer = styled.div `
  max-width: 1122px;
  margin: auto;
  display: flex;
  justify-content:space-between;
  align-items:center;
  padding: 1.2rem 1.2rem;

  @media (min-width: ${DEVICE_BREAKPOINTS.MD}) {
    gap:1rem;

  }
`

export const LogoWrapper = styled.div `
  width:100%;
  display: flex;
  align-items: center;
  justify-content: center;

  > span {
    font-family: 'Roboto', sans-serif;
    font-size: 0.8rem;
    color: ${({ theme }) => theme.COLORS.TINTS_CAKE_200};
    padding: 0.25rem 0 0 0.2rem;
  }
  @media (min-width: ${DEVICE_BREAKPOINTS.MD}) {
    width:200px;
    justify-content: start;
    > span {
      display:none;
    }
  }
`

export const Logo = styled.div `
  display:none;

  @media (min-width: ${DEVICE_BREAKPOINTS.MD}) {
    display:flex;
    align-items:center;
    justify-content:start;
  }
`

export const LogoMobile = styled.div `
  display:flex;
  align-items:center;
  text-align:center;
  > img {
    width:160px;
  }

  @media (min-width: ${DEVICE_BREAKPOINTS.MD}) {
    > a img {
      display:none;
    }
  }
`

export const InputWrapper = styled.div`
  display:none;

  @media (min-width: ${DEVICE_BREAKPOINTS.MD}) {
    width: 31rem;
    display:block;
  }
`

export const ButtonWrapper = styled.div`
  display:none;

  @media (min-width: ${DEVICE_BREAKPOINTS.MD}) {
    display:block;

  }
`

export const Logout = styled.button`
  display:none;

  border: none;
  background: none;

  > svg {
    color: ${({ theme }) => theme.COLORS.LIGHT_100};
    font-size: 32px;
  }

  @media (min-width: ${DEVICE_BREAKPOINTS.MD}) {
    display:block;
  }
`
