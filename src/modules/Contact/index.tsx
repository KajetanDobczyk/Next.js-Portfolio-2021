import Image from 'next/image'

import theme from 'src/theme'

import * as S from './styles'

const socialLinks = [
  'https://github.com/KajetanDobczyk',
  'https://linkedin.com/in/kajetan-dobczyk',
]

const Contact = () => (
  <S.ContactWrapper>
    <S.Content>
      <S.Title>Let's start working together!</S.Title>
      <S.PhotoWrapper>
        <Image
          src="/images/profile.jpeg"
          alt="Kajetan Dobczyk"
          layout="fill"
          objectFit="cover"
        />
      </S.PhotoWrapper>
      <S.ContactDetails>
        <S.DetailsHeading>Message me</S.DetailsHeading>
        <a href="mailto:kajetan@dobczyk.com">
          <span data-content="kajetan@dobczyk.com">kajetan@dobczyk.com</span>
        </a>
        <a href="tel:+48507097222">
          <span data-content="(+48) 507 097 222">(+48) 507 097 222</span>
        </a>
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
      </S.ContactDetails>
    </S.Content>
  </S.ContactWrapper>
)

export default Contact
