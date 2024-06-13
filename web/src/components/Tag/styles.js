import styled from 'styled-components'

export const Container = styled.div`
  display:inline-block;

  font-size: 0.7rem;
  text-wrap: nowrap;

  padding: 5px 14px;
  border-radius: 5px;
  margin: 0.5rem  0.5rem 0 0;
  color: ${({ theme }) => theme.COLORS.LIGHT_100};
  background-color: ${({ theme }) => theme.COLORS.DARK_1000};
`