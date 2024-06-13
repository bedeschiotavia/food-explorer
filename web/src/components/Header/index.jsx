import { useState } from "react";
import foodexplorerLogo from "../../assets/foodesxplorer-mobilelogo.png";
import foodexplorerAdminLogo from "../../assets/logo-foodexplorer-admin.svg";

import { Button } from "../Button";
import { ButtonText } from "../ButtonText";
import { Input } from "../Input";
import { MobileMenu } from "../MobileMenu";

import { ButtonWrapper, Container, InputWrapper, Logo, LogoMobile, LogoWrapper, Logout, NavContainer } from "./styles";


import { List, MagnifyingGlass, SignOut } from "@phosphor-icons/react";


export function Header () {
  const [menuIsOpen, setMenuIsOpen] = useState(false)

  return(
    <>
      <MobileMenu
        menuIsOpen={menuIsOpen}
        onCloseMenu={()=> setMenuIsOpen(false)}
      />
      <Container>
      <NavContainer>
        
        <ButtonText icon={List} onClick={()=>setMenuIsOpen(true)}/>

        <LogoWrapper>
          <Logo>
            <img src={foodexplorerAdminLogo} alt="foodexplorer logo" />
          </Logo>
          <LogoMobile>
            <img src={foodexplorerLogo} alt="foodexplorer logo" />
          </LogoMobile>
          <span>admin</span>
        </LogoWrapper>

        <InputWrapper>
          <Input icon={MagnifyingGlass} placeholder="Search for dishes or ingredients" />
        </InputWrapper>

        <ButtonWrapper>
          <Button title="New dish"/>
          {/* <Button icon={Receipt} title="Orders" cartCount={3} /> */}
        </ButtonWrapper>

        <Logout>
          <SignOut/>
        </Logout>
      </NavContainer>
    </Container>
    </>
    
  )
}