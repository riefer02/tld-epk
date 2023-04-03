module.exports = {
  siteMetadata: {
    title: `The Lewd Dudes`,
    description: `The official destination for The Lewd Dudes, a new wave alternative rock band from Austin, Texas.`,
    author: `@riefer02`,
    siteUrl: `https://thelewddudes.com`,
    logo: `./src/images/favicon-tld-epk.png`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-plugin-sass`,
    `gatsby-plugin-postcss`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `The Lewd Dudes | Alternative Rock Band | Austin Texas`,
        short_name: `The Lewd Dudes`,
        start_url: `/`,
        background_color: `#51dd97`,
        // This will impact how browsers show your PWA/website
        // https://css-tricks.com/meta-theme-color-and-trickery/
        theme_color: `#51dd97`,
        display: `minimal-ui`,
        icon: `src/images/favicon-tld-epk.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
