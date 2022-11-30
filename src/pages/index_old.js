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

export default function Index() {

  return <div>I'm your</div>
}

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo title="Home" />