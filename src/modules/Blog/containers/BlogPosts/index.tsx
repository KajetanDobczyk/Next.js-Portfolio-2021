import { IBlogPost } from '../../interfaces'

type Props = {
  posts: IBlogPost[]
}

const BlogPosts: React.FC<Props> = ({ posts }) => <>Blog</>

export default BlogPosts
