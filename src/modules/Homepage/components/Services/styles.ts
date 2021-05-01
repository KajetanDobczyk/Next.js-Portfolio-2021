import styled from '@emotion/styled'

import theme from 'src/theme'

export const ServicesWrapper = styled.div`
  position: relative;
  z-index: 0;
  padding: 150px 0;

  &:after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 50%;
    background-color: ${theme.color.grey[900]};
  }
`

export const Content = styled.div`
  position: relative;
  z-index: 1;
  ${theme.mixins.content}
`

export const Services = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`

export const Service = styled.div`
  &:not(:last-child) {
    margin-right: 70px;
  }
`

export const ServiceImageWrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 300px;
  background-color: ${theme.color.grey[800]};
  margin-bottom: 45px;
  transition: background-color 0.2s;

  img {
    position: relative;
    display: block;
    width: 50%;
    z-index: 2;
    transition: margin 0.2s;
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
      opacity: 0.8;
      top: -10px;
      left: 10px;
    }
  }
`

export const ServiceTitle = styled.h4`
  position: relative;
  padding-left: 30px;
  margin-bottom: 30px;

  &:before {
    position: absolute;
    top: 9px;
    left: -30px;
    content: '';
    width: 45px;
    height: 3px;
    background-color: ${theme.color.black};
  }
`

export const ServiceDescription = styled.p`
  padding-left: 30px;
  font-size: ${theme.font.size.sm};
  color: ${theme.color.grey[600]};
  line-height: 2;
`
