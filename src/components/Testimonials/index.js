import React from 'react'
import person1 from '../../assets/person1.jpg'
import person2 from '../../assets/person2.jpg'
import person3 from '../../assets/person3.jpg'
import {
  SectionContainer,
  SectionTextWrapper,
  SectionTitle,
  SectionSubtitle
} from '../SectionElements'
import {
  TestimonialsContainer,
  TestimonialBox,
  TestimonialImage,
  TestimonialComment,
  Person,
} from './TestimonialsElements.js'

export default function About() {
  return (
      <SectionContainer id="testimonials" testimonialsDisplay>

        <SectionTextWrapper>
          <SectionTitle color={'#f3e6d8'}>#Team OrderBox</SectionTitle>
          <SectionSubtitle>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor.
          </SectionSubtitle>
        </SectionTextWrapper>

        <TestimonialsContainer>
          <TestimonialBox>
            <TestimonialImage src={person1}/>
            <TestimonialComment>
              "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor.
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor."
            </TestimonialComment>
            <Person>-influencer</Person>
          </TestimonialBox>
          <TestimonialBox>
            <TestimonialImage src={person2}/>
              <TestimonialComment>
                "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor.
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor."
              </TestimonialComment>
            <Person>-influencer</Person>
          </TestimonialBox>
          <TestimonialBox>
            <TestimonialImage src={person3}/>
              <TestimonialComment>
                "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor.
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor."
              </TestimonialComment>
            <Person>-influencer</Person>
          </TestimonialBox>
        </TestimonialsContainer>

      </SectionContainer>
  )
}
