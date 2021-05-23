import { GetStaticProps, NextPage } from 'next'

import { api } from 'src/api'
import Layout from 'src/layout/Layout'
import { IBlogPost } from 'src/modules/Blog/interfaces'
import BlogPost from 'src/modules/Blog/containers/BlogPost'

type Props = {
  post: IBlogPost
}

const BlogPostPage: NextPage<Props> = ({ post }) => {
  return (
    <Layout activePage="blog" title={post.title}>
      <BlogPost post={post} />
    </Layout>
  )
}

export const getStaticPaths = async () => {
  const posts = await api.blog.getPosts()

  const paths = posts.map((post) => ({
    params: { slug: post.slug },
  }))

  return { paths, fallback: false }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  try {
    if (params?.slug) {
      const post = await api.blog.getPost(params.slug)

      return { props: { post } }
    } else {
      return {
        notFound: true,
      }
    }
  } catch (e) {
    console.log('Error loading post page', e)

    return {
      notFound: true,
    }
  }
}

export default BlogPostPage
