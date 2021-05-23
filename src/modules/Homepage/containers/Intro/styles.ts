import Image from 'next/image'
import { keyframes } from '@emotion/react'
import styled from '@emotion/styled'

import theme from 'src/theme'

export const IntroWrapper = styled.div`
  height: calc(100vh - ${theme.dimensions.header.big});
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  ${theme.media.lg} {
    height: calc(100vh - ${theme.dimensions.header.medium});
    padding: 0;
  }
  ${theme.media.md} {
    padding: 30px 0 80px;
    height: auto;
  }
`

export const IntroBackground = styled(Image)`
  opacity: 0.1;
`

export const Content = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;

  ${theme.mixins.content}
  justify-content: center;

  ${theme.media.xl} {
    max-width: 900px;
    justify-content: center;
  }
  ${theme.media.md} {
    justify-content: flex-start;
  }
`

export const Info = styled.div`
  display: flex;
  position: relative;
  margin-top: 80px;
  margin-left: 400px;

  ${theme.media.xl} {
    margin-top: 50px;
    margin-left: 0;
  }
  ${theme.media.md} {
    flex-direction: column;
    justify-content: flex-start;
  }
`

export const InfoPoint = styled.div`
  position: relative;

  ${theme.media.md} {
    max-width: 450px;
  }
  ${theme.media.sm} {
    max-width: 350px;
  }

  &:before {
    position: absolute;
    top: 20px;
    left: -200px;
    content: '';
    width: 120px;
    height: 3px;
    background-color: ${theme.color.black};

    ${theme.media.xl} {
      left: 0;
      width: 50px;
    }
    ${theme.media.md} {
      top: 17px;
    }
  }

  &:first-of-type {
    margin-right: 130px;

    ${theme.media.lg} {
      margin-right: 70px;
    }
    ${theme.media.md} {
      margin-bottom: 30px;
      margin-right: 50px;
    }
    ${theme.media.sm} {
      margin-right: 0;
    }
  }
  &:last-of-type {
    &:before {
      display: none;

      ${theme.media.xl} {
        display: block;
      }
    }
  }

  h3 {
    ${theme.media.xl} {
      margin-left: 70px;
    }
    ${theme.media.md} {
      margin-bottom: 10px;
    }
  }

  p {
    color: ${theme.color.grey[600]};
  }
`

const scroll = keyframes`
  0% {
    opacity: 1
  }
  100% {
    opacity: 0;
    transform: translateY(20px)
  }
`

export const ScrollIcon = styled.div`
  position: absolute;
  bottom: 30px;
  left: 50%;
  transform: translate3d(-50%, 0, 0);
  width: 30px;
  height: 50px;
  margin-left: -20px;
  margin-top: -35px;
  border: 2px solid ${theme.color.text};
  border-radius: 25px;

  &:before {
    content: '';
    position: absolute;
    left: 50%;
    width: 8px;
    height: 8px;
    background: ${theme.color.text};
    margin-left: -4px;
    top: 8px;
    border-radius: 4px;
    animation: ${scroll} 1s ease infinite;
  }
`
