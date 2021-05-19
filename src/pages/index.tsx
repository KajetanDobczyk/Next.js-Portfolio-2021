import Layout from 'src/layout/Layout'
import Contact from 'src/modules/Contact/containers/Contact'
import About from 'src/modules/Homepage/containers/About'
import Intro from 'src/modules/Homepage/containers/Intro'

const IndexPage = () => (
  <Layout activePage="about" title="About me">
    <Intro />
    <About />
    <Contact />
  </Layout>
)

export default IndexPage
