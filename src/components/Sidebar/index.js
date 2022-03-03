import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark } from '@fortawesome/free-solid-svg-icons'
import { SidebarContainer, SidebarMenu, SideMenuLink, CloseIcon } from "./SidebarElements.js"

export default function Sidebar(props) {

  return (
    <>
      <SidebarContainer isOpen={props.isOpen} onClick={props.toggle}>
        <CloseIcon>
          <FontAwesomeIcon icon={ faXmark }/>
        </CloseIcon>

        <SidebarMenu>
          <SideMenuLink onClick={props.toggle} to="hero"
            smooth={true} duration={500} spy={true} exact='true'>Home</SideMenuLink>
          <SideMenuLink onClick={props.toggle} to="about"
            smooth={true} duration={500} spy={true} exact='true' offset={-80}>About</SideMenuLink>
          <SideMenuLink onClick={props.toggle} to="products"
            smooth={true} duration={500} spy={true} exact='true' offset={-60}>Products</SideMenuLink>
          <SideMenuLink onClick={props.toggle} to="testimonials"
            smooth={true} duration={500} spy={true} exact='true' offset={-80}>Testimonials</SideMenuLink>
        </SidebarMenu>
      </SidebarContainer>
    </>
  )
}
