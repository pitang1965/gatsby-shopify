require('dotenv').config({
  path: `.env`,
});

module.exports = {
  siteMetadata: {
    links: {
      twitter: 'https://twitter.com/pitang1965',
      instagram: 'https://www.instagram.com/pitang1965/',
    },
    title: `Over 40 Web Shop`,
    description: `Over 40 Web Shop は Over 40 Web Club が運営するオンラインショップです。`,
    author: `@pitang1965`,
    image: '/images/twitter.png',
    twitterUsername: '@pitang1965',
    seller: 'ピータン株式会社', // 販売業者
    shopName: 'Over 40 Web Shop', // 店名
    operationManager: 'ピータン', // 運営責任者
    address: '東京都いなか市 123番地', // 住所
    tel: '0120-1234-5678', // 電話番号
    email: 'info@pitang1965.com', // メールアドレス
    contactInfo: '電話番号：0120-1234-5678 (9:00～17:00)',
    url: 'https://over40webshop.netlify.app', // URL
  },
  plugins: [
    `gatsby-plugin-styled-components`,
    `gatsby-optional-chaining`,
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `open sans\:400`,
          'open sans:400i',
          `open sans\:700`,
          'open sans:700i',
          `open sans\:800`,
          'open sans:800i',
        ],
      },
    },
    {
      resolve: 'gatsby-source-shopify',
      options: {
        shopName: process.env.GATSBY_SHOP_NAME,
        accessToken: process.env.GATSBY_ACCESS_TOKEN,
        apiVersion: '2020-10',
      },
    },
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-shopify-starter`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/logo.png`,
      },
    },
  ],
};
