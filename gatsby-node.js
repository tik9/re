// https://github.com/gatsbyjs/gatsby/issues/7810

require = require('esm')(module)
module.exports = require('./gatsby-node.esm.js')