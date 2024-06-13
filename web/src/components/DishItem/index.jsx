/* eslint-disable react/prop-types */
import { Plus } from '@phosphor-icons/react'

import { Container } from './styles'

export function DishItem({ value, ...rest }) {
  return (
    <Container>
      <input
        type="text"
        value={value}
        {...rest}
      />

      <button
        type="button"
        className="button-add"
      >
        <Plus />
      </button>
    </Container>
  )
}