import foodexplorerFooterLogo from "../../assets/foodexplorer-footerlogo.svg"

import { Container, FooterContainer } from "./styles"

export function Footer() {
  return(
    <Container>
      <FooterContainer>
        <img src={foodexplorerFooterLogo} alt="foodexplorer Logo"/>
        <p>© 2024 - All rights reserved</p>
      </FooterContainer>
    </Container>
  )
}