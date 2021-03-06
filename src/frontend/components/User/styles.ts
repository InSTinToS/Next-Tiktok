import styled from 'styled-components'

export const Avatar = styled.img`
  width: 44px;
  height: 44px;
  margin-right: 12px;
  border-radius: 50%;
`

export const Info = styled.div`
  display: flex;
  flex-direction: column;

  a {
    font-weight: 600;
    font-size: 17px;
    color: black;

    :hover {
      text-decoration: underline;
    }
  }

  span {
    font-weight: 400;
    font-size: 15px;

    color: rgba(22, 24, 35, 0.5);
  }
`

export const Container = styled.div`
  display: flex;
  align-items: center;

  width: 100%;
  height: 45px;
  padding: 0 16px;
`
