import Layout from 'src/layout/Layout'
import Homepage from 'src/modules/Homepage'

const IndexPage = () => (
  <Layout activePage="about">
    <Homepage />
  </Layout>
)

export default IndexPage
