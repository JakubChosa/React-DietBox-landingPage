import styled from 'styled-components'
import { Link as LinkS } from 'react-scroll'


export const Header = styled.header`
  background: ${({scroll}) => (scroll !== 'false' ? '#fff' : 'none')};
  box-shadow: 0px 10px 10px ${({scroll}) => (scroll !== 'false' ? 'rgba(0,0,0,0.1)' : 'rgba(0,0,0,0)')};
  height: 70px;
  /* margin-top: -80px; */
  position: sticky;
  top: 0;
  z-index: 10;
  transition: all 0.8s ease;

`;
export const NavbarContainer = styled.nav`
  max-width: 1100px;
  margin: 0 auto;
  padding: 0 1em;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 70px;
  z-index: 1;

  @media screen and (min-width: 650px){
    padding: 0 2em;
  }
`;

export const NavLogo = styled(LinkS)`
  font-size: 1.6rem;
  color: ${({scroll}) => (scroll !== 'false' ? '#000' : '#fff')};
  font-weight: 400;
  cursor: pointer;
  text-decoration: none;
`;
export const NavLogoColor = styled.span`
  font-weight: 600;
  color: ${({scroll}) => (scroll !== 'false' ? '#2d1701' : '#f3e6d8')};
`;
export const MenuIcon = styled.div`
  font-size: 1.6rem;
  color: ${({scroll}) => (scroll !== 'false' ? '#000' : '#fff')};
  cursor: pointer;
  transition: all 0.3s;
  &:hover {
    transform: rotate(90deg);
  }
  @media (min-width: 650px){
    display: none;
  }
`;
export const NavMenu = styled.ul`
  background: none;
  display: flex;
  justify-content: center;
  align-items: center;
  list-style: none;

  @media screen and (max-width: 650px){
    display: none;
  }
`
export const NavMenuItem = styled.li`
  display: grid;
  place-items: center;
`
export const NavMenuLink= styled(LinkS)`
  color: ${({scroll}) => (scroll !== 'false' ? 'black' : 'white')};
  padding: 0.5em 1em;
  font-weight: bold;
  border-radius: 5px;
  cursor: pointer;
  transition: all 0.3s;
  &:hover{
    background:#2d1701;
    color: #f3e6d8;
    transform: scale(1.1);
  }
`;
