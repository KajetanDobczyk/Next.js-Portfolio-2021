import React from 'react'

import * as S from './styles'

const Footer: React.FC = () => (
  <S.FooterWrapper>
    <S.Content>
      <p>
        Built on{' '}
        <a href="https://nextjs.org/" target="_blank" rel="noopener noreferrer">
          Next.js
        </a>
      </p>
      <p>© Kajetan Dobczyk {new Date().getFullYear()}</p>
    </S.Content>
  </S.FooterWrapper>
)

export default Footer
