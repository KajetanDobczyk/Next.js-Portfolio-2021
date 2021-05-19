import styled from '@emotion/styled'

import theme from 'src/theme'

export const ServicesWrapper = styled.div`
  position: relative;
  z-index: 0;
  padding: 150px 0;
  background-color: ${theme.color.grey[900]};

  ${theme.media.md} {
    padding: 100px 0;
  }
`

export const Content = styled.div`
  position: relative;
  z-index: 1;
  ${theme.mixins.content}
`

export const Title = styled.h2`
  margin-bottom: 3rem;

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
  position: relative;
  flex: 1;
  display: flex;
  flex-direction: column;

  ${theme.media.md} {
    flex-direction: row;
    align-items: center;
  }

  ${theme.media.sm} {
    flex-direction: column;
    align-items: flex-start;
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
  height: 250px;
  margin-bottom: 15px;
  transition: background-color 0.2s;

  ${theme.media.md} {
    margin-bottom: 0;
    height: 200px;
    width: 200px;
  }
  ${theme.media.sm} {
    position: absolute;
    top: -50px;
    left: -100px;
    width: 200px;
    height: 200px;
    opacity: 0.1;
  }

  img {
    position: relative;
    display: block;
    width: 40%;
    z-index: 2;
    transition: margin 0.2s;

    ${theme.media.md} {
      width: auto;
      height: 60%;
    }
  }
`

export const Description = styled.div`
  padding-left: 30px;

  ${theme.media.lg} {
    padding-left: 0;
  }
  ${theme.media.md} {
    max-width: 350px;
  }
  ${theme.media.sm} {
    padding-left: 0;
    margin-top: 20px;
  }
`

export const ServiceTitle = styled.h3`
  position: relative;
  margin-bottom: 30px;
  padding-left: 30px;

  ${theme.media.xl} {
    height: 60px;
    margin-bottom: 10px;
  }
  ${theme.media.md} {
    height: auto;
    padding-left: 0;
  }

  &:before {
    position: absolute;
    top: 13px;
    left: -30px;
    content: '';
    width: 45px;
    height: 3px;
    background-color: ${theme.color.main};

    ${theme.media.lg} {
      width: 30px;
      top: 8px;
      left: -10px;
    }
    ${theme.media.md} {
      display: none;
    }
  }
`

export const ServiceDescription = styled.p`
  font-size: ${theme.font.size.sm};
  color: ${theme.color.grey[600]};
  line-height: 2;
  padding-left: 30px;

  ${theme.media.md} {
    padding-left: 0;
  }
`
