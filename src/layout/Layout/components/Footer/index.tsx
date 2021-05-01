import React from 'react'

import * as S from './styles'

const Footer: React.FC = () => (
  <S.FooterWrapper>
    <S.Content>
      <p>
        Built on{' '}
        <a href="https://nextjs.org/" target="_blank" rel="noopener noreferrer">
          <span data-content="Next.js">Next.js</span>
        </a>
      </p>
      <p>© Kajetan Dobczyk {new Date().getFullYear()}</p>
    </S.Content>
  </S.FooterWrapper>
)

export default Footer
