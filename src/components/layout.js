/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"
import { useState } from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import Hamburger from "./hamburger"
import SidebarNav from "./sidebar-nav"
import "../assets/scss/index.scss"

const Layout = ({ children }) => {
  const [navOpen, setNavOpen] = useState(false)

  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Header siteTitle={data.site.siteMetadata?.title || `Title`} />
      <div className="page-background__image">
        <div className="page-background__overlay"></div>
      </div>
      <Hamburger navOpen={navOpen} setNavOpen={setNavOpen} />
      <SidebarNav navOpen={navOpen} />
      <main className="page-container__main container">{children}</main>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
