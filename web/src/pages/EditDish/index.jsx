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

  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");

  const [image, setImage] = useState(null);
  const [dishImage, setDishImage] = useState("");
  
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

  async function handleUpdateDish() {
  
    const data = {
      title,
      category,
      price,
      description,
    };

    const formData = new FormData ();
    formData.append('image', image);

    console.log(image, formData);
  
    try {
      // Then, update the rest of the dish data
      await api.put(`/dishes/${params.id}`, data);
      alert('Dish successfully updated');
      navigate(-1);
    } catch (error) {
      console.error('Error updating dish:', error);
      alert('There was an error updating the dish. Please try again.');
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
            <Button className="btn-dark" title="Exclude Dish" />
            <Button title="Save Changes" onClick={handleUpdateDish} />
          </DishFooter>
        </Container>
      )}
      <Footer />
    </>
  );
}
