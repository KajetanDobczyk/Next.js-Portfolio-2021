import Image from 'next/image'

import SectionTitle from 'src/components/SectionTitle'
import SocialMediaButtons from 'src/components/SocialMediaButtons'

import * as S from './styles'

const Contact = () => (
  <S.ContactWrapper>
    <S.Content>
      <S.TitleWrapper>
        <SectionTitle>
          <span>L</span>et's start working <span>t</span>ogether<span>!</span>
        </SectionTitle>
      </S.TitleWrapper>
      <S.Link href="mailto:kajetan@dobczyk.com">
        <span data-content="kajetan@dobczyk.com">kajetan@dobczyk.com</span>
      </S.Link>
      <S.Link href="tel:+48507097222">
        <span data-content="(+48) 507 097 222">(+48) 507 097 222</span>
      </S.Link>
      <SocialMediaButtons />
      <S.PhotoWrapper>
        <Image
          src="/images/profile-2.jpg"
          alt="Kajetan Dobczyk"
          layout="fill"
          objectFit="cover"
        />
      </S.PhotoWrapper>
    </S.Content>
  </S.ContactWrapper>
)

export default Contact
