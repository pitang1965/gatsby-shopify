import React from 'react';
import { CardWrapper, Title, Description } from './styles';
import { graphql, useStaticQuery } from 'gatsby';
import BackgroundImage from 'gatsby-background-image';
import PropTypes from 'prop-types';

const CardBackground = ({ className, children, path }) => {
  const data = useStaticQuery(
    graphql`
      query {
        allFile {
          edges {
            node {
              relativePath
              childImageSharp {
                fluid(maxWidth: 1200) {
                  ...GatsbyImageSharpFluid_withWebp
                }
              }
            }
          }
        }
      }
    `
  );

  const edge = data.allFile.edges.find(edge => edge.node.relativePath === path);
  const bacgroundStack = [
    edge.node.childImageSharp.fluid,
  ];

  return (
    <BackgroundImage
      // Tag="section"
      className={className}
      fluid={bacgroundStack}
      // backgroundColor={`#040e18`}
      // title="Art-Directed Fullscreen Background"
      // id="adfullscreenbg"
      // role="img"
      // aria-label="Art-Directed Fullscreen Background"
      // preserveStackingContext={true}
    >
      {children}
    </BackgroundImage>
  );
};

const Card = ({ id, isActive, onClick, title, description, path }) => {
  const handleClick = () => {
    onClick(id);
  };

  return (
    <CardWrapper onClick={handleClick} isActive={isActive}>
      <CardBackground path={path}>
        <Title isActive={isActive}>{title}</Title>
        <Description isActive={isActive}>{description}</Description>
      </CardBackground>
    </CardWrapper>
  );
};

Card.propTypes = {
  id: PropTypes.number.isRequired,
  isActive: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  path: PropTypes.string.isRequired,
};

export default Card;
