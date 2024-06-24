/* eslint-disable react/prop-types */
import { Plus, X } from '@phosphor-icons/react';

import { Container } from './styles';

export function DishItem({ isnew = false, value, onClick, ...rest }) {
  // Filter out isnew if it's false
  const inputProps = { ...rest };
  if (!isnew) {
    delete inputProps.isnew;
  }

  return (
    <Container isnew={isnew ? 'true' : undefined}>
      <input
        type="text"
        value={value}
        readOnly={!isnew}
        {...inputProps} // Spread the remaining props, excluding isnew if it's false
      />

      <button
        type="button"
        onClick={onClick}
        className={isnew ? 'button-add' : 'button-delete'}
      >
        {isnew ? <Plus /> : <X />}
      </button>
    </Container>
  )
}