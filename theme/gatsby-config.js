const path = require('path')

module.exports = themeOptions => {
  return {
    siteMetadata: {
      title: 'Doctocat',
      shortName: 'Doctocat',
      description: 'A Gatsby theme for creating Primer documentation sites',
    },
    plugins: [
      'gatsby-plugin-styled-components',
      'gatsby-plugin-react-helmet',
      'gatsby-plugin-remove-trailing-slashes',
      'gatsby-transformer-yaml',
      {
        resolve: 'gatsby-plugin-mdx',
        options: {
          extensions: ['.mdx', '.md'],
          defaultLayouts: {
            default: require.resolve('./src/components/layout.js'),
          },
        },
      },
      {
        resolve: 'gatsby-source-filesystem',
        options: {
          name: 'pages',
          path: path.resolve('./src/pages'),
        },
      },
      {
        resolve: 'gatsby-plugin-manifest',
        options: {
          icon: themeOptions.icon
            ? path.resolve(themeOptions.icon)
            : require.resolve('./src/images/favicon.png'),
        },
      },
    ],
  }
}
