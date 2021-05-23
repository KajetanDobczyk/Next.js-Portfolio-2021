export type IBlogPostStatus = 'draft' | 'published'

export interface IBlogPostCategory {
  id: number
  name: string
  slug: string
  created_at: Date
  updated_at: Date
}

export interface IBlogPostAuthor {
  id: number
  name: string
  email: string
  created_at: Date
  updated_at: Date
  picture: Object
}

export interface IBlogPostImage {
  id: 9
  name: string
  alternativeText: string | null
  caption: string | null
  url: string
  width: number
  height: number
}

export interface IBlogPost {
  id: number
  slug: string
  category: IBlogPostCategory
  title: string
  description: string
  content: string
  image: IBlogPostImage
  created_at: Date
  updated_at: Date
  published_at: Date
  status: IBlogPostStatus
}
