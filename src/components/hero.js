// core
import React from 'react'
import styled from 'styled-components'
import heroImage from '../assets/images/header-background.jpg'
import { variables, typography } from '../theme'

//svg
import MrAndMrs from '../assets/svg/mrAndMrs'
import downArrow from '../assets/svg/arrow-thin.svg'

// styles

const HeroImage = styled.div`
  background-image: url(${heroImage});
  background-color: ${variables.green};
  opacity: 1;
  padding: 0;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin: 0 auto;
  text-align: center;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: top center;
  height: 66vh;
  min-height: ${variables.spacer * 40}rem;
  overflow: hidden;

  @media ${variables.md} {
    height: 80vh;
  }

  @media ${variables.lg} {
    height: 100vh;
  }
`

const HeroContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: ${variables.spacer * 40}rem;
  padding: ${variables.spacer * 4}rem;
`

const Introducing = styled.p`
  text-align: center;
  color: ${variables.light};
  font-size: ${typography.f7};
  font-family: ${typography.fontBold};
  text-transform: uppercase;
  letter-spacing: ${variables.spacer}rem;
  margin-bottom: ${variables.spacer * 3}rem;

  @media ${variables.md} {
    font-size: ${typography.f6};
    margin-bottom: ${variables.spacer * 4}rem;
    letter-spacing: ${variables.spacer * 1.5}rem;
  }

  @media ${variables.lg} {
    font-size: ${typography.f5};
    margin-bottom: ${variables.spacer * 5}rem;
    letter-spacing: ${variables.spacer * 2}rem;
  }
`

const MrAndMrsContainer = styled.div`
  width: 70vw;
  overflow: visible;
  margin-bottom: ${variables.spacer * 3}rem;

  @media ${variables.md} {
    width: 60vw;
    margin-bottom: ${variables.spacer * 4}rem;
  }

  @media ${variables.lg} {
    width: 50vw;
    margin-bottom: ${variables.spacer * 5}rem;
  }
`

const ArrowLink = styled.a``

const DownArrow = styled.img`
  width: ${variables.spacer * 3}rem;

  @media ${variables.md} {
    
  }

  @media ${variables.lg} {
    width: ${variables.spacer * 4}rem;
  }
`

// render
const Hero = () => {
  return (
    <>
      <HeroImage>
        <HeroContainer>
          <Introducing>Introducing</Introducing>
          <MrAndMrsContainer>
            <MrAndMrs />
          </MrAndMrsContainer>
          <ArrowLink href="#intro">
            <DownArrow src={downArrow} />
          </ArrowLink>
        </HeroContainer>
      </HeroImage>
      <div name="intro" />
    </>
  )
}

export default Hero
