import styled from 'styled-components'

export const Container = styled.div.attrs(({ isnew, ...rest }) => ({
  ...rest,
  isnew // Ensure `isnew` is passed to the DOM element if necessary
}))`
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
    margin-top:0.2rem;
    color: ${({ theme }) => theme.COLORS.TINTS_TOMATO_300};
  }

  .button-add {
    margin-top:0.2rem;
    color: ${({ theme }) => theme.COLORS.LIGHT_500};
  }

  > input {
    font-size: 0.9rem;
    height: 1.9rem;
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