import styled from "styled-components";

import { DEVICE_BREAKPOINTS } from "../../styles/deviceBreakpoints";

export const Container = styled.button `

  background: none;
  color: ${({ theme })=> theme.COLORS.LIGHT_100};
  border: none;

  font-weight: 400;
  font-size: 1.2rem;
  font-family: 'Roboto', sans-serif;

  display: flex;
  align-items: center;
  gap: 0.5rem;

  @media (max-width: ${DEVICE_BREAKPOINTS.SM}) {

    font-size: 1.2rem;

    > svg {
      font-size: 1.5rem;
    }
  }

`