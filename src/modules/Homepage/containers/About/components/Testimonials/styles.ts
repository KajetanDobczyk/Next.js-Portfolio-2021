import styled from '@emotion/styled'
import SlickSlider from 'react-slick'

import theme from 'src/theme'

const sliderOffset = '200px'

export const TestimonialsWrapper = styled.div`
  position: relative;
  background-color: ${theme.color.grey[100]};
  padding: 250px 0;
  overflow: hidden;

  ${theme.media.xxl} {
    padding: 280px 0;
  }
  ${theme.media.lg} {
    padding: 150px 0 0;
  }
  ${theme.media.md} {
    padding: 100px 0 0;
  }
`

export const Content = styled.div`
  ${theme.mixins.content}
  color: ${theme.color.white};

  ${theme.media.lg} {
    align-items: center;
  }
`

export const Title = styled.h3`
  width: 300px;
  margin: 0;
  color: ${theme.color.white};

  ${theme.media.lg} {
    width: auto;
    margin-bottom: 50px;
  }
`

export const TestimonialsSliderWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 50%;
  width: calc(50% + ${sliderOffset});
  height: 100%;
  overflow: hidden;

  ${theme.media.xxl} {
    width: calc(70% + ${sliderOffset});
    left: 30%;
  }
  ${theme.media.lg} {
    position: relative;
    width: 100%;
    left: 0;
  }
`

export const Slider = styled(SlickSlider)`
  height: 100%;

  ${theme.media.md} {
    height: 500px;
  }
  ${theme.media.sm} {
    height: 400px;
  }
  ${theme.media.xs} {
    height: 500px;
  }

  .slick-list {
    height: 100% !important;

    .slick-track {
      height: 100%;

      .slick-slide {
        > div {
          height: 100%;
        }
        &:nth-of-type(2n) {
          background-color: ${theme.color.main};

          ${theme.media.sm} {
            background-color: ${theme.color.grey[100]};
          }
        }
        &:nth-of-type(2n + 1) {
          background-color: ${theme.color.grey[100]};

          ${theme.media.sm} {
            background-color: ${theme.color.grey[100]};
          }
        }
        &:nth-of-type(3n) {
          background-color: ${theme.color.black};

          ${theme.media.sm} {
            background-color: ${theme.color.grey[100]};
          }
        }
      }
    }
  }
  .slick-arrow {
    z-index: 1;
    width: 80px;
    height: 80px;
    background-color: ${theme.color.white};
    border-radius: 100%;
    opacity: 0.5;
    transition: opacity 0.2s;

    &:before {
      position: absolute;
      top: 12px;
      font-size: 40px;
      opacity: 1;
      color: ${theme.color.grey[100]};
    }

    &:hover {
      opacity: 1;

      &:before {
      }
    }

    &.slick-prev {
      left: -50px;

      &:before {
        content: '‹';
        right: 12px;
      }
    }
    &.slick-next {
      right: calc(${sliderOffset} - 50px);

      ${theme.media.lg} {
        right: -50px;
      }

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
  color: ${theme.color.white};
  height: 100%;
  display: flex !important;
  flex-direction: column;
  justify-content: space-between;
  padding: 50px;
`

export const SlideContent = styled.p`
  margin-bottom: 20px;
`

export const Author = styled.div`
  padding-bottom: 20px;
  display: flex;
`

export const AuthorImage = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 100%;
  margin-right: 15px;
`

export const AuthorName = styled.h4`
  margin: 0;
`

export const AuthorPosition = styled.a`
  display: block;
  font-size: ${theme.font.size.xs};
  color: ${theme.color.grey[800]};

  ${theme.mixins.textContentLink(true, theme.color.white)}
`

export const QuoteIcon = styled.img`
  position: absolute;
  bottom: 30px;
  right: 30px;
  width: 20px;
  height: 20px;
`
