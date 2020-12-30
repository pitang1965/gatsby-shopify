import styled from 'styled-components';

export const FooterWrapper = styled.footer`
  display: flex;
  flex
  max-width: 1200px;
  margin: 0 auto;
  padding: 10px 20px;
  box-sizing: border-box;
  flex-wrap: wrap;
  color: #dddddd;
  background: #131a22;
  font-size: 11px;

  > div {
    padding: 4px;
    >a {
      text-decoration: none;
      color: #dddddd;

      :hover {
        text-decoration: underline;
      }
    }
  }
`;