import { CaretDown, CaretLeft, UploadSimple } from '@phosphor-icons/react'
import { useState } from 'react'

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

  const [tags, setTags] = useState([])
  const [newTag, setNewTag] = useState("")

  function handleAddTag() {
    setTags(prevState=>[...prevState, newTag])
    setNewTag("")
  }

  function handleRemoveTag(deleted){
    setTags(prevState=> prevState.filter(tag => tag !==deleted))
  }

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
                {
                  tags.map((tag,index) =>(<DishItem key={String(index)}value={tag} onClick={()=>handleRemoveTag(tag)}/>))
                }
                <DishItem
                  isNew
                  placeholder="New tag"
                  onChange={e => setNewTag(e.target.value)}
                  value={newTag}
                  onClick={handleAddTag}
                  />
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