import React, { ReactNode } from 'react'
import {
  Container,
  ContentWrapper,
  HeaderWrapper,
  SidebarWrapper
} from './styles'

import Header from '../Header'
import Sidebar from '../Sidebar'

interface Props {
  children: ReactNode
}

const Layout = ({ children }: Props) => {
  return (
    <Container>
      <HeaderWrapper>
        <Header />
      </HeaderWrapper>

      <SidebarWrapper>
        <Sidebar />
      </SidebarWrapper>

      <ContentWrapper>{children}</ContentWrapper>
    </Container>
  )
}

export default Layout
