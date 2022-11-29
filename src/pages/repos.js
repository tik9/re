import React from "react";
import { graphql, useStaticQuery } from "gatsby"
import Layout from "../components/layout"

export default function Repos() {
  const data = useStaticQuery(
    graphql`
      query MyQuery {
        allGithubData {
          nodes {
            data {
              user {
                repositories {
                  nodes {
                    description
                    id
                    name
                    openGraphImageUrl
                    updatedAt(fromNow: true)
                    url
                    primaryLanguage {
                      name
                    }
                  }
                }
              }
            }
          }
        }
      }
    `
  )
  const repos = data.allGithubData.nodes[0].data.user.repositories.nodes

  console.log(repos)

  return (
    <Layout>
      <div>
        <h2>Github Repos</h2>
        <ul>
          {
            repos.map(repo =>
              <li key={repo.id}>{repo.name}: {repo.description}</li>
            )
          }
        </ul>
      </div>
    </Layout>
  );
}