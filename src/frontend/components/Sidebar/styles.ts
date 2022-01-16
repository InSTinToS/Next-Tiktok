import styled from 'styled-components'

interface MenuItemProps {
  active?: boolean
}

export const Links = styled.div`
  a {
    display: inline-block;

    margin-right: 5px;
    margin-top: 5px;
    font-size: 12px;
    line-height: 12px;

    font-family: 'proxima-semibold', PingFnagSC, sans-serif;

    color: rgba(22, 24, 36, 0.5);
    cursor: pointer;

    :hover {
      text-decoration: underline;
    }
  }
`

export const InfoWrapper = styled.div`
  width: 240px;
  margin-top: 16px;
  padding-left: 16px;
  padding-bottom: 24px;
  box-sizing: border-box;

  > ${Links} + ${Links} {
    margin-top: 8px;
  }
`

export const FollowingTitle = styled.div`
  height: 8px;
  padding-left: 16px;
  margin-bottom: 28px;

  font-size: 16px;
  font-weight: 400;
  line-height: 22px;

  color: rgba(22, 24, 35, 0.5);
`

export const Following = styled.div`
  width: 100%;
  padding: 20px 0;

  border-top: 0.5px solid rgba(22, 24, 35, 0.12);
  border-bottom: 0.5px solid rgba(22, 24, 35, 0.12);
`

export const MenuItem = styled.div<MenuItemProps>`
  display: flex;
  align-items: center;
  justify-content: flex-start;

  height: 60px;
  padding: 0 12px;
  box-sizing: border-box;

  color: #161823;

  cursor: pointer;

  :hover {
    background: rgba(22, 24, 35, 0.03);
  }

  span {
    margin-left: 13px;

    font-size: 24px;
    line-height: 60px;
    font-weight: ${props => (props.active ? '700' : '400')};
    color: ${props => (props.active ? '#FE2C55' : 'black')};
  }

  img {
    width: 40px;
    height: 40px;
  }
`

export const Container = styled.div`
  width: 100%;
  padding-top: 26px;

  background-color: white;
`
