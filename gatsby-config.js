module.exports = {
    plugins: [
        {
            resolve: `gatsby-plugin-sass`,
            options: {
              includePaths: ["absolute/path/a", "absolute/path/b"]
            }
        },
        {
            resolve: `gatsby-plugin-prefetch-google-fonts`,
            options: {
            fonts: [
                    {
                    family: `Montserrat`,
                    variants: [`400`, `700`, `900`]
                    }
                ],
            }
      }
    ]
  }