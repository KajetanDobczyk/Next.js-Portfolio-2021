import { Settings } from 'react-slick'
import theme from 'src/theme'

export const testimonials = [
  {
    image: '/images/clients/marcin.jpeg',
    author: 'Marcin Strawczyński',
    position: 'Head of Digital Products Development at Siemens',
    link: 'https://new.siemens.com/global/en/products/financing.html/',
    content:
      'Kajetan was the lead front-end developer for the SimplyLease / SimplyLoan platform, which is the leading online leasing platform in Poland. (...) During his tenure, he played an instrumental role in the development of new features and refactoring of existing ones. (...)  I recommend Kajetan as lead / senior front-end developer for any product team that wants to delight its customers!',
  },
  {
    image: '/images/clients/erica.jpeg',
    author: 'Erica T. Johnson',
    position: 'CEO at Modern Health',
    link: 'https://www.joinmodernhealth.com/',
    content:
      "Kajetan is an effective communicator and possesses the same amount of EQ skills as hard development skills – he'd be a great value-add to a team.",
  },
  {
    image: '/images/clients/sojek.jpeg',
    author: 'Lucas Sojka',
    position: 'COO at skygate',
    link: 'https://skygate.io/',
    content:
      'I highly recommend Kajetan. He is a great co-worker and a very responsible independent developer, he gets along well with clients and understands their needs.',
  },
  {
    image: '/images/clients/sebastian.png',
    author: 'Sebastian Leks',
    position: 'CTO at Synapse',
    link: 'https://getsynapse.com/',
    content:
      'Kajetan brought an unmatched creative energy to the team. His design talent and organizational skills were top-notch and his feedback was always constructive and helpful. He kept an eye on the business goals at all times which made the product consistent and professional. He is an exceptional addition to any team.',
  },
  {
    image: '/images/clients/greg.png',
    author: 'Greg Albrecht',
    position: 'Development Advisor',
    link: 'https://gregalbrecht.io/',
    content:
      'Kajetan realised our mutual projects in Albrecht&Partners with the extraordinary commitment. He has always been honest and on time within our arrangements, which I remember with pleasure.',
  },
]

export const sliderSettings: Settings = {
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 1,
  adaptiveHeight: true,
  responsive: [
    {
      breakpoint: theme.breakpoints.lg,
      settings: {
        slidesToShow: 2,
      },
    },
    {
      breakpoint: theme.breakpoints.sm,
      settings: {
        slidesToShow: 1,
      },
    },
  ],
}
