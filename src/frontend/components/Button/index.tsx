import React, { ReactNode } from 'react'
import { Container } from './styles'

interface Props {
  outlined?: boolean
  children: ReactNode
}

const Button = ({ outlined = false, children }: Props) => {
  return (
    <Container type='button' outlined={outlined}>
      {children}
    </Container>
  )
}

export default Button
