import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark } from '@fortawesome/free-solid-svg-icons'
import {
  ModalBackground,
  InfoContainer,
  CloseIcon,
  InfoName,
  DetailsContainer,
  DetailsInfoWrapper,
  DetailsText,
  OrderButton
} from "./MoreInfoElements.js"

export default function Modal(props) {
  const { items:{details, name}, handleInfoOpen } = props
  return (
    <>
    <ModalBackground onClick={handleInfoOpen}>
      <InfoContainer>

        <InfoName>{name} Diet</InfoName>
        <DetailsContainer>
          <CloseIcon>
            <FontAwesomeIcon icon={ faXmark }/>
          </CloseIcon>

          <DetailsInfoWrapper displayWidth>
            <DetailsText >Price: {details.price}$</DetailsText>
          </DetailsInfoWrapper>
          <DetailsInfoWrapper displayWidth>
            <DetailsText>calories: {details.calories}</DetailsText>
          </DetailsInfoWrapper>
          <DetailsInfoWrapper>
            <DetailsText>carbs: {details.carbs}</DetailsText>
            <DetailsText>fats: {details.fats}</DetailsText>
            <DetailsText>protein: {details.protein}</DetailsText>
          </DetailsInfoWrapper>
          <DetailsInfoWrapper columnDisplay>
            <DetailsText>{'description'.toUpperCase()}</DetailsText>
            <DetailsText>{details.description}</DetailsText>
          </DetailsInfoWrapper>

        </DetailsContainer>
        <OrderButton>Order!</OrderButton>

      </InfoContainer>
    </ModalBackground>
    </>
  )
}
