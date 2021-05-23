import Image from 'next/image'

import config from 'src/config'

import { IBlogPostImage } from '../../interfaces'

type Props = {
  image: IBlogPostImage
}

const BlogPostImage: React.FC<Props> = ({ image }) => (
  <Image
    src={`${config.apiUrl}${image.url}`}
    width={image.width}
    height={image.height}
  />
)

export default BlogPostImage
