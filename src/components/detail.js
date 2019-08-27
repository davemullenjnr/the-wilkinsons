import React, { Component } from 'react'
import styled from 'styled-components'
import { variables, typography } from '../theme';

const Container = styled.div`
  text-align: center;
  margin-bottom: ${variables.spacer * 4}rem;
  width: 100%;

  &:last-child {
    margin-bottom: 0;
  }

  @media ${variables.md} {
    width: 50%;
    font-size: ${typography.f5};
  }

  @media ${variables.lg} {
    width: 25%;
    margin-bottom: 0;
  }
`
const Title = styled.p`
  font-family: ${typography.fontBold};
  color: ${variables.light};

`
const Description = styled.p``

export class Detail extends Component {
  render() {
    const { title, description } = this.props;
    return (
      <Container>
        <Title>{title}</Title>
        <Description>{description}</Description>
      </Container>
    );
  }
}