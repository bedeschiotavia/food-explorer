/* eslint-disable react/prop-types */
import { MagnifyingGlass, X } from "@phosphor-icons/react"

import { Container, MobileHeader, MobileNav, NavWrapper } from "./styles"

import { ButtonText } from "../ButtonText"
import { Input } from "../Input"

export function MobileMenu({setSearch, menuIsOpen, onCloseMenu}){

  return (
    <Container data-menu-is-open={menuIsOpen}>
      <MobileHeader>
        <ButtonText
          onClick={onCloseMenu}
          icon={X}
          title="Menu"/>
      </MobileHeader>
      <NavWrapper>
        <Input icon={MagnifyingGlass} placeholder="Search for dishes or ingredients"  setSearch={setSearch} />
        <MobileNav>
          <a href="">New dish</a>
          <a href="">Logout</a>
        </MobileNav>
      </NavWrapper>
    </Container>
  )
}