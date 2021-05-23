import { IBlogPost } from 'src/modules/Blog/interfaces'
import httpClient from 'src/services/httpClient'
import config from 'src/config'

type BlogApi = {
  getPosts: () => Promise<IBlogPost[]>
  getPost: (id: number | string | string[]) => Promise<IBlogPost>
}

const blog: BlogApi = {
  getPosts: async () => {
    const { data } = await httpClient.get(`${config.apiUrl}/articles`)

    return data
  },
  getPost: async (id) => {
    const { data } = await httpClient.get(`${config.apiUrl}/articles/${id}`)

    return data
  },
}

export default blog
