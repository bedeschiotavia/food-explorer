import { CaretDown, CaretLeft, UploadSimple } from '@phosphor-icons/react';
import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from '../../components/Button';
import { ButtonText } from '../../components/ButtonText';
import { DishItem } from '../../components/DishItem';
import { Footer } from '../../components/Footer';
import { Header } from '../../components/Header';
import { Input } from '../../components/Input';
import { Textarea } from '../../components/Textarea';
import { api } from '../../service/api';
import { Container, WrapperFileInput, WrapperTag } from './styles';

export function NewDish() {
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('');
  const [price, setPrice] = useState('');
  const [description, setDescription] = useState('');
  const [tags, setTags] = useState([]);
  const [newTag, setNewTag] = useState('');
  const [image, setImage] = useState(null);
  const [buttonDisabled, setButtonDisabled] = useState(true);
  const navigate = useNavigate();

  useEffect(()=> {
    function handleInputChange (){
      if (!title || !category || !price || !description || !image) {
        setButtonDisabled (true);
      } else {
        setButtonDisabled (false);
      }
    }
    handleInputChange();
  }, [title, category, price, description, image]);

  function handleAddTag() {
    if (!newTag) {
      return alert('Please add a name for the ingredient');
    }
    setTags(prevState => [...prevState, newTag]);
    setNewTag('');
  }

  function handleRemoveTag(deleted) {
    setTags(prevState => prevState.filter(tag => tag !== deleted));
  }

  function handleBack() {
    navigate(-1);
  }

  async function handleNewDish(event) {
    event.preventDefault();

    const formData = new FormData();

    if (!title || !price || !description || !image) {
      return alert('Please fill in all fields.');
    }

    if (newTag) {
      return alert("You left an ingredient but didn't add it! If yes, press the plus symbol to add it.");
    }

    formData.append('title', title);
    formData.append('category', category);
    formData.append('price', price);
    formData.append("tags", JSON.stringify(tags));
    formData.append('description', description);
    formData.append('image', image);

    try {
      await api.post('/dishes', formData);
      alert('Dish successfully created');
      navigate(-1);
    } catch (error) {
      console.error('Error creating dish:', error);
      alert('There was an error creating the dish. Please try again.');
    }
  }

  return (
    <>
      <Header />
      <Container>
        <Link to="/">
          <ButtonText icon={CaretLeft} title="back" onClick={handleBack} />
        </Link>
        <h1>New Dish</h1>
        <form onSubmit={handleNewDish}>
          <div className="row">
            <label>
              Dish Image
              <WrapperFileInput>
                <UploadSimple /> <span>Upload Image</span>
                <input id="dishimage" type="file" onChange={e => setImage(e.target.files[0])} />
              </WrapperFileInput>
            </label>
            <label>
              Name
              <Input
                placeholder="Ex.: Caesar Salad"
                type="text"
                onChange={e => setTitle(e.target.value)}
              />
            </label>
            <label>
              <p>Category</p>
              <select onChange={e => setCategory(e.target.value)}>
                <option value="">Select category</option>
                <option value="meal">Meal</option>
                <option value="dessert">Dessert</option>
                <option value="beverage">Beverage</option>
              </select>
              <CaretDown />
            </label>
          </div>
          <div className="row">
            <label>
              Ingredients
              <WrapperTag>
                {tags.map((tag, index) => (
                  <DishItem key={String(index)} value={tag} onClick={() => handleRemoveTag(tag)} />
                ))}
                <DishItem
                  isnew
                  placeholder="New tag"
                  onChange={e => setNewTag(e.target.value)}
                  value={newTag}
                  onClick={handleAddTag}
                />
              </WrapperTag>
            </label>
            <label>
              Price
              <Input
                placeholder="0,00€"
                onChange={e => setPrice(e.target.value)}
              />
            </label>
          </div>
          <label>
            Description
            <Textarea
              placeholder="Write briefly about the dish, its ingredients and composition"
              onChange={e => setDescription(e.target.value)}
            />
          </label>
          <Button
            title="Save"
            type="submit"
            disabled={buttonDisabled}
          />
        </form>
      </Container>
      <Footer />
    </>
  );
}
