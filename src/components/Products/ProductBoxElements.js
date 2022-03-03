import styled from 'styled-components'

export const ProductsBackground = styled.div`
  background: #f9f2eb;
  z-index: -30;
`;
export const ProductsContainer = styled.div`
  justify-self: center;
  position: relative;
  top: 100px;
  max-width: 1000px;
  padding: 1em;
  display: grid;
  grid-template-columns: repeat(auto-fit, 280px);
  justify-content: center;
  gap: 30px;
  @media screen and (min-width: 650px) {
    grid-template-columns: repeat(auto-fit, 250px);
  }
  @media screen and (min-width: 960px) {
    gap: 50px;
  }
`
export const ProductBoxContainer = styled.div`
  background: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items:center;
  padding: 1em;
  box-shadow: 0px 0px 10px rgba(0,0,0,0.1);
`
export const ProductImage = styled.img`
  margin: 1em 0;
  border-radius: 10px;
  width: 90%;
  height: 250px;
  z-index: 1;
  object-fit: cover;
  @media screen and (min-width: 650px) {
    height: 200px;
  }
`
export const ProductName = styled.h3`
  text-align:center;
  font-size: 1.25rem;
  color: black;
  font-weight: 500;
`
export const ProductInfo = styled.button`
  color: #2d1701;
  width: 90%;
  background: none;
  font-weight: 600;
  border: 2px solid #2d1701;
  padding: 0.5em 1.2em;
  border-radius: 1.5em;
  margin-bottom: 1em;
  cursor: pointer;
  transition: all 0.2s;

  &:hover{
    color: white;
    background: #2d1701;
  }
`
export const ProductOrder = styled.button`
  color: #2d1701;
  width: 90%;
  background: #f3e6d8;
  font-weight: 600;
  padding: 0.5em 1.2em;
  border: none;
  border-radius: 1.5em;
  cursor: pointer;
`
