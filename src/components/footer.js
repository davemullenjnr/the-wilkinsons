// core
import React, { Component } from 'react'
import styled from 'styled-components'
import upArrow from '../assets/svg/arrow-thick.svg'

// theme
import { variables, typography } from '../theme'

// styles
const Container = styled.div`
  padding: ${variables.spacer * 4}rem;
`

const Flex = styled.div`
  display: flex;
  flex-direction: column-reverse;
  align-items: center;

  @media ${variables.md} {
    flex-direction: row;
    justify-content: space-between;
  }
`

const Credit = styled.p`
  font-family: ${typography.fontSans};
  color: ${variables.dark};
  font-size: ${typography.f6};

  @media ${variables.md} {
    font-size: ${typography.f6};
  }

  > a {
    text-decoration: none;
    border-bottom: 1px solid ${variables.light};
    transition: ease .2s;

    &:hover {
      color: ${variables.light};
    }
  }
`
const BackToTop = styled.a`
  font-family: ${typography.fontSans};
  color: ${variables.dark};
  font-size: ${typography.f6};
  text-decoration: none;
  display: flex;
  align-items: center;
  margin-bottom: ${variables.spacer * 16}rem;

  @media ${variables.md} {
    font-size: ${typography.f6};
    margin-bottom: 0;
  }

  &:after {
    content: "";
    background: url(${upArrow}) no-repeat;
    background-size: 50%;
    width: 20px;
    height: 20px;
    transform: rotate(180deg) translateY(2px);
    transition: ease-in-out .2s;
  }

  &:hover:after {
      transform: rotate(180deg) translateY(8px);
    }
`

// render
export default class Footer extends Component {
  render() {
    return (
      <Container>
        <Flex>
          <Credit>
            Photography and website by <a href="https://davemullenjnr.co.uk">Dave Mullen Jnr</a>
          </Credit>
          <BackToTop href="#">Back to top</BackToTop>
        </Flex>
      </Container>
    )
  }
}
