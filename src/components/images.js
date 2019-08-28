import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'
import styled from 'styled-components'
import { variables } from '../theme';

const Container = styled.main`
  padding: 0 ${variables.spacer * 2}rem;
  margin: 0 auto;
  margin-bottom: 0;

  @media ${variables.md} {
    padding: 0 ${variables.spacer * 4}rem;
    max-width: ${variables.spacer * 96}rem;
    margin-bottom: ${variables.spacer * 16}rem;
  }

  @media ${variables.lg} {
    max-width: ${variables.spacer * 128}rem;
  }
`

const Image = styled(Img)`
border-radius: ${variables.spacer * 0.25}rem;
margin-bottom: ${variables.spacer * 2}rem;

  &:last-child {
    margin-bottom: 0;
  }

  @media ${variables.md} {
    margin-bottom: ${variables.spacer * 4}rem;
  }
`

const Images = () => (
  <StaticQuery
    query={graphql`
      query allimgQuery {
        source: allFile(filter: { absolutePath: { regex: "/images/" }}, sort: {fields: relativePath}) {
          edges {
            node {
              childImageSharp {
                fluid(maxWidth: 2160, quality: 70) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    `}
    render={data => (
        <Container>
          {data.source.edges.map(({ node }, i) => (
              <Image key={i} fluid={node.childImageSharp.fluid} loading="auto" backgroundColor="rgba(240, 233, 233, 1)" />
          ))}
        </Container>
    )}
  />
)
export default Images