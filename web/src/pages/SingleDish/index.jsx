
import ravanelloSalad from "../../assets/ravanello-salad.png"

import { CaretLeft, Minus, Plus, Receipt } from "@phosphor-icons/react"

import { Link } from 'react-router-dom'

import { Button } from "../../components/Button"
import { ButtonText } from "../../components/ButtonText"
import { Footer } from "../../components/Footer"
import { Header } from "../../components/Header"
import { Tag } from "../../components/Tag"

import { Container, DishContainer, DishDetails, Quantity, QuantityWrapper, SingleDishFooter, TagsWrapper } from "./styles"



export function SingleDish() {

  return (
    <>
      <Header/>
      
      <Container>
        <Link to="/">
          <ButtonText icon={CaretLeft} title="back"/>
        </Link>
        <DishContainer>
          <img src={ravanelloSalad}/>
          <DishDetails>
            <h1>Salada Ravanello</h1>
            <p>Radishes, green leaves and sweet and sour sauce sprinkled with sesame seeds</p>
            <TagsWrapper>
              <Tag title="lettuce"/>
              <Tag title="onion"/>
              <Tag title="tomato"/>
              <Tag title="naan bread"/>
              <Tag title="cucumber"/>
              <Tag title="radish"/>
            </TagsWrapper>
            <SingleDishFooter>
            <QuantityWrapper>
              <ButtonText icon={Minus}/>
              <Quantity>01</Quantity>
              <ButtonText icon={Plus}/>
            </QuantityWrapper>
            <Button icon={Receipt} title="order" price="25,00€"/>
            {/* <Button title="edit dish"/> */}
            </SingleDishFooter>
          </DishDetails>
        </DishContainer>
      </Container>
      <Footer/>
    </>
  )

}