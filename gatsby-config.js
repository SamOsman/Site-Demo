/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `portfolio-test`,
    siteUrl: `https://www.yourdomain.tld`,
  },
  plugins: [
    `gatsby-alias-imports`,
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-alias-imports`,
      options: {
        rootFolder: `src`,
        aliases: {
          styles: `src/styles`,
          components: "src/components/"    
        }
      }
    }
  ],
}
