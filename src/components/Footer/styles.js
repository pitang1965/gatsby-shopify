import styled from 'styled-components';

export const FooterWrapper = styled.footer`
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: absolute; // 絶対位置
  bottom: 0;
  height: 60px;

  max-width: 1200px;
  width: 100%; // 親要素に対する割合

  ul {
    display: flex;
    justify-content: center;
  }
  div {
    display: flex;
    justify-content: center;
    padding: 2px;
    font-size: 12px;
    color: #333232;
    > a {
      text-decoration: none;
      :hover {
        text-decoration: underline;
      }
    }
  }

  @media (min-width: 1024px) {
    flex-direction: row-reverse;
    height: 30px;
  }
`;
