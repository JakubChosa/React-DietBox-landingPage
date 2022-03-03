import styled from 'styled-components'

export const VideoContainer = styled.div`
  margin: 1em auto;
  border-radius: 10px;
  display-inline: block;
  z-index: 1;
  overflow: hidden;
  width: 80%;
  @media screen and (min-width: 650px) {
    height: 300px;
    margin: 1em 0;
    width: 40%;
  }
`
export const Video = styled.video`
  object-fit: cover;
  border-radius: 10px;
  width: 100%;
  @media screen and (min-width: 650px) {
    height: 300px;
  }
`

export const IconContainer = styled.div`
  max-width: 1000px;
  padding: 1em;
  margin: 1em auto;
  display: grid;
  gap: 1em;
  grid-template-columns: repeat(2, 100px);
  justify-content: center;
  @media screen and (min-width: 380px) {
    grid-template-columns: repeat(2, 150px);
  }
  @media screen and (min-width: 380px) {
    gap: 1.5em;
  }
  @media screen and (min-width: 700px) {
    grid-template-columns: repeat(auto-fit, 150px);
    gap: 1em;
    margin: 2em auto;
  }
`
export const IconBox = styled.div`
  display: flex;
  flex-direction: column;
`
export const AboutIcon = styled.div`
  font-size: 4rem;
  color: #2d1701;
  margin: 0;
`
export const IconSubtext = styled.span`
  font-size: 1rem;
  color: #2d1701;
  font-weight: 500;
  margin: 0;
`
