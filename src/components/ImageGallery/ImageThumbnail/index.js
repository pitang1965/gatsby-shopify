import React from 'react';
import { GatsbyImage } from 'gatsby-plugin-image';
import { ImageThumbnailWrapper } from './styles';

const ImageThumbnail = ({ isActive, onClick, image }) => {
  const handleClick = () => {
    onClick(image);
  };

  return (
    <ImageThumbnailWrapper onClick={handleClick} isActive={isActive}>
      <GatsbyImage image={image.localFile.childImageSharp.gatsbyImageData} alt="image thumbnail"/>
    </ImageThumbnailWrapper>
  );
};

export default ImageThumbnail;
