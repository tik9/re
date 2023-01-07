import * as React from "react"
import { Link } from "gatsby"

const Header = ({ siteTitle }) => (
  <header
    style={{
      marginRight: '20px',
      padding: 'var(--space-4) var(--size-gutter)',
      display: 'flex',
      alignItems: 'right',
      // justifyContent: `space-between`,
    }}
  >
    <Link
      to="/"
      style={{
        fontSize: `var(--font-bg)`,
        textDecoration: `none`,
      }}
    >Index</Link>
  </header>
)

export default Header
