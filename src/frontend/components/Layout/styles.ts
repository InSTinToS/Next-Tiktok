import styled from 'styled-components'

export const ContentWrapper = styled.div`
  position: absolute;
  top: 70px;
  bottom: 0;
  left: 250px;

  min-width: 716px;
  width: calc(100vw - 250px);
`

export const SidebarWrapper = styled.div`
  position: fixed;
  top: 70px;
  bottom: 0;
  left: 0;

  width: 250px;
`

export const HeaderWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;

  width: 100%;
  height: 70px;
`

export const Container = styled.div``
