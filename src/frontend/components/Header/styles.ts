import styled from 'styled-components'

export const Avatar = styled.div`
  position: relative;

  flex: 0 0 40px;

  margin-left: 30px;

  cursor: pointer;

  > img {
    position: relative;

    display: inline-block;

    margin: 0;
    padding: 0;
    width: 40px;
    height: 40px;
    overflow: hidden;
    border-radius: 50%;
    box-sizing: border-box;
    vertical-align: middle;

    line-height: 32px;
    font-feature-settings: 'tnum';

    color: white;
  }
`

export const Icon = styled.img`
  width: 37px;
  height: 37px;
`

export const OptionsWrapper = styled.div`
  display: flex;
  align-items: center;
`

export const Logo = styled.img`
  position: relative;
  top: -2px;

  width: 97px;
  margin-left: 4px;
`

export const LogoIcon = styled.img`
  width: 28px;
`

export const LogoWrapper = styled.div`
  display: block;
`

export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  height: 100%;
  padding: 0 20px;

  color: black;
`

export const Container = styled.div`
  width: 100%;
  height: 100%;

  background-color: white;
  border-bottom: 1px solid rgba(34, 90, 89, 0.2);
`
