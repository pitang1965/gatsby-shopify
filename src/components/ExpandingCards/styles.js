import styled from 'styled-components';

export const ExpandingCardsWrapper = styled.div`
  display: flex;
  width: 100%;

  @media (max-width: 480px) {
    >div: nth-last-of-type(1) {
      display: none;
    }
  }
`;
