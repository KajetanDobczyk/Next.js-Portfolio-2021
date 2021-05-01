import { ActivePage } from 'src/layout/Layout/components/Header/context'

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
  {
    name: 'Contact',
    activeLabel: 'contact',
    url: '/contact',
  },
]

export default routes
