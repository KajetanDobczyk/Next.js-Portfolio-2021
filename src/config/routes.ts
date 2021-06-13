export type ActivePage = 'about' | 'blog' | 'contact'

export type Route = {
  name: string
  activeLabel: ActivePage
  url: string
}

const routes: Route[] = [
  {
    name: 'About',
    activeLabel: 'about',
    url: '/',
  },
  // {
  //   name: 'Blog',
  //   activeLabel: 'blog',
  //   url: '/blog',
  // },
  {
    name: 'Contact',
    activeLabel: 'contact',
    url: '/contact',
  },
]

export default routes
