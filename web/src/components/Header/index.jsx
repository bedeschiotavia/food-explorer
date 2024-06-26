import { useState } from "react";
import foodexplorerLogo from "../../assets/foodesxplorer-mobilelogo.png";
import foodexplorerAdminLogo from "../../assets/logo-foodexplorer-admin.svg";

import { Button } from '../Button';
import { ButtonText } from "../ButtonText";
import { Input } from "../Input";
import { MobileMenu } from "../MobileMenu";

import { useAuth } from '../../hooks/auth';

import { Link, useNavigate } from 'react-router-dom';

import { ButtonWrapper, Container, InputWrapper, Logo, LogoMobile, LogoWrapper, Logout, NavContainer } from "./styles";


import { List, MagnifyingGlass, Receipt, SignOut } from "@phosphor-icons/react";


// eslint-disable-next-line react/prop-types
export function Header ({setSearch}) {
  const [menuIsOpen, setMenuIsOpen] = useState(false)

  const { signOut } = useAuth()
  const navigate = useNavigate()

  function handleSignOut(){
    navigate("/")
    signOut()
  }

  function handleNoFeature(){
    alert("Houston, we have a delay! This feature is still in the launch phase. Stay tuned for liftoff!")
  }

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
            <Link to="/"><img src={foodexplorerAdminLogo} alt="foodexplorer logo" /></Link>
          </Logo>
          <LogoMobile>
            <Link><img src={foodexplorerLogo} alt="foodexplorer logo" /></Link>
          </LogoMobile>
          <span>admin</span>
        </LogoWrapper>

        <InputWrapper>
          <Input
            icon={MagnifyingGlass}
            placeholder="Search for dishes or ingredients"
            setSearch={setSearch}
          />
        </InputWrapper>

        <ButtonWrapper>
          <Link to="/new"><Button title="New Dish"/></Link>
          <Button icon={Receipt} title="Order" onClick={handleNoFeature}/>
        </ButtonWrapper>
        
        <Logout onClick={handleSignOut}>
          <SignOut/>
        </Logout>
      </NavContainer>
    </Container>
    </>
    
  )
}