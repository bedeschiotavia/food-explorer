import { CaretDown, CaretLeft, UploadSimple } from '@phosphor-icons/react';
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Button } from '../../components/Button';
import { ButtonText } from '../../components/ButtonText';
import { DishItem } from '../../components/DishItem';
import { Footer } from '../../components/Footer';
import { Header } from '../../components/Header';
import { Input } from '../../components/Input';
import { Textarea } from '../../components/Textarea';
import { api } from '../../service/api';
import { Container, DishFooter, WrapperFileInput, WrapperTag } from './styles';

export function EditDish() {
  const [data, setData] = useState(null);

  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('');
  const [price, setPrice] = useState('');
  const [description, setDescription] = useState('');

  const [image, setImage] = useState(null);
  const [dishImage, setDishImage] = useState('');
  
  const [tags, setTags] = useState([]);
  const [newTag, setNewTag] = useState('');

  const params = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchDish() {
      const response = await api.get(`/dishes/${params.id}`);
      setData(response.data);
    }

    fetchDish();
  }, [params.id]);

  useEffect(() => {
    if (data) {
      setTitle(data.title);
      setCategory(data.category);
      setPrice(data.price);
      setDescription(data.description);
      setDishImage(`${api.defaults.baseURL}/files/${data.image}`);
      setTags(data.tags.map(tag => tag.name));
    }
  }, [data]);

  function handleBack() {
    navigate(-1);
  }

  async function handleRemove(){
    const confirm = window.confirm("Do you want to remove the dish")

    if(confirm) {
      await api.delete(`dishes/${params.id}`)
      navigate("/")
    }
  }

  function handleSetImage(event) {
    const file = event.target.files[0];
    setImage(file);

    const imagePreview = URL.createObjectURL(file);
    setDishImage(imagePreview);
  }

  function handleAddTag() {
    if (!newTag) {
      return alert('Please add a name for the ingredient');
    }
    if (tags.includes(newTag)) {
      return alert('Tag already exists');
    }
    setTags(prevState => [...prevState, newTag]);
    setNewTag('');
  }

  function handleRemoveTag(deleted) {
    setTags(prevState => prevState.filter(tag => tag !== deleted));
  }

  async function handleUpdateDish(event) {
  
    event.preventDefault();

    const formData = new FormData();

    if (newTag) {
      return alert("You left an ingredient but didn't add it! If yes, press the plus symbol to add it.");
    }

    formData.append('title', title);
    formData.append('category', category);
    formData.append('price', price);
    formData.append('description', description);
    formData.append("tags", JSON.stringify(tags));
    formData.append('image', image);

    console.log(image);

    try {
      await api.put(`/dishes/${params.id}`, formData,{
        headers: { "Content-Type": "multipart/form-data"},
      });
      alert('Dish successfully updated');
      navigate(`/dish/${params.id}`);
    } catch (error) {
      console.error('Error creating dish:', error);
      alert('There was an error creating the dish. Please try again.');
    }
  }

  return (
    <>
      <Header />
      {data && (
        <Container>
          <ButtonText icon={CaretLeft} title="Back" onClick={handleBack} />
          <h1>Edit Dish</h1>
          <form>
            <div className="row">
              <div>
                <img src={dishImage} alt="Dish Image" width="90" />
              </div>
              <label>
                Dish Image
                <WrapperFileInput>
                  <UploadSimple /> <span>Change Image</span>
                  <input type="file" onChange={handleSetImage} />
                </WrapperFileInput>
              </label>
              <label>
                Name
                <Input
                  value={title}
                  onChange={e => setTitle(e.target.value)}
                  type="text"
                />
              </label>
              <label>
                <p>Category</p>
                <select value={category} onChange={e => setCategory(e.target.value)}>
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
                  value={price}
                  onChange={e => setPrice(e.target.value)}
                  placeholder="0,00€"
                />
              </label>
            </div>
            <label>
              Description
              <Textarea
                defaultValue={description}
                onChange={e => setDescription(e.target.value)}
                placeholder="Write briefly about the dish, its ingredients and composition"
              />
            </label>
          </form>
          <DishFooter>
            <Button className="btn-dark" title="Exclude Dish" onClick={handleRemove}/>
            <Button title="Save Changes" onClick={handleUpdateDish} />
          </DishFooter>
        </Container>
      )}
      <Footer />
    </>
  );
}
