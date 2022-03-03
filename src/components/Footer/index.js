import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import React from 'react'
import {
  FooterBackground,
  FooterContainer,
  FooterLinksWrapper,
  FooterLinkTitle,
  FooterLink,
  EmailContainer,
  EmailContact,
  EmailIcon,
  Copyright
} from "./FooterElements"

export default function Footer() {
  return (
    <FooterBackground>
      <FooterContainer>

        <FooterLinksWrapper>
          <FooterLinkTitle>Additional info</FooterLinkTitle>
          <FooterLink>how it works</FooterLink>
          <FooterLink>Contact</FooterLink>
          <FooterLink>Support</FooterLink>
          <FooterLink>Terms of Service</FooterLink>
        </FooterLinksWrapper>
        <FooterLinksWrapper>
          <FooterLinkTitle>Socials</FooterLinkTitle>
          <FooterLink>Facebookr</FooterLink>
          <FooterLink>Instagram</FooterLink>
          <FooterLink>Twitter</FooterLink>
        </FooterLinksWrapper>

      </FooterContainer>
      <EmailContainer>
        <EmailContact>Dietbox@gmail.com</EmailContact>
        <EmailIcon>
          <FontAwesomeIcon icon={faEnvelope} />
        </EmailIcon>
      </EmailContainer>
      <Copyright>DietBox @ 2022 All rights reserved.</Copyright>
    </FooterBackground>
  )
}
