import React from 'react'
import {
  Avatar,
  Container,
  Content,
  Icon,
  Logo,
  LogoIcon,
  LogoWrapper,
  OptionsWrapper
} from './styles'

const Header = () => (
  <Container>
    <Content>
      <LogoWrapper>
        <LogoIcon src='/assets/logoIcon.svg' />

        <Logo src='/assets/logo.svg' />
      </LogoWrapper>

      <OptionsWrapper>
        <Icon src='/assets/uploadIcon.svg' />

        <Avatar>
          <img src='/assets/avatar.jpeg' />
        </Avatar>
      </OptionsWrapper>
    </Content>
  </Container>
)

export default Header
