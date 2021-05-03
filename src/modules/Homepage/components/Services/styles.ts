import styled from '@emotion/styled'

import theme from 'src/theme'

export const ServicesWrapper = styled.div`
  position: relative;
  z-index: 0;
  padding: 150px 0;

  ${theme.media.md} {
    padding: 100px 0;
  }

  &:after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 50%;
    background-color: ${theme.color.grey[900]};

    ${theme.media.md} {
      height: 100%;
    }
  }
`

export const Content = styled.div`
  position: relative;
  z-index: 1;
  ${theme.mixins.content}
`

export const Title = styled.h2`
  ${theme.media.lg} {
    text-align: center;
  }
`

export const Services = styled.div`
  display: flex;
  justify-content: space-between;

  ${theme.media.md} {
    flex-direction: column;
  }
`

export const Service = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;

  ${theme.media.md} {
    flex-direction: row;
  }

  ${theme.media.sm} {
    flex-direction: column;
  }

  &:not(:last-child) {
    margin-right: 70px;

    ${theme.media.md} {
      margin-right: 0;
      margin-bottom: 50px;
    }
  }
`

export const ServiceImageWrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 300px;
  background-color: ${theme.color.grey[100]};
  margin-bottom: 45px;
  transition: background-color 0.2s;

  ${theme.media.md} {
    margin-bottom: 0;
    height: 200px;
    width: 100%;
    min-width: 300px;
  }
  ${theme.media.sm} {
    height: 30vw;
    min-width: 0;
  }

  img {
    position: relative;
    display: block;
    width: 50%;
    z-index: 2;
    transition: margin 0.2s;

    ${theme.media.md} {
      width: auto;
      height: 60%;
    }
  }

  &:after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: ${theme.color.main};
    opacity: 0;
    transition: opacity 0.2s, top 0.2s, left 0.2s;
  }
  &:hover {
    background-color: ${theme.color.grey[900]};

    img {
      margin-left: 15px;
      margin-bottom: 15px;
    }

    &:after {
      opacity: 1;
      top: -10px;
      left: 10px;
    }
  }
`

export const Description = styled.div`
  padding-left: 30px;

  ${theme.media.lg} {
    padding-left: 0;
  }
  ${theme.media.md} {
    padding-left: 30px;
    margin-top: 25px;
    max-width: 350px;
  }
  ${theme.media.sm} {
    padding-left: 0;
    margin-top: 20px;
  }
`

export const ServiceTitle = styled.h4`
  position: relative;
  margin-bottom: 30px;
  padding-left: 30px;

  ${theme.media.xl} {
    height: 50px;
    margin-bottom: 10px;
    padding-left: 40px;
  }
  ${theme.media.md} {
    height: auto;
  }

  &:before {
    position: absolute;
    top: 9px;
    left: -30px;
    content: '';
    width: 45px;
    height: 3px;
    background-color: ${theme.color.black};

    ${theme.media.lg} {
      width: 30px;
      top: 8px;
      left: 0;
    }
  }
`

export const ServiceDescription = styled.p`
  font-size: ${theme.font.size.sm};
  color: ${theme.color.grey[600]};
  line-height: 2;
`
