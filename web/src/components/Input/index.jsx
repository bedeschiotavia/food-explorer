/* eslint-disable react/prop-types */
import { Container } from './styles';

export function Input({ setSearch, icon: Icon, ...rest }) {
  return (
    <Container>
      {Icon && <Icon />}
      <input
        onChange={(e) => setSearch(e.target.value)}
        {...rest}
      />
    </Container>
  );
}