import styled from 'styled-components'

export const ModalBackground = styled.main`
  position: fixed;
  top: 0;
  right: 0;
  height: 100vh;
  width: 100%;
  padding: 1em;
  z-index: 100;
  background: rgba(0,0,0,0.7);
  display: grid;
  place-items: center;
  transition: all 0.3s ease;
`
export const InfoContainer = styled.div`
  position: relative;
  width: 100%;
  max-width: 600px;
  padding: 1em;
  background: #fff;
  display: grid;
  place-items: center;
  transition: all 0.3s ease;
`
export const CloseIcon = styled.div`
  color: black;
  position: absolute;
  font-size: 2rem;
  margin: 0;
  padding: 0 0.5rem;
  top: 0.5rem;
  right: 1rem;
  cursor: pointer;
  transition: all 0.3s;
  &:hover {
    transform: rotate(90deg);
  }
`
export const InfoName = styled.h3`
  text-align:center;
  font-size: 1.25rem;
  color: #2d1701;
  font-weight: 600;
`

export const DetailsContainer = styled.div`
  background: white;
  max-width: 500px;
  margin: 2em auto;
  display: grid;
  justify-content:center;
  grid-template-columns: repeat(2, minmax(120px, 240px));
  grid-column-gap: 10px;
  grid-row-gap: 20px;
  @media (min-width: 380px){
    gap: 20px;
  }
`
// grid-column: ${({ width }) => width ? 'span1' : '1/span2'};
export const DetailsInfoWrapper = styled.div`
  grid-column: ${({ displayWidth }) => displayWidth ? 'span 1' : 'span 2'};
  width: 100%;
  max-width: 500px;
  background: #f3e6d8;
  border-radius: 1em;
  margin: 0 auto;
  display: flex;
  flex-direction: ${({ columnDisplay }) => columnDisplay ? 'column' : 'row'};
  justify-content: center;
  align-items: center;
  box-shadow: 0px 5px 10px rgba(0,0,0,0.1);
`

export const DetailsText = styled.p`
  font-size: 1rem;
  color: black;
  text-align: center;
  padding: 0.8em 0.5em;
  @media (min-width: 380px){
    padding: 1em 0.5em;
  }
`
export const OrderButton = styled.button`
  color: #f3e6d8;
  width: 150px;
  max-wdith: 200px;
  background: #2d1701;
  font-weight: 600;
  margin: 0 auto;
  font-size: 1.1rem;
  padding: 0.5em 1.2em;
  border: none;
  border-radius: 1.5em;
  cursor: pointer;
`
