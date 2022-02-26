import * as React from "react"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"
import EmbedVideo from "../components/embed-video"

import "../assets/scss/index.scss"
import { biography } from "../lib/biography"
import { youtubeVideos } from "../lib/videos"

const IndexPage = ({ data }) => {
  const keepAustinImage = getImage(data.keepAustinImage)
  const poolImage = getImage(data.poolImage)

  return (
    <Layout>
      <Seo title="Home" />
      <div className="page-marquee__container">
        <i className="page-marquee__logo icon-tld-logo"></i>
        <h1>new waves rock band from austin, texas</h1>
      </div>
      <div className="page-content">
        <div className="page-content__row">
          <a
            className="panel-image__link flex-center"
            href="https://www.keep-austin.com/article/137"
          >
            <GatsbyImage image={keepAustinImage} placeholder="blurred" alt="" />
          </a>
        </div>
        <div className="page-content__row">
          <EmbedVideo videoId="-bkpw7aevDw" />
        </div>
        <div className="page-content__row">
          <div className="about-section font-bold">
            {biography.map(paragraph => (
              <p>{paragraph}</p>
            ))}
          </div>
        </div>
        <div className="page-content__row">
          <div className="panel-image__full-width">
            <GatsbyImage image={poolImage} placeholder="blurred" alt="" />
          </div>
        </div>
        {youtubeVideos.map(videoId => (
          <div className="page-content__row">
            <EmbedVideo videoId={videoId} />
          </div>
        ))}
      </div>
    </Layout>
  )
}

export default IndexPage

export const query = graphql`
  query IndexQuery {
    keepAustinImage: file(relativePath: { eq: "keep-austin-press.jpeg" }) {
      childImageSharp {
        gatsbyImageData(webpOptions: { quality: 50 })
      }
    }
    poolImage: file(relativePath: { eq: "pool-tld.jpg" }) {
      childImageSharp {
        gatsbyImageData(webpOptions: { quality: 50 })
      }
    }
  }
`
