import Image from 'next/image'

import SectionTitle from 'src/components/SectionTitle'
import theme from 'src/theme'

import * as S from './styles'

const socialLinks = [
  'https://github.com/KajetanDobczyk',
  'https://linkedin.com/in/kajetan-dobczyk',
]

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
      <S.SocialLinks>
        {socialLinks.map((link) => (
          <S.SocialIcon
            key={link}
            url={link}
            target="_blank"
            bgColor={theme.color.grey[100]}
          />
        ))}
      </S.SocialLinks>
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
