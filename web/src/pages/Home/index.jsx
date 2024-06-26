import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';

import { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";

import heroImageMD from "../../assets/hero-image.png";
import heroImage from "../../assets/hero-image2.png";

import { Card } from '../../components/Card';
import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { api } from "../../service/api";

import { CategoryTitle, Container, Hero, Image, ImageMobile, SliderContainer } from "./styles";

export function Home() {
  const [search, setSearch] = useState('');
  const [dishes, setDishes] = useState({ meals: [], desserts: [], beverages: [] });

  const navigate = useNavigate()

  useEffect(() => {
    async function fetchDishes() {
      const response = await api.get(`/dishes?title=${search}&description=${search}`);

      const meals = response.data.filter((dish) => dish.category === "meal");
      const desserts = response.data.filter((dish) => dish.category === "dessert");
      const beverages = response.data.filter((dish) => dish.category === "beverage");

      setDishes({ meals, desserts, beverages });
    }
    fetchDishes();
  }, [search]);

  function handleDishClick(id) {
    navigate(`/dish/${id}`)
  }

  return (
    <>
      <Header setSearch={setSearch} />
      <Container>
        <Hero>
          <ImageMobile>
            <img src={heroImage} alt="Colourful macaroons" />
          </ImageMobile>
          <Image>
            <img src={heroImageMD} alt="Colourful macaroons" />
          </Image>
          <div>
            <h1>Unbeatable flavours</h1>
            <p>Enjoy carefully prepared dishes with special ingredients</p>
          </div>
        </Hero>

        <CategoryTitle>Meals</CategoryTitle>
        <SliderContainer>
          <Splide
            options={{
              rewind: true,
              gap: '4rem',
              type: 'loop',
              perPage: 3,
              focus: 'center',
              pagination: false,
              breakpoints: {
                640: {
                  perPage: 2,
                  arrows: false,
                },
                375: {
                  perPage: 2,
                  focus: 1,
                },
              },
            }}
            aria-label="Meals"
          >
            {dishes.meals.map((dish) => (
              <SplideSlide key={String(dish.id)}>
                <Card
                  data={dish}
                  handleDishClick={handleDishClick}
                />
              </SplideSlide>
            ))}
          </Splide>
        </SliderContainer>

        <CategoryTitle>Desserts</CategoryTitle>
        <SliderContainer>
          <Splide
            options={{
              rewind: true,
              gap: '4rem',
              type: 'loop',
              perPage: 3,
              focus: 'center',
              pagination: false,
              breakpoints: {
                640: {
                  perPage: 2,
                  arrows: false,
                },
                375: {
                  perPage: 2,
                  focus: 1,
                },
              },
            }}
            aria-label="Desserts"
          >
            {dishes.desserts.map((dessert) => (
              <SplideSlide key={String(dessert.id)}>
                <Card
                  data={dessert}
                  handleDishClick={handleDishClick}
                />
              </SplideSlide>
            ))}
          </Splide>
        </SliderContainer>

        <CategoryTitle>Beverages</CategoryTitle>
        <SliderContainer>
          <Splide
            options={{
              rewind: true,
              gap: '4rem',
              type: 'loop',
              perPage: 3,
              focus: 'center',
              pagination: false,
              breakpoints: {
                640: {
                  perPage: 2,
                  arrows: false,
                },
                375: {
                  perPage: 2,
                  focus: 1,
                },
              },
            }}
            aria-label="Beverages"
          >
            {dishes.beverages.map((beverage) => (
              <SplideSlide key={String(beverage.id)}>
                <Card
                  data={beverage}
                  handleDishClick={handleDishClick}
                />
              </SplideSlide>
            ))}
          </Splide>
        </SliderContainer>

      </Container>
      <Footer />
    </>
  );
}