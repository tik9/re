import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"
import * as styles from "../components/index.module.css"

const links = [
  {
    text: "Repos",
    url: "repos",
    description:
      "Github Repos",
  },
  {
    text: "Posts",
    url: "posts",
    description:
      "Posts from SO",
  },
]

const moreLinks = [
  { text: "Api Site", url: "https://tifun.netlify.app" },
  { text: "Teaching", url: "https://tinh.netlify.app", }
]

const IndexPage = () => (
  <Layout>
    <div className={styles.textCenter}>
      <h1>Index</h1>
    </div>
    <ul className={styles.list}>
      {links.map(link => (
        <li key={link.url} className={styles.listItem}>
          <a
            className={styles.listItemLink}
            href={`${link.url}`}
          >
            {link.text} ↗
          </a>
          <p className={styles.listItemDescription}>{link.description}</p>
        </li>
      ))}
    </ul>
    {moreLinks.map((link, i) => (
      <React.Fragment key={link.url}>
        <a href={`${link.url}`}>{link.text}</a>
        {i !== moreLinks.length - 1 && <> · </>}
      </React.Fragment>
    ))}
  </Layout>
)

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo title="Home" />

export default IndexPage
