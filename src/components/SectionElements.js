import styled from 'styled-components'

export const SectionContainer = styled.section`
  position: ${({testimonialsDisplay}) => (testimonialsDisplay ? 'relative' : 'initial')};
  top: 130px;
  max-width: 1100px;
  margin: 0 auto;
  padding: 0 1em;
  display: flex;
  flex-direction: column;
  aling-items: center;
  justify-content: center;
  text-align:center;

  @media screen and (min-width: 650px){
    padding: 0 2em;
    flex-wrap: ${({ sectionWrap }) => sectionWrap ? 'wrap' : 'none'};
    flex-direction: ${({ sectionWrap }) => sectionWrap ? 'row' : 'column'};
  }
`;
//   ${props => props.wrap === 'wrap' && css`
//   flex-wrap: wrap;
//   flex-direction: row;
// `}

export const SectionTextWrapper = styled.div`
  position: ${({prodcutsDisplay}) => (prodcutsDisplay ? 'relative' : 'unset')};
  top: 50px;
  padding: 1em;
  display: flex;
  flex-direction: column;
  @media screen and (min-width: 650px) {
    width: ${({sectionWrap}) => (sectionWrap ? '50%' : 'auto')};
    margin-right: ${({sectionWrap}) => (sectionWrap ? 'auto' : '0')};
  }
`;
export const SectionTitle = styled.h2`
  position: relative;
  color: #2d1701;
  font-size: 1.6rem;
  margin-bottom: 0.5em;
  z-index: 1;

  &:before{

    content: '';
    position: absolute;
    width: 20%;
    top: 20px;
    height: 10px;
    z-index: -1;
    background-color: ${({ color }) => (color)};
  }

  @media screen and (min-width: 650px){
    font-size: 2rem;
    &:before{
      width: 12%;
      height: 15px;
      top: 25px;
    }
  }
`;
export const SectionSubtitle = styled.p`

`;
