import { services } from './data'
import * as S from './styles'

const Services = () => (
  <S.ServicesWrapper>
    <S.Content>
      <S.Title>My services</S.Title>
      <S.Services>
        {services.map((service) => (
          <S.Service key={service.title}>
            <S.ServiceImageWrapper>
              <img src={service.image} alt={service.title} />
            </S.ServiceImageWrapper>
            <S.Description>
              <S.ServiceTitle>{service.title}</S.ServiceTitle>
              <S.ServiceDescription>{service.content}</S.ServiceDescription>
            </S.Description>
          </S.Service>
        ))}
      </S.Services>
    </S.Content>
  </S.ServicesWrapper>
)

export default Services
