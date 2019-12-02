module.exports = {
  siteMetadata: {
    title: 'Continuously Learning',
    description: 'A blog covering topics related to creating and delivering software'
  },
  plugins: [
    `gatsby-transformer-remark`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: `${__dirname}/src/pages`
      }
    }
  ]
}