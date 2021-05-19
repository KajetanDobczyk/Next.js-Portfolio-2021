import { GetStaticProps, NextPage } from 'next'

import { api } from 'src/api'
import Layout from 'src/layout/Layout'
import { IBlogPost } from 'src/modules/Blog/interfaces'
import BlogPosts from 'src/modules/Blog/containers/BlogPosts'

type Props = {
  posts: IBlogPost[]
}

const BlogPage: NextPage<Props> = ({ posts }) => (
  <Layout activePage="blog" title="Blog">
    <BlogPosts posts={posts} />
  </Layout>
)

export const getStaticProps: GetStaticProps = async () => ({
  props: {
    posts: await api.blog.getPosts(),
  },
})

export default BlogPage
