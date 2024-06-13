import styled from "styled-components"
import { DEVICE_BREAKPOINTS } from "../../styles/deviceBreakpoints"

export const Container = styled.div`
  width: 13.2rem;
  padding: 1.5rem;

  display: flex;
  flex-direction:column;
  justify-content: center;
  align-items:center;

  text-align:center;

  position: relative;

  background-color: ${({ theme }) => theme.COLORS.DARK_200};

  border: solid 1px ${({ theme }) => theme.COLORS.DARK_300};
  border-radius: 0.5rem;

  box-shadow: 0px 4px 4px 0px rgba(0,0,0,0.25);
  -webkit-box-shadow: 0px 4px 4px 0px rgba(0,0,0,0.25);
  -moz-box-shadow: 0px 4px 4px 0px rgba(0,0,0,0.25);

  >img {
    width:5.5rem;
  }

  @media (min-width: ${DEVICE_BREAKPOINTS.LG}){
    width: 19rem;

    >img {
      width:11rem;
    }
  }
`

export const ActionLogo = styled.div`

  position: absolute;
  top: 1.2rem;
  right:0.6rem;

  color: ${({ theme }) => theme.COLORS.LIGHT_300};

  > button {
    height:1rem;
  }

  > button svg {
    font-size:24px;
  }
`

export const Title = styled.div`
  font-size:0.875rem;
  display:flex;
  align-items:center;

  line-height:1.5rem;

  color: ${({ theme }) => theme.COLORS.LIGHT_300};

  @media (min-width: ${DEVICE_BREAKPOINTS.LG}){
    font-size: 1.2rem;
    font-weight: 600;

    line-height:2rem;

  }
`

export const Description = styled.div `
  display:none;

  @media (min-width: ${DEVICE_BREAKPOINTS.LG}) {
    font-family: 'Roboto', sans-serif;

    display:block;
    font-size:0.875rem;
  }
`

export const Price = styled.div`
  font-size: 1rem;
  line-height:2rem;

  color: ${({ theme }) => theme.COLORS.TINTS_CAKE_200};

  @media (min-width: ${DEVICE_BREAKPOINTS.LG}){
    font-size:1.6rem;
    line-height:3rem;
  }
`

export const CardFooter = styled.div`
  @media (min-width: ${DEVICE_BREAKPOINTS.LG}) {
    display:flex;
    align-items:center;

    > button {
      height:2.3rem !important;
      padding: 1rem !important;
    }

    > button span {
      font-size:0.8rem !important;
    }
  }
`

export const QuantityWrapper = styled.div`
  width:100px;
  margin:auto;

  padding:0.6rem;

  display: flex;
  gap:4px;
  justify-content:center;
  align-items:center;

  color: ${({ theme }) => theme.COLORS.LIGHT_300};

  > button svg {
    padding-left:5px;
  }

  @media (min-width: ${DEVICE_BREAKPOINTS.LG}){

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


