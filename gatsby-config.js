module.exports = {
  siteMetadata: {
      title: 'Nathan Dorney',
      description: 'I’m trying to make your day better by making digital products and websites that are simple and meaningful.',
      author: 'Nathan Dorney'
  },
  plugins: [
        `gatsby-plugin-react-helmet`,
        
      'gatsby-plugin-sass',
      {
          resolve: 'gatsby-source-filesystem',
          options: {
              name: 'src',
              path: `${__dirname}/src/`
          }
      },
      'gatsby-plugin-sharp',
      {
          resolve: 'gatsby-transformer-remark',
          options: {
              plugins: [
                  'gatsby-remark-relative-images',
                  {
                      resolve: 'gatsby-remark-images',
                      options: {
                          maxWidth: 750,
                          linkImagesToOriginal: false
                      }
                  }
              ]
          }
      }
  ]
}