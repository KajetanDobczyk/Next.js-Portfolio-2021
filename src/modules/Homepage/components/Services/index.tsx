import { services } from './data'
import * as S from './styles'

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
