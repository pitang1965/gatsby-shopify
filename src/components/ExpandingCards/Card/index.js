import React from 'react';
import { CardWrapper, Title, Description, StyledBackground } from './styles';
import { graphql, useStaticQuery } from 'gatsby';

// gatsby-background-image(V1.5) をGatsby 3 & gatsby-plugin-image と使うための暫定対応
import { getImage } from 'gatsby-plugin-image';
import { convertToBgImage } from 'gbimage-bridge';
import PropTypes from 'prop-types';

const CardBackground = ({ children, path }) => {
  const data = useStaticQuery(
    graphql`
      {
        allFile {
          edges {
            node {
              relativePath
              childImageSharp {
                gatsbyImageData(
                  width: 1200
                  placeholder: BLURRED
                  formats: [AUTO, WEBP, AVIF]
                )
              }
            }
          }
        }
      }
    `
  );

  const edge = data.allFile.edges.find(edge => edge.node.relativePath === path);
  const image = getImage(edge.node.childImageSharp);
  const bgImage = convertToBgImage(image);

  return (
    <StyledBackground {...bgImage}>
      {children}
    </StyledBackground>
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
