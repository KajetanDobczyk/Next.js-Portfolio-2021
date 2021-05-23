import Link from 'next/link'

import BlogPostImage from 'src/modules/Blog/components/BlogPostImage'
import BlogPostInfo from 'src/modules/Blog/components/BlogPostInfo'
import { generateBlogPostLink } from 'src/modules/Blog/helpers'
import { IBlogPost } from 'src/modules/Blog/interfaces'

import * as S from './styles'

type Props = {
  post: IBlogPost
}

const BlogPostTile: React.FC<Props> = ({ post }) => (
  <S.BlogPostTileWrapper>
    <Link href={generateBlogPostLink(post)}>
      <a>
        <BlogPostImage image={post.image} />
        <S.PostTitle>
          <span data-content={post.title}>{post.title}</span>
        </S.PostTitle>
      </a>
    </Link>
    <BlogPostInfo post={post} />
    <S.PostDescription>{post.description}</S.PostDescription>
  </S.BlogPostTileWrapper>
)

export default BlogPostTile
