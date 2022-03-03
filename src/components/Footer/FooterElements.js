import styled from 'styled-components'

export const FooterBackground = styled.footer`
  background: #2d1701;
  color: #fff;
  padding: 1em;
  margin-top: 150px;
  /* overflow: hidden; */
`

export const FooterContainer = styled.div`
  max-width: 1100px;
  margin: 0 auto;
  padding: 0 1em;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media screen and (min-width: 520px){
    flex-direction: row;
  }
`

export const FooterLinksWrapper = styled.div`
  margin: 0 auto;
  padding: 1em;
  max-width: 250px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`

export const FooterLinkTitle = styled.h3`
  font-size: 1.25rem;
  color: #fff;
  padding: 0.5em;
  text-align: center;
  margin: 0;
  font-weight: 500;
`

export const FooterLink = styled.p`
  font-size: 1rem;
  color: #fff;
  padding: 0.5em;
  cursor: pointer;

  &:hover {
    color: rgba(255,255,255,0.7);
  }
`

export const SocialIcon= styled.div`
  font-size: 1.5rem;
  color: #fff;
  cursor: pointer;
  transition: all 0.3s;

  &:hover & {
    transform: scale(1.1);
  }
`

export const EmailContainer = styled.div`
  margin: 1em auto;
  max-width: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
  @media screen and (min-width: 1000px){
    position: relative;
    top: -150px;
    margin: 0 auto;
  }
`

export const EmailContact = styled.p`
  font-size: 1.25rem;
  color: #fff;
  padding: 0.5em;
  font-weight: 500;
  cursor: pointer;

  &:hover {
    color: rgba(255,255,255,0.7);
  }
`

export const EmailIcon = styled.div`
  font-size: 1.25rem;
  color: #fff;
`

export const Copyright = styled.p`
  font-size: 1rem;
  color: rgba(255,255,255,0.7);
  /* margin: 1em; */
  text-align: center;
`
