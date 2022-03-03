import styled from 'styled-components'
import {Link as LinkS} from 'react-scroll'
import img from '../../assets/food2.jpg'

export const HeroBg = styled.section`
  position: relative;
  top: -70px;
  width: 100%;
  height: 100vh;
  /* max-height: 600px; */
  display: flex;
  justify-content: center;
  align-items: center;
  background: #241200;
  background-image: url(${img});
  background-size: cover;
`;
export const HeroContainer = styled.section`
  max-width: 900px;
  text-align: center;
  display: flex;
  margin: 0 auto;
  padding: 1em;
  padding-top: 70px;
  flex-direction: column;
  justify-content: center;
  align-item:center;
  @media screen and (min-width:650px){
    padding: 1em 2em;
  }
`;

export const HeroTitle = styled.section`
  color: white;
  font-size: 2.2rem;
  margin-bottom: 0.5em;

  @media screen and (min-width:650px){
    font-size: 2.5rem;
    margin-bottom: 0;
  }
`;
export const HeroSubtitle = styled.section`
  font-size: 1rem;
  color: white;
  margin: 1em;

  @media screen and (min-width:650px){
    font-size: 1.25rem;
  }
`
export const HeroLink = styled(LinkS)`
  /* background:#f3e6d8; */

  max-width: 200px;
  margin: 1em auto;
  color: #f3e6d8;
  border: 2px solid #f3e6d8;
  text-align: center;
  display: inline-block;
  font-weight: 600;
  cursor: pointer;
  padding: 0.75em 2.5em;
  border-radius: 0.5em;

  &:hover{
    background: white;
    color: #2d1701;
  }
`
