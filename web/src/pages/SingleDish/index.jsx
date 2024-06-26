import { useEffect, useState } from 'react'

import { useNavigate, useParams } from 'react-router-dom'

import { api } from '../../service/api'

import { CaretLeft, Minus, Plus } from "@phosphor-icons/react"

import { Button } from "../../components/Button"
import { ButtonText } from "../../components/ButtonText"
import { Footer } from "../../components/Footer"
import { Header } from "../../components/Header"
import { Tag } from "../../components/Tag"

import { Container, DishContainer, DishDetails, Quantity, QuantityWrapper, SingleDishFooter, TagsWrapper } from "./styles"

export function SingleDish() {

  const [data, setData] = useState(null);

  const [quantity, setQuantity] = useState(1);
  const [totalPrice, setTotalPrice] = useState(0);

  const params = useParams();

  const navigate = useNavigate();

  const imageURL = data && `${api.defaults.baseURL}/files/${data.image}`

  useEffect(()=> {
    async function fetchDish(){
      const response = await api.get(`/dishes/${params.id}`);
      setData(response.data);
    }

    fetchDish();
  },[])

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

  function handleBack() {
    navigate(-1);
  }

  function handleEdit() {
    navigate(`/edit-dish/${params.id}`)
  }

  function handleNoFeature(){
    alert("Houston, we have a delay! This feature is still in the launch phase. Stay tuned for liftoff!");
  }

  return (
    <>
      <Header/>
      {
        data &&

        <Container>
        <ButtonText icon={CaretLeft} title="back" onClick={handleBack} />
        <DishContainer>
          <img src={imageURL}/>
          <DishDetails>
            <h1>{data.title}</h1>
            <p>{data.description}</p>
            {
              data.tags &&
              <TagsWrapper>
                {
                  data.tags.map(tag =>(
                    <Tag key={String(tag.id)} title={tag.name}/>
                  ))
                }
              </TagsWrapper>
            }
            
            <SingleDishFooter>
            <QuantityWrapper>
              <ButtonText icon={Minus} onClick={handleRemoveQty}/>
              <Quantity>{String(quantity).padStart(2, '0')}</Quantity>
              <ButtonText icon={Plus} onClick={handleAddQty}/>
            </QuantityWrapper>
            <Button
              title="include"
              price={totalPrice.toLocaleString('pt-PT', { minimumFractionDigits: 2 })}
              onClick={handleNoFeature}
              />
            <Button title="edit dish" onClick={handleEdit}/>
            </SingleDishFooter>
          </DishDetails>
        </DishContainer>
      </Container>
      }
      
      <Footer/>
    </>
  )

}