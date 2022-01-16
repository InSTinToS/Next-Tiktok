import React from 'react'
import { Avatar, Container, Info } from './styles'

interface Props {
  user: {
    name: string
    username: string
    avatar: string
  }
}

const User = ({ user }: Props) => {
  return (
    <Container>
      <Avatar src={user.avatar} />

      <Info>
        <a href=''>{user.name}</a>
        <span>{user.username}</span>
      </Info>
    </Container>
  )
}

export default User
