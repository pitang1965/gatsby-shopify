import React from 'react';
import 'twin.macro';
import { graphql, useStaticQuery, Link } from 'gatsby';
import { FooterWrapper } from './styles';
import { FaTwitter, FaInstagram } from 'react-icons/fa';
import { FooterIconLink } from './FooterIconLink';

export const Footer = () => {
  const {
    site: {
      meta: { links },
    },
  } = useStaticQuery(graphql`
    {
      site {
        meta: siteMetadata {
          links {
            twitter
            instagram
          }
        }
      }
    }
  `);

  return (
    <FooterWrapper>
      <ul>
        <FooterIconLink
          href={links.twitter}
          icon={<FaTwitter tw="w-4 h-4 fill-current" />}
          label="Twitter"
        />
        <FooterIconLink
          href={links.instagram}
          icon={<FaInstagram tw="w-4 h-4 fill-current" />}
          label="Instagram"
        />
      </ul>
      <div>
        <Link to="/indication-for-act">特定商取引法に基づく表記</Link><span> ｜</span>
        <Link to="/terms-of-service">利用規約</Link><span> ｜</span>
        <Link to="/shipping-policy">配送ポリシー</Link><span> ｜</span>
        <Link to="/refund-policy">返金ポリシー</Link><span> ｜</span>
        <Link to="/privacy-policy">プライバシーポリシー</Link><span> ｜</span>
        <div>
          Powerd by{' '}
          <a
            href="https://over40webclub.netlify.app/"
            target="_blank"
            rel="noreferrer"
          >
            Over 40 Web Club
          </a>
        </div>
      </div>
    </FooterWrapper>
  );
};
