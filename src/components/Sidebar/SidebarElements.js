import styled from 'styled-components'
import { Link as LinkS } from 'react-scroll'

export const SidebarContainer = styled.aside`
  position: fixed;
  top: 0;
  right: 0;
  height: 100vh;
  width: 100%;
  background: white;
  z-index: 100;
  display: grid;
  place-items: center;
  transition: all 0.3s ease;
  opacity: ${({ isOpen }) => (isOpen ? '1' : '0')};
  top: ${({ isOpen }) => (isOpen ? '0' : '-100%')};
  @media screen and (min-width:650px) {
    display: none;
  }
`;
export const CloseIcon = styled.div`
  color: black;
  position: absolute;
  font-size: 2rem;
  margin: 0;
  top: 1rem;
  right: 1rem;
  cursor: pointer;
  transition: all 0.3s;
  &:hover {
    transform: rotate(90deg);
  }
  @media (min-width: 650px){
    display: none;
  }
`
export const SidebarMenu = styled.div`
  width: 100%;
  display: grid;
  place-items: center;
`;

export const SideMenuLink = styled(LinkS)`
  display: block;
  padding: 0.6em 1.5em;
  text-align: center;
  border-radius: 5px;
  cursor: pointer;
  color: #000;
  font-size: 1.5rem;
  transition: all 0.2s ease-in-out;

  &:hover {
    background: #f3e6d8;
    position: relative;
    transform: scale(1.1);
  }
`
