import { Settings } from 'react-slick'

import theme from 'src/theme'

type Experience = {
  date: string
  title: string
  logo: string
  link?: string
  content?: React.ReactNode
  frontend?: string[]
  backend?: string[]
  other?: string[]
}

export const experiences: Experience[] = [
  {
    date: '03.2021—now',
    title: 'Remote Contractor, Ltd',
    logo: '/images/experience/freelance.png',
  },
  {
    date: '06.2019—02.2021',
    title: 'Startup Development House',
    logo: '/images/experience/sdh.png',
    link: 'https://start-up.house/',
    content: (
      <ul>
        <li>
          <a href="https://employment.org/" target="blank" rel="nofollow">
            <span data-content="employment.org">employment.org</span>
          </a>{' '}
          - Jobs board, USA
        </li>
        <li>
          <a href="https://www.simplylease.pl/" target="blank" rel="nofollow">
            <span data-content="simplylease.pl">simplylease.pl</span>
          </a>{' '}
          - Siemens leasing and loans – in-house app refactor + embeddable
          widgets, supervising junior and mid frontend developers
        </li>
      </ul>
    ),
    frontend: [
      'React',
      'hooks',
      'TypeScript',
      'Preact',
      'Redux',
      'MobX',
      'Formik',
      'RFF',
      'MUI',
      'Antd',
      'Styled Components',
      'Emotion',
      'Stimulus',
    ],
    backend: ['Ruby on Rails', 'GCP', 'Postman'],
    other: ['InVision', 'Figma', 'Zeplin'],
  },
  {
    date: '08.2018—06.2019 (11mos)',
    title: 'skygate.io',
    logo: '/images/experience/skygate.png',
    link: 'https://skygate.io/',
    content: (
      <ul>
        <li>
          <a
            href="https://www.joinmodernhealth.com/"
            target="blank"
            rel="nofollow"
          >
            <span data-content="joinmodernhealth.com">
              joinmodernhealth.com
            </span>
          </a>{' '}
          - Crunchbase "2019 #1 hottest tech company" (SF, California)
        </li>
        <li>
          <a href="https://www.messy.fm/" rel="nofollow" target="blank">
            <span data-content="messy.fm">messy.fm</span>
          </a>{' '}
          - "All-in-One Podcasting Solution" (LA, California)
        </li>
      </ul>
    ),
    frontend: [
      'React',
      'hooks',
      'TypeScript',
      'Redux',
      'Rematch',
      'RxJS',
      'Formik',
      'Yup',
      'MUI',
      'Antd',
      'Emotion',
      'Jest',
      'Howler',
      'JSON Schema',
    ],
    backend: ['Python', 'node.js', 'AWS', 'Swagger'],
    other: ['InVision', 'Figma', 'Sketch', 'Zeplin'],
  },
  {
    date: '09.2016—08.2018 (2yrs)',
    title: 'Synapse (Austin, Texas)',
    logo: '/images/experience/synapse.png',
    link: 'https://getsynapse.com/',
    content: (
      <>
        Helped transform the application from a seed funded beta into the
        market-ready MVP
      </>
    ),
    frontend: [
      'React',
      'TypeScript',
      'Redux',
      'MUI',
      'Antd',
      'Styled Components',
      'Jasmine',
    ],
    backend: ['node.js', 'AWS'],
    other: ['UX design', 'UI design', 'Sketch'],
  },
  {
    date: '09.2014—09.2016 (2yrs 1mo)',
    title: 'Freelance',
    logo: '/images/experience/freelance.png',
    content: (
      <>
        <p>
          Developed over 10 websites for individual clients and companies, in
          cooperation with:
        </p>
        <ul>
          <li>
            <a href="http://gregalbrecht.io/" rel="nofollow" target="blank">
              <span data-content="gregalbrecht.io">gregalbrecht.io</span>
            </a>{' '}
            - development advisor
          </li>
          <li>
            <a
              href="https://www.behance.net/MACHALSKI"
              rel="nofollow"
              target="blank"
            >
              <span data-content="machalski.wtf">machalski.wtf</span>
            </a>{' '}
            - Warsaw's lead typographer
          </li>
          <li>
            <a href="http://michalwlodarski.com/" rel="nofollow" target="blank">
              <span data-content="michalwlodarski.com">
                michalwlodarski.com
              </span>
            </a>
          </li>
        </ul>
      </>
    ),
    frontend: [
      'JavaScript',
      'jQuery',
      'HTML5',
      'CSS3',
      'SASS',
      'Wordpress',
      'WooCommerce',
    ],
    backend: ['PHP'],
    other: ['UI design', 'Graphic design', 'Sketch', 'Photoshop'],
  },
  {
    date: '07.2015—08.2016 (1yr 2mos)',
    title: 'Vattenfall IT',
    logo: '/images/experience/vattenfall.png',
    link: 'https://group.vattenfall.com/who-we-are/contact-us/vattenfall-poland',
    content: (
      <p>
        Contributed to internal livechat implementation, room booking mobile app
        PoC, and windfarms database UI
      </p>
    ),
    frontend: ['Angular', 'Ionic'],
    backend: ['Spring Framework'],
    other: ['UI design'],
  },
  {
    date: '02.2014—09.2014 (8mos)',
    title: 'BePerfect',
    logo: '/images/experience/beperfect.png',
    link: 'https://pozyskajklienta.pl/',
    content: <p>Wordpress websites, SEO, graphic design</p>,
    frontend: ['Wordpress'],
    backend: ['PHP'],
    other: ['UI design', 'Graphic design', 'Copywriting', 'SEO'],
  },
]

export const sliderSettings: Settings = {
  infinite: false,
  slidesToShow: 3,
  slidesToScroll: 3,
  adaptiveHeight: true,
  initialSlide: experiences.length - 4,
  responsive: [
    {
      breakpoint: theme.breakpoints.lg,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: experiences.length - 2,
      },
    },
    {
      breakpoint: theme.breakpoints.sm,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: experiences.length - 1,
      },
    },
  ],
}
