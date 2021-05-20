import styled from '@emotion/styled'
import SlickSlider from 'react-slick'

import theme from 'src/theme'

export const ExperienceWrapper = styled.div`
  position: relative;
  background-color: ${theme.color.white};
  padding: 180px 0;
  overflow: hidden;

  ${theme.media.lg} {
    padding: 150px 0 0;
  }
  ${theme.media.md} {
    padding: 100px 0 0;
  }
`

export const Content = styled.div`
  ${theme.mixins.content}

  ${theme.media.lg} {
    align-items: center;
  }
`

export const Title = styled.h2`
  margin-bottom: 50px;

  ${theme.media.lg} {
    width: auto;
    margin-bottom: 50px;
  }
`

export const ExperienceSliderWrapper = styled.div`
  position: relative;

  &:before {
    position: absolute;
    content: '';
    width: 100%;
    height: 3px;
    top: 68px;
    left: 0;
    background-color: ${theme.color.grey[900]};
  }
`

export const Slider = styled(SlickSlider)`
  height: 100%;
  padding: 0 20px;
  ${theme.mixins.content}

  .slick-list {
    height: 100% !important;

    .slick-track {
      height: 100%;

      .slick-slide {
        > div {
          height: 100%;
        }
      }
    }
  }
  .slick-arrow {
    background-color: ${theme.color.white};
    z-index: 2;
    width: 35px;
    height: 50px;
    top: 67px;
    border-radius: 100%;
    opacity: 1;

    &:before {
      position: absolute;
      top: 0;
      font-size: 40px;
      opacity: 0.5;
      color: ${theme.color.grey[100]};
      transition: opacity 0.2s;
    }

    &:hover {
      &:before {
        opacity: 1;
      }
    }

    &.slick-prev {
      left: 15px;

      &:before {
        content: '‹';
        right: 12px;
      }
    }
    &.slick-next {
      right: 15px;

      &:before {
        content: '›';
        left: 12px;
        right: auto;
      }
    }
  }
`

export const Slide = styled.div`
  position: relative;
  height: 100%;
  display: flex !important;
  flex-direction: column;
  justify-content: space-between;
  padding: 50px;
`

export const ExperienceLogo = styled.img`
  background-color: ${theme.color.white};
  width: 40px;
  height: auto;
  padding: 5px;
  margin-left: -5px;
`

export const ExperienceTitle = styled.h3`
  margin: 0;

  a {
    ${theme.mixins.textContentLink()}
  }
`

export const ExperienceDate = styled.span`
  display: block;
  margin: -3px 0 20px;
  font-size: ${theme.font.size.sm};
`

export const ExperienceContent = styled.p`
  margin-bottom: 20px;

  a {
    ${theme.mixins.textContentLink()}
  }
`

export const ExperienceTag = styled.span<{ color: string }>(
  ({ color }) => `
  display: inline-block;
  font-size: ${theme.font.size.xxs};
  text-transform: uppercase;
  font-family: ${theme.font.family.sans};
  color: ${color};
  background-color: ${theme.color.grey[900]};
  padding: 2px 5px;
  border-radius: 4px;

  &:not(:last-of-type) {
    margin-right: 5px;
  }
`,
)
