
import * as React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import "./layout.css"

const Layout = ({ children }) => {
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
      <Header siteTitle={data.site.siteMetadata?.title || `Title`}>
      </Header>
      <div
        style={{
          margin: `0 auto`,
          maxWidth: `var(--size-content)`,
          padding: `var(--size-gutter)`,
        }}
      >
        <main>{children}</main>
        <footer
          style={{
            marginTop: `var(--space-5)`,
            fontSize: `var(--font-sm)`,
          }}
        >
          <Link to='/tik-imprint'
            style={{ fontSize: `var(--font-sm)`, textDecoration: `none` }}
          > Imprint</Link>
          <span style={{ marginLeft: '400px' }}>© {new Date().getFullYear()} &middot; Tiko's
          </span></footer>
      </div>
    </>
  )
}

export default Layout
