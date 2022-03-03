import React, {useState} from 'react'
import { products } from '../../productsData.js'
import Modal from './Modal'
// import img from '../../assets/normal.jpg'
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
  console.log(props.img)
  return (
    <ProductBoxContainer>
      <ProductName>{props.diet}</ProductName>
      <ProductImage src={require('../../assets/' + props.img + '.jpg')}/>
      <ProductInfo onClick={() =>handleInfoOpen(props.id)}>More info!</ProductInfo>
      <ProductOrder onClick={(e) =>console.log('clicked')}>Order!</ProductOrder>
      {openInfo && <Modal items={productInfo} handleInfoOpen={handleInfoOpen}/>}
    </ProductBoxContainer>
  )
}
