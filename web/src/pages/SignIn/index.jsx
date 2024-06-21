import { useState } from 'react';

import { Button } from '../../components/Button';
import { Input } from '../../components/Input';

import { Link } from 'react-router-dom';

import { useAuth } from '../../hooks/auth';

import { Container } from "./styles";

import foodexplorerLogo from '../../assets/logo-foodexplorer.svg';

export function SignIn() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const { signIn } = useAuth();

    function handleSignIn (){
      signIn({ email, password });
    }

  return(
    <>
      <Container>
        <img src={foodexplorerLogo} alt="foodexplorer logo" />

        <form>
          <h1>Sign in</h1>
          <label>
            Email:
            <Input
            placeholder="Example: johndoe@example.com"
            type="text"
            onChange= {e=> setEmail(e.target.value)}
            />
          </label>
          <label>
            Password:
            <Input
            placeholder="minimum 6 characters"
            type="text"
            onChange= {e=> setPassword(e.target.value)}
            />
          </label>
          <Button title="login" onClick={handleSignIn}/>

          <Link to="/register">
            Create account
          </Link>
        </form>
      </Container>
    </>
  )
}