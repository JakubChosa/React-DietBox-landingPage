import React from 'react'
import {
  HeroBg,
  HeroContainer,
  HeroTitle,
  HeroSubtitle,
  HeroLink
} from "./HeroElements"

export default function Hero() {
  return (
    <HeroBg id="hero">
      <HeroContainer>
        <HeroTitle>Wholesome Diet Plans For Everyone</HeroTitle>
        <HeroSubtitle>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry.
          Lorem Ipsum has been the industry is standard dummy text ever since the 1500s
        </HeroSubtitle>
        <HeroLink to="products" smooth={true} duration={500} spy={true}
          exact='true' offset={-60}>Check out!</HeroLink>
      </HeroContainer>
    </HeroBg>

  )
}
