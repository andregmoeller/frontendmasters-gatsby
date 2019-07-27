module.exports = {
  siteMetadata: {
    title: 'Frontend Masters Gatsby Workshop',
    description: 'A site we build together during a full-day Frontend Masters Gatsby workshop!',
  },
  plugins: ['gatsby-plugin-emotion',
  'gatsby-plugin-react-helmet',
  'gatsby-transformer-sharp',
  'gatsby-plugin-sharp',
  {
    resolve: 'gatsby-plugin-mdx',
    options: {
        defaultLayouts: {
          default: require.resolve('./src/components/layout.js'),
        },
        gatsbyRemarkPlugins: [{ resolve: 'gatsby-remark-images' }],
        // see https://github.com/gatsbyjs/gatsby/issues/15486
        plugins: ['gatsby-remark-images'],
    },
  },
  {
    resolve: 'gatsby-source-filesystem',
    options: {
      name: 'posts',
      path: 'posts',
    },
  },
  {
    resolve: 'gatsby-source-filesystem',
    options: {
      name: 'images',
      path: 'images',
    },
  },
],
}
