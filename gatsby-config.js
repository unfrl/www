module.exports = {
  siteMetadata: {
    title: `Unfrl`,
    siteUrl: `https://unfrl.com`,
    description: `Custom Software Design & Development`,
    author: `Unfrl`,
    publisher: `Unfrl`,
    icon: 'src/assets/favicon.ico',
    keywords: [
      'software',
      'development',
      'custom',
      'custom apps',
      'engineering',
      'progressive web app',
      'PWA'
    ]
  },
  plugins: [
    `gatsby-plugin-typescript`,
    {
      resolve: 'gatsby-plugin-material-ui',
      // If you want to use styled components you should change the injection order.
      options: {
        stylesProvider: {
          injectFirst: true,
        },
      },
    },
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-sitemap`,
      options: {
        createLinkInHead: true
      }
    }
  ],
}
