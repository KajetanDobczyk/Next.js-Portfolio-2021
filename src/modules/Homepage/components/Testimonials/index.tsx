import * as S from './styles'

const testimonials = [
  {
    author: 'Erica T. Johnson',
    position: 'Co-Founder at Modern Health',
    content:
      "Kajetan is an effective communicator and possesses the same amount of EQ skills as hard development skills – he'd be a great value-add to a team.",
  },
  {
    author: 'Sebastian Leks',
    position: 'CTO at Synapse',
    content:
      'Kajetan brought an unmatched creative energy to the team. His design talent and organizational skills were top-notch and his feedback was always constructive and helpful. He kept an eye on the business goals at all times which made the product consistent and professional. He is an exceptional addition to any team.',
  },
  {
    author: 'Greg Albrecht',
    position: 'Development Advisor',
    content:
      'Kajetan realised our mutual projects in Albrecht&Partners with the extraordinary commitment. He has always been honest and on time within our arrangements, which I remember with pleasure.',
  },
]

const Testimonials = () => (
  <S.TestimonialsWrapper>
    <S.Content>
      <S.Title>What clients say about me</S.Title>
    </S.Content>
  </S.TestimonialsWrapper>
)

export default Testimonials
