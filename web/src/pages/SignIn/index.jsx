import { Button } from '../../components/Button';
import { Input } from '../../components/Input';

import { Container } from "./styles";

import foodexplorerLogo from '../../assets/logo-foodexplorer.svg';

export function SignIn() {
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
            />
          </label>
          <label>
            Password:
            <Input
            placeholder="minimum 6 characters"
            type="text"
            />
          </label>
          <Button title="login"/>

          <a href="">Create account</a>
        </form>
      </Container>
    </>
  )
}