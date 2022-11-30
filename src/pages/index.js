import React, { useEffect, useState } from 'react';
import { graphql, useStaticQuery } from "gatsby"
import Layout from "../components/layout"
import Seo from "../components/seo";

var net_fun = '/.netlify/functions/'
// var net_host = 'https://tifun.netlify.app'
var net_host = 'http://localhost'
var net_utils = net_host + net_fun + 'utils'

export default function Index() {

  const [posts, setPosts] = useState([])

  async function fetch_posts() {
    var res = await (await fetch('https://api.stackexchange.com/2.2/users/1705829/comments?site=stackoverflow&filter=withbody')).json()
    res = res.items.slice(0, 3)

    // var options = { method: 'post', body: 1 }

    res = await Promise.all(
      res.map(async ({ post_id, body: text, creation_date: date }) => ({
        date:
          await (await fetch(net_utils + '?q=' + date)).json()
        , post_id,
        text: await (await fetch(net_utils, {
          method: 'post',
          body: JSON.stringify({ input: text })
        })).json()
      })))
    // console.log(1, res)
    setPosts(res)
  }

  useEffect(() => { fetch_posts() }, [])

  const repo_data = useStaticQuery(
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
  var repos = repo_data.allGithubData.nodes[0].data.user.repositories.nodes
  // repos = ''

  // console.log(repos)

  return (
    <Layout>
      <div id='repos'>
        <h2>Github Repos</h2>
        {repos && (
          <ul>
            {
              repos.map(repo =>
                <li key={repo.id}><h4><a href={`https://github.com/tik9/${repo.name}`}>{repo.name}</a></h4> {repo.description}</li>
              )
            }
          </ul>
        )}
      </div>
      <div id='posts'>
        <h1>Posts</h1>
        {posts && (
          <ul>
            {posts.map(item => (
              <li key={item.post_id}>
                <h4><a href={`https://stackoverflow.com/questions/${item.post_id}`}>{item.date}</a></h4>
                {item.text}
              </li>
            ))
            }
          </ul>
        )}
      </div>
    </Layout>
  );
}

export const Head = () => <Seo title="Repos" />
