/* eslint-disable react/prop-types */
import { Container } from './styles';

export function ButtonText({ icon: Icon, title, ...rest }) {
  return (
    <Container type="button" {...rest}>
      {Icon && <Icon />}
      <span>{title}</span>
    </Container>
  )
}