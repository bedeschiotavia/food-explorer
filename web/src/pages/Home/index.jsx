import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import heroImageMD from "../../assets/hero-image.png";
import heroImage from "../../assets/hero-image2.png";


import { Card } from '../../components/Card';
import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { CategoryTitle, Container, Hero, Image, ImageMobile, SliderContainer } from "./styles";



export function Home(){

  return (
    <>
      <Header/>
      <Container>
        <Hero>
          <ImageMobile>
            <img
              src={heroImage}
              alt="Colourful macaroons"/>
          </ImageMobile>
          <Image>
            <img
              src={heroImageMD}
              alt="Colourful macaroons"/>
          </Image>
          <div>
            <h1>Unbeatable flavours</h1>
            <p>Enjoy carefully prepared dishes with special ingredients</p>
          </div>
        </Hero>
        <CategoryTitle>
          Meals
        </CategoryTitle>
        <SliderContainer>
          <Splide
            options={ {
              rewind: true,
              gap   : '4rem',
              type   : 'loop',
              perPage: 3,
              focus  : 'center',
              pagination:false,
              breakpoints: {
                640: {
                  perPage: 2,
                  arrows:false,
                },
                375:{
                  perPage:2,
                  focus  : 1,
                }
              },
            } }
            aria-label="My Favorite Images"
          >
            <SplideSlide>
              <Card/>
            </SplideSlide>
            <SplideSlide>
              <Card/>
            </SplideSlide>
            <SplideSlide>
              <Card/>
            </SplideSlide>
          </Splide>
        </SliderContainer>
        <CategoryTitle>
          Meals
        </CategoryTitle>
        <SliderContainer>
          <Splide
            options={ {
              rewind: true,
              gap   : '4rem',
              type   : 'loop',
              perPage: 3,
              focus  : 'center',
              pagination:false,
              breakpoints: {
                640: {
                  perPage: 2,
                  arrows:false,
                },
                375:{
                  perPage:2,
                  focus  : 1,
                }
              },
            } }
            aria-label="My Favorite Images"
          >
            <SplideSlide>
              <Card/>
            </SplideSlide>
            <SplideSlide>
              <Card/>
            </SplideSlide>
            <SplideSlide>
              <Card/>
            </SplideSlide>
          </Splide>
        </SliderContainer>
        
      </Container>
      <Footer/>
    </>
  )
}

