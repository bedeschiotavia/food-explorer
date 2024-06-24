/* eslint-disable react/prop-types */
import { Container } from './styles';

export function Button({ icon: Icon, title, cartCount, price, disabled, ...rest }) {
  return (
    <Container type="button" disabled={disabled} {...rest}>
      {Icon && <Icon />}
      <span>{title}</span>
      {cartCount && <span>({cartCount})</span>}
      {price && <span> ∙ {price}</span>}
    </Container>
  )
}