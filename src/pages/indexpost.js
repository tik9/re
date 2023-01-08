import React from "react"
import { graphql } from "gatsby"
import PostLink from "../components/post-link"
import Layout from "../components/layout"

const IndexPage = ({
    data: { allMarkdownRemark: { edges }
    } }) => {
    const Posts = edges.map(edge => <PostLink key={edge.node.id} post={edge.node} />)

    return <Layout>
        <h1>Tiko's</h1>
        {Posts}</Layout>
}

export default IndexPage

export const pageQuery = graphql`
  query {
    allMarkdownRemark(sort: { frontmatter: { slug: ASC }}) {
      edges {
        node {
          id
          excerpt(pruneLength: 250)
          frontmatter {
            slug
            title
          }
        }
      }
    }
  }
`