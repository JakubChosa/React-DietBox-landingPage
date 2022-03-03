import {React, useState, useEffect} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import {animateScroll as scroll} from 'react-scroll'
import {
  Header,
  NavbarContainer,
  NavLogo,
  MenuIcon,
  NavLogoColor,
  NavMenu,
  NavMenuItem,
  NavMenuLink
 } from "./NavbarElements.js"

export default function Navbar(props) {
  const [scrollNav, setScrollNav] = useState('false')


  function changeNav(){
    if(window.scrollY >= 70){
      setScrollNav('true')
    } else {
      setScrollNav('false')
    }
  }


  useEffect(()=>{
    window.addEventListener('scroll', changeNav)

    return (window.addEventListener('scroll', changeNav))
  },[])

  const styles = {color: scrollNav !== "false" ? 'black' : "white"}

  function toggleHome(){
    scroll.scrollToTop()
  }
  return (
    <>
      <Header scroll={scrollNav}>
        <NavbarContainer>

          <NavLogo to='/' onClick={toggleHome}
            smooth={true} duration={500} spy={true} exact='true'scroll={scrollNav}>Order
            <NavLogoColor scroll={scrollNav}>Box</NavLogoColor>
          </NavLogo>
          <MenuIcon scroll={scrollNav}>
            <FontAwesomeIcon onClick={props.toggle} icon={ faBars }/>
          </MenuIcon>
          <NavMenu>

            <NavMenuItem >
              <NavMenuLink to="hero" smooth={true} duration={500} spy={true}
                exact='true' offset={-70} scroll={scrollNav}>Home</NavMenuLink>
            </NavMenuItem>
            <NavMenuItem>
              <NavMenuLink to="about" smooth={true} duration={500} spy={true}
                exact='true' offset={-120} scroll={scrollNav}>About</NavMenuLink>
            </NavMenuItem>
            <NavMenuItem>
              <NavMenuLink to="products" smooth={true} duration={500} spy={true}
                exact='true' offset={-60} scroll={scrollNav}>Products</NavMenuLink>
            </NavMenuItem>
            <NavMenuItem>
              <NavMenuLink to="testimonials" smooth={true} duration={500} spy={true}
                exact='true' offset={-90} scroll={scrollNav}>Testimonials</NavMenuLink>
            </NavMenuItem>

          </NavMenu>

        </NavbarContainer>

      </Header>
    </>
  )
}
