import styled from "styled-components"

import { DEVICE_BREAKPOINTS } from "../../styles/deviceBreakpoints"

export const Container = styled.div`
  max-width: 1122px;
  margin: auto;
  padding: 1.5rem;

  @media (min-width: ${DEVICE_BREAKPOINTS.MD}){
    padding: 0 3.5rem 7rem 3.5rem;
  }
`

export const Hero = styled.div`
  max-width:100%;
  height:7.5rem;
  border-radius:0.5rem;

  padding-right:0.6rem;

  display:flex;
  align-items: center;

  margin-top: 2.5rem;

  position: relative;

  > div h1 {
    font-size:1rem;
    font-weight:600;
  }

  > div p {
    font-family: 'Poppins', sans-serif;
    font-size:0.9rem;
    font-weight:400;
  }


  @media (min-width: ${DEVICE_BREAKPOINTS.MD}) {
    height:12.25rem;
    margin-top: 4rem;
    padding-right:2rem;

    > div h1 {
      font-size:2rem;
      font-weight:500;
    }

    > div p {
      font-size:1rem;
    }
  }

  @media (min-width: ${DEVICE_BREAKPOINTS.LG}) {
    margin-top: 8rem;
    padding-right:2rem;

    > div h1 {
      font-size:2.5rem;
      font-weight:500;
    }

    > div p {
      font-size:1.1rem;
      font-weight:500;
    }
  }

  background-image: ${({ theme }) => theme.COLORS.GRADIENTS_200};
`

export const ImageMobile = styled.div`

  width: 85%;

  > img {
    max-width:50%;
    height:auto;

    position: absolute;
    bottom: 0;
    left:-1.8rem;
  }

  @media (min-width: ${DEVICE_BREAKPOINTS.MD}) {
    display:none;
  }
`

export const Image = styled.div`
  width: 50%;

  > img {
    max-width:55%;
    height:auto;

    position: absolute;
    bottom: -0.5rem;
    left:-2.5rem;
  }

  display:none;

  @media (min-width: ${DEVICE_BREAKPOINTS.MD}) {
    display:flex;
    align-items:center;
    justify-content:start;
  }
`

export const CategoryTitle = styled.div`
  margin: 1.5rem 0;
  font-size: 1.2rem;

  font-weight:500;

  @media (min-width: ${DEVICE_BREAKPOINTS.MD}){
    font-size:1.6rem;
  }
`
export const SliderContainer=styled.div`
  .splide__arrow {
    height:100%;
    width:230px;
    border-radius:0;
    opacity:1;
  }

  .splide__arrow svg {
    fill: ${({ theme }) => theme.COLORS.LIGHT_100};
  }

  .splide__arrow--prev {
    left:0px;
    background: linear-gradient(to right, rgba(0,10,15,1), rgba(0,10,15,0));
    justify-content: start;
  }

  .splide__arrow--next {
    right:0px;
    background: linear-gradient(to left, rgba(0,10,15,1), rgba(0,10,15,0));
    justify-content: end;
  }
  
`
