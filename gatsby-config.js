module.exports = {
  siteMetadata: {
    title: `Victoria Tilley`,
    display: "<//Sapphyre>",
    author: `Victoria Tilley`,
    description: `My personal website full of cyberpunk madness.`
  },
  plugins: [
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-sass`,
    `gatsby-transformer-yaml`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `./data/`,
      }
    },
  ],
}
