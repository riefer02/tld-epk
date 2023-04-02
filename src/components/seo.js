/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"
import PropTypes from "prop-types"
import { Helmet } from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"
import { getImage } from "gatsby-plugin-image"

function Seo({ description, lang, meta, title }) {
  const { site, ogImage } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
            logo
          }
        }
        ogImage: file(relativePath: { eq: "tld-renee-dominguez.jpg" }) {
          childImageSharp {
            gatsbyImageData(placeholder: BLURRED, pngOptions: { quality: 50 })
          }
        }
      }
    `
  )

  const metaDescription = description || site.siteMetadata.description
  const defaultTitle = site.siteMetadata?.title
  const metaImage = getImage(ogImage)

  const schemaMarkup = `
    {
      "@context": "http://schema.org",
      "@type": "MusicGroup",
      "name": "The Lewd Dudes",
      "description": "The official destination for The Lewd Dudes, a new wave alternative rock band from Austin, Texas.",
      "url": "https://thelewddudes.com",
      "image": "https://thelewddudes.com/static/960286506a6cbe7eecf434d73eff876c/c85ea/tld-renee-dominguez.jpg",
      "sameAs": [
        "https://www.facebook.com/thelewddudes/",
        "https://www.instagram.com/thelewddudes/",
        "https://twitter.com/thelewddudes/"
      ],
      "genre": [
        "New Wave",
        "Alternative Rock"
      ],
      "location": {
        "@type": "Place",
        "name": "Austin, TX"
      }
    }
  `

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={title}
      titleTemplate={defaultTitle ? `%s` : null}
      meta={[
        {
          name: `description`,
          content: metaDescription,
        },
        {
          property: `og:title`,
          content: title,
        },
        {
          property: `og:description`,
          content: metaDescription,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          name: `twitter:card`,
          content: `summary`,
        },
        {
          name: `twitter:creator`,
          content: site.siteMetadata?.author || ``,
        },
        {
          name: `twitter:title`,
          content: title,
        },
        {
          name: `twitter:description`,
          content: metaDescription,
        },
        {
          name: `og:image`,
          content: metaImage.images.fallback.src,
        },
      ].concat(meta)}
    >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: schemaMarkup }}
      />
    </Helmet>
  )
}

Seo.defaultProps = {
  lang: `en`,
  meta: [],
  description: ``,
}

Seo.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string.isRequired,
}

export default Seo
