import styled from "styled-components"

export const Container = styled.div`
  position:absolute;
  z-index:8;

  background-color: ${({ theme }) => theme.COLORS.DARK_400};
  width:100%;
  height:100vh;

  transform: translateX(-100%);
  transition: transform 0.3s ease-in-out;

  &[data-menu-is-open="true"]{
    transform: translateX(0);
  }
`
export const MobileHeader = styled.div`
  background-color: ${({ theme }) => theme.COLORS.DARK_700};
  color: ${({ theme }) => theme.COLORS.LIGHT_100};
  padding: 3rem 1.5rem 1rem 1.5rem ;
`
export const NavWrapper = styled.div`
  padding:1.5rem;
`

export const MobileNav = styled.div`
  padding:2rem 0.5rem;
  display: flex;
  flex-direction:column;

  > a {
    padding: 0.7rem 0;

    font-size:1.25rem;
    font-family: 'Poppins', sans-serif;
    color: ${({ theme }) => theme.COLORS.LIGHT_100};

    border-bottom: solid 1px ${({ theme }) => theme.COLORS.DARK_1000};
  }

`