import { CaretDown, CaretLeft, UploadSimple } from '@phosphor-icons/react'

import { Button } from '../../components/Button'
import { ButtonText } from '../../components/ButtonText'
import { DishItem } from '../../components/DishItem'
import { Footer } from '../../components/Footer'
import { Header } from '../../components/Header'
import { Input } from '../../components/Input'
import { Textarea } from '../../components/Textarea'

import { Link } from 'react-router-dom'

import { Container, WrapperFileInput, WrapperTag } from './styles'

export function NewDish() {

  return (
    <>
      <Header/>
      <Container>
        <Link to="/">
          <ButtonText icon={CaretLeft} title="back"/>
        </Link>
        <h1>New Dish</h1>
        <form>
          <div className="row">
            <label>
              Dish Image
              <WrapperFileInput>
                <UploadSimple/> <span>Upload Image</span>
                <input id="dishimage"type="file"/>
              </WrapperFileInput>
            </label>
            <label>
              Name
              <Input
              placeholder="Ex.: Ceasar Salad"
              type="text"
              />
            </label>
            <label>
              <p>Category</p>
              <select>
                <option value="meal">Meal</option>
                <option value="dessert">Dessert</option>
              </select>
              <CaretDown/>
            </label>
          </div>
          <div className="row">
            <label>
              Ingredients
              <WrapperTag>
                <DishItem value="Naan Bread"/>
                <DishItem placeholder="Add"/>
              </WrapperTag>
            </label>
            <label>
              Price
              <Input placeholder="0,00€"/>
            </label>
          </div>
          
          <label>
            Description
            <Textarea placeholder="Write briefly about the dish, its ingredients and composition"/>
          </label>
          <Button title="Save"/>
        </form>
      </Container>
      <Footer/>
    </>
  )
  
}