import moment from 'moment'

import { IBlogPost } from '../../interfaces'
import * as S from './styles'

type Props = {
  post: IBlogPost
}

const BlogPostInfo: React.FC<Props> = ({ post }) => (
  <S.BlogPostInfoWrapper>
    {moment(post.updated_at).calendar()}
    &nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;
    {post.category.name.toUpperCase()}
  </S.BlogPostInfoWrapper>
)

export default BlogPostInfo
