import styled from "styled-components";
import { DEVICE_BREAKPOINTS } from "../../styles/deviceBreakpoints";

export const Container = styled.button`
  background-color: ${({ theme, disabled }) => disabled ? theme.COLORS.GRAY_300 : theme.COLORS.TINTS_TOMATO_100};
  color: ${({ theme }) => theme.COLORS.LIGHT_100};
  border: 0;
  height: 2rem;
  padding: 0.75rem 3rem;
  font-weight: 500;
  border-radius: 0.31rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;
  cursor: ${({ disabled }) => disabled ? 'not-allowed' : 'pointer'};
  opacity: ${({ disabled }) => disabled ? 0.5 : 1};

  > span {
    font-size: 0.875rem;
    white-space: nowrap;
  }

  > svg {
    font-size: 1.37rem;
  }

  @media (min-width: ${DEVICE_BREAKPOINTS.LG}) {
    padding: 0.75rem 3.5rem;
    height: 3rem;
  }
`;
