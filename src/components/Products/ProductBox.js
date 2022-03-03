import React, {useState} from 'react'
import { products } from '../../productsData.js'
import Modal from './Modal'
import {
  ProductBoxContainer,
  ProductImage,
  ProductName,
  ProductInfo,
  ProductOrder
} from './ProductBoxElements'

export default function ProductBox(props) {
  const [openInfo, setOpenInfo] = useState(false)
  const [productInfo, setProductInfo] = useState(null)
  function handleInfoOpen(id){
    const thisProduct = products.find(product => product.id === id)
    setOpenInfo(prevState => !prevState)
    setProductInfo(thisProduct)
  }
  return (
    <ProductBoxContainer>
      <ProductName>{props.diet}</ProductName>
      <ProductImage src={props.img}/>
      <ProductInfo onClick={() =>handleInfoOpen(props.id)}>More info!</ProductInfo>
      <ProductOrder onClick={(e) =>console.log('clicked')}>Order!</ProductOrder>
      {openInfo && <Modal items={productInfo} handleInfoOpen={handleInfoOpen}/>}
    </ProductBoxContainer>
  )
}
