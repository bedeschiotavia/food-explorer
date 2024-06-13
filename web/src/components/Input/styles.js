import styled from "styled-components";

import { DEVICE_BREAKPOINTS } from "../../styles/deviceBreakpoints";

export const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  text-align:center;
  justify-content:start;
  
  background-color: ${({ theme }) => theme.COLORS.DARK_900};
  color: ${({ theme }) => theme.COLORS.LIGHT_500};
  
  border-radius: 0.43rem;
  
  > input {
    height: 3.5rem;
    width: 100%;
    padding: 0.75rem 1.5rem;

    font-size: 1rem;
    font-family: 'Roboto', sans-serif;

    
    color: ${({ theme }) => theme.COLORS.LIGHT_500};
    background: transparent;
    border: 0;

    &::placeholder {
      color: ${({ theme }) => theme.COLORS.LIGHT_500};
    }

    &:focus {
      border: 1px solid ${({ theme }) => theme.COLORS.LIGHT_400};
      border-radius: 0.43rem;
    }
  }
  
  > svg {
    margin: 0 1rem;
    font-size: 1.5rem;
    text-align:center;
    color: ${({ theme }) => theme.COLORS.LIGHT_400};
  }

  @media (max-width: ${DEVICE_BREAKPOINTS.SM}) {
    justify-content:start;
  }
`;