import React from 'react'
import VideoMp4 from '../../assets/boxes.mp4'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendarDay, faUtensils, faTruck, faBurger } from '@fortawesome/free-solid-svg-icons'
import {
  SectionContainer,
  SectionTextWrapper,
  SectionTitle,
  SectionSubtitle
} from '../SectionElements'
import {
  VideoContainer,
  Video,
  IconContainer,
  IconBox,
  AboutIcon,
  IconSubtext
} from './AboutElements.js'

export default function About() {
  return (
    <SectionContainer id="about" sectionWrap>

      <SectionTextWrapper sectionWrap>
        <SectionTitle color={'#f3e6d8'}>About Us</SectionTitle>
        <SectionSubtitle>
           Lorem Ipsum is simply dummy text of the printing and typesetting industry.
           Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
           when an unknown printer took a galley of type and scrambled it to make a type specimen book.
           It has survived not only five centuries, but also the leap into electronic typesetting.
        </SectionSubtitle>
      </SectionTextWrapper>
      <VideoContainer>
        <Video autoPlay loop muted src={VideoMp4} type='video/mp4'/>
      </VideoContainer>
      <IconContainer>

        <IconBox>
          <AboutIcon>
            <FontAwesomeIcon icon={ faCalendarDay }/>
          </AboutIcon>
          <IconSubtext>You Choose Plan</IconSubtext>
        </IconBox>
        <IconBox>
          <AboutIcon>
            <FontAwesomeIcon icon={ faUtensils }/>
          </AboutIcon>
          <IconSubtext>We Cook</IconSubtext>
        </IconBox>
        <IconBox>
          <AboutIcon>
            <FontAwesomeIcon icon={ faTruck }/>
          </AboutIcon>
          <IconSubtext>We deliver</IconSubtext>
        </IconBox>
        <IconBox>
          <AboutIcon>
            <FontAwesomeIcon icon={ faBurger }/>
          </AboutIcon>
          <IconSubtext>You Enjoy!</IconSubtext>
        </IconBox>

      </IconContainer>
    </SectionContainer>
  )
}
