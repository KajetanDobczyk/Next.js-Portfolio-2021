import SectionTitle from 'src/components/SectionTitle'
import { infoPoints } from './data'
import * as S from './styles'

const Intro = () => (
  <S.IntroWrapper>
    <S.IntroBackground
      src="/images/intro-bg-3.jpg"
      alt="Kajetan Dobczyk"
      layout="fill"
      objectFit="cover"
    />
    <S.Content>
      <SectionTitle Component="h1">
        <span>U</span>ser <span>I</span>nterfaces coded right<span>.</span>
      </SectionTitle>
      <S.Info>
        {infoPoints.map((infoPoint) => (
          <S.InfoPoint key={infoPoint.header}>
            <h3>{infoPoint.header}</h3>
            <p>{infoPoint.description}</p>
          </S.InfoPoint>
        ))}
      </S.Info>
    </S.Content>
    <S.ScrollIcon />
  </S.IntroWrapper>
)

export default Intro
