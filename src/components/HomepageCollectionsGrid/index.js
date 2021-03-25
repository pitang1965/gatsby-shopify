import React from 'react';
import { CollectionTile } from '../CollectionTile';
import { RemainingCollections } from './styles';

export const HomepageCollectionsGrid = ({ collections }) => {
  const saleCollection = collections.find(
    collection => collection.title === 'タイムセール'
  );
  const remainingCollections = collections.filter(
    collection => collection.title !== 'タイムセール'
  );

  return (
    <div>
      {!!saleCollection && (
        <CollectionTile
          sale
          destination={`/all-products?c=${encodeURIComponent(
            saleCollection.shopifyId
          )}`}
          title={saleCollection.title}
          description={saleCollection.description}
          backgroundImage={
            saleCollection.image.localFile.childImageSharp
          }
        />
      )}
      <RemainingCollections>
        {remainingCollections.map(collection => (
          <CollectionTile
            destination={`/all-products?c=${encodeURIComponent(
              collection.shopifyId
            )}`}
            title={collection.title}
            description={collection.description}
            backgroundImage={
              collection.image.localFile.childImageSharp.gatsbyImageData
            }
            key={collection.shopifyId}
          />
        ))}
      </RemainingCollections>
    </div>
  );
};
