import { useState } from 'react';
import { Button } from '../../components/Button';
import { Input } from '../../components/Input';

import { Link, useNavigate } from 'react-router-dom';

import { api } from "../../service/api";

import { Container } from "./styles";

import foodexplorerLogo from '../../assets/logo-foodexplorer.svg';

export function SignUp() {
  const [ name, setName ] = useState("");
  const [ email, setEmail ] = useState("");
  const [ password, setPassword ] = useState("");

  const navigate = useNavigate();

  function handleSignUp() {
    if(!name || !email || !password) {
      return alert ("Please, fill in all the fields");
    }

    if (password.length < 6) {
      return alert ("The password must have at least 6 characters");
    }

    api.post("/users", { name, email, password })
      .then(()=>{
        alert ("User successfully registered");
        navigate("/");
      })
      .catch(error => {
        if(error.response){
          alert(error.response.data.message);
        }else {
          alert("Something went wrong. Try later");
        }
      })
  }

  return(
    <>
      <Container>
        <img src={foodexplorerLogo} alt="foodexplorer logo" />

        <form>
          <h1>Create your account</h1>
          <label>
            Name:
            <Input
            placeholder="Example: John Doe"
            type="text"
            onChange={e=> setName(e.target.value)}
            />
          </label>
          <label>
            Email:
            <Input
            placeholder="Example: johndoe@example.com"
            type="text"
            onChange={e=> setEmail(e.target.value)}
            />
          </label>
          <label>
            Password:
            <Input
            placeholder="minimum 6 characters"
            type="text"
            onChange={e=> setPassword(e.target.value)}
            />
          </label>
          <Button title="Create your account" onClick={handleSignUp}/>

          <Link to="/">I already have an account</Link>
        </form>
      </Container>
    </>
  )
}