import { IBlogPost } from 'src/modules/Blog/interfaces'
import httpClient from 'src/services/httpClient'
import config from 'src/config'

type BlogApi = {
  getPosts: () => Promise<IBlogPost[]>
}

const blog: BlogApi = {
  getPosts: async () => {
    const { data } = await httpClient.get(`${config.blogUrl}/articles`)

    return data
  },
}

export default blog
