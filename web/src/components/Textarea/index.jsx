/* eslint-disable react/prop-types */
import { Container } from './styles';

export function Textarea({ value, ...rest }) {
  return (
    <Container>
      <textarea {...rest}>{value}</textarea>
    </Container>
  )
}