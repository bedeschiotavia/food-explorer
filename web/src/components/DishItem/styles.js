import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  align-items: center;

  background-color: ${({ theme }) => theme.COLORS.DARK_500};
  color: ${({ theme }) => theme.COLORS.LIGHT_500};

  border: ${({ theme }) =>`1px dashed ${theme.COLORS.LIGHT_500}`};

  border-radius: 10px;
  padding-right: 16px;

  > button {
    border: none;
    background: none;
  }

  .button-delete{
    color: ${({ theme }) => theme.COLORS.TOMATO_100};
  }

  .button-add {
    color: ${({ theme }) => theme.COLORS.LIGHT_500};
  }

  > input {
    height: 2.5rem;
    width: 100%;

    padding: 12px;

    color: ${({ theme }) => theme.COLORS.LIGHT_100};
    background: transparent;

    border: none;

    &::placeholder {
      color: ${({ theme }) => theme.COLORS.LIGHT_500};
    }
  }
`