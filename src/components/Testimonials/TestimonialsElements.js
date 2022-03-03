import styled from 'styled-components'

export const TestimonialsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 2em auto;

  @media screen and (min-width: 700px){
    flex-direction: row;
    justify-content: center;
    flex-wrap: wrap;
    margin: 3em auto 1em;
  }
`

export const TestimonialBox = styled.div`
  background: #f9f2eb;
  display:grid;
  place-items: center;
  position: relative;
  border-radius: 1em;
  padding: 1em;
  padding-top: 3em;
  margin: 2em;
  margin-bottom: 0;
  box-shadow: 0px 10px 10px rgba(0,0,0,0.1);

  @media screen and (min-width: 450px){
    padding: 1em;
    padding-left: 3em;

    @media screen and (min-width: 700px){
      padding: 1em;
      padding-top: 3em;
      width: 270px;
      margin: 1em;
      margin-bottom: 2em;
    }
  }
`

export const TestimonialImage = styled.img`
  position: absolute;
  left: 40px;
  top: -25px;
  object-fit: cover;
  border-radius: 50%;
  width: 60px;
  height: 60px;
  @media screen and (min-width: 450px){
    left: -30px;
    top: 10%;
  }
  @media screen and (min-width: 700px){
    left: 100px;
    top: -40px;
    width: 80px;
    height: 80px;
  }
`

export const TestimonialComment = styled.p`
  position: relative;
  color: #2d1701;
  margin: 0.5em auto;
`

export const Person = styled.p`
  font-size: 0.9rem;
  color: rgba(0,0,0,0.8);
`
