module.exports = {
  siteMetadata: {
    title: `Victoria Tilley`,
    display: "<//Sapphyre>",
    author: `Victoria Tilley`,
    description: `CS student interested in fullstack development, game development, and other neat stuff!`,
    social: {
      twitter: `ssapphyree`,
      instagram: `ssapphyree`,
      github: `sapphyree`,
      email: `victoriartilley@gmail.com`,
    },
  },
  plugins: [
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-sass`,
    `gatsby-transformer-yaml`,
    `gatsby-transformer-remark`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `data`,
        path: `${__dirname}/data/`,
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `blog`,
        path: `${__dirname}/content/posts`,
      }
    },
  ],
}
