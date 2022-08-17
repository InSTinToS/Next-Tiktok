import React from 'react'
import {
  Container,
  Following,
  FollowingTitle,
  InfoWrapper,
  Links,
  MenuItem
} from './styles'

import User from '../User'

const Sidebar = () => (
  <Container>
    <MenuItem active>
      <img src='/assets/homeIcon.svg' />

      <span>Para você</span>
    </MenuItem>

    <MenuItem>
      <img src='/assets/peopleIcon.svg' />

      <span>Seguindo</span>
    </MenuItem>

    <Following>
      <FollowingTitle>Suas principais contas</FollowingTitle>

      <User
        user={{
          name: 'Will Smith',
          username: 'willsmith',
          avatar:
            'https://p16-sign-va.tiktokcdn.com/musically-maliva-obj/1646315618666501~c5_100x100.jpeg?x-expires=1660946400&x-signature=%2FR7B0gBjzPdI7g9VCZMdpUeel80%3D'
        }}
      />

      <InfoWrapper>
        <Links>
          <a href=''>Início</a>
          <a href=''>Sobre</a>
          <a href=''>Sala de imprensa</a>
          <a href=''>Carreira</a>
          <a href=''>ByteDance</a>
        </Links>

        <Links>
          <a href=''>Ajuda</a>
          <a href=''>Segurança</a>
        </Links>

        <Links>
          <a href=''>Diretrizes da comunidade</a>
          <a href=''>Termos</a>
        </Links>

        <Links>
          <a href=''>Privacidade</a>
        </Links>

        <Links>
          <a href=''>© 2022 TikTok</a>
        </Links>
      </InfoWrapper>
    </Following>
  </Container>
)

export default Sidebar
