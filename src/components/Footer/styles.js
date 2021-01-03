import styled from 'styled-components';

export const FooterWrapper = styled.footer`
  display: flex;
  position: absolute; // 絶対位置
  bottom: 0;

  max-width: 1200px;
  width: 100%; // 親要素に対する割合
  margin: 0 auto;
  padding: 10px 20px;
  box-sizing: border-box;
  flex-wrap: wrap;
  color: #333232;
  background: #F6F6F6;
  font-size: 11px;

  > div {
    padding: 4px;
    >a {
      text-decoration: none;
      color: #333232;

      :hover {
        text-decoration: underline;
      }
    }
  }
`;