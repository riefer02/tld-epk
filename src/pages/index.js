import * as React from "react"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"
import EmbedVideo from "../components/embed-video"
import SpotifyPlayer from "../components/spotify-player"
import ContentRow from "../components/content-row"

import "../assets/scss/index.scss"
import { biography } from "../lib/biography"
import { youtubeVideos } from "../lib/videos"
import { playlists } from "../lib/playlists"
import { pressList, pressResources } from "../lib/press"
import { socialMedia } from "../lib/social-media"

const IndexPage = ({ data }) => {
  const keepAustinImage = getImage(data.keepAustinImage)
  const poolImage = getImage(data.poolImage)
  const habitableZoneImage = getImage(data.habitableZoneImage)
  const malbecImage = getImage(data.malbecImage)
  const epImage = getImage(data.epImage)

  return (
    <Layout>
      <Seo title="Home" />
      <div className="page-marquee__container">
        <i className="page-marquee__logo icon-tld-logo"></i>
        <h1>new waves rock band from austin, texas</h1>
      </div>
      <div className="page-content">
        <ContentRow animation="slide-up">
          <a
            className="panel-image__link flex-center"
            href="https://www.keep-austin.com/article/137"
          >
            <GatsbyImage image={keepAustinImage} placeholder="blurred" alt="" />
          </a>
        </ContentRow>
        <ContentRow animation="slide-left">
          <EmbedVideo videoId="-bkpw7aevDw" />
        </ContentRow>
        <ContentRow animation="slide-up">
          <div className="about-section font-bold">
            {biography.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>
        </ContentRow>
        <ContentRow animation="slide-right">
          <div className="spotify-playlists">
            {playlists.map(playlist => (
              <SpotifyPlayer
                key={playlist.id}
                type={playlist.type}
                spotifyId={playlist.id}
              />
            ))}
          </div>
        </ContentRow>
        <ContentRow animation="fade">
          <div className="panel-image__full-width">
            <GatsbyImage image={poolImage} placeholder="blurred" alt="" />
          </div>
        </ContentRow>
        {youtubeVideos.map((videoId, index) => (
          <ContentRow key={index} animation="fade">
            <EmbedVideo videoId={videoId} />
          </ContentRow>
        ))}
        <ContentRow animation="fade">
          <a href="https://open.spotify.com/album/5R1T2Y89wwXLNgxeAoZREA">
            <div className="album-showcase__item">
              <GatsbyImage
                image={habitableZoneImage}
                placeholder="blurred"
                alt="album name cover"
              />
              <h2>Habitable Zone (2021)</h2>
            </div>
          </a>
        </ContentRow>
        <ContentRow animation="fade">
          <a href="https://open.spotify.com/album/0ZOzvLIsvAL1dP5Ed01TEE">
            <div className="album-showcase__item">
              <GatsbyImage
                image={epImage}
                placeholder="blurred"
                alt="album name cover"
              />
              <h2>The Lewd Dudes (2018)</h2>
            </div>
          </a>
        </ContentRow>
        <ContentRow animation="fade">
          <a href="https://open.spotify.com/album/2fIlIJkL10C6IMDhxa7bms">
            <div className="album-showcase__item">
              <GatsbyImage
                image={malbecImage}
                placeholder="blurred"
                alt="album name cover"
              />
              <h2>Malbec (2019)</h2>
            </div>
          </a>
        </ContentRow>
        <ContentRow animation="fade">
          <div className="button-list">
            <h1>Press</h1>
            <ul>
              {pressList.map((press, index) => (
                <li key={index}>
                  <a className="button" href={press.url}>
                    <span>{press.label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </ContentRow>
        <ContentRow animation="slide-right">
          <div className="button-list">
            <h1>Resources</h1>
            <ul>
              {pressResources.map((resource, index) => (
                <li key={index}>
                  <a className="button" href={resource.url}>
                    <span>{resource.label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </ContentRow>
        <ContentRow animation="slide-left">
          <div className="button-list">
            <h1>Social Media</h1>
            <ul>
              {socialMedia.map((social, index) => (
                <li key={index}>
                  <a className="button" href={social.url}>
                    <span>{social.label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </ContentRow>
      </div>
      <ContentRow animation="slide-up">
        <footer className="mx-auto w-full text-center mb-10 secondary-font-family">
          &#169; {new Date().getFullYear()} The Lewd Dudes
        </footer>
      </ContentRow>
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
    malbecImage: file(relativePath: { eq: "malbec-album-cover.jpg" }) {
      childImageSharp {
        gatsbyImageData(webpOptions: { quality: 50 })
      }
      absolutePath
    }
    habitableZoneImage: file(
      relativePath: { eq: "habitable-zone-album-cover.jpg" }
    ) {
      childImageSharp {
        gatsbyImageData(webpOptions: { quality: 50 })
      }
      absolutePath
    }
    epImage: file(relativePath: { eq: "tld-album-cover.jpg" }) {
      childImageSharp {
        gatsbyImageData(webpOptions: { quality: 50 })
      }
      absolutePath
    }
  }
`
