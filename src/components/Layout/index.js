import React from 'react';
import { LayoutWrapper } from './styles';
import { Header } from '../Header';
import { Footer } from '../Footer';
import { GlobalStyles } from 'twin.macro';

const Layout = ({ children, ...rest }) => {
  return (
    <div {...rest}>
      <GlobalStyles />
      <LayoutWrapper>
        <Header />
        <main>{children}</main>
        <Footer />
      </LayoutWrapper>
    </div>
  );
};

export { Layout };
