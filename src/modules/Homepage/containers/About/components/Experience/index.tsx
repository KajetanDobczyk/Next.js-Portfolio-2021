import SectionTitle from 'src/components/SectionTitle'
import theme from 'src/theme'

import { experiences, sliderSettings } from './data'
import * as S from './styles'

const Experience = () => (
  <S.ExperienceWrapper>
    <S.Content>
      <SectionTitle>
        My <span>j</span>ourney so far
      </SectionTitle>
    </S.Content>
    <S.ExperienceSliderWrapper>
      <S.Slider {...sliderSettings}>
        {experiences.reverse().map((experience) => (
          <S.Slide key={experience.title}>
            <S.ExperienceLogo src={experience.logo} />
            <S.ExperienceTitle>
              {experience.link ? (
                <a href={experience.link} target="blank" rel="nofollow">
                  <span data-content={experience.title}>
                    {experience.title}
                  </span>
                </a>
              ) : (
                experience.title
              )}
            </S.ExperienceTitle>
            <S.ExperienceDate>{experience.date}</S.ExperienceDate>
            {experience.content && (
              <S.ExperienceContent>{experience.content}</S.ExperienceContent>
            )}
            <div>
              {experience.frontend &&
                experience.frontend.map((item) => (
                  <S.ExperienceTag key={item} color={theme.color.blue}>
                    {item}
                  </S.ExperienceTag>
                ))}
              {experience.backend &&
                experience.backend.map((item) => (
                  <S.ExperienceTag key={item} color={theme.color.black}>
                    {item}
                  </S.ExperienceTag>
                ))}
              {experience.other &&
                experience.other.map((item) => (
                  <S.ExperienceTag key={item} color={theme.color.main}>
                    {item}
                  </S.ExperienceTag>
                ))}
            </div>
          </S.Slide>
        ))}
      </S.Slider>
    </S.ExperienceSliderWrapper>
  </S.ExperienceWrapper>
)

export default Experience
