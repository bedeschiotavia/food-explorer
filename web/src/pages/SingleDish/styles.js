import styled from "styled-components"

import { DEVICE_BREAKPOINTS } from "../../styles/deviceBreakpoints"

export const Container = styled.div`

  max-width: 280px;
  margin: 1rem auto;

  @media (min-width: ${DEVICE_BREAKPOINTS.MD}) {
    max-width: 1122px;
    margin: 2rem auto;
    padding: 0 2rem;
  }
`

export const DishContainer = styled.div `
  text-align:center;

  > img {
    max-width:200px;
    margin: 1rem 0;
  }

  @media (min-width: ${DEVICE_BREAKPOINTS.MD}) {
    display:flex;
    justify-content: center;
    align-items:center;
    gap:3rem;

    > img {
    max-width:300px;
    margin: 2rem 0;
  }
    
  }
`


export const DishDetails = styled.div`
  text-align:center;

  color: ${({ theme }) => theme.COLORS.LIGHT_300};

  > h1 {
    font-weight:500;
    font-size:1.5rem;
    line-height:3rem;
  }

  > p {
    font-family: 'Poppins', sans-serif;
    margin-bottom:1rem;
  }

  @media (min-width: ${DEVICE_BREAKPOINTS.MD}){
    text-align:left;
  }
`

export const TagsWrapper = styled.div `
  margin-bottom: 1.8rem;
`

export const SingleDishFooter = styled.div`
  display:flex;
`

export const QuantityWrapper = styled.div`
  width:90px;

  padding:0.2rem;

  display: flex;
  gap:2px;
  justify-content:center;
  align-items:center;

  color: ${({ theme }) => theme.COLORS.LIGHT_300};

  > button svg {
    padding-left:5px;
  }

  @media (min-width: ${DEVICE_BREAKPOINTS.LG}){
    margin-right:1.5rem;
    gap:0.5rem;

    > button svg {
      font-size:1.8rem;
    }
  }
`

export const Quantity = styled.div`
  font-size: 1rem;
  color: ${({ theme }) => theme.COLORS.LIGHT_300};

  @media (min-width: ${DEVICE_BREAKPOINTS.LG}) {
    font-size:1.2rem;
  }
`