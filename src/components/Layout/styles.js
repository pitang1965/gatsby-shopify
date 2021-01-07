import styled from 'styled-components';

export const LayoutWrapper = styled.div`
  margin: 0 auto;
  max-width: 1200px;
  min-height: 100vh; // コンテンツの高さの最小値＝ブラウザの高さに指定
  position: relative; // 相対位置
  box-sizing: border-box; // ヘッダーやフッターを含むすべての要素の高さ＝min-height:100vhになるように指定
  padding: 0 20px 40px 20px;
`;
