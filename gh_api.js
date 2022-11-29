exports.githubApiQuery = `
query($github_login: String!) {
    user(login: $github_login) {
      name
      repositories(first: 4) {
        nodes {
            description
            id
            name
            openGraphImageUrl
            updatedAt
            url
            primaryLanguage {
              name
            }
            stargazers {
              totalCount
            }
        }
      }
    }
  }
`