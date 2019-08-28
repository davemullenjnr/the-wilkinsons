module.exports = {
  siteMetadata: {
    title: `Mr and Mrs Wilkinson`,
    description: `Photographs from the wedding of Neil and Amy Wilkinson`,
    author: `@davemullenjnr`,
    image: `https://thewilkinsons.netlify.com/images/the-wilkinsons.jpg`,
    imageWidth: `1920`,
    imageHeight: `960`,
    url: `https://thewilkinsons.netlify.com/`
  },
  plugins: [
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
        name: `mr-and-mrs-wilkinson`,
        short_name: `the-wilkinsons`,
        start_url: `/`,
        background_color: `#665E5C`,
        theme_color: `#E7D0CD`,
        display: `minimal-ui`,
        icon: `src/assets/favicon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-56108422-2",
      },
    },
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-netlify`,
    
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
