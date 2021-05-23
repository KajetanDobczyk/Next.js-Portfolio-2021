import React from 'react'

import * as S from './styles'

type Props = {
  Component?: keyof JSX.IntrinsicElements
}

const SectionTitle: React.FC<Props> = ({ Component, children }) => {
  const content = <S.Content>{children}</S.Content>

  return Component ? <Component>{content}</Component> : <h2>{content}</h2>
}

export default SectionTitle
