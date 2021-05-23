import { IBlogPost } from './interfaces'

export const generateBlogPostLink = (post: IBlogPost) => `/blog/${post.slug}`
