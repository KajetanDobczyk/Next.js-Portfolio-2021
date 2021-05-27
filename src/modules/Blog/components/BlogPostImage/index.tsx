import Image from 'next/image'

import config from 'src/config'

import { IBlogPostImage } from '../../interfaces'

type Props = {
  image: IBlogPostImage
}

const BlogPostImage: React.FC<Props> = ({ image }) => (
  <Image
    src={`${config.imagesPath}${image.url}`}
    width={image.width}
    height={image.height}
    loader={({ src }) => src}
  />
)

export default BlogPostImage
