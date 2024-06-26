/* eslint-disable react/prop-types */
import { ActionLogo, CardFooter, Container, Description, Price, Quantity, QuantityWrapper, Title } from "./styles";

import { api } from "../../service/api";

import { CaretRight, HeartStraight, Minus, Plus } from "@phosphor-icons/react";

import { Button } from "../Button";
import { ButtonText } from "../ButtonText";

import { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";

export function Card({handleDishClick,data}) {

  const imageURL = data && `${api.defaults.baseURL}/files/${data.image}`;

  const [quantity, setQuantity] = useState(1);
  const [totalPrice, setTotalPrice] = useState(0);

  const navigate = useNavigate();

  function handleNoFeature(){
    alert("Houston, we have a delay! This feature is still in the launch phase. Stay tuned for liftoff!");
  }

  function handleEditClick() {
    navigate(`/edit-dish/${data.id}`);
  }

  useEffect(() => {
    if (data) {
      setTotalPrice(data.price);
    }
  }, [data]);

  function handleRemoveQty() {
    setQuantity(prevQuantity => {
      const newQuantity = Math.max(prevQuantity - 1, 1);
      setTotalPrice(newQuantity * data.price);
      return newQuantity;
    });
  }

  function handleAddQty() {
    setQuantity(prevQuantity => {
      const newQuantity = prevQuantity + 1;
      setTotalPrice(newQuantity * data.price);
      return newQuantity;
    });
  }

  return (
    <Container>
      <ActionLogo>
        <ButtonText icon={HeartStraight} onClick={handleNoFeature}/>
      </ActionLogo>
      <img
        onClick={() => handleDishClick(data.id)}
        src={imageURL}
        alt={data.title}

      />
      <Title>{data.title}<CaretRight/></Title>
      <Description>{data.description}</Description>
      <Price>{totalPrice.toLocaleString('pt-PT', { minimumFractionDigits: 2 })}€</Price>

      <CardFooter>
        <QuantityWrapper>
          <ButtonText icon={Minus} onClick={handleRemoveQty}/>
          <Quantity>{String(quantity).padStart(2, '0')}</Quantity>
          <ButtonText icon={Plus} onClick={handleAddQty}/>
        </QuantityWrapper>
        <Button title="incluir" onClick={handleNoFeature}></Button>
        <Button title="edit" onClick={handleEditClick}></Button>
      </CardFooter>
    </Container>
  )
}