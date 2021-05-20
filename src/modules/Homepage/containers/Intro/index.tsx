import { infoPoints } from './data'
import * as S from './styles'

const Intro = () => (
  <S.IntroWrapper>
    <S.IntroBackground
      src="/images/intro-bg.jpg"
      alt="Kajetan Dobczyk"
      layout="fill"
    />
    <S.Content>
      <S.Title>
        <span>U</span>ser <span>I</span>nterfaces coded right<span>.</span>
      </S.Title>
      <S.Info>
        {infoPoints.map((infoPoint) => (
          <div key={infoPoint.header}>
            <h3>{infoPoint.header}</h3>
            <p>{infoPoint.description}</p>
          </div>
        ))}
      </S.Info>
    </S.Content>
    <S.ScrollIcon />
  </S.IntroWrapper>
)

export default Intro
