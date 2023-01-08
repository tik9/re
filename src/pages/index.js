
import React, { useEffect, useState } from 'react'
import Layout from "../components/layout"
import { graphql, useStaticQuery } from "gatsby"

var net_host = 'https://tifun.netlify.app'
// var net_host = 'http://localhost'
// var net_repos = net_host + '/.netlify/functions/repos'
var net_posts = net_host + '/.netlify/functions/posts'

export default function Index() {
  const [posts, setPosts] = useState([])
  // const [repos, setRepos] = useState([])

  async function fetch_posts() {
    var res
    res = await (await fetch(net_posts)).json();

    // console.log(2, res)

    setPosts(res)
  }

  useEffect(() => { fetch_posts() }, [])

  // async function fetch_repos() {var res = await (await fetch(net_repos)).json();setRepos(res)};useEffect(() => { fetch_repos() }, [])

  var repo_data = useStaticQuery(graphql` query {allGithubData{nodes{data{user{repositories {nodes {id name description pushedAt(fromNow:true) openGraphImageUrl primaryLanguage {name} url }} }}}}}`)

  const repos = repo_data.allGithubData.nodes[0].data.user.repositories.nodes
  // console.log(repos)

  return (
    <Layout>
      <h1>Tiko's</h1>
      <div id='repos' style={{ marginTop: '20px' }}>
        <h3>Github Repos</h3>
        {repos && (
          <ul>
            {
              repos.map(repo =>
                <li key={repo.id}><h4><a href={`https://github.com/tik9/${repo.name}`}>{repo.description}</a></h4> Last update: {repo.pushedAt}
                  <div><img src={repo.openGraphImageUrl} width="200" /></div>
                  Primary language: {repo.primaryLanguage.name}
                </li>
              )
            }
          </ul>
        )}
      </div>
      <div id='posts' style={{ marginTop: '60px' }}>
        <h3>Posts</h3>
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
      <div id='contact' style={{ marginTop: '60px' }}>
        <h3>Contact</h3>

        <div>timo "at" tik1.net</div>
      </div>
    </Layout>
  );
}

export const Head = () => <title>Tiko</title>