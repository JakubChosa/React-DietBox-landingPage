import React from 'react'
import ProductBox from "./ProductBox"
import {ProductsBackground,ProductsContainer} from './ProductBoxElements'
import {
  SectionContainer,
  SectionTextWrapper,
  SectionTitle,
  SectionSubtitle
} from '../SectionElements'
import { products } from '../../productsData'

export default function Products() {
  const productsElements = products.map(product => (
      <ProductBox
        key={product.id}
        id={product.id}
        img={product.img}
        diet={product.name}
      />
  ))

  return (
    <ProductsBackground>
      <SectionContainer id="products">

        <SectionTextWrapper prodcutsDisplay>
          <SectionTitle color={'#fff'}>Our Products</SectionTitle>
          <SectionSubtitle>Lorem Ipsum is simply dummy text of the printing and</SectionSubtitle>
        </SectionTextWrapper>

        <ProductsContainer>
          {productsElements}
        </ProductsContainer>
      </SectionContainer>
    </ProductsBackground>
  )
}
