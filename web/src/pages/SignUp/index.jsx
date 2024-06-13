import { Button } from '../../components/Button';
import { Input } from '../../components/Input';

import { Container } from "./styles";

import foodexplorerLogo from '../../assets/logo-foodexplorer.svg';

export function SignUp() {
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
            />
          </label>
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
          <Button title="Create your account"/>

          <a href="">I already have an account</a>
        </form>
      </Container>
    </>
  )
}