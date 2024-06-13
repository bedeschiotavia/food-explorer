import styled from "styled-components"

import { DEVICE_BREAKPOINTS } from "../../styles/deviceBreakpoints"

export const Container = styled.footer`
  width:100%;
  position:absolute;
  padding: 0 2rem;
  bottom: 0;
  z-index:9;
  background-color: ${({ theme }) => theme.COLORS.DARK_600};
`
export const FooterContainer = styled.div`
  max-width: 1122px;
  margin: auto;
  display: flex;
  justify-content:space-between;
  align-items:center;
  padding: 1.5rem 0;

  color: ${({ theme }) => theme.COLORS.LIGHT_200};
  font-family: 'Roboto', sans-serif;

  > p {
    font-size: 0.9rem;
  }

  > img {
    width:40%;
    height:auto;
  }

  @media (min-width: ${DEVICE_BREAKPOINTS.MD}) {
    > img {
      width:15%;
    }

    > p {
    font-size: 0.7rem;
  }
  }

`