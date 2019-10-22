module.exports = {
  siteMetadata: {
    title: `Unfrl`,
    description: `Custom Software Design & Development`,
    author: `Unfrl`,
    publisher: `Unfrl`,
    icon: 'src/assets/favicon.ico'
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
  ],
}
