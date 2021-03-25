import React from 'react';
import {
  CollectionTileWrapper,
  CollectionTileContent,
  Title,
  Description,
} from './styles';

// gatsby-background-image(V1.5) をGatsby 3 & gatsby-plugin-image と使うための暫定対応
import { getImage } from 'gatsby-plugin-image';
import { convertToBgImage } from 'gbimage-bridge';
import { StyledLink } from '../StyledLink';

export const CollectionTile = ({
  destination,
  title,
  description,
  backgroundImage,
  sale,
}) => {
  const image = getImage(backgroundImage);
  const bgImage = convertToBgImage(image);

  return (
    <CollectionTileWrapper {...bgImage}>
      <CollectionTileContent>
        <div>
          <Title sale={sale}>{title}</Title>
          <Description sale={sale}>{description}</Description>
          <StyledLink to={destination}>今すぐ買う</StyledLink>
        </div>
      </CollectionTileContent>
    </CollectionTileWrapper>
  );
};
