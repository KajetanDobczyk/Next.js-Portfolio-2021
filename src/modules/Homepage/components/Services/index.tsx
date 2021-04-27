import * as S from './styles'

const services = [
  {
    title: 'React (JS) + TS',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.',
  },
  {
    title: 'Best frontend practices',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.',
  },
  {
    title: 'Old code refactor',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.',
  },
]

const Services = () => (
  <S.ServicesWrapper>
    <S.Content>
      <h2>My services</h2>
      <S.Services>
        {services.map((service) => (
          <S.Service key={service.title}>
            <S.ServiceImage />
            <S.ServiceTitle>{service.title}</S.ServiceTitle>
            <S.ServiceDescription>{service.content}</S.ServiceDescription>
          </S.Service>
        ))}
      </S.Services>
    </S.Content>
  </S.ServicesWrapper>
)

export default Services
