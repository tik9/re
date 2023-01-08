// orderBy: {field: updated_AT, direction: DESC}

exports.ghQuery = `query {
    user(login: "tik9") {
      name
      repositories(first: 3,orderBy:{field:PUSHED_AT,direction:DESC}) {
        nodes {
            description
            id
            name
            pushedAt
            url
            primaryLanguage {name}
            openGraphImageUrl
        }
      }
    }
  }`