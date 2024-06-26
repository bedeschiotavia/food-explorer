/* eslint-disable react/prop-types */
import { X } from "@phosphor-icons/react";

import { Container, MobileHeader, MobileNav, NavWrapper } from "./styles";

import { useAuth } from '../../hooks/auth';

import { USER_ROLE } from '../../utils/roles';

import { Link, useNavigate } from 'react-router-dom';

import { ButtonText } from "../ButtonText";

export function MobileMenu({menuIsOpen, onCloseMenu}){
  const { user } = useAuth();
  const { signOut } = useAuth();

  const navigate = useNavigate();

  function handleSignOut(){
    navigate("/");
    signOut();
  }

  return (
    <Container data-menu-is-open={menuIsOpen}>
      <MobileHeader>
        <ButtonText
          onClick={onCloseMenu}
          icon={X}
          title="Menu"/>
      </MobileHeader>
      <NavWrapper>
        <MobileNav>
          {[USER_ROLE.ADMIN].includes(user.role) &&
            <Link to="/">New dish</Link>}
          <Link onClick={handleSignOut}>Sing out </Link>
        </MobileNav>
      </NavWrapper>
    </Container>
  )
}