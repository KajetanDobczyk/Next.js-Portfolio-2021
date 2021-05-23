import { IBlogPost } from '../../interfaces'
import BlogPostTile from './components/BlogPostTile'
import * as S from './styles'

type Props = {
  posts: IBlogPost[]
}

const BlogPosts: React.FC<Props> = ({ posts }) => (
  <S.Content>
    <S.PostsWrapper>
      {posts.map((post) => (
        <BlogPostTile post={post} key={post.id} />
      ))}
    </S.PostsWrapper>
    <S.Sidebar>Sidebar</S.Sidebar>
  </S.Content>
)

export default BlogPosts
