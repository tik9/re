var React = require("react")

var Layout = require("../components/layout")

const NotFoundPage = () => (
  <Layout>
    <h1>404: Not Found</h1>
    <p>You just hit a route that doesn&#39;t exist..</p>
  </Layout>
)

export const Head = () => <head title="404: Not Found" />

export default NotFoundPage
