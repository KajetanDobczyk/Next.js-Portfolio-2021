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
      <S.Title>
        Let's <span>s</span>tart working together<span>!</span>
      </S.Title>
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
          src="/images/profile.jpg"
          alt="Kajetan Dobczyk"
          layout="fill"
          objectFit="cover"
        />
      </S.PhotoWrapper>
    </S.Content>
  </S.ContactWrapper>
)

export default Contact
