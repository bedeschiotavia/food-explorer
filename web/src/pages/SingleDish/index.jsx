import { useEffect, useState } from 'react'

import { useNavigate, useParams } from 'react-router-dom'

import { api } from '../../service/api'

import { CaretLeft, Minus, Plus, Receipt } from "@phosphor-icons/react"

import { Button } from "../../components/Button"
import { ButtonText } from "../../components/ButtonText"
import { Footer } from "../../components/Footer"
import { Header } from "../../components/Header"
import { Tag } from "../../components/Tag"

import { Container, DishContainer, DishDetails, Quantity, QuantityWrapper, SingleDishFooter, TagsWrapper } from "./styles"

export function SingleDish() {

  const [data, setData] = useState(null);

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

  function handleBack() {
    navigate(-1);
  }

  function handleEdit() {
    navigate(`/edit-dish/${params.id}`)
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
              <ButtonText icon={Minus}/>
              <Quantity>01</Quantity>
              <ButtonText icon={Plus}/>
            </QuantityWrapper>
            <Button icon={Receipt} title="order" price="25,00€"/>
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