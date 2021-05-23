import ReactMarkdown from 'react-markdown'
import rehypeRaw from 'rehype-raw'

import BlogPostImage from 'src/modules/Blog/components/BlogPostImage'
import { IBlogPost } from 'src/modules/Blog/interfaces'

import BlogPostInfo from '../../components/BlogPostInfo'
import * as S from './styles'

type Props = {
  post: IBlogPost
}

const BlogPost: React.FC<Props> = ({ post }) => (
  <S.BlogPostWrapper>
    <BlogPostImage image={post.image} />
    <S.PostTitle>{post.title}</S.PostTitle>
    <BlogPostInfo post={post} />
    <S.PostContent>
      <ReactMarkdown rehypePlugins={[rehypeRaw]}>{post.content}</ReactMarkdown>
    </S.PostContent>
  </S.BlogPostWrapper>
)

export default BlogPost
