import { ActionLogo, CardFooter, Container, Description, Price, Quantity, QuantityWrapper, Title } from "./styles"

import ravanelloSalad from "../../assets/ravanello-salad.png"

import { CaretRight, HeartStraight, Minus, Plus } from "@phosphor-icons/react"

import { Button } from "../Button"
import { ButtonText } from "../ButtonText"

export function Card() {
  return (
    <Container>
      <ActionLogo>
        <ButtonText icon={HeartStraight}/>
      </ActionLogo>
      <img src={ravanelloSalad} alt="" />
      <Title>Salada Ravanello <CaretRight/></Title>
      <Description>Radishes, green leaves and sweet and sour sauce sprinkled with sesame seeds</Description>
      <Price>12,00€</Price>

      <CardFooter>
        <QuantityWrapper>
          <ButtonText icon={Minus}/>
          <Quantity>01</Quantity>
          <ButtonText icon={Plus}/>
        </QuantityWrapper>
        <Button title="incluir"></Button>
      </CardFooter>
    </Container>
  )
}